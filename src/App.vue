<template>
  <div id="app">

    <!-- background -->
    <div class="background">
      <BackgroundVids></BackgroundVids>
    </div>

    <!-- foreground -->
    <div class="screen-a">
      <component :is="this.activeScene.template"></component>
    </div>
    <div class="screen-b">
      <component :is="this.activeScene.template2"></component>
    </div>
    <div class="screen-c">
      <component :is="this.activeScene.template3"></component>
    </div>
    <div class="screen-d">
      <component :is="this.activeScene.template4"></component>
    </div>
  </div>
</template>

<script>
import BackgroundVids from './components/BackgroundVids.vue';
import TemplateVideo from './components/TemplateVideo.vue';
import TrailerList from './components/TrailerList.vue';
import TemplateList from './components/TemplateList.vue';
import TemplateCountdown from './components/TemplateCountdown.vue';
import TemplateBlank from './components/TemplateBlank.vue';
import TemplateFireworksTitleLeft from './components/TemplateFireworksTitleLeft.vue';
import TemplateFireworksTitleRight from './components/TemplateFireworksTitleRight.vue';

export default {
  computed: {
    currentScene() {
      return this.$store.getters.currentScene;
    },
    currentDay() {
      return this.$store.getters.currentDay;
    },
    sceneCount() {
      return this.$store.getters.sceneCount;
    },
    activeScene() {
      return this.$store.getters.activeScene;
    },
    nextScene() {
      return this.$store.getters.nextScene;
    }
  },
  components: {
    BackgroundVids,
    TemplateVideo,
    TemplateList,
    TrailerList,
    TemplateCountdown,
    TemplateBlank,
    TemplateFireworksTitleLeft,
    TemplateFireworksTitleRight
  },
  created: function () {
    // COMMENTED OUT DAY CHECK
    // var day = this.currentDay;
    // var currentDay = this.getCurrentDay();
    // if (day != currentDay) {
    //   this.$store.commit('setDay', currentDay);
    // }
    this.sceneLoad();
    this.$store.dispatch('fetchEvents', { self: this });
  },
  methods: {
    sceneLoad() {
      setTimeout( () => {
        var currentDate = new Date();
        var sceneId = this.currentScene;
        var day = this.currentDay;
        var currentDay = this.getCurrentDay();

        // CHECK DAY
        // If the currentDay in store does not equal actual current day
        // if (day != currentDay) {
        //   this.$store.commit('setDay', currentDay);
        // }

        // COUNTDOWN CHECK
        if (this.nextScene.name == 'countdown') {
          if (this.countdownTimePassed()) {
            console.log('countdown time passed');
            sceneId += 2;
          } else {
            console.log('countdown time NOT passed');
            sceneId += 1;
          }
        } else {
          sceneId += 1;
        }

        // LOOP CHECK
        // Check to see if we've exceeded the number of scenes, If so
        // remove the number of scenes from sceneId to go back. This
        // takes into account sceneId's incremented by more than one.
        if (sceneId > this.sceneCount) {
          sceneId = sceneId - this.sceneCount;
        }

        // COMMIT SCENE ID
        this.$store.commit('setScene', sceneId);

        // FETCH EVENTS
        // Get events from API if it's the first scene
        if (sceneId == 1) {
          this.$store.dispatch('fetchEvents', { self: this });
        }

        // LOAD SCENE
        // Setup next scene load
        this.sceneLoad();
      }, this.activeScene.duration * 1000);
    },
    getCurrentDay() {
      var currentDate = new Date();

      if (currentDate.getDay() == 3) {
        return 'wednesday';
      } else if (currentDate.getDay() == 6) {
        return 'saturday';
      } else {
        return 'defaultday'
      }
    },
    countdownTimePassed() {
      var date = new Date();
      var currentHours = date.getHours();
      var currentMinutes = date.getMinutes();
      var currentSeconds = date.getSeconds();
      var startHours = this.nextScene.startHours;
      var startMinutes = this.nextScene.startMinutes;
      var startSeconds = 0;

      // Figure out time difference
      var hours = startHours - currentHours;
      var minutes = startMinutes - currentMinutes;
      var seconds = startSeconds - currentSeconds;

      // Handle negative seconds and minutes
      if (seconds < 0) {
        seconds = seconds + 60;
        minutes = minutes - 1;
      }
      if (minutes < 0) {
        minutes = minutes + 60;
        hours = hours - 1;
      }
      if (hours < 0) {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style lang="scss">
$gutter: 200px;
$screen: 640px;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
}
.screen-a,
.screen-b,
.screen-c,
.screen-d {
  position: absolute;
  top: 0;
  z-index: 3;
  width: $screen;
  height: 1262px;
  // border: 1px solid white;
}
.screen-a {
  left: 0;
}
.screen-b {
  left: ($gutter * 1) + ($screen * 1);
}
.screen-c {
  left: ($gutter * 2) + ($screen * 2);
}
.screen-d {
  left: ($gutter * 3) + ($screen * 3);
}
</style>

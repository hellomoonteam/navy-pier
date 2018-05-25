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
    <div class="screen-b"></div>
    <div class="screen-c"></div>
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

export default {
  computed: {
    currentScene() {
      return this.$store.getters.currentScene;
    },
    sceneCount() {
      return this.$store.getters.sceneCount;
    },
    activeScene() {
      return this.$store.getters.activeScene;
    }
  },
  components: {
    BackgroundVids,
    TemplateVideo,
    TemplateList,
    TrailerList,
    TemplateCountdown,
    TemplateBlank
  },
  created: function () {
    this.sceneLoad();
    this.$store.dispatch('fetchEvents', { self: this });
  },
  methods: {
    sceneLoad() {
      var sceneDuration = this.activeScene.duration * 1000; // In Milliseconds
      setTimeout( () => {
        var sceneId = this.currentScene + 1;
        if (sceneId > this.sceneCount) {
          sceneId = 1;
        }
        this.$store.commit('setScene', sceneId);
        if (sceneId == 1) {
          this.$store.dispatch('fetchEvents', { self: this });
        }
        this.sceneLoad();
      }, sceneDuration);
    },
  }
}
</script>

<style lang="scss">
$gutter: 160px;
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
  height: 1260px;
  border: 1px solid white;
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

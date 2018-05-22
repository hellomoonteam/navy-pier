<template>
  <div id="app">

    <!-- background -->
    <div class="background">
      <BackgroundVideo></BackgroundVideo>
    </div>
    <div class="background">
      <BackgroundVideoFade></BackgroundVideoFade>
    </div>

    <!-- foreground -->
    <div class="screen-a">
      <component :is="this.activeScene.template"></component>
    </div>
    <div class="screen-b"></div>
    <div class="screen-c"></div>
    <div class="screen-d"></div>
  </div>
</template>

<script>
import BackgroundVideo from './components/BackgroundVideo.vue';
import BackgroundVideoFade from './components/BackgroundVideoFade.vue';
import TemplateVideo from './components/TemplateVideo.vue';
import TemplateList from './components/TemplateList.vue';

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
    BackgroundVideo,
    BackgroundVideoFade,
    TemplateVideo,
    TemplateList,
  },
  created: function () {
    this.sceneLoad();
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
        this.sceneLoad();
        console.log('scene load');
      }, sceneDuration);
    },
  }
}
</script>

<style lang="scss">
$gutter: 170px;
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
  top: 10px;
  width: $screen;
  height: 1260px;
  border: 1px solid white;
}
.screen-a {
  left: $gutter * .5;
}
.screen-b {
  left: ($gutter * 1.5) + ($screen * 1);
}
.screen-c {
  left: ($gutter * 2.5) + ($screen * 2);
}
.screen-d {
  left: ($gutter * 3.5) + ($screen * 3);
}
</style>

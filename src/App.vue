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

    <!-- stats -->
    <!-- <div class="stats">
      <p>Current: {{this.currentScene}}</p>
      <p>Active: {{this.activeScene}}</p>
    </div> -->
  </div>
</template>

<script>
import BackgroundVids from './components/BackgroundVids.vue';
import TemplateVideo from './components/TemplateVideo.vue';
import TrailerList from './components/TrailerList.vue';
import TemplateList from './components/TemplateList.vue';
import TemplateBlank from './components/TemplateBlank.vue';
import TemplateEvent from './components/TemplateEvent.vue';

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
    },
    skipNextScene() {
      return this.$store.getters.skipNextScene;
    }
  },
  components: {
    BackgroundVids,
    TemplateVideo,
    TemplateList,
    TrailerList,
    TemplateBlank,
    TemplateEvent
  },
  created: function () {
    this.sceneLoad();
    this.$store.dispatch('fetchEvents', { self: this });
  },
  methods: {
    sceneLoad() {
      setTimeout( () => {
        var sceneId = this.currentScene;

        sceneId += 1;

        // Event Trailer Check (some event trailers are disabled)
        if (this.skipNextScene) {
          console.log('skip event trailer from App.vue');
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
    }
  }
}
</script>
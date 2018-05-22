<template>
  <div>
    <video v-bind:class="{ active: isActive }" ref="vid" :src="currentBackground" width="3249" height="1280" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      currentBackground: '',
      isActive: false
    }
  },
  computed: {
    activeScene() {
      return this.$store.getters.activeScene;
    },
    nextScene() {
      return this.$store.getters.nextScene;
    }
  },
  methods: {
    newScene() {
      this.isActive = false;
      this.currentBackground = "/static/" + this.nextScene.background;
    },
    fadeIn(){
      var duration = (this.activeScene.duration - 6) * 1000; // In Milliseconds
      setTimeout( () => {
        console.log('fade in video');
        this.isActive = true;
        this.$refs.vid.play();
      }, duration);
    },
    sceneComplete(){
      var duration = this.activeScene.duration * 1000; // In Milliseconds
      setTimeout( () => {
        this.newScene();
        this.fadeIn();
        this.sceneComplete();
      }, duration);
    }
  },
  created: function () {
    this.currentBackground = "/static/" + this.activeScene.background;
  },
  mounted: function () {
    this.newScene();
    this.fadeIn();
    this.sceneComplete();
  }
}
</script>


<style scoped>
  video {
    opacity: 0;
  }
  video.active {
    opacity: .99;
    transition: opacity 1s;
  }
</style>
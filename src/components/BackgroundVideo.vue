<template>
  <div>
    <video ref="vid" :src="currentBackground" width="3249" height="1280" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      currentBackground: ''
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
    setupVideoSwitch(){
      var duration = (this.activeScene.duration - 3.4) * 1000; // In Milliseconds
      setTimeout( () => {
        this.currentBackground = "/static/" + this.nextScene.background;
        this.sceneComplete();
      }, duration);
    },
    sceneComplete(){
      var duration = 3 * 1000; // In Milliseconds
      setTimeout( () => {
        this.setupVideoSwitch();
      }, duration);
    }
  },
  created: function () {
    this.currentBackground = "/static/" + this.activeScene.background;
  },
  mounted: function () {
    this.setupVideoSwitch();
    this.$refs.vid.play();
  },
  updated: function () {
    this.$refs.vid.currentTime = 3;
    this.$refs.vid.play();
  }
}
</script>

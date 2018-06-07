<template>
  <div>
    <video ref="player1" :src="player1Source" v-bind:class="{ active: player1Active == true, visible: player1Visible == true }" width="3320" height="1280" autoplay />
    <video ref="player2" :src="player2Source" v-bind:class="{ active: player1Active == false, visible: player2Visible == true }"  width="3320" height="1280" autoplay />
  </div>
</template>

<script>
/*
On Load
    Set activePlayer to "Player 1"
    Load active video into "Player 1"
    Play Video
PreFade (2s before end of scene)
    toggle activePlayer to "Player 2"
    Set z-index of activePlayer to 2
    Set z-index of inactivePlayer to 1
    Load next into "Player 2"
    Fade next up and play
Cycle (at end of scene)
    Stop inactivePlayer

*/
export default {
  data: function() {
    return {
      player1Active: true,
      player1Visible: true,
      player2Visible: false,
      player1Source: '',
      player2Source: ''
    }
  },
  computed: {
    activeScene() {
      return this.$store.getters.activeScene;
    },
    nextScene() {
      return this.$store.getters.nextSceneAlt;
    }
  },
  created: function() {
    this.player1Source = "/static/" + this.activeScene.background;
    this.sceneComplete();
    this.preFade();
  },
  methods: {
    preFade() {
      var duration = (this.activeScene.duration - 2) * 1000; // In Milliseconds
      setTimeout( () => {
        this.player1Active = !this.player1Active;

        if (this.player1Active) {
          this.player1Visible = false;
          this.player1Source = "/static/" + this.nextScene.background;
          setTimeout( () => {
            this.player1Visible = true;
          }, 500);
        } else {
          this.player2Visible = false;
          this.player2Source = "/static/" + this.nextScene.background;
          setTimeout( () => {
            this.player2Visible = true;
          }, 500);
        }
      }, duration);
    },
    sceneComplete(){
      var duration = this.activeScene.duration * 1000; // In Milliseconds
      setTimeout( () => {
        if (this.player1Active) {
          this.$refs.player2.pause();
        } else {
          this.$refs.player1.pause();
        }
        this.sceneComplete();
        this.preFade();
      }, duration);
    }
  }
}
</script>

<style scoped>
div {
  position: relative;
}
video {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.active {
  z-index: 2;
}
video {
  opacity: 0;
}
.visible {
  opacity: 1;
  transition: opacity 4s;
}
</style>

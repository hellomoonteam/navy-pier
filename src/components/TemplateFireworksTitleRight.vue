<template>
  <div class="wrap" v-bind:class="{ animate_in: animateInClass, animate_out: animateOutClass }">
    <h1>FIREWORKS</h1>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      animateInClass: false,
      animateOutClass: false,
    }
  },
  computed: {
    activeScene() {
      return this.$store.getters.activeScene;
    }
  },
  created: function () {
    this.animateIn();
    this.animateOut();
  },
  methods: {
    animateIn() {
      setTimeout( () => {
        this.animateInClass = true;
        this.animateOutClass = false;
      }, 500);
    },
    animateOut() {
      var duration = (this.activeScene.duration - 2)  * 1000; // In Milliseconds
      setTimeout( () => {
        this.animateInClass = false;
        this.animateOutClass = true;
      }, duration);
    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    color: white;
    position: absolute;
    top: 50%;
    left: 20px;
    right: 0;
    margin: 0;
    transform: translateY(-50%);
    font-size: 65px;
    text-align: center;
    letter-spacing: 10px;
  }
  .fade-enter-active {
    transition: opacity 4s ease-out;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  // Animation
  //------------------------------------------
  .wrap {
    opacity: 0;
    width: 100%;
    height: 100%;
  }
  .animate_in.wrap {
    opacity: 1;
    transition: opacity 4s ease-out .5s;
  }
  .animate_out.wrap {
    opacity: 0;
    transition: opacity 2s ease-in;
  }

</style>
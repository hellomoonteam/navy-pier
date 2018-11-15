<template>
  <div class="wrap" v-bind:class="{ animate_in: animateInClass, animate_out: animateOutClass }">
    <div class="heading">
      <h1 v-html="eventContent.title"></h1>
    </div>
    <div class="description">
      <h2 v-if="eventContent.subtitle" v-html="eventContent.subtitle"></h2>
      <div v-if="eventContent.content" v-html="eventContent.content"></div>
    </div>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      activeListId: 1,
      animateInClass: false,
      animateOutClass: false,
    }
  },
  computed: {
    activeScene() {
      return this.$store.getters.activeScene;
    },
    eventContent() {
      return this.activeScene.event;
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
      var listDuration = (this.eventContent.duration - 2)  * 1000; // In Milliseconds
      setTimeout( () => {
        this.animateInClass = false;
        this.animateOutClass = true;
      }, listDuration);
    }
  }
}
</script>
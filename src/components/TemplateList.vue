<template>
  <div class="wrap" v-bind:class="{ animate_in: animateInClass, animate_out: animateOutClass }">
    <div class="heading">
      <h1 v-html="activeList.headline"></h1>
    </div>
    <div class="trailer-info">
      <h2 v-if="activeList.logistics" v-html="activeList.logistics"></h2>
      <p v-if="activeList.description">{{ activeList.description }}</p>
    </div>
    <div class="events-wrap" id="events-wrap">
      <div class="events" id="events" v-bind:style="{ marginTop: topMargin }">
          <div v-for="item in activeList.events" v-bind:key="item.title" class="event">
            <h2>{{ item.title }}</h2>
            <h3 v-if="item.subtitle">{{ item.subtitle }}</h3>
            <h4 v-if="item.logistics">{{ item.logistics }}</h4>
            <p v-if="item.description">{{ item.description }}</p>
            <img v-if="item.logo" :src="'/static/' + item.logo" />
          </div>
      </div>
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
      eventsToCycle: 0,       // Number events to cycle through so we see entire list
      currentEvent: 1,        // The event currently at the top of the list
      topMargin: 0
    }
  },
  computed: {
    activeScene() {
      return this.$store.getters.activeScene;
    },
    activeList() {
      return this.activeScene.lists[this.activeListId];
    }
  },
  created: function () {
    this.animateIn();
    this.animateOut();
  },
  mounted: function() {
    var eventsEl = document.getElementById('events');
    var eventsTotal = eventsEl.children.length;
    var eventsVisible = 0;
    var wrapHeight = document.getElementById('events-wrap').offsetHeight;
    var contentHeight = 0;

    // Calculate contentHeight and visibleEvents
    for (var i = 0; i < eventsTotal; i++) {
      var event = eventsEl.children[i];
      var eventHeight = event.offsetHeight;
      contentHeight += eventHeight;
      if (contentHeight < wrapHeight) {
        eventsVisible += 1;
      }
    }

    // How many events to cycle
    this.eventsToCycle = eventsTotal - eventsVisible;

    // Animate List
    if (this.eventsToCycle > 0) {
      this.cycleList();
    }
  },
  methods: {
    animateIn() {
      setTimeout( () => {
        this.animateInClass = true;
        this.animateOutClass = false;
      }, 500);
    },
    animateOut() {
      var listDuration = (this.activeList.duration - 2)  * 1000; // In Milliseconds
      setTimeout( () => {
        this.animateInClass = false;
        this.animateOutClass = true;
      }, listDuration);
    },
    cycleList() {
      var duration = (this.activeList.duration / (this.eventsToCycle + 1))  * 1000; // In Milliseconds
      setTimeout( () => {

        // Set top margin
        var eventsEl = document.getElementById('events');
        var topMargin = 0;
        for (var i = 0; i < this.currentEvent; i++) {
          var event = eventsEl.children[i];
          topMargin += event.offsetHeight;
        }
        this.topMargin = (topMargin * -1) + 'px';

        // Next cycle
        if (this.currentEvent < this.eventsToCycle) {
          this.currentEvent += 1;
          this.cycleList();
        }

      }, duration);
    }
  }
}
</script>


<style scoped lang="scss">
  h1, h2, h3, h4, p {
    position: relative;
    color: white;
    font-family: "Stainless";
    -webkit-font-smoothing: antialiased;
  }
  h1 {
    margin: 0 0 30px 0;
    line-height: 65px;
    font-size: 65px;
    font-weight: bold;
    text-transform: uppercase;
  }
  h2 {
    margin: 0 0 20px 0;
    line-height: 30px;
    font-size: 30px;
    text-transform: uppercase;
  }
  h3 {
    margin: 10px 0;
    line-height: 25px;
    font-size: 17px;
  }
  h4 {
    margin: 0 0 20px 0;
    line-height: 25px;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }
  p {
    margin: 0;
    line-height: 20px;
    font-size: 16px;
    font-weight: normal;
  }
  img {
    margin: 30px 0 0 0;
  }
  .wrap {
    display: flex;
    flex-direction: column;
    padding: 135px 135px 100px 35px;
    height: 100%;
    box-sizing: border-box;
  }
  .trailer-info {
    h2, p {
      margin-bottom: 30px;
    }
  }
  .events-wrap {
    position: relative;
    flex-grow: 1;
    overflow: hidden;

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      z-index: 1;
      background: white;
      height: 3px;
      width: 0%;
    }
    &:before {
      top: 0;
    }
    &:after {
      bottom: 0;
    }
  }

  .event {
    padding: 35px 0;
    border-top: 3px solid white;

    &:first-child {
      margin-top: 20px;
      border-top: 3px solid transparent;
    }
  }

  // Animation
  //------------------------------------------

  // Lines
  .events-wrap:before,
  .events-wrap:after {
    width: 0%;
  }
  .animate_in .events-wrap:before,
  .animate_in .events-wrap:after {
    width: 100%;
    transition: width 2s ease-out;
  }
  .animate_out .events-wrap:before,
  .animate_out .events-wrap:after {
    width: 0%;
    transition: width 2s ease-in;
  }


  // Event List
  .events {
    transition: margin-top 2s ease-out;
  }
  .events .event:first-child {
    margin-top: 0;
    opacity: 0;
  }
  .animate_in .event:first-child {
    opacity: 1;
    animation: event-first-in 2s;
  }
  .animate_out .event:first-child {
    animation: event-first-out 2s;
  }
  @keyframes event-first-in {
    0%   { opacity: 0; margin-top: 20px; }
    30%  { opacity: 0; margin-top: 20px; }
    100% { opacity: 1; margin-top: 0; }
  }
  @keyframes event-first-out {
    0%   { opacity: 1; margin-top: 0; }
    30%  { opacity: 1; margin-top: 0; }
    100% { opacity: 0; margin-top: 20px; }
  }

  .event {
    opacity: 0;
  }
  .animate_in .event {
    opacity: 1;
    animation: event-in 2s;
  }
  .animate_out .event {
    animation: event-out 2s;
  }
  @keyframes event-in {
    0%   { opacity: 0; }
    30%  { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes event-out {
    0%   { opacity: 1; }
    30%  { opacity: 1; }
    100% { opacity: 0; }
  }


  // Heading
  .heading {
    position: relative;
    opacity: 0;
    top: 20px;
  }
  .animate_in .heading {
    opacity: 1;
    top: 0;
    animation: heading-in 2s;
  }
  .animate_out .heading {
    animation: heading-out 2s;
  }

  @keyframes heading-in {
    0%   { opacity: 0; top: 20px; }
    30%  { opacity: 0; top: 20px; }
    60% { opacity: 1; top: 0;}
    100% { opacity: 1; top: 0;}
  }
  @keyframes heading-out {
    0%   { opacity: 1; top: 0; }
    30%  { opacity: 1; top: 0; }
    60% { opacity: 0; top: 20px; }
    100% { opacity: 0; top: 20px; }
  }

  // Heading
  .trailer-info {
    position: relative;
    opacity: 0;
    top: 20px;
  }
  .animate_in .trailer-info {
    opacity: 1;
    top: 0;
    animation: trailer-info-in 2s;
  }
  .animate_out .trailer-info {
    animation: trailer-info-out 2s;
  }

  @keyframes trailer-info-in {
    0%   { opacity: 0; top: 20px; }
    30%  { opacity: 0; top: 20px; }
    60% { opacity: 1; top: 0;}
    100% { opacity: 1; top: 0;}
  }
  @keyframes trailer-info-out {
    0%   { opacity: 1; top: 0; }
    30%  { opacity: 1; top: 0; }
    60% { opacity: 0; top: 20px; }
    100% { opacity: 0; top: 20px; }
  }

</style>
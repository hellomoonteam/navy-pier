<template>
  <div class="wrap" v-bind:class="{ animate_in: animateInClass, animate_out: animateOutClass }">
    <div class="heading">
      <h1 v-html="activeList.headline"></h1>
    </div>
    <div class="description">
      <h2 v-if="activeList.logistics" v-html="activeList.logistics"></h2>
      <p v-if="activeList.description">{{ activeList.description }}</p>
    </div>
    <div class="events-wrap" id="events-wrap">
      <div class="events" id="events" v-bind:style="{ marginTop: topMargin }">
          <div
            v-for="(item, index) in activeList.events"
            v-bind:key="item.title + index"
             v-bind:class="{ offscreen: index <= eventsOffscreen }"
            class="event"
          >
            <h2 v-html="item.title"></h2>
            <h3 v-if="item.subtitle" v-html="item.subtitle"></h3>
            <h4 v-if="item.logistics" v-html="item.logistics"></h4>
            <p v-if="item.description" v-html="item.description"></p>
            <img v-if="item.logo" :src="item.logo" />
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
      eventsOffscreen: 1,        // The event currently at the top of the list
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
      if (contentHeight - 40 < wrapHeight) {
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

        this.eventsOffscreen += 1;

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
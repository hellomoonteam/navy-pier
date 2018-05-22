<template>
  <div class="wrap">
    <div class="heading">
      <h1 v-html="activeList.headline"></h1>
    </div>
    <div class="events">
      <div v-for="item in activeList.events" v-bind:key="item.title" class="event">
        <h2>{{ item.title }}</h2>
        <h3>{{ item.subtitle }}</h3>
        <h4>{{ item.logistics }}</h4>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      activeListId: 1
    }
  },
  computed: {
    activeScene() {
      return this.$store.getters.activeScene;
    },
    activeList() {
      return this.activeScene.lists[this.activeListId];
    },
    listCount() {
      return Object.keys(this.activeScene.lists).length;
    },
    fileName() {
      return require('../assets/event_list_reference.png');
    }
  },
  created: function () {
    this.listOut();
  },
  methods: {
    listOut() {
      var listDuration = this.activeList.duration * 1000; // In Milliseconds
      setTimeout( () => {
        // console.log('listOut')
      }, listDuration);
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
    margin: 0;
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
    margin: 20px 0;
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

  .wrap {
    display: flex;
    flex-direction: column;
    padding: 135px 135px 100px 35px;
    height: 100%;
    box-sizing: border-box;
  }

  .events {
    position: relative;
    flex-grow: 1;

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      z-index: 1;
      background: white;
      height: 3px;
      width: 100%;
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
  }

</style>

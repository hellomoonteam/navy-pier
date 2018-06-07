<template>
  <div class="wrap" v-bind:class="{ animate_in: animateInClass, animate_out: animateOutClass }">
      <h1>Starts In</h1>
      <div class="time">
        <div class="hours">
          <h2>
            <span class="first-digit">{{ hoursFirst }}</span>
            <span class="last-digit">{{ hoursLast }}</span>
          </h2>
          <h3>HOURS</h3>
        </div>
        <div class="minutes">
          <h2>
            <span class="first-digit">{{ minutesFirst }}</span>
            <span class="last-digit">{{ minutesLast }}</span>
          </h2>
          <h3>MINUTES</h3>
        </div>
        <div class="seconds">
          <h2>
            <span class="first-digit">{{ secondsFirst }}</span>
            <span class="last-digit">{{ secondsLast }}</span>
          </h2>
          <h3>SECONDS</h3>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      animateInClass: false,
      animateOutClass: false,
      hoursFirst: '',
      hoursLast: '',
      minutesFirst: '',
      minutesLast: '',
      secondsFirst: '',
      secondsLast: '',
      secondTimeout: null
    }
  },
  computed: {
    activeScene() {
      return this.$store.getters.activeScene;
    }
  },
  created: function () {
    this.setTime();
    this.animateIn();
    this.animateOut();
    this.refreshDate();
  },
  destroyed: function() {
    clearTimeout(this.secondTimeout);
  },
  methods: {
    animateIn() {
      setTimeout( () => {
        this.animateInClass = true;
        this.animateOutClass = false;
      }, 500);
    },
    animateOut() {
      var listDuration = (this.activeScene.duration - 2)  * 1000; // In Milliseconds
      setTimeout( () => {
        this.animateInClass = false;
        this.animateOutClass = true;
      }, listDuration);
    },
    setTime() {
      var date = new Date();
      var currentHours = date.getHours();
      var currentMinutes = date.getMinutes();
      var currentSeconds = date.getSeconds();
      var startHours = this.activeScene.startHours;
      var startMinutes = this.activeScene.startMinutes;
      var startSeconds = 0;

      // Figure out time difference
      var hours = startHours - currentHours;
      var minutes = startMinutes - currentMinutes;
      var seconds = startSeconds - currentSeconds;

      // Handle negative seconds and minutes
      if (seconds < 0) {
        seconds = seconds + 60;
        minutes = minutes - 1;
      }
      if (minutes < 0) {
        minutes = minutes + 60;
        hours = hours - 1;
      }

      // Start time has passed
      if (hours < 0) {
        hours = 0;
        minutes = 0;
        seconds = 0;
      }

      // Format Result with leading zero and split into two digits
      if (minutes < 10) {
        this.minutesFirst = 0;
        this.minutesLast = minutes;
      } else {
        this.minutesFirst = minutes.toString().charAt(0);
        this.minutesLast = minutes.toString().charAt(1);
      }
      if (hours < 10) {
        this.hoursFirst = 0;
        this.hoursLast = hours;
      } else {
        this.hoursFirst =  hours.toString().charAt(0);
        this.hoursLast = hours.toString().charAt(1);
      }
      if (seconds < 10) {
        this.secondsFirst = 0;
        this.secondsLast = seconds;
      } else {
        this.secondsFirst = seconds.toString().charAt(0);
        this.secondsLast = seconds.toString().charAt(1);
      }
    },
    refreshDate() {
      this.secondTimeout = setTimeout( () => {
        this.setTime();
        this.refreshDate();
      }, 1000);
    }
  }
}
</script>

<style scoped lang="scss">
  h1, h2, h3, h4, p {
    position: relative;
    color: white;
    margin: 0;
    font-family: "Stainless";
    -webkit-font-smoothing: antialiased;
  }
  h1 {
    position: absolute;
    top: 40%;
    line-height: 40px;
    width: 100%;
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 10px;
  }
  h2 {
    display: block;
    margin-bottom: 10px;
    line-height: 65px;
    height: 65px;
    font-size: 65px;
    box-sizing: border-box;
  }
  h3 {
    line-height: 25px;
    font-size: 25px;
    font-weight: normal;
  }
  .wrap {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .time {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-30px);
    width: 100%;
    font-size: 0;
  }
  .hours,
  .minutes,
  .seconds {
    position: relative;
    display: inline-block;
    width: 33.333%;
    text-align: center;

    .first-digit,
    .last-digit {
      position: absolute;
      top: 0;
      width: 50px;
    }
    .first-digit {
      left: 55px;
    }
    .last-digit {
      right: 55px;
    }
  }

  .minutes:before,
  .minutes:after {
    content: ':';
    display: block;
    position: absolute;
    top: 0;
    z-index: 1;
    left: -10px;
    width: 20px;
    height: 60px;
    line-height: 60px;
    color: white;
    font-size: 70px;
    text-align: center;
  }
  .minutes:after {
    left: auto;
    right: -7px;
  }

  // Animation
  //------------------------------------------
  .wrap {
    opacity: 0;
  }
  .animate_in.wrap {
    opacity: 1;
    transition: opacity 5s ease-out;
  }
  .animate_out.wrap {
    opacity: 0;
    transition: opacity 2s ease-in;
  }

</style>

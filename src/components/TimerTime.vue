<template>
  <v-container align="end">
    <v-btn class="timer pt-1" color="black" @click="startTimer">{{
      formatTime(value)
    }}</v-btn>
  </v-container>
</template>

<script lang="ts">
export default {
  props: {
    duration: Number,
    running: Boolean,
  },
  data() {
    return {
      value: 0,
      intervalId: null as unknown as ReturnType<typeof setInterval>,
      hotkey: this.hotkey,
    };
  },
  methods: {
    startTimer() {
      if (!this.running) {
        this.$emit("timerRunning", true);
      }
    },
    stopTimer() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      this.$emit("timerRunning", false);
    },
    formatTime(seconds: number): string {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${
        remainingSeconds < 10 ? "0" : ""
      }${remainingSeconds}`;
    },
    restart() {
      console.log("value, duration", this.value, this.duration);
      this.value = this.duration ?? 0;
    },
    clearTime() {
      this.value = 0;
    },
  },
  mounted() {},
  unmounted() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },
  watch: {
    running: function (newVal) {
      console.log("time run", newVal);
      if (newVal === true) {
        this.intervalId = setInterval(() => {
          this.value--;
          if (this.value <= 0) {
            this.stopTimer();
          }
        }, 1000);
        this.restart();
      } else {
        this.stopTimer();
      }
    },
  },
};
</script>

<style scoped>
.timer {
  /* pointer-events: none; */
}
</style>

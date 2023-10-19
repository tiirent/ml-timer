<template>
  <v-app class="black-background">
    <!-- <default-bar /> -->
    <app-bar :groups="groups" @add-group="addGroup" @import-groups="importGroups" />
    <timer-group v-for="(group, index) in groups" :key=group.id :index="index" :name=group.name :input="input"
      :duration=group.duration
      @delete-timer-group="deleteGroup"
      @timers="updateTimers"/>
  </v-app>
</template>

<script lang="ts">
import AppBar from '@/components/AppBar.vue';
import TimerGroup from '@/components/TimerGroup.vue';
import { v4 as uuidv4 } from 'uuid';

export default {
  components: {
    AppBar, TimerGroup,
  },
  data() {
    return {
      input: {} as { id: string; key: string },
      groups: [] as any[]
    };
  },
  created() {
    window.addEventListener('keypress', this.doCommand);
  },
  destroyed() {
    window.removeEventListener('keypress', this.doCommand);
  },
  methods: {
    doCommand(e: { keyCode: number; }): void {
      let cmd = String.fromCharCode(e.keyCode);
      console.log("pressed", cmd)
      this.input = {
        id: uuidv4(),
        key: cmd
      }
    },
    durationStringToDuration(durationString: string): number {
      const [hours, minutes, seconds] = durationString.split(':').map(Number);

      // Check if the timeString is in the correct format
      if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        throw new Error('Invalid time format. Use "hh:mm:ss".');
      }

      // Calculate the total seconds
      const totalSeconds = hours * 3600 + minutes * 60 + seconds;
      return totalSeconds;
    },
    addGroup(group: { name: string, duration: string }) {
      console.log("adding group", group.name, group.duration)
      this.groups.push({
        id: uuidv4(),
        name: group.name,
        duration: this.durationStringToDuration(group.duration),
        timers: []
      })
    },
    deleteGroup(index: number) {
      this.groups.splice(index, 1)
    },
    updateTimers(index: number, timers: { id: string, name: string, hotkey: string }[]) {
      this.groups.at(index).timers = timers
      console.log(JSON.stringify(this.groups))
    },
    importGroups(val: string) {
      console.log("default", val)
      this.groups = JSON.parse(val)
    }
  },
};
</script>

<style scoped>
.black-background {
  background-color: black;
  color: white;
}
</style>
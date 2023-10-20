<template>
  <v-container class="purple-border pa-3" :style="containerStyle">
    <v-row
      class="purple-bg"
      align="center"
      style="padding-top: 2px; padding-bottom: 2px"
    >
      <v-col align="left">
        <div class="group-name">
          {{ name }}
        </div>
      </v-col>
      <v-col align="right" class="pa-0">
        <timer-module-options
          @add-timer="addTimer"
          @delete-timer-group="deleteTimerGroup"
        />
      </v-col>
    </v-row>
    <v-row v-if="timers.length">
      <timer-item
        v-for="(timer, index) in timers"
        :key="timer.id"
        :index="index"
        :name="timer.name"
        :hotkey="timer.hotkey"
        :input="input"
        :duration="duration"
        :init-editing="timer.editing"
        @delete-timer="deleteTimer"
        @update-name="updateName($event, index)"
        @update-hotkey="updateHotkey($event, index)"
        @timer-editing="editTimer"
      />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import TimerModuleOptions from "@/components/TimerModuleOptions.vue";
import TimerItem from "@/components/TimerItem.vue";
import { PropType } from "vue";
import { v4 as uuidv4 } from "uuid";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    TimerModuleOptions,
    TimerItem,
  },
  props: {
    id: String,
    name: String,
    input: {
      type: Object as PropType<{ id: string; key: string }>, // Define the object type
    },
    duration: Number,
  },
  computed: {
    containerStyle() {
      return this.timers.length ? "" : "border-bottom: 0px";
    },
    timers: {
      get() {
        const idx = this.$store.state.groups.findIndex(
          (group) => group.id == this.id,
        );
        return this.$store.state.groups[idx].timers;
      },
      set(newValue) {
        const idx = this.$store.state.groups.findIndex(
          (group) => group.id == this.id,
        );
        this.$store.state.groups[idx].timers = newValue;
      },
    },
  },
  methods: {
    addTimer() {
      this.timers.push({
        id: uuidv4(),
        name: "",
        hotkey: "",
        editing: true,
      });
    },
    deleteTimerGroup() {
      this.$emit("deleteTimerGroup", this.index);
    },
    deleteTimer(index: number): void {
      this.timers.splice(index, 1);
    },
    updateName(name: string, index: number): void {
      this.timers[index].name = name;
    },
    updateHotkey(hotkey: string, index: number): void {
      this.timers[index].hotkey = hotkey;
    },
    editTimer(index: number, status: boolean) {
      this.timers.at(index).editing = status;
    },
  },
};
</script>

<style scoped>
.purple-bg {
  background-color: #6567a6;
}

.purple-border {
  border-width: 2px;
  border-style: solid;
  border-color: #6567a6;
  box-sizing: border-box;
}

.group-name {
  padding-left: 20px;
}
</style>

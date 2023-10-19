<template>
    <v-container>
        <v-row class="purple-bg" align="center">
            <v-col align="left">
                <div class="group-name">
                    {{ name }}
                </div>
            </v-col>
            <v-col align="right">
                <timer-module-options @add-timer="addTimer" @delete-timer-group="deleteTimerGroup"/>
            </v-col>
        </v-row>
        <v-row>
            <timer-item v-for="(timer, index) in timers" :key="timer.id" :index="index" :name="timer.name"
            :hotkey="timer.hotkey" :input="input" :duration="duration"
            @delete-timer="deleteTimer" @update-name="updateName($event, index)"
            @update-hotkey="updateHotkey($event, index)" />
        </v-row>
    </v-container>
</template>

<script lang="ts">
import TimerModuleOptions from '@/components/TimerModuleOptions.vue'
import TimerItem from '@/components/TimerItem.vue';
import { PropType } from 'vue';
import { v4 as uuidv4 } from 'uuid';

export default {
    components: {
        TimerModuleOptions, TimerItem
    },
    props: {
        index: Number,
        name: String,
        input: {
            type: Object as PropType<{ id: string; key: string }>, // Define the object type
        },
        duration: Number,
    },
    data() {
        return {
            timers: [] as any[]
        };
    },
    methods: {
        addTimer() {
            this.timers.push({
                id: uuidv4(),
                name: "",
                hotkey: ""
            })
        },
        deleteTimerGroup() {
            this.$emit("deleteTimerGroup", this.index)
        },
        deleteTimer(index: number): void {
            console.log("deleting timer", index)
            this.timers.splice(index, 1)
        },
        updateName(name: string, index: number): void {
            console.log("update name", name, index)
            this.timers[index].name = name
        },
        updateHotkey(hotkey: string, index: number): void {

            console.log("update hotkey", hotkey, index)
            this.timers[index].hotkey = hotkey
        },
    },
    watch: {
        input: function (newVal) {
            console.log("module input", newVal)
        }
    },
    mounted() {

    },
};
</script>

<style scoped>
.purple-bg {
    background-color: #6567A6;
}

.group-name {
    padding-left: 20px;
}
</style>
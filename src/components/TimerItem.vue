<template>
    <v-container class="bg" style="min-width: 320px">
        <v-row no-gutters class="flex-nowrap">
            <v-col>
                <span>
                    <timer-status-monitor :running="running" :display="hotkey" :editing="editing" @update-hotkey="$emit('updateHotkey', $event)" @edit-timer="editTimer" />
                </span>
            </v-col>
            <v-col cols="6">
                <span>
                    <timer-name :init-name="name" :editing="editing" @update-name="$emit('updateName', $event)" @edit-timer="editTimer" />
                </span>
            </v-col>
            <v-col>
                <span>
                    <timer-time ref="timer" :duration="duration" :running="running" :editing="editing" @timer-running="toggleStatus" />
                </span>
            </v-col>
            <v-col align="right">
                <span>
                    <timer-buttons :running="running" :editing="editing" @edit-timer="editTimer" @delete-timer="deleteTimer" />
                </span>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import TimerName from '@/components/TimerName.vue';
import TimerStatusMonitor from '@/components/TimerStatusMonitor.vue';
import TimerTime from '@/components/TimerTime.vue';
import TimerButtons from '@/components/TimerButtons.vue';
import { PropType } from 'vue';

export default {
    components: {
        TimerStatusMonitor, TimerName, TimerTime, TimerButtons,
    },
    props: {
        index: Number,
        hotkey: String,
        name: String,
        input: {
            type: Object as PropType<{ id: string; key: string }>, // Define the object type
        },
        duration: Number,
    },
    data() {
        return {
            running: false,
            editing: true,
        };
    },
    methods: {
        toggleStatus(status: boolean): void {
            this.running = status
            console.log("toggling status", status)
        },
        editTimer(status: boolean): void {
            this.editing = status
            console.log("editing", status)
        },
        deleteTimer(): void {
            console.log("deleting timer", this.name, this.index, this.hotkey)
            this.$emit("deleteTimer", this.index)
        },
    },
    watch: {
        input: function (newVal) {
            console.log("item input", newVal)
            if (this.hotkey === newVal.key) {
                console.log("triggered caps", this.hotkey)
                if (this.running) {
                    this.running = false;
                    (this.$refs.timer as typeof TimerTime).clearTime()
                }
            } else if (this.hotkey === newVal.key.toUpperCase()) {
                console.log("triggered lowercase", this.hotkey)
                if (!this.running) {
                    this.running = true
                } else {
                    (this.$refs.timer as typeof TimerTime).minusTime(1);
                }
            }
        }
    },
    mounted() {
        console.log("mounted item", this.name, this.index, this.hotkey)
    },
};
</script>

<style scoped>
.bg {
    background-color: black;
    color: white;
    /* height: 96px;
    width: 360px; */
}
</style>
<template>
    <v-container>
        <div v-if="!editing" :style="computedStyle">{{ hotkey }}</div>
        <v-text-field label="Hotkey" required v-if="editing" v-model="hotkey" hide-details="auto" @update:model-value="formatDisplay" @keydown.enter="$emit('editTimer', false)" ></v-text-field>
    </v-container>
</template>

<script lang="ts">

export default {
    props: {
        running: Boolean,
        display: String,
        editing: Boolean,
    },
    data() {
        return {
            backgroundColor: this.running ? '#B86E63' : '#84B863', // Initialize with your default color
            hotkey: this.display
        };
    },
    computed: {
        computedStyle() {
            return {
                backgroundColor: this.backgroundColor,
                height: '24px',
                width: '24px',
            };
        },
    },
    methods: {
        toggle() {
            if (this.backgroundColor == '#B86E63') {
                this.backgroundColor = '#84B863'
            } else {
                this.backgroundColor = '#B86E63'
            }
        },
        formatDisplay(newVal: string) {
            console.log("formating display", newVal, newVal.charAt(1))
            this.hotkey = newVal.charAt(newVal.length - 1).toUpperCase()
            console.log("hotkey", this.hotkey)
        }
    },
    watch: {
        running: function (newVal, oldVal) {
            console.log("monitor", this.running, newVal, oldVal)
            if (newVal) {
                this.backgroundColor = '#B86E63'
            } else {
                this.backgroundColor = '#84B863'
            }
        },
        editing: function (newVal) {
            console.log("editing monitor", newVal, this.hotkey)
            if (!newVal) {
                this.hotkey = this.hotkey?.charAt(0).toUpperCase()
                this.$emit('updateHotkey', this.hotkey)
            }
        }
    }
};
</script>

<style scoped></style>
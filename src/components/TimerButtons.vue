<template>
    <v-container align="end">
        <v-btn color="black" v-if="!editing" @click="editTimer">
            <v-icon size="small" icon="mdi-dots-vertical" />
        </v-btn>
        <v-btn color="black" v-if="editing" @click="deleteTimer">
            <v-icon size="small" icon="mdi-delete" />
        </v-btn>
        <v-btn color="black" v-if="editing" @click="okTimer">
            <v-icon size="small" icon="mdi-check" />
        </v-btn>
    </v-container>
</template>

<script lang="ts">
export default {
    props: {
        editing: Boolean,
        running: Boolean,
    },
    data() {
        return {
            running: this.running,
            editing: this.editing,
        };
    },
    methods: {
        editTimer() {
            this.$emit("editTimer", true)
        },
        deleteTimer() {
            this.$emit("deleteTimer")
        },
        okTimer() {
            this.$emit("editTimer", false)
        }
    },
    mounted() {
    },
    watch: {
        editing: function (newVal) {
            console.log("button editing", newVal)
            this.editing = newVal
        },
        running: function (newVal) {
            console.log("button running", newVal)
            if (newVal === true) {

            }
        },
    },
};
</script>

<style scoped></style>
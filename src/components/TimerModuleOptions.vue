<template>
    <v-container>
        <v-btn @click="add">Add</v-btn>
        <v-btn @click="edit">Edit</v-btn>
        <v-btn @click="$emit('deleteTimerGroup')">Delete</v-btn>
    </v-container>
</template>

<script lang="ts">

export default {
    data() {
        return {
        };
    },
    methods: {
        add() {
            console.log("adding timer")
            this.$emit("addTimer")
        },
        edit() {
            console.log("editing timer gorup")
            this.$emit("editTimerGroup")
        },
    },
    watch: {

    },
    mounted() {

    },
};
</script>

<style scoped></style>
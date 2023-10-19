<template>
    <v-container>
        <v-btn color="#6567A6" @click="add">+</v-btn>
        <!-- <v-btn color="#6567A6" @click="edit">Edit</v-btn> -->
        <v-btn color="#6567A6" @click="$emit('deleteTimerGroup')">x</v-btn>
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
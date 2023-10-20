<template>
  <v-container>
    <div class="text-end">
      <v-menu :offset="[18, 46]">
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props" flat>
            <v-icon icon="mdi-dots-vertical" />
          </v-btn>
        </template>

        <v-list bg-color="rgb(11, 11, 11)" rounded="0">
          <v-list-item @click="$emit('addTimer')">
            <v-list-item-title>Add Timer</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$emit('deleteTimerGroup')">
            <v-list-item-title>Delete Group</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-container>
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },
  methods: {
    add() {
      console.log("adding timer");
      this.$emit("addTimer");
    },
    edit() {
      console.log("editing timer gorup");
      this.$emit("editTimerGroup");
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style scoped></style>

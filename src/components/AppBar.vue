<template>
  <v-container justify="end" fluid>
    <v-row>
      <v-col>
        <add-group-button @add-group="$emit('addGroup', $event)" />
        <import-button @import-groups="$emit('importGroups', $event)" />
        <export-button :groups="groups" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import AddGroupButton from "@/components/AddGroupButton.vue";
import ExportButton from "@/components/ExportButton.vue";
import ImportButton from "@/components/ImportButton.vue";

export default {
  components: {
    AddGroupButton,
    ExportButton,
    ImportButton,
  },
  props: {
    groups: [] as any[],
  },
  methods: {
    add() {},
  },
};
</script>

<style scoped></style>

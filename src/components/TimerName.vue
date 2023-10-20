<template>
  <div v-if="!editing" class="pt-6">
    {{ name }}
  </div>
  <v-text-field
    v-if="editing"
    v-model="name"
    class="pt-2"
    label="Name"
    density="compact"
    variant="underlined"
    required
    hide-details="auto"
    @keydown.enter="$emit('editTimer', false)"
  >
    <template v-slot:label="labelProps">
      <span :class="labelProps.isActive.value || name ? 'pt-2 pr-1' : ''">
        Name
      </span>
    </template>
  </v-text-field>
</template>

<script lang="ts">
export default {
  props: {
    editing: Boolean,
    running: Boolean,
    initName: String,
  },
  data() {
    return {
      name: this.initName,
    };
  },
  methods: {},
  watch: {
    editing: function (newVal) {
      console.log("editing name", newVal);
      if (!newVal) {
        this.$emit("updateName", this.name);
      }
    },
  },
  mounted() {
    console.log("mounted name");
  },
};
</script>

<style scoped></style>

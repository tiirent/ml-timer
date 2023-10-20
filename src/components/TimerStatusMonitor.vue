<template>
  <div v-if="!editing" :style="computedStyle" class="center-text mt-6 ml-4">
    {{ hotkey }}
  </div>
  <v-text-field
    v-if="editing"
    v-model="hotkeyModel"
    class="pt-2 ml-2"
    style="width: 44px"
    label="Hotkey"
    density="compact"
    variant="underlined"
    required
    hide-details="auto"
    @keydown.enter="$emit('editTimer', false)"
    @update:modelValue="formatDisplay"
  >
    <template v-slot:label="labelProps">
      <span v-if="labelProps.isActive.value || hotkey" class="pt-2 pr-1">
        Hotkey
      </span>
      <span v-else class="mb-10" style="margin-bottom: 100px"> Hot </span>
    </template>
    <template v-slot:prepend-inner>
      <span v-if="hotkey" class="pt-1 pr-11 pl-4">
        {{ hotkey }}
      </span>
    </template>
  </v-text-field>
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
      backgroundColor: this.running ? "#B86E63" : "#84B863", // Initialize with your default color
      hotkey: this.display,
    };
  },
  computed: {
    hotkeyModel: {
      get() {
        return this.hotkey;
      },
      set(value: string) {
        if (value.length > 1) {
          this.hotkey = value.slice(-1).toUpperCase();
        } else {
          this.hotkey = value.toUpperCase();
        }
      },
    },
    computedStyle() {
      return {
        backgroundColor: this.backgroundColor,
        height: "24px",
        width: "24px",
      };
    },
  },
  methods: {
    toggle() {
      if (this.backgroundColor == "#B86E63") {
        this.backgroundColor = "#84B863";
      } else {
        this.backgroundColor = "#B86E63";
      }
    },
    formatDisplay(newVal: string) {
      if (newVal.length > 1) {
        this.hotkey = newVal.slice(-1);

        this.hotkey = this.hotkey.toUpperCase();
      }
    },
  },
  watch: {
    running: function (newVal) {
      if (newVal) {
        this.backgroundColor = "#B86E63";
      } else {
        this.backgroundColor = "#84B863";
      }
    },
    editing: function (newVal) {
      if (!newVal) {
        this.hotkey = this.hotkey?.charAt(0).toUpperCase();
        this.$emit("updateHotkey", this.hotkey);
      }
    },
  },
};
</script>

<style scoped>
.center-text {
  text-align: center; /* Center-align the text */
  /* Other styles for the div */
}
</style>

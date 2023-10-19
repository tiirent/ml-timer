<template>
    <v-text-field
      v-model="durationInput"
      label="Duration"
      @input="validateAndFormatDuration"
      @blur="validateAndFormatDuration"
      :rules="durationRules"
      @update:model-value="$emit('timeValue', $event)"
      required
    ></v-text-field>
  </template>
  
  <script lang="ts">
  
  export default {
    data() {
      return {
        durationInput: '',
      };
    },
    computed: {
      durationRules() {
        return [
          (v: string) => !!v || 'Duration is required',
          (v: string) => /^([0-9]{2}:){2}[0-9]{2}$/.test(v) || 'Invalid format (hh:mm:ss)',
        ];
      },
    },
    methods: {
      validateAndFormatDuration() {
        if (!this.durationInput) return;
  
        // Split the input into hours, minutes, and seconds
        const [hours, minutes, seconds] = this.durationInput.split(':').map(Number);
  
        // Format and validate hours, minutes, and seconds
        const formattedHours = String(Math.min(99, Math.max(0, hours || 0))).padStart(2, '0');
        const formattedMinutes = String(Math.min(59, Math.max(0, minutes || 0))).padStart(2, '0');
        const formattedSeconds = String(Math.min(59, Math.max(0, seconds || 0))).padStart(2, '0');
  
        this.durationInput = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
      },
    },
  }
  </script>
  
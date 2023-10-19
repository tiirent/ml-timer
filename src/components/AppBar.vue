<template>
    <v-container justify="end" fluid>
        <add-group-button @add-group="$emit('addGroup', $event)"/>
    </v-container>
</template>

<script lang="ts">
import AddGroupButton from '@/components/AddGroupButton.vue'

export default {
    components: {
        AddGroupButton,
    },
    methods: {
        add() {

        }
    }
};
</script>

<style scoped>

</style>
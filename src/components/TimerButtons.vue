<template>
    <v-container align="end">
        <v-btn
            v-if="!editing"
            color="black"
            size="small"
            icon="mdi-dots-vertical"
            @click="editTimer"
          >
        </v-btn>
        <span style="white-space: nowrap;">
            <v-btn
                v-if="editing"
                color="black"
                size="small"
                icon="mdi-delete"
                @click="deleteTimer"
            >
            </v-btn>
            <v-btn
                v-if="editing"
                color="black"
                size="small"
                icon="mdi-check"
                @click="okTimer"
            >
            </v-btn>
        </span>
    </v-container>
</template>

<script lang="ts">
export default {
    props: {
        editing: Boolean,
        running: Boolean,
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
};
</script>

<style scoped></style>
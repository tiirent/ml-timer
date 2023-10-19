<template>
    <v-container>
        <div v-if="!editing">
            {{ name }}
        </div>
        <v-text-field label="Name" required v-if="editing" v-model="name" hide-details="auto" @keydown.enter="$emit('editTimer', false)" ></v-text-field>
    </v-container>
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
            name: this.initName
        };
    },
    methods: {

    },
    watch: {
        editing: function (newVal) {
            console.log("editing name", newVal)
            if (!newVal) {
                this.$emit('updateName', this.name)
            }
        }
    },
    mounted() {
        console.log("mounted name")
    },
};
</script>

<style scoped></style>
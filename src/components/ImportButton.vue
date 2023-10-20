<template>
    <v-row justify="end" >
        <v-dialog v-model="dialog" persistent width="500">
            <template v-slot:activator="{ props }">
                <v-btn class="add-btn" color="black" v-bind="props">
                    Import
                </v-btn>
            </template>
            <v-card color="black">
                <v-card-title>
                    <span class="text-h5">Import</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-text-field label="Input" required 
                            v-model="value" 
                            hide-details="auto" 
                            />
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                        Close
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="save">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script lang="ts">

export default {
    methods: {
        save() {
            this.dialog = false
            this.$emit("importGroups", this.value)
        },
    },
    data: () => ({
        dialog: false,
        value: ""
    }),
}
</script>

<style scoped>
.add-btn {
    margin: 8px;
}
</style>
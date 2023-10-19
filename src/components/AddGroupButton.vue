<template>
    <v-row justify="end" >
        <v-dialog v-model="dialog" persistent width="500">
            <template v-slot:activator="{ props }">
                <v-btn class="add-btn" color="black" v-bind="props">
                    Add Group
                </v-btn>
            </template>
            <v-card color="black">
                <v-card-title>
                    <span class="text-h5">Add Group</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="7">
                                <v-text-field required label="Name" v-model="name"></v-text-field>
                            </v-col>
                            <v-col cols="5">
                                <time-input-field @time-value="duration = $event"/>
                            </v-col>
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
import TimeInputField from '@/components/TimeInputField.vue'

export default {
    components: {
        TimeInputField,
    },
    methods: {
        save() {
            this.dialog = false
            this.$emit("addGroup", {name: this.name, duration: this.duration})
        },
    },
    data: () => ({
        dialog: false,
        name: '',
        duration: ''
    }),
}
</script>

<style scoped>
.add-btn {
    margin: 8px;
}
</style>
<template>
    <v-row justify="end" >
        <v-dialog v-model="dialog" persistent width="500">
            <template v-slot:activator="{ props }">
                <v-btn class="add-btn" color="black" v-bind="props">
                    Export
                </v-btn>
            </template>
            <v-card color="black">
                <v-card-title>
                    <span class="text-h5">Save this somewhere</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            {{ groups }}
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                        Close
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="copy">
                        Copy
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script lang="ts">

export default {
    props: {
        groups: [] as any[]
    },
    methods: {
        copy() {
            this.dialog = false
            navigator.clipboard.writeText(JSON.stringify(this.groups))
        },
    },
    data: () => ({
        dialog: false,
    }),
}
</script>

<style scoped>
.add-btn {
    margin: 8px;
}
</style>
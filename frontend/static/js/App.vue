<template>
    <div>
        <div v-for="item in items">
            {{ item.title }}
        </div>

    </div>
</template>

<script>
    export default {
        computed: {
            items() {
                return this.$store.state.items
            },
        },
        created() {
            this.$store.dispatch('getItems')
        },
    }
</script>

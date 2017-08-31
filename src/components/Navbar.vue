<template>
    <header>
        <span>{{title}}</span>
    </header>
</template>

<script>
    import buildInfo from '../buildInfo.js'
    export default {
        name: 'navbar',
        data () {
            return {
                title: buildInfo.displayName
            }
        }
    }
</script>

<style>

</style>

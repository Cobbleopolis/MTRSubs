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

<style lang="sass">
    header
        margin: 0
        height: 56px
        padding: 0 16px 0 24px
        background-color: #35495E
        color: #ffffff

        span
            display: block
            position: relative
            font-size: 20px
            line-height: 1
            letter-spacing: .02em
            font-weight: 400
            box-sizing: border-box
            padding-top: 16px
</style>

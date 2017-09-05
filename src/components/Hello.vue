<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>Total streams: {{streamCount}}</p>
        <ul>
            <li v-for="stream in streams">
                <code>{{JSON.stringify(stream)}}</code>
            </li>
        </ul>
        <p>Total subscribers: {{subscriberCount}}</p>
        <ul>
            <li v-for="sub in subscribers">
                <code>{{JSON.stringify(sub)}}</code>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState, mapActions, mapGetters } from 'vuex'

    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Welcome to Your Vue.js Application'
            };
        },
        computed: {
            ...mapGetters('subData', ['subscribers', 'subscriberCount']),
            ...mapGetters('streamData', ['streams', 'streamCount'])
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
    h1, h2
        font-weight: normal

    ul
        list-style-type: none
        padding: 0

    li
        margin: 0 10px

    a
        color: #35495E
</style>

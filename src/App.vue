<template>
    <div id="app">
        <navbar></navbar>
        <main>
            <img src="./assets/logo.png" alt="Vue.js PWA">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue';
    import mutationTypes from './store/mutationTypes';
    import Subscription from './api/Subscription';
    import Stream from './api/Stream';
    import {mapActions} from 'vuex';

    import * as d3 from 'd3';

    export default {
        components: {Navbar},
        name: 'app',
        methods: {
            ...mapActions('subData', {
                addSubItem: mutationTypes.subData.ADD_SUB_ITEM
            }),
            ...mapActions('streamData', {
                addStreamItem: mutationTypes.streamData.ADD_STREAM_ITEM
            })
        },
        beforeMount() {
            const timeParse = d3.timeParse('%m\/%d\/%Y');
            d3.csv('static/subs.csv', (error, csvData) => {
                if (error) {
                    alert(error);
                    return;
                }
                let subArray = [];
                let streamArray = [];


                let lastSubDate;
                let chunkedSubArray = [];
                let subArrayChunk = [];
                csvData.forEach((d) => {
                    let sub = new Subscription(d.subNumber.trim(), d.subName.trim(), d.streamName.trim(), timeParse(d.subDate.trim()));
                    subArray.push(sub);
                    if (sub.subDate) {
                        if (lastSubDate && lastSubDate.getTime() !== sub.subDate.getTime()) {
                            chunkedSubArray.push(subArrayChunk);
                            subArrayChunk = [];
                        }
                        lastSubDate = sub.subDate;
                    }
                    subArrayChunk.push(sub);
                });
                chunkedSubArray.push(subArrayChunk);

                let totalSubs = 0;
                chunkedSubArray.forEach((subChunk) => {
                    let streamName = subChunk.find((sub) => sub.streamName).streamName;
                    let streamDate = subChunk.find((sub) => sub.subDate).subDate;
                    let streamSubs = subChunk.filter((sub) => sub.streamName || sub.subDate).length;
                    let outOfSteamSubs = subChunk.filter((sub) => !(sub.streamName || sub.subDate)).length;
                    totalSubs += subChunk.length;
                    streamArray.push(new Stream(streamDate, streamName, streamSubs, outOfSteamSubs, totalSubs));
                });

                this.addSubItem(subArray);
                this.addStreamItem(streamArray);
            });
        }
    };
</script>

<style lang="sass">
    body
        margin: 0

        #app
            font-family: 'Avenir', Helvetica, Arial, sans-serif
            -webkit-font-smoothing: antialiased
            -moz-osx-font-smoothing: grayscale
            color: #2c3e50

        main
            text-align: center
            margin-top: 40px
</style>

import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger'
import subData from './modules/subData'
import streamData from './modules/streamData'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        subData,
        streamData
    },
    // strict: debug,
    plugins: debug ? [createLogger()] : []
});

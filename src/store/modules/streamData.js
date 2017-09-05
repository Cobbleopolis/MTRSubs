import mutationTypes from '../mutationTypes'
import Stream from '../../api/Stream';

const state = {
    streams: []
};

const getters = {
    streams: state => state.streams,
    streamCount: state => state.streams.length
};

const actions = {
    [mutationTypes.streamData.ADD_STREAM_ITEM]: ({commit}, subObj) => commit(mutationTypes.subData.ADD_SUB_ITEM, subObj)
};

const mutations = {
    [mutationTypes.subData.ADD_SUB_ITEM](state, payload) {
        if (Array.isArray(payload))
            state.streams.push(...payload);
        else if (payload instanceof Stream)
            state.streams.push(payload);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

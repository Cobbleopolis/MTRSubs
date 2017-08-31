import mutationTypes from '../mutationTypes'

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
    [mutationTypes.subData.ADD_SUB_ITEM](state, subObj) {
        state.streams.push(subObj)
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

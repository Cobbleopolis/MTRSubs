import mutationTypes from '../mutationTypes'
import Subscription from '../../api/Subscription';

const state = {
    subs: []
};

const getters = {
    subscribers: state => state.subs,
    subscriberCount: state => state.subs.length
};

const actions = {
    [mutationTypes.subData.ADD_SUB_ITEM]: ({commit}, subObj) => commit(mutationTypes.subData.ADD_SUB_ITEM, subObj),
    [mutationTypes.subData.ADD_SUB_ITEMS]: ({commit}, subArray) => commit(mutationTypes.subData.ADD_SUB_ITEMS, subArray)
};

const mutations = {
    [mutationTypes.subData.ADD_SUB_ITEM](state, payload) {
        if (Array.isArray(payload))
            state.subs.push(...payload);
        else if (payload instanceof Subscription)
            state.subs.push(payload)
    },
    [mutationTypes.subData.ADD_SUB_ITEMS](state, subArr) {
        state.subs.push(...subArr)
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

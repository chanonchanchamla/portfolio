import { createStore } from 'vuex';

export default createStore({
  state: {
    lastScroll: 0,
    position: {
      aboutme: 0,
      works: 0,
      contact: 0,
    },
  },
  getters: {
  },
  mutations: {
    setLastScroll(state, position) {
      state.lastScroll = position
    },
    setPositionAboutme(state, position) {
      state.position.aboutme = position
    },
    setPositionWorks(state, position) {
      state.position.works = position
    },
    setPositionContact(state, position) {
      state.position.contact = position
    },
  },
  actions: {
  },
  modules: {
  },
});

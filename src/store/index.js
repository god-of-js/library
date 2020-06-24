import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: null,
    doc: [],
    borrowers: []
  },
  getters: {
    fetchBorrowers: state => {
      return state.borrowers.filter(x => x.name !== null)
    }
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    setDoc(state, doc) {
      state.docs.push(doc)
    },
    setBorrowers(state, people) {
      state.borrowers.push(people)
    }
  },
  actions: {
    getFile({commit}, vueApp) {
        vueApp.$firebase.storage
        .child('library book')
        .getDownloadURL()
        .then(link => {
         commit('setDoc', link)
        })
        .catch(err => console.log(err));
    },
    getBorrowers({commit}, vueApp) {
      vueApp.$firebase.db
        .ref("borrowers")
        .once("value")
        .then(result => {
          commit("setBorrowers", { ...result.val(), id: result.key });
        }).catch(err => console.log(err))
    }
  },
  modules: {}
});

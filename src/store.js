import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';
import router from './router';

let battlecardApi = Axios.create({
  baseURL: 'https://battlecardz.herokuapp.com/api/games'
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {}
  },
  mutations: {
    setGame(state, game) {
      state.game = game
    }
  },
  actions: {
    playGame({ commit }, gameConfig) {
      battlecardApi.post('', gameConfig)
        .then(res => {
          commit('setGame', res.data.game)
          router.push({ name: 'game', params: { gameId: res.data.game.id } })
        })
    },
    getGame({ commit }, gameId) {
      battlecardApi.get(gameId)
        .then(res => {
          commit('setGame', res.data.data)
        })
    },
    updateGame({ commit }, gameUpdate) {
      battlecardApi.put('' + gameUpdate.id, gameUpdate.gamePlay)
        .then(res => {
          commit('setGame', res.data.game)
        })
    },
    playAgain(){
      router.push({name:'home'})
    }
  }
})

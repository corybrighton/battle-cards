<template>
  <div class="home">
    <h1>BATTLE</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>CARDS</h1>
    <input type="text" placeholder="Players Name" v-model="gameConfig.playerName">
    <select v-model="gameConfig.set">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <button @click="playGame">Play Game</button>
  </div>
</template>

<script>

  export default {
    name: 'home',
    data() {
      return {
        gameConfig: {
          playerName: 'Eye of Mordor',
          set: 1
        }
      }
    },
    components: {
    },
    methods: {
      playGame() {
        this.$store.dispatch('playGame', this.gameConfig)
      }
    }
  }
</script>

<style>
  body {
    background-color: black;
  }
</style>
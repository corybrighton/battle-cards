<template>
  <div class="game container" v-if="game.opponent">
    <div v-if="game.opponent.hand.length > 0 && game.player.hand.length > 0">
      <div class="row justify-content-around">
        <card :class="{'border-success': card.id == attack.gamePlay.opponentCardId}" v-for="card in game.opponent.hand"
          :cardData="card" v-on:setActiveOpponent='setActive' :player='false' />
      </div>
      <div class="row justify-content-around">
        <h1>{{game.opponent.name}} has {{game.opponent.hand.length+game.opponent.remainingCards}} cards left</h1>
      </div>
      <div class="row justify-content-around">
        <card class="col-3 special-card" v-if="game.opponent.deadCards[0]" :cardData="game.opponent.deadCards[0]" />
        <h3 class="col-3" v-else>Opponent</h3>
        <button class="btn btn-warning btn-lg" @click="updateGame">Fight</button>
        <card class="col-3 special-card" v-if="game.player.deadCards[0]" :cardData="game.player.deadCards[0]" />
        <h3 class="col-3" v-else>Player</h3>
      </div>
      <div class="row justify-content-around">
        <h1>{{game.player.name}} has {{game.player.hand.length+game.player.remainingCards}} cards left</h1>
      </div>
      <div class="row justify-content-around">
        <card :class="{'border-success': card.id == attack.gamePlay.playerCardId}" v-for="card in game.player.hand"
          :cardData="card" v-on:setActivePlayer='setActive' :player="true" />
      </div>
    </div>

    <div class="mt-5" v-else-if="game.opponent.hand.length > 0">
      <h1> {{game.opponent.name}} has left you in shame!</h1>
      <button @click="playAgain">Play again</button>
    </div>
    <div class="mt-5" v-else-if="game.player.hand.length > 0">
      <h1> {{game.player.name}} has won! {{game.opponent.name}} is ashamed. </h1>
      <button @click="playAgain">Play again</button>
    </div>
    <div class="mt-5" v-else>
      <button @click="playAgain">Play again</button>
    </div>
  </div>
</template>

<script>
  import Card from '@/components/Card.vue'
  export default {
    name: 'game',
    data() {
      return {
        attack: {
          id: '',
          gamePlay: {
            opponentCardId: '',
            playerCardId: ''
          }
        }
      }
    },
    components: {
      Card
    },
    computed: {
      game() {
        return this.$store.state.game
      }
    },
    methods: {
      setActive(data) {
        this.attack.id = this.game.id
        if (data.isPlayer) {
          this.attack.gamePlay.playerCardId = data.cardId
        } else {
          this.attack.gamePlay.opponentCardId = data.cardId
        }
      },
      updateGame() {
        if (this.attack.gamePlay.playerCardId && this.attack.gamePlay.opponentCardId)
          this.$store.dispatch('updateGame', this.attack)
      },
      playAgain() {
        this.$store.dispatch('playAgain')
      }
    },
    mounted() {
      this.$store.dispatch('getGame', this.$route.params.gameId)
    }
  }

</script>

<style>
  body {
    background-color: black;
  }

  .game {
    color: aliceblue;
  }
</style>
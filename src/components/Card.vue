<template>
  <div class="card bg-secondary col-2" @click="setActive">
    <div v-if="cardData.visible || player">
      <div class="row justify-content-between">
        <i class="fas fa-khanda">
          {{cardData.attack}}
        </i>
        <i class="fas fa-shield-alt">
          {{cardData.defense}}
        </i>
        <i class="far fa-heart">
          {{cardData.health}}
        </i>
      </div>
      <img :src="cardData.img" class="card-img">
      <h5 class="card-title">{{cardData.name}}</h5>
    </div>
    <div v-else>
      <img class="card-img" src="https://d1u5p3l4wpay3k.cloudfront.net/faeria_gamepedia/thumb/3/39/Black_Dragon_Card_Back.png/159px-Black_Dragon_Card_Back.png?version=516978c0577e01313a1a08d943f433ba"
        alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: ['cardData', 'player'],
    data() {
      return {

      }
    },
    computed: {},
    methods: {
      setActive() {
        if (this.player) {
          this.$emit('setActivePlayer', { cardId: this.cardData.id, isPlayer: this.player })
        } else {
          this.$emit('setActiveOpponent', { cardId: this.cardData.id, isPlayer: this.player })
        }
      }
    }
  }

</script>

<style>
  img {
    max-width: 180px;
  }
  .special-card {
/* create a custom class so you 
   do not run into specificity issues 
   against bootstraps styles
   which tends to work better than using !important 
   (future you will thank you later)*/

  background-color: rgba(245, 245, 245, 1);
  opacity: .4;
}
</style>
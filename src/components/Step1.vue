<template lang="pug">
    div#step1
        div.container-fluid
            div.row
                div.col-sm-12
                    div.text-center
                        h1 ขั้นที่ 1 คำนวณจำนวนเสียงต่อ ส.ส. พึงมี 1 คน
                        span.font-italic รัฐธรรมนูญ มาตรา 91 วรรค 1
                        p รวมนับคะแนนทั้งประเทศ!{' '}
                            span.total-vote-count-number.number 0
                            | เสียง
                        p.divide.hide ------------------------------------
                        p.divide2.hide หารจำนวน ส.ส. ทั้งหมด!{' '}
                            span.number 500
                            |  คน
                        p.divide.hide เท่ากับ
                        h1
                            span.total-vote-per-ss.hide.number  0
                        div
                            Redo.hide(:click="start")
</template>

<script>
  // import _ from 'lodash'
  // import Seat from './Seat'
  import Redo from './Redo'
  // import jQuery from 'jquery'
  // const $ = jQuery

  export default {
    name: 'Step1',
    props: {},
    components: {
      // Seat
      Redo
    },
    data: function () {
      return {
        seats: [],
        timeline1: null,
        seatFormation: {
          row: 5,
          column: 30
        }
      }
    },
    created () {
      for (let i = 0; i < 500; i++) {
        this.seats.push({
          id: i,
          ssType: (i % 100) - 70 >= 0 ? 'ss-party' : 'ss-zone'
        })
      }
    },
    mounted () {
      // let self = this
      this.timeline1 = this
        .$anime
        .timeline({ autoplay: true })
        .add({
          targets: '#step1 .total-vote-count-number',
          color: '#56FF79',
          innerHTML: ['0', '35528749'],
          round: 1
        })
        .add({
          targets: '#step1 .divide',
          opacity: {
            value: 1,
            duration: 1000,
            easing: 'easeInOutQuad',
          }
        })
        .add({
          targets: '#step1 .divide2',
          opacity: {
            value: 1,
            duration: 1000,
            easing: 'easeInOutQuad',
          }
        })
        .add({
          targets: '#step1 .divide3',
          opacity: {
            value: 1,
            duration: 1000,
            easing: 'easeInOutQuad',
          }
        })
        .add({
          targets: '#step1 .total-vote-per-ss',
          opacity: {
            value: 1,
            duration: 1000,
            easing: 'easeInOutQuad',
          }
        })
        .add({
          targets: '#step1 .total-vote-per-ss',
          color: '#56FF79',
          innerHTML: ['0', '71057'],
          round: 1,
        })
        .add({
          targets: '#step1 .btn',
          opacity: 1
        })
    },
    methods: {
      start () {
        this.timeline1.restart()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "./../variables";

    #step1 {
        text-align: center;
        /*min-height: 75rem;*/
        min-height: 50rem;
    }

    table {
        margin: 0 auto;

        tr {
            padding: 0;

            td {
                padding: 1px;
            }
        }
    }
</style>

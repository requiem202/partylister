<template>
    <div id="step1">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="text-center">
                        <h1>คำนวณจำนวนเสียงต่อ ส.ส. พึงมี 1 คน</h1>
                        <span class="font-italic">รัฐธรรมนูญ มาตรา 91 วรรค 1</span>
                        <p>
                            รวมนับคะแนนทั้งประเทศ <span class="total-vote-count-number">0</span> เสียง
                        </p>
                        <p class="divide" style="opacity: 0;">
                            ------------------------------------
                        </p>
                        <p class="divide2" style="opacity: 0;">
                            หารจำนวน ส.ส. ทั้งหมด 500 คน
                        </p>
                        <p class="divide3" style="opacity: 0;">=</p>
                        <h1>
                            <span class="total-vote-per-ss" style="opacity: 0;">0</span>
                        </h1>
                        <div>
                            <button class="btn btn-secondary" @click="start" style="opacity: 0">
                                เล่นซ้ำ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  // import _ from 'lodash'
  // import Seat from './Seat'
  // import jQuery from 'jquery'
  // const $ = jQuery

  export default {
    name: 'Step5_1',
    props: {},
    components: {
      // Seat
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
          targets: '.total-vote-count-number',
          color: '#56FF79',
          innerHTML: ['0', '35528749'],
          round: 1
        })
        .add({
          targets: '.divide',
          opacity: {
            value: 1,
            duration: 1000,
            easing: 'easeInOutQuad',
          }
        })
        .add({
          targets: '.divide2',
          opacity: {
            value: 1,
            duration: 1000,
            easing: 'easeInOutQuad',
          }
        })
        .add({
          targets: '.divide3',
          opacity: {
            value: 1,
            duration: 1000,
            easing: 'easeInOutQuad',
          }
        })
        .add({
          targets: '.total-vote-per-ss',
          opacity: {
            value: 1,
            duration: 1000,
            easing: 'easeInOutQuad',
          }
        })
        .add({
          targets: '.total-vote-per-ss',
          color: '#56FF79',
          innerHTML: ['0', '71057'],
          round: 1,
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

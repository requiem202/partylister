<template>
    <div id="intro">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="text-center">
                        <h1>การเลือกตั้งปี 2562</h1>
                        <h2>ส.ส. ทั้งหมด 500 คน</h2>
                        <p class="ss-zone-text" style="opacity: 0">
                            เป็น ส.ส. แบบแบ่งเขต <span class="ss-zone-number">0</span> คน
                        </p>
                        <p class="ss-party-text" style="opacity: 0">
                            เป็น ส.ส. แบบบัญชีรายชื่อ <span class="ss-party-number">0</span> คน
                        </p>
                        <p class="ss-party-text-2" style="opacity: 0">
                            เราจะมาโฟกัสกันที่ ส.ส. แบบบัญชีรายชื่อ
                        </p>
                        <div>
                            <button class="btn btn-secondary" @click="start" style="opacity: 0">
                                เล่นซ้ำ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">

                <table>
                    <tr v-for="(n, i) in seatFormation.row" v-bind:key="i">
                        <td v-for="(m, j) in seatFormation.column" v-bind:key="(i*seatFormation.column)+j">
                            <Seat ref="seats"
                                  width="8"
                                  height="8"
                                  style="fill: #ffffff"
                                  :class="seats[(i*100)+j].ssType" />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
  // import _ from 'lodash'
  import Seat from './Seat'
  import jQuery from 'jquery'
  const $ = jQuery

  export default {
    name: 'Step1',
    props: {},
    components: {
      Seat
    },
    data: function () {
      return {
        seats: [],
        timeline1: null,
        seatFormation: {
          row: 5,
          column: 100
        }
      }
    },
    created () {
      for (let i = 0; i < 500; i++) {
        // console.log((i%100) - 70)
        this.seats.push({
          id: i,
          ssType: (i % 100) - 70 >= 0 ? 'ss-party' : 'ss-zone'
          // distance: 250 + (i * 10),
          // fill: '#000'
        })
      }
    },
    mounted () {

      // let ssZone = _.map(_.filter(this.$refs.seats, (e, i) => {
      //   return this.seats[i].ssType === 'ss-zone'
      // }), (e) => { return e.$el })

      // let ssPartyList = _.map(_.filter(this.$refs.seats, (e, i) => {
      //   return this.seats[i].ssType === 'ss-partylist'
      // }), (e) => { return e.$el })
      // let self = this
      this.timeline1 = this
        .$anime
        .timeline({ autoplay: true })
        .add({
          targets: '.ss-zone-text',
          opacity: {
            value: 1,
            duration: 1000,
            easing: 'easeInOutQuad',
          }
        })
        .add({
          targets: '.ss-zone-number',
          color: '#56FF79',
          innerHTML: [0, 350],
          round: 1
        })
        .add({
          targets: '.ss-zone',
          translateX: -50,
          translateY: 50,
          fill: '#56FF79',
          easing: 'easeOutExpo',
          // delay: 1000
          delay: this.$anime.stagger(5)
        })
        .add({
          targets: '.ss-party-text',
          opacity: {
            value: 1,
            duration: 1000,
            easing: 'easeInOutQuad',
          }
        })
        .add({
          targets: '.ss-party-number',
          color: '#ff3e2d',
          innerHTML: [0, 150],
          round: 1
        })
        .add({
          targets: '.ss-party',
          translateX: 50,
          translateY: 50,
          fill: '#ff3e2d',
          easing: 'easeOutExpo',
          // delay: 1000
          delay: this.$anime.stagger(5)
        })
        .add({
          targets: '.ss-party-text-2',
          opacity: {
            value: 1,
            duration: 1000,
            easing: 'easeInOutQuad',
          }
        })
        .add({
          targets: '.ss-zone',
          opacity: 0,
          easing: 'easeOutExpo',
          delay: this.$anime.stagger(5),
          complete: function() {
            $('.ss-zone').remove()
            // self.seatFormation.column = 30
          }
        })
        .add({
          targets: '.ss-party',
          // translateX: -450,
          // translateY: -50,
          // display: 'absolute',
          // left: 0,
          width: 32,
          height: 32,
          easing: 'easeOutExpo',
          // delay: 1000
          delay: this.$anime.stagger(5)
        })
        .add({
          targets: '.btn',
          opacity: 1
        })
      // .add({
      //   targets: '.ss-party',
      //   // translateX: (e) => {
      //   //   console.log(e)
      //   //   return 1
      //   // },
      //   translateY: 150,
      //   // fill: '#ff3e2d',
      //   easing: 'easeOutExpo',
      //   // scale: 2,
      //   // delay: 1000
      //   delay: this.$anime.stagger(10)
      // }, 0)
      // .add({
      //   targets: '.ss-zone',
      //   opacity: 0,
      //   delay: this.$anime.stagger(5)
      // })
      // .add({
      //   targets: '.ss-party',
      //   // left: 0,
      //   // position: 'absolute',
      //   // position: 'fixed',
      //   // top: '-100%',
      //   // right: '-100%',
      //   // left: '-100%',
      //   // bottom: '-100%',
      //   margin: 'auto',
      //   delay: this.$anime.stagger(10)
      // })
      // .add({
      //   targets: '.ss-party',
      //   width: 32,
      //   height: 32
      // })
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

    #intro {
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

<template lang="pug">
    div#intro
        div.container-fluid
            div.row
                div.col-sm-12
                    div.text-center
                        h1 การเลือกตั้งปี 2562
                        h2 ส.ส. ทั้งหมด !{' '}
                            span.number 500
                            |  คน
                        p.ss-zone-text.hide เป็น ส.ส. แบบแบ่งเขต!{' '}
                            span.ss-zone-number.number 0
                            |  คน
                        p.ss-party-text.hide เป็น ส.ส. แบบบัญชีรายชื่อ!{' '}
                            span.ss-party-number.number 0
                            |  คน
                        p.ss-party-text-2.hide เราจะมาโฟกัสกันที่ ส.ส. แบบบัญชีรายชื่อ
                        div
                            Redo.hide(:click="start")

            div.row
                table
                    tr(v-for="(n, i) in seatFormation.row", v-bind:key="i")
                        td(v-for="(m, j) in seatFormation.column", v-bind:key="(i*seatFormation.column)+j")
                            Seat(ref="seats",
                                  width="8",
                                  height="8",
                                  style="fill: #ffffff",
                                  :class="seats[(i*100)+j].ssType")
</template>

<script>
  // import _ from 'lodash'
  import Seat from './Seat'
  import jQuery from 'jquery'
  import Redo from './Redo'
  const $ = jQuery

  export default {
    name: 'Step1',
    props: {},
    components: {
      Redo,
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

      this.timeline1 = this
        .$anime
        .timeline({ autoplay: true })
        .add({
          targets: '#intro .ss-zone-text',
          opacity: {
            value: 1,
            duration: 1000,
            easing: 'easeInOutQuad',
          }
        })
        .add({
          targets: '#intro .ss-zone-number',
          color: '#56FF79',
          innerHTML: [0, 350],
          round: 1
        })
        .add({
          targets: '#intro .ss-zone',
          translateX: -50,
          translateY: 50,
          fill: '#56FF79',
          easing: 'easeOutExpo',
          // delay: 1000
          delay: this.$anime.stagger(5)
        })
        .add({
          targets: '#intro .ss-party-text',
          opacity: {
            value: 1,
            duration: 1000,
            easing: 'easeInOutQuad',
          }
        })
        .add({
          targets: '#intro .ss-party-number',
          color: '#ff3e2d',
          innerHTML: [0, 150],
          round: 1
        })
        .add({
          targets: '#intro .ss-party',
          translateX: 50,
          translateY: 50,
          fill: '#ff3e2d',
          easing: 'easeOutExpo',
          // delay: 1000
          delay: this.$anime.stagger(5)
        })
        .add({
          targets: '#intro .ss-party-text-2',
          opacity: {
            value: 1,
            duration: 1000,
            easing: 'easeInOutQuad',
          }
        })
        .add({
          targets: '#intro .ss-zone',
          opacity: 0,
          easing: 'easeOutExpo',
          delay: this.$anime.stagger(5),
          complete: function() {
            $('.ss-zone').remove()
            // self.seatFormation.column = 30
          }
        })
        .add({
          targets: '#intro .ss-party',
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
          targets: '#intro .btn',
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

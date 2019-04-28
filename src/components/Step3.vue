<template lang="pug">
    div#step3
        div.container-fluid
            div.row
                div.col-sm-12
                    div.text-center
                        h1 ขั้นที่ 3 คำนวณ ส.ส. บัญชีรายชื่อเบื้องต้น
                        span.font-italic รัฐธรรมนูญ มาตรา 91 วรรค 3,4
                        p จำนวน ส.ส. พึงมี - จำนวน ส.ส. เขต
                        p.divide.hide เท่ากับ
            div.row.justify-content-md-center
                div.col-sm-8
                        table.ss-table.table.table-dark.table-sm
                            thead
                                tr
                                    th พรรค
                                    th ส.ส. พึงมี
                                    th ส.ส. เขต
                                    th ส.ส. บัญชีรายชื่อเบื้องต้น
                                    th
                            tr(v-for="party in sortedByScore", v-bind:key="party.party")
                                td.party {{ party.party }}
                                td.number.ss_allowed(:data-value="party.ss_allowed") {{ party.ss_allowed }}
                                td.number.ss_zone(:data-value="party.ss_zone") {{ party.ss_zone }}
                                td.number.ss_party_list_1(:data-value="party.ss_party_list_1") {{ party.ss_party_list_1 }}
                                td
                                    span.seat.hide(v-for="i in floor(party.ss_party_list_1)", v-bind:key="i")
                                        Seat(ref="seats",
                                            width="4",
                                            height="4",
                                            style="fill: #ffffff")
                        div
                            Redo.hide(:click="start")
</template>

<script>
  import _ from 'lodash'
  import Redo from './Redo'
  import rawPartyScore from './../party_score_100'
  import jQuery from 'jquery'
  import Seat from './Seat'

  export default {
    name: 'Step3',
    props: {},
    components: {
      Seat,
      Redo
    },
    filters: {
      toNumber (value) {
        return parseInt(value).toLocaleString()
      }
    },
    data: function () {
      return {
        timeline1: null,
        seatFormation: {
          row: 5,
          column: 30
        },
        partyScore: {}
      }
    },
    computed: {
      sortedByScore () {
        // return _.sortBy(this.partyScore, 'score')
        return _.orderBy(this.partyScore, 'score', 'desc')
      }
    },
    created () {
      _.each(rawPartyScore, (v) => {
        this.partyScore[v.party] = v
      })
    },

    mounted () {
      // let that = this
      this.timeline1 = this
        .$anime
        .timeline({ autoplay: true })
        .add({
          targets: '#step3 .divide',
          opacity: {
            value: 1,
            duration: 1000,
            easing: 'easeInOutQuad',
          }
        })
        .add({
          targets: '#step3 .ss-table tr td.ss_allowed',
          innerHTML: (e) => {
            let value = jQuery(e).data('value')
            return [0, value]
          },
          round: 10000,
          delay: 500
        })
        .add({
          targets: '#step3 .ss-table tr td.ss_zone',
          innerHTML: (e) => {
            let value = jQuery(e).data('value')
            return [0, value]
          },
          round: 1,
          delay: 500
        })
        .add({
          targets: '#step3 .ss-table tr td.ss_party_list_1',
          innerHTML: (e) => {
            let value = jQuery(e).data('value')
            return [0, value]
          },
          round: 10000,
          delay: 500
        })
        .add({
          targets: '#step3 .seat',
          opacity: 1,
          easing: 'easeOutExpo',
          // delay: 1000
          delay: this.$anime.stagger(5)
        })
        .add({
          targets: '#step3 .btn',
          opacity: 1
        })
    },
    methods: {
      start () {
        this.timeline1.restart()
      },
      floor (v) {
        return Math.floor(v)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "./../variables";

    #step3 {
        text-align: center;
        min-height: 75rem;
    }

    table {
        text-align: left;
        .ss_party_list_1,
        .ss_zone,
        .ss_allowed {
            text-align: right;
        }
        td.ss_party_list_1,
        td.ss_zone,
        td.ss_allowed {
            padding-right: 12px;
        }
    }
</style>

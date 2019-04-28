<template lang="pug">
    div#step4
        div.container-fluid
            div.row
                div.col-sm-12
                    div.text-center
                        h1 ขั้นที่ 4 รวม ส.ส. บัญชีรายชื่อแล้วเกลี่ยใหม่ให้เท่ากับ
                            span.number 150
                        span.font-italic พรบ. มาตรา 128 วรรค 4,5,7
            div.row
                div.col-sm-6
                        table.ss-table.table.table-dark.table-sm
                            thead
                                tr
                                    th พรรค
                                    th ก่อนเกลี่ย
                                    th หลังเกลี่ย
                            tr(v-for="party in sortedByScore", v-bind:key="party.party")
                                td.party {{ party.party }}
                                td.number.ss_party_list_1(:data-value="party.ss_party_list_1") {{ party.ss_party_list_1 }}
                                td.number.overhang_1(:data-value="party.overhang_1") {{ party.overhang_1 }}

                div.col-sm-6
                    table.ss-table.table.table-dark.table-sm
                        thead
                            tr
                                th พรรค
                                th ก่อนเกลี่ย
                                th หลังเกลี่ย
                        tr(v-for="party in sortedByScore", v-bind:key="party.party")
                            td.party {{ party.party }}
                            td.number.ss_party_list_2(:data-value="party.ss_party_list_2_before") {{ party.ss_party_list_2_before }}
                            td.number.overhang_2(:data-value="party.overhang_2") {{ party.overhang_2 }}
            div.row
                div.col-sm-12
                    div.text-center
                        div
                            Redo.hide(:click="start")
</template>

<script>
  import _ from 'lodash'
  import Redo from './Redo'
  import rawPartyScore from './../party_score_100'
  import jQuery from 'jquery'

  export default {
    name: 'Step4',
    props: {},
    components: {
      // Seat
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
          targets: '#step4 .ss-table tr td.ss_party_list_1',
          innerHTML: (e) => {
            let value = jQuery(e).data('value')
            return [0, value]
          },
          round: 10000,
          delay: 1000
        })
        .add({
          targets: '#step4 .ss-table tr td.overhang_1',
          innerHTML: (e) => {
            let value = jQuery(e).data('value')
            return [0, value]
          },
          round: 10000,
          // delay: 1000
        })
        .add({
          targets: '#step4 .ss-table tr td.ss_party_list_2',
          innerHTML: (e) => {
            let value = jQuery(e).data('value')
            return [0, value]
          },
          round: 10000,
          // delay: 1000
        })
        .add({
          targets: '#step4 .ss-table tr td.overhang_2',
          innerHTML: (e) => {
            let value = jQuery(e).data('value')
            return [0, value]
          },
          round: 10000,
          // delay: 1000
        })
        .add({
          targets: '#step4 .btn',
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

    #step4 {
        text-align: center;
        min-height: 75rem;
    }

    table {
        text-align: left;
        .ss_party_list_1,
        .ss_party_list_2,
        .overhang_1,
        .overhang_2 {
            text-align: right;
        }
        td.ss_party_list_1,
        td.ss_party_list_2,
        td.overhang_1,
        td.overhang_2 {
            padding-right: 12px;
        }
    }
</style>

<template lang="pug">
    div#step2
        div.container-fluid
            div.row
                div.col-sm-12
                    div.text-center
                        h1 ขั้นที่ 2 คำนวณ ส.ส. พึงมีเบื้องต้น
                        span.font-italic รัฐธรรมนูญ มาตรา 91 วรรค 2
                        p คะแนนรวมของพรรค
                        p.divide.hide ------------------------------------
                        p.divide2.hide หารจำนวนเสียงต่อ ส.ส. พึงมี!{' '}
                            span.total-vote-per-ss.number 0
                            | เสียง
                        p.divide3.hide เท่ากับ
            div.row.justify-content-md-center
                div.col-sm-8
                        table.ss-table.table.table-dark.table-sm
                            thead
                                tr
                                    th พรรค
                                    th คะแนนดิบ
                                    th คะแนนที่นำมาคำนวณ
                                    th ส.ส. พึงมี
                            tr(v-for="party in sortedByScore", v-bind:key="party.party")
                                td.party {{ party.party }}
                                td.number.score(
                                    :data-value="party.score",
                                    :data-change="party.score !== party.score_redacted") {{ party.score }}
                                td.number.score_redacted(
                                    :data-value="party.score_redacted",
                                    :data-change="party.score !== party.score_redacted") {{ party.score_redacted }}
                                td.number.ss_allowed(:data-value="party.ss_allowed") {{ party.ss_allowed }}
                        div
                            Redo.hide(:click="start")
</template>

<script>
  import _ from 'lodash'
  import Redo from './Redo'
  import rawPartyScore from './../party_score_100'
  import jQuery from 'jquery'

  export default {
    name: 'Step2',
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
        // return _.sortBy(this.partyScore, 'score')
        return _.orderBy(this.partyScore, 'score', 'desc')
      }
    },
    created () {
      _.each(rawPartyScore, (v) => {
        this.partyScore[v.party] = v
      })
      // _.sortBy()
      // console.log(this.partyScore)
    },

    mounted () {
      // let that = this
      this.timeline1 = this
        .$anime
        .timeline({ autoplay: true })
        .add({
          targets: '#step2 .total-vote-per-ss',
          color: '#56FF79',
          innerHTML: ['0', '71057'],
          round: 1,
        })
        .add({
          targets: '#step2 .ss-table tr td:not(.party)',
          // color: '#56FF79',
          color (e) {
            if (jQuery(e).hasClass('score') ||
              jQuery(e).hasClass('score_redacted')) {
              let change = jQuery(e).data('change')
              if (change) {
                if (jQuery(e).hasClass('score')) {
                  return '#ff3e2d'
                }
                return '#56FF79'
              }
              let value = parseInt(jQuery(e).data('value'))
              if (value <= 0) {
                return '#747474'
              }
            }
          },
          innerHTML: (e) => {
            let value = jQuery(e).data('value')
            return [0, value]
          },
          round: (e) => {
            if (jQuery(e).hasClass('ss_allowed')) {
              return 10000
            }
            return 1
          },
          delay: 1000
        })
        .add({
          targets: '#step2 .btn',
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

    #step2 {
        text-align: center;
        min-height: 75rem;
    }

    table {
        text-align: left;
        .score,
        .score_redacted,
        .ss_allowed {
            text-align: right;
        }
        td.score,
        td.score_redacted,
        td.ss_allowed {
            padding-right: 12px;
        }
    }
</style>

<template lang="pug">
    div#home
        Intro
        Step1
        Step2
        Step3
        Step4
</template>

<script>
  import Intro from './Intro'
  import Step1 from './Step1'
  import Step2 from './Step2'
  import Step3 from './Step3'
  import Step4 from './Step4'
  // import Step5_1 from './Step5_1'
  // import Step5_2 from './Step5_2'

  export default {
    name: 'Home',
    props: {},
    components: {
      Intro,
      Step1,
      Step2,
      Step3,
      Step4,
      // Step5_1,
      // Step5_2
    },
    data: function () {
      return {}
    },
    created () {
    },
    mounted () {
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "./../variables";

    #home {
    }
</style>

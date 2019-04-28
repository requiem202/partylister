<template>

    <button class="btn btn-secondary" @click="click()">
        <svg width="16" height="16" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
    <path d="M256.455,8C322.724,8.119 382.892,34.233 427.314,76.685L463.029,40.97C478.149,25.851 504,36.559 504,57.941L504,192C504,205.255 493.255,216 480,216L345.941,216C324.559,216 313.851,190.149 328.97,175.029L370.72,133.279C339.856,104.38 299.919,88.372 257.49,88.006C165.092,87.208 87.207,161.983 88.006,257.448C88.764,348.009 162.184,424 256,424C297.127,424 335.997,409.322 366.629,382.444C371.372,378.283 378.535,378.536 382.997,382.997L422.659,422.659C427.531,427.531 427.29,435.474 422.177,440.092C378.202,479.813 319.926,504 256,504C119.034,504 8.001,392.967 8,256.002C7.999,119.193 119.646,7.755 256.455,8Z" style="fill:white;fill-rule:nonzero;"/>
</svg> เล่นซ้ำ
    </button>

</template>

<script>
  export default {
    name: 'Redo',
    props: {
      click: {
        type: Function
      }
    }

  }
</script>

<style scoped>

</style>

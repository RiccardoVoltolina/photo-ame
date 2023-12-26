<script>
export default {
  name: "SmallImage",
  props: {
    img: String,
  },
  data() {
    return {

    };
  },
}


</script>

<template>
  <div class="small_img_container">
    <img class="img_small" :src="img" alt="">
  </div>
</template>

<style>
.small_img_container {
  width: 434px !important;
  height: 290px !important;
  
}

.img_small {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
}
</style>

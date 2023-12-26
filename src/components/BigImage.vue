<script>
export default {
  name: "BigImage",
  data() {
    return {

    };
  },
  props: {
    img: String,
  },
}


</script>

<template>
  <div class="big_img_container">
    <img class="img_big" :src="img" alt="">
  </div>
</template>

<style>
.big_img_container {
  width: 750px !important;
  height: 450px !important;
}

.img_big {

  width: 100% !important;
  height: 100% !important;
  height: 450px !important;

  object-fit: cover !important;
}
</style>

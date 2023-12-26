<script>
export default {
  name: "MediumImage",
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
  <div class="medium_img_container">
    <img class="img_medium" :src="img" alt="">
  </div>
</template>

<style>
.medium_img_container {
  width: 720px !important;
  height: 400px !important;
}

.img_medium {

  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
}


</style>

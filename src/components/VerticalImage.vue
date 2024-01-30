<script>
export default {
  name: "VerticallImage",
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
  <div class="vertical_img_container">
    <img class="img_vertical" :src="img" alt="">
  </div>
</template>

<style>
.vertical_img_container {
  width: 280px !important;
  height: 450px !important;
}

.img_vertical {

  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
}

@media screen and (max-width: 992px) {
  .vertical_img_container {
    width: 100% !important;
    height: 450px !important;
  }

}
</style>

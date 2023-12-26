<script>
import SmallImage from '../components/SmallImage.vue';
import MediumImage from '../components/MediumImage.vue';
import BigImage from '../components/BigImage.vue';
import VerticalImage from '../components/VerticalImage.vue';



export default {
    name: "SubView",
    data() {
        return {};
    },
    components: {
        SmallImage,
        MediumImage,
        BigImage,
        VerticalImage,
    },
};
</script>

<template>
    <div class="py-5 ps-5 container">

        <!-- sezione immagine piccola e media -->

        <div class="row row-cols-6 row-cols-sm-12 w-100 justify-content-between gy-5 margin_bottom_150">


            <SmallImage :img="'src/assets/img/img-small.jpg'"></SmallImage>
            <MediumImage :img="'src/assets/img/img-medium.jpg'"></MediumImage>

        </div>

        <!-- sezione immagine grande e verticale -->

        <div class="row row-cols-6 row-cols-sm-12 w-100 justify-content-between gy-5 margin_bottom_150">

            <BigImage :img="'src/assets/img/img-big.jpg'"></BigImage>
            <VerticalImage :img="'src/assets/img/ame.GIF'"></VerticalImage>

        </div>

        <!-- sezione immagine grande e piccola -->

        <div class="row row-cols-6 row-cols-sm-12 w-100 justify-content-between gy-5 margin_bottom_150">


            <BigImage :img="'src/assets/img/img-big.jpg'"></BigImage>
            <SmallImage :img="'src/assets/img/img-small.jpg'"></SmallImage>

        </div>

    </div>
</template>

<style>
.margin_bottom_150 {
    padding-bottom: 150px;
}

@media screen and (max-width: 992px) {
    .margin_bottom_150 {
        padding-bottom: 50px;
    }
}
</style>
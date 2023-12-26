<script>
import SmallImage from '../components/SmallImage.vue';
import MediumImage from '../components/MediumImage.vue';
import BigImage from '../components/BigImage.vue';
import VerticalImage from '../components/VerticalImage.vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../assets/app.scss';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';



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
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
};
</script>

<template>
    <div class="py-5 ps-5 container">

        <div class="swiper_img_container margin_bottom_150">
            <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :pagination="{
                clickable: true,
            }" :navigation="true" :modules="modules" class="mySwiper">
                <swiper-slide> <img src="../assets/img/img-small.jpg" alt=""></swiper-slide>
                <swiper-slide> <img src="../assets/img/img-medium.jpg" alt=""></swiper-slide>
                <swiper-slide> <img src="../assets/img/img-big.jpg" alt=""></swiper-slide>
            </swiper>
        </div>



        <!-- sezione immagine piccola e media -->

        <div class="row w-100 row-cols-6 row-cols-sm-12 w-100 justify-content-between gy-5 margin_bottom_150">


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
.swiper_img_container img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.margin_bottom_150 {
    padding-bottom: 150px;
}

@media screen and (max-width: 992px) {
    .margin_bottom_150 {
        padding-bottom: 50px;
    }
    
}
</style>
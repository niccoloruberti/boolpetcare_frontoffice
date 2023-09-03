
<script>
export default {
    mounted() {

        const carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleAutoplaying'), {
            interval: 2000,
            pause: 'hover',
        });
    },
}
</script>


<template>
    <div class="centered-carousel">
        <div class="carousel-wrapper">
            <div id="carouselExampleAutoplaying" class="carousel slide smaller-carousel" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/img/image1.jpg" class="d-block w-100 smaller-image" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/img/image2.jpg" class="d-block w-100 smaller-image" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/img/image5.jpg" class="d-block w-100 smaller-image" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    </div>
</template>


<style lang="scss">
.centered-carousel {
    display: flex;
    justify-content: center;

    height: 100vh;

}

.smaller-carousel {
    max-width: 700px;
    max-height: 600px;
    width: auto;
    height: auto;
}

.smaller-image {
    max-width: 700px;
    max-height: 600px;
    width: auto;
    height: auto;
}
</style>
<script>
import { router } from '../router.js';
export default {
    name: 'AppHeader',
    data() {
        return {
            router,
            menuItems: [
                {
                    label: 'Home',
                    routeName: 'home',
                },
                {
                    label: 'About Us',
                    routeName: 'animals',
                },
                {
                    label: 'Contatti',
                    routeName: 'contacts',
                },
                {
                    label: 'Articoli',
                    routeName: 'articoli',

                },

            ]
        }
    }
}
</script>


<template lang="">
<nav class="navbar navbar-expand-lg bg-body-tertiary  ">
        <div class="container-fluid ">
            <img src="/img/logoBoolPet.png" class="nav-height"  alt="">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li class="nav-item" v-for="(item, index) in menuItems" :key="index">                       
                         <router-link class="nav-link text-title" :to="{ name: item.routeName }">
                            {{ item.label }}
                        </router-link> 
                    </li>

                </ul>
                <!-- <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form> -->
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');

* {
    font-family: 'DM Serif Display', serif;
}

.nav-height {
    height: 100px;
}

.nav-link.text-title {
    text-transform: uppercase;
}
</style>
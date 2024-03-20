<template>
    <header>
        <router-link to="/" class="logo">
            <i class='bx bxs-movie'></i>Sanamio
        </router-link>
        <div class="bx bx-menu" id="menu-icon"></div>
        <div>
            <searchComponent />
        </div>
        <!-- menu  -->
        <ul class="navbar">
            <li><router-link to="/" class="home-active">Home</router-link></li>
            <li><router-link to="/movies">Movies</router-link></li>
            <li><router-link to="/coming">Coming</router-link></li>
            <li><router-link to="/newMovies">News Movies</router-link></li>
        </ul>
   
    </header>
</template>
<script setup>
    import searchComponent from './searchComponent.vue';
</script>


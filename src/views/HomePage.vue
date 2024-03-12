<template>
    <div>
        <headerMovies/>
    </div>
    <div>
        <bannerMovies/>
        <ItemMovies/>
    </div>
    <div>
        <footerMovies/>
    </div>
</template>

<script setup>
import headerMovies from '@/component/headerMovies.vue';
import footerMovies from '@/component/footerMovies.vue';
import bannerMovies from '@/component/bannerMovies.vue';
import ItemMovies from '@/component/ItemMovies.vue';
</script>


<template>
    <div>
        <div>
            <headerMovies/>

        </div>
        <div>
            <Coming/>

        </div>
        <div>
            <footerMovies/>
        </div>

    </div>
</template>
<script setup>
import Coming from '@/component/Coming.vue';
import headerMovies from '@/component/headerMovies.vue';
import footerMovies from '@/component/footerMovies.vue';
</script>
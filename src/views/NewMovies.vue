<template>
    <div>
        <headerMovies/>
    </div>
    <div>
        <NewItemMovies/>
    </div>
    <div>
        <footerMovies/>
    </div>
</template>
<script setup>
    import NewItemMovies from '@/component/NewItemMovies.vue';
    import headerMovies from '@/component/headerMovies.vue';
    import footerMovies from '@/component/footerMovies.vue';
</script>
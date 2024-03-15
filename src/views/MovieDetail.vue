<script setup>
import {useMoviesStore} from "@/store/storeMovies";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const useMovie = useMoviesStore();
const route = useRoute();
const movie = ref();

let watchMovies = ref(false);

const watchMoviePlay = () => {
  watchMovies.value = true;
};

onMounted(async () => {
  try {
    const idMovie = route.params.id;
    movie.value = await useMovie.fetchMoviesDetail(idMovie);

  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div v-if="movie">
    
    <div class="containerDetail" v-if="!watchMovies">
      <div class="left">
        <img
          :src="`${movie.big_image}`"
          :alt="movie.name"
          style="width: 100%"
        />
      </div>
      <div class="right">
        <h3>{{ movie.title }}</h3>
        <p><strong>Thời gian :</strong> {{ movie.time }}</p>
        <p><strong>Đạo diễn:</strong> Tran Anh Hung</p>
        <p><strong>Thể loại:</strong> {{ movie.genre }}</p>
        <p><strong>Đánh giá:</strong> {{ movie.rating }}</p>
        <p><strong>Năm sản xuất</strong> {{ movie.year }}</p>
        <p><strong>Mã bộ phim :</strong> {{ movie.imdbid }}</p>
        <p>
          <strong>Nội dung:</strong>
          <br />
          {{ movie.description }}
        </p>

        <button @click="watchMoviePlay">Xem Phim</button>
      </div>
    </div>
    <div v-else>
      <iframe
        width="100%"
        height="514px"
        :src="movie.imdb_link"
        title="The Shawshank Redemption  Morgan Freeman, Tim Robbins"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
<style>
.containerDetail {
  display: flex;
  justify-content: space-between;
  margin: 50px 100px;
}

.left {
  width: 35%;
}
.right {
  width: 60%;
}

h3 {
  color: red;
  font-size: 25px;
}

h5,
p,
small {
  color: #837d7c;
}

h4 {
  color: red;
}

p {
  line-height: 25px;
}

h5 {
  font-size: 15px;
}

.add label {
  padding: 10px 30px 0 20px;
  border-radius: 50px;
  line-height: 0;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  background: red;
  color: white;
  margin-top: 20%;
  border-radius: 30px;
}

@media only screen and (max-width: 768px) {
  .containerDetail {
    max-width: 90%;
    margin: auto;
    height: auto;
  }

  .left,
  .right {
    width: 100%;
  }

  .container {
    flex-direction: column;
  }
}

@media only screen and (max-width: 511px) {
  .container {
    max-width: 100%;
    height: auto;
    padding: 10px;
  }

  .left,
  .right {
    padding: 0;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .option {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>

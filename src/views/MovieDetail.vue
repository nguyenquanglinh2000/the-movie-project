<script setup>
import { useMoviesStore } from "@/store/storeMovies";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const useMovie = useMoviesStore();
const route = useRoute();
const movie = ref();

const commentsMovie = ref();

let watchMovies = ref(false);

const watchMoviePlay = async () => {
  watchMovies.value = true;

};
const getValueComments = ref('')

const createComment = async () => {
  try {

    if (!getValueComments.value.trim()) return;

    const newComment = {
      text: getValueComments.value,
      movieID: movie.value.id
    };

    // Gọi hàm tạo comment từ store và truyền vào dữ liệu comment mới
    await useMovie.createComment(newComment);

    // Cập nhật danh sách comment sau khi tạo thành công
    commentsMovie.value = await useMovie.commentsbyMovieId(movie.value.id);

    getValueComments.value = '';
  } catch (error) {
    console.error('Error creating comment:', error);
  }
};

onMounted(async () => {
  try {
    //movie
    const idMovie = route.params.id;
    movie.value = await useMovie.fetchMoviesDetail(idMovie);
    //comments
    commentsMovie.value = await useMovie.commentsbyMovieId(idMovie);
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
          :src="`${movie.image}`"
          :alt="movie.name"
        />
      </div>
      <div class="right">
        <h3>{{ movie.title }}</h3>
        <p><strong>Thời gian :</strong> {{ movie.time }}</p>
        <p><strong>Đạo diễn:</strong> Tran Anh Hung</p>
        <p><strong>Thể loại:</strong> {{ movie.genre.join(", ") }}</p>
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
    <div v-else class="watch-Movie">
      <iframe
        width="100%"
        height="514px"
        :src="movie.imdb_link"
        title="The Shawshank Redemption  Morgan Freeman, Tim Robbins"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div class="comments-movie">
        <form class="mb-3" @submit.prevent="createComment()">
          <input type="text" v-model="getValueComments" class="form-control p-4"/>
        </form>

        <h3>Các bình luận:</h3>
        <ul>
          <li v-for="comment in commentsMovie" :key="comment.id">
            <p>
              <strong>{{ comment.text }}</strong>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
.containerDetail {
  display: flex;
  justify-content: space-between;
  margin: 50px 100px;
}
.watch-Movie {
  margin: 0 100px;
}
.watch-Movie form {
  margin-bottom: 50px;
}
.comments-movie {
  margin-top: 100px;
}
.comments-movie input {
  padding: 25px;
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

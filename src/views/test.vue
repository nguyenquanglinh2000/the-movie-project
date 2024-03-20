<template>
    <div class="row">
      <div class="col-md-12">
        <h3>Cat Facts</h3>
      </div>
      <div class="col-md-12">
        <ul class="list-group">
          <li v-for="(fact, index) in catFacts" :key="index" class="list-group-item">{{ index + 1 }}. {{ fact.text }}</li>
        </ul>
      </div>
      <div class="row mt-3">
        <div class="col-md-12 text-center">
          <button @click="loadMoreFacts" class="btn btn-md btn-primary">{{ fetchingFacts ? '...' : 'Load more' }}</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import BannerComponent from "@/components/BannerComponent.vue";
import ListFilmComponent from "@/components/ListFilmComponent.vue";
import useMoviesStore from "../store/storeMovies";
import { computed, onMounted, ref } from "vue";
import axios from "axios";

const api = "http://localhost:3000/movies";
const pageSize = 10; // Số lượng phần tử muốn lấy trong mỗi lần gọi API

const fetchingFacts = ref(false);

const movieStore = useMoviesStore();
const movies = computed(() => movieStore.getMovies);

const loadMoreFacts = async () => {
  fetchingFacts.value = true;

  try {
    const moviesData = await getMoviesData();

    if (Array.isArray(moviesData)) {
      movies.value.push(...moviesData);
    } else {
      console.error("Lỗi: moviesData không phải là một mảng.");
    }
  } catch (error) {
    console.error("Lỗi khi lấy thêm dữ liệu movies:", error);
  }

  fetchingFacts.value = false;
};

const getMoviesData = async () => {
  const currentLength = movies.value.length;
  const start = currentLength; // Vị trí bắt đầu lấy dữ liệu

  try {
    const res = await axios.get(api, {
      params: {
        _start: start,
        _limit: pageSize,
        _sort: "id",
      },
    });

    if (res && res.data) return res.data;
  } catch (error) {
    console.log("Lỗi khi lấy dữ liệu movies:", error);
  }
};

onMounted(async () => {
  try {
    await movieStore.fetchMovies();
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu movies:", error);
  }
});
  </script>
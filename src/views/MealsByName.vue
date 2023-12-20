<template>
    <div class="p-8 pb-0">
      <input type="search" name="search" v-model="keyword"
      @change="searchMeals"
      placeholder="Searth for..."
      class="rounded border-2 border-gray-200  w-full"/> 
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"></MealItem>
    </div>
    

</template>

<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import store from '../store'
import YouTubeButton from '../components/YouTubeButton.vue';
import MealItem from '../components/MealItem.vue';
const route = useRoute
const keyword =ref("")

const meals =computed(()=>store.state.searchedMeals)

function searchMeals(){
  store.dispatch('searchMeals',keyword.value)
}

</script>
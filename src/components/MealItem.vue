<template>
  
      <div 
       class="bg-white shadow rounded-xl" >

      <router-link :to="{name:'mealDetails',params:{id:meal.idMeal}}">
        <img :src="meal.strMealThumb" alt="meal.strMeal" class="rounded-t-xl h-48 w-full object-cover">
      </router-link>
        <div class="p-3">
          <h3 class="font-bold">{{ meal.strMeal }}</h3>
          <p class="mb-4">Lorem ipsum dolor sit amet consectetur,adipisicing elit. Facere odit quas,voluptatem,maxmime. </p>
          <div class="flex items-center justify-between">
            <youtubeButton :href="meal.strYoutube"/>
            <router-link to="/" class="px-3 py-2 rounded border align-right border-purple-600 hover:bg-purple-500 hover:text-white transition-colors">view</router-link>
        </div>
        </div>
      </div>
    

</template>

<script setup>

const {meal} =defineProps({
  meal:{
    required:true,
    type: Object
  }
})
</script>
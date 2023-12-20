import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import MealList from '../views/MealList.vue'
import GuestLayout from '../components/GuestLayout.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByName from '../views/MealsByName.vue'
import MealDetails from '../views/MealDetails.vue'
import ingredients from '../views/Ingredients.vue'
import DefaultLayout from '../components/defaultLayout.vue'
const routes =[
    {
      path:'/',
      component:DefaultLayout,
      children:[
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
          path:'/by-name/:name?',
          name:'byName',
          component:MealsByName
        },
        {
            path:'/by-letter/:letter?',
            name:'byLetter',
            component:MealsByLetter
        },
        {
          path:'/ingredients',
          name:'ingredients',
          component:Ingredients,
        },
        {
            path:'/by-ingredient/:ingredient?',
            name:'byIngredient',
            component:MealsByIngredient
        },
        {
            path:'/meal/:id',
            name:'mealDetails',
            component:MealDetails
        }
      ]
    },
    {
      path:'/guest',
      component:GuestLayout
    }
    
    // {
    //     path:'/letter/:letter',
    //     name:'byLetter',
    //     component:MealList
    // }
]

const router =createRouter({
    history:createWebHistory(),
    routes
})

export default router;
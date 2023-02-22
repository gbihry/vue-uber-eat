<template>
    <div class="restaurant--row ">
        <h2 class="title">
            Nos restaurant
            
        </h2>
        <div class="wrapper--card">
            <RouterLink class="restaurant--wrapper" v-for="(restaurant, index) in three_restaurant" :key="index" :to="{name: 'Restaurant', params: { name: restaurant.name }}">
                <RestaurantCard  :info_restaurant="restaurant" />
            </RouterLink>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import RestaurantCard from './RestaurantCard.vue';
export default {
    name: "RestaurantRow",
    components: {
    RestaurantCard,
    RouterLink
},
    props: {
        three_restaurant: Array
    }
    
}
</script>

<style lang="scss">
    .restaurant--row{
        .restaurant--wrapper {
            width: 32%;
            text-decoration: none !important;
            color: #000;
        }
        .title{
            font-size: 2rem;
        }
        .wrapper--card{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

</style>
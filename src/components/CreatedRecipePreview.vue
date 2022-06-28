<template>

    <div>
        
  <b-card

    img-top
    style="max-width: 100rem;"
    class="mb-2"
  >
  <b-row>
  <b-col>
    <b-card-title> {{recipe.title}}</b-card-title>
    <img  :src="recipe.image" class="recipe-image" style="max-width: 17rem;"/>
  </b-col>
     <!--v-if="image_load"-->
     <b-col>
    <b-card-text>{{ recipe.readyInMinutes }} minutes</b-card-text>

    <b-card-text v-if="recipe.vegan">Vegan</b-card-text>
    <b-card-text v-if="recipe.vegetarian">Vegetarian</b-card-text>
    <b-card-text v-if="recipe.glutenFree">Gluten Free</b-card-text>
    <!-- check -->

     </b-col>
    <!-- <b-col>
        <div class="wrapped">
            Ingredients:
                <b-card-text>{{ recipe.ingredients }}</b-card-text>
          </div>
     </b-col>
     <b-col>
        <div class="wrapped">
            Instructions:
                <b-card-text>{{ recipe.instructions }}</b-card-text>
          </div>
     </b-col> -->
    </b-row>
  </b-card>
</div>
</template>

<script>
export default{

    props: {
    recipe: {
      type: Object,
      required: true
    }
  },
}
</script>

<template>

    <div>
        
  <b-card

    img-top
    style="max-width: 100rem;"
     class="family-recipe-preview"
  >
  <b-row>
  <b-col>
    <b-card-title><b> {{recipe.title}}</b></b-card-title>
    <img  :src="recipe.image" class="recipe-image" style="max-width: 17rem;"/>
  </b-col>
     <!--v-if="image_load"-->
     <b-col>
    <b-card-text><b>Writer:</b> {{ recipe.writer }}</b-card-text>
        <b-card-text><b>When it is customary to prepare?:</b> {{ recipe.customaryTime }} </b-card-text>
     </b-col>
    <b-col>
        <div class="wrapped">
            <b>Ingredients:</b>
                <b-card-text>{{ recipe.ingredients }}</b-card-text>
          </div>
     </b-col>
     <b-col>
        <div class="wrapped">
            <b>Instructions:</b>
                <b-card-text>{{ recipe.instructions }}</b-card-text>
          </div>
     </b-col>
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

<style>

</style>
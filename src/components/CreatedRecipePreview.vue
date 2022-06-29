<template>

    <div>
        
  <b-card

    img-top
    style="max-width: 500px;"
     class="recipe-preview"
  >
  <b-row>
  <b-col md="8">
    <b-card-title> {{recipe.title}}</b-card-title>
    <img  :src="recipe.image" class="recipe-image" style="max-width: 17rem;"/>
  </b-col>
  <b-col>

  </b-col>
     <!--v-if="image_load"-->
     <b-col md="6">
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

<style>
/* .recipe-preview {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
  margin: 10px 10px;
}

.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}

.recipe-preview .recipe-body .recipe-image {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: 30px;
  display: inline;
  width: 200%;
  height: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  width: 100%;
  font-size: 12pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 50px 50px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 30px;
} */
</style>
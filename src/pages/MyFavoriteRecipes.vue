<template>
  <div class="container">
    <h1 class="title">Favorite Recipes</h1>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import RecipePreview from "../components/RecipePreview";

export default{
  
  components: {
    RecipePreview
  },
  data() {
      return {
        recipes: []
      };
    },
    methods: {
      async updateRecipes() {
        try {
          const response = await this.axios.get(
            this.$root.store.server_domain + "/user/favorites");

          // console.log(response);
          const recipes = response.data; // response.data.recipes
          this.recipes = [];
          this.recipes.push(...recipes);
          // console.log(this.recipes);
        } catch (error) {
          console.log(error);
        }
      }
    }
}

</script>

<style>

</style>
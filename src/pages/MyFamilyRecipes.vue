<template>
  <div class="container">
    <h1 class="title">Family Recipes</h1>
        <b-col>
      <b-row v-for="r in recipes" :key="r.id">
        <FamilyRecipePreview class="recipePreview" :recipe="r" />
      </b-row>
    </b-col>
  </div>
</template>




<script>
import FamilyRecipePreview from "../components/FamilyRecipePreview";

export default{
  
  components: {
    FamilyRecipePreview
  },
  data() {
      return {
        recipes: []
      };
    },
    mounted() {
    this.updateRecipes();
  },
    methods: {
      async updateRecipes() {
        try {
          const response = await this.axios.get(
          this.$root.store.server_domain + "/user/family");
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
<template>
<div>
<b-modal id="my-modal" hide-footer>
    <template #modal-title>
      Create New Recipe
    </template>
    <div class="d-block text-center">
        <form>
            <div class="form-group">
                <label for="title" class="col-form-label">Recipe Title:</label>
                <input type="text" v-model="title" class="form-control" id="title">
                <label for="title" class="col-form-label">Recipe Image:</label>
                <input type="text" v-model="image" class="form-control" id="title">
                <label for="readyInMinutes" class="col-form-label">Ready In Minutes:</label>
                <input type="number" v-model="readyInMinutes" class="form-control" id="readyInMinutes">
                <label for="servings" class="col-form-label">Servings:</label>
                <input type="number" v-model="servings" class="form-control" id="servings">
                <label>Vegan </label>
                <input type="checkbox" v-model="vegan" :true-value="true" :false-value="false" id="vegan">
                <br/>
                <label>Vegetarian </label>
                <input type="checkbox" v-model="vegetarian" :true-value="true" :false-value="false" id="vegetarian">
                <br/>
                <label>Gluten Free </label>
                <input type="checkbox" v-model="glutenFree" :true-value="true" :false-value="false" id="glutenFree">
            </div>
            <div class="form-group">
                <label for="ingredients" class="col-form-label">Ingredients:</label>
                <textarea class="form-control" v-model="ingredients" id="ingredients"></textarea>
                <label for="instructions" class="col-form-label">Instructions:</label>
                <textarea class="form-control" v-model="instructions" id="instructions"></textarea>
            </div>
            <button type="button" @click="create" class="btn btn-primary">Create</button>
            </form>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('my-modal')">Close</b-button>
  </b-modal>
    </div>
</template>

<script>
export default{
  data(){
    return{
      
      title: "",
      readyInMinutes: null,
      image: "",
      servings: null,
      vegan: false,
      vegetarian: false,
      glutenFree: false,
      ingredients: "",
      instructions: "",

    }
  },
  methods: {
    async create() {
      try {
        const response = await this.axios.post(
          // "https://test-for-3-2.herokuapp.com/user/Register",
          this.$root.store.server_domain + "/user/addNewRecipe",

          {
            title: this.title,
            image: this.image,
            readyInMinutes: this.readyInMinutes,
            servings: this.servings,
            vegan: this.vegan,
            vegetarian: this.vegetarian,
            glutenFree: this.glutenFree,
            ingredients: this.ingredients,
            instructions: this.instructions,
          }
        );
        // console.log(response);
      } catch (err) {
        console.log(err.response);
      }
    },
  }
}
</script>

<style>
</style>
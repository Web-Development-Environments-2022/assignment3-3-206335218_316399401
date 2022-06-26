<template>
  <div class="container">
    <h1 class="title">Search</h1>
    <b-form @submit.prevent="Search" @reset.prevent="Reset">
    <b-row class="my-1">
      <b-col sm="2">
        <label for="input-query">Search:</label>
      </b-col>
      <b-col sm="10">
        <b-form-input id="input-default" v-model="query" placeholder="Search Recipe"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-1">
      <b-col sm="2">
        <label for="input-query">How many recipes would you like to get?</label>
      </b-col>
      <b-col sm="10">
        <b-form-select v-model="numSelected" :options="numOptions"></b-form-select>
      </b-col>
    </b-row>

    <!-- <b-row class="my-1">
      <b-col sm="2">
        <label for="input-query">Diet:</label>
      </b-col>
      <b-col sm="10">
        <b-form-select v-model="diet" :options="diets"></b-form-select>
      </b-col>
    </b-row> -->
    <!-- <b-row class="my-1">
      <b-col sm="2">
        <label for="input-query">Cuisine:</label>
      </b-col>
      <b-col sm="10">
        <b-form-select v-model="cuisineSelected" :options="cuisines"></b-form-select>
      </b-col>
    </b-row> -->
    <!-- <b-row class="my-1">
      <b-col sm="2">
        <label for="input-query">Intolerance:</label>
      </b-col>
      <b-col sm="10">
        <b-form-select v-model="intolerance" :options="intolerances"></b-form-select>
      </b-col>
    </b-row> -->
    <b-button v-b-toggle.collapse-1 variant="outline-info" class="mb-2">Filtering</b-button>
    <!-- <b-button v-b-toggle.collapse-1 variant="info">Filtering</b-button> -->
      <b-collapse id="collapse-1" class="mt-2">
    <b-form-group label-for="tags-component-select">
      <!-- Prop `add-on-change` is needed to enable adding tags vie the `change` event -->
      <b-form-tags
        id="tags-component-select"
        v-model="cuisine"
        size="lg"
        class="mb-2"
        add-on-change
        no-outer-focus
      >
        <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
          <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
            <li v-for="tag in tags" :key="tag" class="list-inline-item">
              <b-form-tag
                @remove="removeTag(tag)"
                :title="tag"
                :disabled="disabled"
                variant="info"
              >{{ tag }}</b-form-tag>
            </li>
          </ul>
          <b-form-select
            v-bind="inputAttrs"
            v-on="inputHandlers"
            :disabled="disabled || availableCuisinesOptions.length === 0"
            :options="availableCuisinesOptions"
          >
            <template #first>
              <!-- This is required to prevent bugs with Safari -->
              <option disabled value="">Choose cuisines</option>
            </template>
          </b-form-select>
        </template>
      </b-form-tags>
    </b-form-group>

    <b-form-group label-for="tags-component-select">
      <!-- Prop `add-on-change` is needed to enable adding tags vie the `change` event -->
      <b-form-tags
        id="tags-component-select"
        v-model="diet"
        size="lg"
        class="mb-2"
        add-on-change
        no-outer-focus
      >
        <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
          <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
            <li v-for="tag in tags" :key="tag" class="list-inline-item">
              <b-form-tag
                @remove="removeTag(tag)"
                :title="tag"
                :disabled="disabled"
                variant="info"
              >{{ tag }}</b-form-tag>
            </li>
          </ul>
          <b-form-select
            v-bind="inputAttrs"
            v-on="inputHandlers"
            :disabled="disabled || availableDietsOptions.length === 0"
            :options="availableDietsOptions"
          >
            <template #first>
              <!-- This is required to prevent bugs with Safari -->
              <option disabled value="">Choose diets</option>
            </template>
          </b-form-select>
        </template>
      </b-form-tags>
    </b-form-group>

    <b-form-group label-for="tags-component-select">
      <!-- Prop `add-on-change` is needed to enable adding tags vie the `change` event -->
      <b-form-tags
        id="tags-component-select"
        v-model="intolerance"
        size="lg"
        class="mb-2"
        add-on-change
        no-outer-focus
      >
        <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
          <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
            <li v-for="tag in tags" :key="tag" class="list-inline-item">
              <b-form-tag
                @remove="removeTag(tag)"
                :title="tag"
                :disabled="disabled"
                variant="info"
              >{{ tag }}</b-form-tag>
            </li>
          </ul>
          <b-form-select
            v-bind="inputAttrs"
            v-on="inputHandlers"
            :disabled="disabled || availableIntolerancesOptions.length === 0"
            :options="availableIntolerancesOptions"
          >
            <template #first>
              <!-- This is required to prevent bugs with Safari -->
              <option disabled value="">Choose intolerances</option>
            </template>
          </b-form-select>
        </template>
      </b-form-tags>
    </b-form-group>
    </b-collapse>
<br/>
<br/>
    <b-row>
    <b-button type="reset" variant="info">Clear</b-button>

    <b-button
        type="submit"
        variant="primary"
        style="width:250px;"
        class="ml-5 w-75"
        >Search</b-button
      >
      </b-row>
    </b-form>
    <b-row>
      <b-row v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-row>
    </b-row>
  </div>
</template>

<script>
import cuisines from "../assets/cuisines";
import diets from "../assets/diets";
import intolerances from "../assets/intolerances";
import RecipePreview from "../components/RecipePreview";


export default {
    data() {
      return {
        query: "",
        diet: [],
        cuisine: [],
        intolerance: [],
        numSelected: 5,
        cuisines: [],
        diets: [],
        intolerances: [],
        recipes: [],
        numOptions: [
          {value: 5, text: '5'},
          {value: 10, text: '10'},
          {value: 15, text: '15'}
        ]
      }
    },
    components: {
    RecipePreview
  },
    mounted() {
      this.cuisines.push(...cuisines);
      this.intolerances.push(...intolerances);
      this.diets.push(...diets);
    // console.log($v);
    },
    computed: {
      availableCuisinesOptions() {
        return this.cuisines.filter(opt => this.cuisine.indexOf(opt) === -1)
      },
      availableDietsOptions() {
        return this.diets.filter(opt => this.diet.indexOf(opt) === -1)
      },
      availableIntolerancesOptions() {
        return this.intolerances.filter(opt => this.intolerance.indexOf(opt) === -1)
      },

      },
    methods: {
      async Search(){
        try{
          const response = await this.axios.get(
          // "https://test-for-3-2.herokuapp.com/user/Register",
          this.$root.store.server_domain + "/recipes/searchRecipe",{

          params: {
            query: this.query,
            diet: this.diet.join(),
            cuisine: this.cuisine.join(),
            intolerance: this.intolerance.join(),
            number: this.numSelected,
          }
        });
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        } catch(err){
          console.log(err.response);
        }
      },
      Reset(){
        this.query= "",
        this.diet = [],
        this.intolerance = [],
        this.cuisine = [],
        this.numSelected = 5
        // this.$nextTick(() => {
        //   this.$v.$reset();
        // }); 
      }
    },
  }
</script>

<style>

</style>


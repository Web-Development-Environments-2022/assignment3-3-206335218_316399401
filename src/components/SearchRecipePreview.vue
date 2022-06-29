<template>
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    class="recipe-preview"
>

    <div>
        
  <b-card

    img-top
    style="max-width: 100rem;"
    class="mb-2"
  >
  <b-row>
  <b-col >
    <b-card-title> {{recipe.title}}</b-card-title>
    <img  :src="recipe.image" class="recipe-image" style="max-width: 17rem;"/>
  </b-col>
     <!--v-if="image_load"-->
     <b-col>
    <b-card-text>{{ recipe.readyInMinutes }} minutes</b-card-text>
    <b-card-text>{{ recipe.popularity }} likes</b-card-text>
    <b-card-text v-if="recipe.vegan">Vegan</b-card-text>
    <b-card-text v-if="recipe.vegetarian">Vegetarian</b-card-text>
    <b-card-text v-if="recipe.glutenFree">Gluten Free</b-card-text>
    <!-- check -->
    <b-button @click="addToFavorites" variant="primary">Add to Favorites</b-button>

     </b-col>

     <b-col>
        <div class="wrapped">
            Instructions:
            <ol>
              <li v-for="s in this.instructionsFull" :key="s.number">
                {{ s.step }}
              </li>
            </ol>
          </div>
     </b-col>
    </b-row>
  </b-card>
</div>
  </router-link>
</template>

<script>
export default {
  // mounted() {
  //   this.axios.get(this.recipe.image).then((i) => {
  //     this.image_load = true;
  //   });
  // },
  data() {
    return {
      // image_load: false
      instructionsFull: null
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  mounted(){
    this.createInstructions()
  },
  methods: {
    async addToFavorites() {
      try {
        const response = await this.axios.post(
          // "https://test-for-3-2.herokuapp.com/user/Login",
          // main.server_domain + "/Login",
          this.$root.store.server_domain +"/user/favorites",
          // "http://132.72.65.211:80/Login",
          // "http://132.73.84.100:80/Login",

          {
            recipeId: this.recipe.id
          }
        );

        this.$root.toast("Favorites", "Recipe added to favorites successfully", "success");
      } catch (err) {
        console.log(err.response);
      }
    },
    async createInstructions(){
        this.instructionsFull = this.recipe.analyzedInstructions
        .map((fstep) => {
          fstep.steps[0].step = fstep.name + fstep.steps[0].step;
          return fstep.steps;
        })
        .reduce((a, b) => [...a, ...b], []);
    }
  }
};
</script>

<style scoped>
.recipe-preview {
  display: inline-block;
  width: 90%;
  height: 100%;
  position: relative;
  margin: 10px 10px;
}
.recipe-preview:visited{
  color: purple;
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
  margin-bottom: auto;
  display: block;
  width: 98%;
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
  padding: 5px 10px;
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
  margin-bottom: 0px;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;
}
</style>

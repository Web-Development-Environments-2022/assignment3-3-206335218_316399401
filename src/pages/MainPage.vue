<template>
  <div class="container">
    <h1 class="title">Main Page</h1>
    <b-row>
    <b-col>
    <RecipePreviewList ref="childcomp" title="Random Recipes" class="RandomRecipes center" />
    <br/>
    <br/>
    <br/>
    </b-col>
    

    <b-col>
      <router-link id="router" v-if="!$root.store.username" to="/login" tag="button"><b-button variant="outline-primary">You need to Login to view this</b-button></router-link>
    <!-- {{ !$root.store.username }} -->
    <RecipePreviewList
      title="Last Viewed Recipes"
      :class="{
        RandomRecipes: true,
        blur: !$root.store.username,
        center: true
      }"
      disabled
    ></RecipePreviewList>
    </b-col>
    </b-row>
    <!-- <div
      style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
    >
      Centeredasdasdad
    </div>-->
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  components: {
    RecipePreviewList
  }
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
#router{
  border-color: none;
  background-color: transparent;
  color: none;
  border: none;
}
</style>

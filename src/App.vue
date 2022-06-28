<template>
  <div id="app">

    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Recipes</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- <router-link :to="{ name: 'main' }"><b-nav-item href="/">Home</b-nav-item></router-link>
        <router-link :to="{ name: 'search' }"><b-nav-item href="/search">Search</b-nav-item></router-link>

        <router-link :to="{ name: 'about' }"><b-nav-item href="/about">About</b-nav-item></router-link> -->
        <b-nav-item :to="{ name: 'main' }">Home</b-nav-item>
        <b-nav-item :to="{ name: 'search' }">Search</b-nav-item>
        <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
        <b-nav-item-dropdown v-if="$root.store.username" right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>{{$root.store.username}}</em>
          </template>
          <!-- <router-link :to="{ name: 'favorites' }"><b-dropdown-item href="/favorites">My Favorite Recipes</b-dropdown-item></router-link>
          
          <router-link :to="{ name: 'family' }"><b-dropdown-item href="/family">My Family Recipes</b-dropdown-item></router-link>
          
          <router-link :to="{ name: 'created' }"><b-dropdown-item href="/created">My Recipes</b-dropdown-item></router-link> -->
          
          <b-dropdown-item :to="{ name: 'favorites' }">My Favorite Recipes  
          </b-dropdown-item>
          <b-dropdown-item :to="{ name: 'family' }">My Family Recipes
          </b-dropdown-item>
          <b-dropdown-item :to="{ name: 'created' }">My Recipes
          </b-dropdown-item>
          <b-dropdown-item v-b-modal="'my-modal'">Create New Recipe

          <!-- The modal -->
          <Modal id="my-modal"></Modal>
          </b-dropdown-item>
          <b-dropdown-item href="#" @click="Logout">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown v-else>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Hello Guest</em>
          </template>

          <router-link :to="{ name: 'register' }"><b-dropdown-item href="/register">Register</b-dropdown-item></router-link>
          <router-link :to="{ name: 'login' }"><b-dropdown-item href="/login">Login</b-dropdown-item></router-link>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    <router-view />
    <!-- <Modal id="modal-1"></Modal> -->
    
    
  </div>
</template>

<script>
import Modal from "././components/Modal";

export default {
  name: "App",

  components: {
    Modal
  },
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";
@import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');

#app {
  font-family: 'Handlee', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}


</style>

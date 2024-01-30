<script>
export default {
  name: "AppHeader",
  data() {
    return {

    };
  },
}


</script>

<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container-fluid mx-5">
        <a class="navbar-brand" href="/">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarID"
          aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarID">
          <div class="navbar-nav d-flex justify-content-end w-100">
            <router-link to="/subaquea" class="nav-link text-light">
              <a class="nav-link active" aria-current="page" href="#">Subacquea</a>
            </router-link>
            <router-link to="/montagna" class="nav-link text-light">
              <a class="nav-link active" aria-current="page" href="#">Montagna</a>
            </router-link> 
            <router-link to="/plants" class="nav-link text-light">
              <a class="nav-link active" aria-current="page" href="#">Piante</a>
            </router-link>    
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style></style>

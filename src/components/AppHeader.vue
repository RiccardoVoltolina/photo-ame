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
    <nav class="navbar navbar-expand-sm navbar-light bg-primary">
      <div class="container-fluid mx-5">
        <a class="navbar-brand" href="/">Logo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarID"
          aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarID">
          <div class="navbar-nav d-flex justify-content-end w-100">
            <a class="nav-link active" aria-current="page" href="#">Mare</a>
            <a class="nav-link active" aria-current="page" href="#">Montagna</a>
            <a class="nav-link active" aria-current="page" href="#">Subaquea</a>


          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style></style>

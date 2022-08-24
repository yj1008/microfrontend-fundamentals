<template>
  <!-- Wrong: The home page won't be below the fixed navbar -->
  <!-- <h1>Vue Home Page</h1> -->

  <!-- Correct: position home below the navbar, using cross-microfrontend imports  -->
  <BelowNav>
    <div class="home">
      <h1>Vue Home page</h1>
    </div>
  </BelowNav>
</template>
<script>
// 이 BelowNav는 다른 micro-app 에서 왔다
// -> cross micro-frontend import
import { BelowNav } from "navbar";

export default {
  components: {
    BelowNav,
  },
};
</script>
<style scoped>
.home {
  background-color: lightseagreen;
}
</style>

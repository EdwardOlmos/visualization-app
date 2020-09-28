<template>
  <div class="result-details">
    <h2>
      Comparison: {{ this.$route.params.slug }} (score: {{ result.score }})
    </h2>
    <div class="content-wrapper">
      <div
        style="width: 100px; float:left; height:100px; background:gray; margin:10px"
      >
        First DIV
      </div>
      <div
        style="width: 100px; float:left; height:100px; background:yellow; margin:10px"
      >
        Second DIV
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  data() {
    return {};
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  /* Fetches the Result.slug attribute from the store.js */
  computed: {
    result() {
      return store.results.find(result => result.slug === this.slug);
    }
  }
};
</script>

<style scoped>
.content-wrapper {
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
}
</style>

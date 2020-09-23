<template>
  <div class="result-details">
    <h1>
      Comparison: {{ this.$route.params.slug }} (score: {{ result.score }})
    </h1>
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

<template>
  <div class="home">
    <div v-for="result in results" :key="result.name">
      <router-link
        :to="{ name: 'ResultDetails', params: { slug: result.slug } }"
      >
        <h2>{{ result.name }}</h2>
      </router-link>
      <figure>
        <p>{{ result.score }}</p>
      </figure>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      results: store.results,
      columns: ["id", "name", "age"],
      tableData: [
        { id: 1, name: "John", age: "20" },
        { id: 2, name: "Jane", age: "24" },
        { id: 3, name: "Susan", age: "16" },
        { id: 4, name: "Chris", age: "55" },
        { id: 5, name: "Dan", age: "40" }
      ],
      options: {
        // see the options API
      }
    };
  }
};
</script>

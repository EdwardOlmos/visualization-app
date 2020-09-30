<template>
  <div class="home">
    <h2>Results Summary Page</h2>
    <div style="center">
      <table>
        <thead>
          <tr>
            <th colspan="1">Files Compared</th>
            <th colspan="1">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="result in results" :key="result.name">
            <td>
              <router-link
                :to="{ name: 'ResultDetails', params: { slug: result.slug } }"
              >
                {{ result.slug }}
              </router-link>
            </td>
            <td>{{ result.score }}</td>
          </tr>
        </tbody>
      </table>
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
      results: store.results
    };
  }
};
</script>

<style scoped>
table {
  justify-content: center;
  border: 1px solid #333;
  margin-left:auto;
  margin-right:auto;
}
td, th {
  border: 1px solid #333;
  justify-content: center;
  padding: 20px;
}

thead,
tfoot {
  background-color: rgb(48, 48, 48);
  color: #fff;
}
</style>

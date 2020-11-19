<template>
  <div class="home">
    <h2 style="text-align: center;">FETT's Results</h2>
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
                style="text-decoration:none"
                :to="{ name: 'ResultDetails', params: { slug: result.slug } }"
              >
                {{ result.fileOneName }} compared with {{ result.fileTwoName }}
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
import store from "@/script_results.js";

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
  margin-left: auto;
  margin-right: auto;
  width: 40vmax;
  max-height: 35vmax;
}
td,
th {
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

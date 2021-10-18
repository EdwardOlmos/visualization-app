<template>
  <div class="home">
    <div class="container">
      <h1 class="text-center">Results</h1>
      <table class="table table-hover">
        <thead class="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">File Pairs</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(result, index) in results" :key="result.name">
            <td>{{index+1}}</td>
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
        results: store.results,
      };
    },
  };
</script>

<style scoped>
  /* table {
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
} */
</style>

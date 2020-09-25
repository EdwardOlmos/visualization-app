<template>
  <div class="home">
    <h2>Results Summary Page</h2>
    <div style="center">
    <table style="border:1px solid black;margin-left:auto;margin-right:auto;">
        <thead>
            <tr>
                <th colspan="1">Files Compared</th>
                <th colspan="1">Score</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="result in results" :key="result.name">
                <td>
                  <router-link :to="{ name: 'ResultDetails', params: { slug: result.slug } }" >
                    {{ result.slug}}
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

<style scoped>
table {
  justify-content: center;
  border: 1px solid #333;
}
td {
    border: 1px solid #333;
    justify-content: center;
    padding: 10px;
}

tbody {
  justify-content: center;
}

th {
  padding: 20px;
}

thead,
tfoot {
    background-color: rgb(48, 48, 48);
    color: #fff;
}
</style>

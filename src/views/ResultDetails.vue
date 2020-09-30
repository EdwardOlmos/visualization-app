<template>
  <div class="result-details">
    <h2>
      Comparison: {{ this.$route.params.slug }} (score: {{ result.score }})
    </h2>
    <table>
      <thead>
        <tr>
            <th colspan="1">{{ result.firstFile }}</th>
            <th colspan="1">{{ result.secFile }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="code" id="a">
              {{ result.firstFile }}
            </div>
          </td>
          <td>
            <div class="code" id="b">
              <pre>
                {{ result.secFile }}
              </pre>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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
    },
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

.code {
height: 90vh;
width: 40vw;
margin-left: auto;
overflow: scroll;
font-size: 1.2em;
}
.code a {
color: inherit;
text-decoration: none;
}
</style>

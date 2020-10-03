<template>
  <div class="result-details">
    <h2 style="text-align: center;">
      Comparison: {{ this.$route.params.slug }} (score: {{ result.score }})
    </h2>
    <div class="table">
      <table>
        <thead>
          <tr>
            <th colspan="1">
              {{ result.fileOneName }}
            </th>
            <th colspan="1">{{ result.fileTwoName }}</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <pre id="a" class="code">
              <a
                v-for="(line, index) in result.fileOneLines"
                :key="index"
                @mouseover="mouseOver"
                @mouseleave="mouseLeave"
                :id="'match-' + (index + 1) + '-a'"
                :href="'#match-' + (index + 1) + '-b'"
                :class="[
                  isMatch(index) ? 'matched-theme' : 'normal-theme',
                  { 'hovered-theme': hovered }
                ]"
              >
    {{ index + 1 }} | {{ line }}
              </a>
            </pre>
            </td>
            <td>
              <pre id="b" class="code">
              <a
                v-for="(line, index) in result.fileTwoLines"
                :key="index"
                @mouseover="mouseOver"
                @mouseleave="mouseLeave"
                :id="'match-' + (index + 1) + '-b'"
                :href="'#match-' + (index + 1) + '-a'"
                :class="[
                  isMatch(index) ? 'matched-theme' : 'normal-theme',
                  { 'hovered-theme': hovered }
                ]"
              > 
    {{ index + 1 }} | {{ line }}
              </a>
            </pre>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import store from "@/store.js";

export default {
  data() {
    return {
      hovered: false,
      active: true
    };
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
  },
  methods: {
    isMatch: function(num) {
      var temp = store.results.find(result => result.fileOneMatches);
      if (temp.fileOneMatches.indexOf(num) !== -1) {
        return true;
      } else {
        return false;
      }
    },
    mouseOver: function() {
      this.hovered = !this.hovered;
    },
    mouseLeave: function() {
      this.hovered = !this.hovered;
    }
  }
};
</script>

<style scoped>
div.table {
  border: 1px solid #333;
  table-layout: fixed;
  margin: 0 auto; /* just cosmetics */
  width: "100%";
  height: 100%;
  background: #eee;
  display: table;
}
td {
  border: 1px solid #333;
  vertical-align: super;
  height: 100%;
}

th {
  border: 1px solid #333;
  padding: 20px;
}

thead,
tfoot {
  background-color: rgb(48, 48, 48);
  color: #fff;
}

.matched-theme {
  color: red;
  font-size: 1.2em;
}

.normal-theme {
  color: inherit;
  font-size: 1.2em;
}

.hovered-theme {
  color: green;
  font-size: 1.2em;
  cursor: default;
}

.code a,
b {
  text-decoration: none;
}

pre {
  overflow-x: auto;
  width: "100%";
  max-width: 50vmax;
  max-height:35vmax;
}

pre a {
  border-left-color: lightpink;
  text-align: left;
}
</style>

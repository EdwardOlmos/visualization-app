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
                @mouseover="mouseOverLine"
                @mouseleave="mouseLeaveLine"
                :id="'line-' + (index + 1) + '-a'"
                :href="'#line-' + (index + 1) + '-b'"
                :class="[
                  isMatchA(index) ? 'matched-theme' : 'normal-theme'
                ]"
              >
    {{ fixIndex(index) }} | {{ line }}
              </a>
            </pre>
            </td>
            <td>
              <pre id="b" class="code">
              <a
                v-for="(line, index) in result.fileTwoLines"
                :key="index"
                @mouseover="mouseOverLine"
                @mouseleave="mouseLeaveLine"
                :id="'line-' + (index + 1) + '-b'"
                :href="'#line-' + (index + 1) + '-a'"
                :class="[
                  isMatchB(index) ? 'matched-theme' : 'normal-theme'
                ]"
              > 
    {{ fixIndex(index) }} | {{ line }}
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
  computed: {
    result() {
      return store.results.find(result => result.slug === this.slug);
    }
  },
  methods: {
    isMatchA: function(index) {
      var temp = this.result.fileOneMatches;
      if (temp.includes(index)) {
        return true;
      } else {
        return false;
      }
    },
    isMatchB: function(index) {
      var temp = this.result.fileTwoMatches;
      if (temp.includes(index)) {
        return true;
      } else {
        return false;
      }
    },
    mouseOverLine: function() {
      var matches = this.result.testFileOneMatches;
      var firstMatch = matches[0];
      var firstInterval = firstMatch[0];
      var secondInterval = firstMatch[1];
      var selection1 = document.getElementById("line-" + firstInterval + "-a");
      var selection2 = document.getElementById("line-" + secondInterval + "-b");
      selection1.classList = "hovered-theme";
      selection2.classList = "hovered-theme";
    },
    mouseLeaveLine: function() {
      var matches = this.result.testFileOneMatches;
      var firstMatch = matches[0];
      var firstInterval = firstMatch[0];
      var secondInterval = firstMatch[1];
      var selection1 = document.getElementById("line-" + firstInterval + "-a");
      var selection2 = document.getElementById("line-" + secondInterval + "-b");
      if(matches != null) {
        selection1.classList = "matched-theme";
        selection2.classList = "matched-theme";
      }
      else {
        selection1.classList = "normal-theme";
        selection2.classList = "normal-theme";
      }
    },
    fixIndex: function(index) {
      return index + 1;
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
  background-color: green;
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
  max-height: 35vmax;
}

pre a {
  text-align: left;
}
</style>

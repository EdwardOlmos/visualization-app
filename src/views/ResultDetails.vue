<template>
  <div class="result-details">
    <h2 style="text-align: center;">
      Comparison: {{ this.$route.params.slug }} (score: {{ result.score }})
    </h2>
    <div v-if="hover">Show</div>
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
            <div id="a">
              <div
                @mouseover="mouseOver"
                @mouseleave="mouseLeave"
                v-for="(line, index) in result.fileOneLines"
                :key="index"
                :class="[
                  isMatch(index) ? 'matched-theme' : 'normal-theme',
                  {'hovered-theme': hovered}
                ]"
              >
                {{ index + 1 }} | {{ line }}
              </div>
            </div>
          </td>
          <td>
            <div id="b">
              <div
                v-for="(line, index) in result.fileTwoLines"
                :key="index"
                :class="isMatch(index) ? 'matched-theme' : 'normal-theme'"
              >
                {{ index + 1 }} | {{ line }}
              </div>
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
table {
  justify-content: center;
  border: 1px solid #333;
  margin-left: auto;
  margin-right: auto;
}
td,
th {
  border: 1px solid #333;
  justify-content: center;
  padding: 20px;
  vertical-align: super;
}

thead,
tfoot {
  background-color: rgb(48, 48, 48);
  color: #fff;
}

.matched-theme {
  color: red;
  width: 40vw;
  margin-left: auto;
  font-size: 1.2em;
}

.normal-theme {
  width: 40vw;
  margin-left: auto;
  font-size: 1.2em;
}

.hovered-theme {
  color: green;
  width: 40vw;
  margin-left: auto;
  font-size: 1.2em;
}
</style>

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
            <!-- __________________________________________________________________________ -->
            <td>
              <div id="a" class="code">
                <div
                  v-for="(line, index) in result.fileOneLines"
                  :key="index"
                  @mouseover="mouseOverLine"
                  @mouseleave="mouseLeaveLine"
                  :id="'line-' + fixIndex(index) + '-a'"
                  :class="isMatchAInterval(index) ? 'matched-theme' : 'normal-theme'"
                >
                  <pre> {{ fixIndex(index) }} | {{ line }}</pre
                  >
                </div>
              </div>
            </td>
            <!-- __________________________________________________________________________ -->
            <td>
              <div id="b" class="code">
                <div
                  v-for="(line, index) in result.fileTwoLines"
                  :key="index"
                  @mouseover="mouseOverLine"
                  @mouseleave="mouseLeaveLine"
                  :id="'line-' + fixIndex(index) + '-b'"
                  :class="isMatchB(index) ? 'matched-theme' : 'normal-theme'"
                  :style="intervals(index)"
                >
                  <pre > {{ fixIndex(index) }} | {{ line }}</pre
                  >
                </div>
              </div>
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
      active: true,
      isMatch: false
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
    isMatchAInterval: function(index) {
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
    intervals: function(index) {
      var matches = this.result.testMatches;
      var setOfClasses = "font-weight: 900;";
      var i;
      for (i = 0; i < matches.length; i++) {
        var match = matches[i];
        console.log(match[0])
        if(match[0].includes(index))
          console.log("YOU ARE A BEAST!")
        match
      }
      return setOfClasses
    },
    mouseOverLine: function() {
      var matches = this.result.testMatches;
      var match = matches[0];
      console.log(match);
      var intervalA = match[0];
      var intervalB = match[1];
      var selection1 = document.getElementById("line-" + intervalA + "-a");
      var selection2 = document.getElementById("line-" + intervalB + "-b");
      selection1.classList.add("hovered-theme");
      selection2.classList.add("hovered-theme");
    },
    mouseLeaveLine: function() {
      var matches = this.result.testMatches;
      var match = matches[0];
      var intervalA = match[0];
      var intervalB = match[1];
      var selection1 = document.getElementById("line-" + intervalA + "-a");
      var selection2 = document.getElementById("line-" + intervalB + "-b");
      if(matches != null) {
        selection1.classList.add("matched-theme");
        selection2.classList.add("matched-theme");
      }
      else {
        selection1.classList.add("normal-theme");
        selection2.classList.add("normal-theme");
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
  margin: 0 auto;
  background: #eee;
  display: table;
}

td {
  border: 1px solid #333;
  vertical-align: super;
  height: 100%;
}

thead,
tfoot, th {
  background-color: rgb(48, 48, 48);
  color: #fff;
  padding: 20px;
}

.matched-theme {
  color: red;
}

.normal-theme {
  color: inherit;
}

.hovered-theme {
  background-color: green;
  cursor: default;
}

.code {
  overflow-x: auto;
  width: "100%";
  width: 40vmax;
  max-height: 35vmax;
}
</style>

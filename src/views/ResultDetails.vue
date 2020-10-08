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
                  :id="'line-' + fixIndex(index) + '-a'"
                  v-on:click="test(fixIndex(index))"
                  :class="[
                    isMatchA(index) ? 'matched-theme' : 'normal-theme',
                    intervalsA(index)
                  ]"
                >
                  <pre> {{ fixIndex(index) }} | {{ line }}</pre>
                </div>
              </div>
            </td>
            <!-- __________________________________________________________________________ -->
            <td>
              <div id="b" class="code">
                <div
                  v-for="(line, index) in result.fileTwoLines"
                  :key="index"
                  :id="'line-' + fixIndex(index) + '-b'"
                  :class="[
                    isMatchB(index) ? 'matched-theme ' : 'normal-theme ',
                    intervalsB(index)
                  ]"
                >
                  <pre> {{ fixIndex(index) }} | {{ line }}</pre>
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
    return {};
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
      var matches = this.result.fileOneMatches;
      if (matches.includes(index)) {
        return true;
      } else {
        return false;
      }
    },
    isMatchB: function(index) {
      var matches = this.result.fileTwoMatches;
      if (matches.includes(index)) {
        return true;
      } else {
        return false;
      }
    },
    intervalsA: function(index) {
      var matches = this.result.testMatches;
      var setOfClasses = "";
      // Check if this line is in any matches
      var i;
      for (i = 0; i < matches.length; i++) {
        var match = matches[i];
        // console.log(match[0]);
        // Check File A interval of this match
        if (match[0].includes(index)) {
          // console.log("Found in match-" + i + " with index of " + index);
          setOfClasses = setOfClasses + "match-" + i+ " ";
        }
      }
      return setOfClasses;
    },
    intervalsB: function(index) {
      var matches = this.result.testMatches;
      var setOfClasses = "";
      // Check if this line
      var i;
      for (i = 0; i < matches.length; i++) {
        var match = matches[i];
        // console.log(match[1]);
        // Check File B interval of this match
        if (match[1].includes(index)) {
          // console.log("Found in match-" + i + " with index of " + index);
          setOfClasses = setOfClasses + "match-" + i + " ";
        }
      }
      return setOfClasses;
    },
    test: function(lineNo) {
      console.log("-----------------------------------");
      console.log("LineNo " + lineNo + " was clicked");
      var selectedDiv = document.getElementById("line-" + lineNo + "-a");
      var classList = "" + selectedDiv.classList
      var classArray = classList.split(' ');
      var matchList = [];
      let re = /match-/;
      // console.log(re);
      var i;
      for(i = 0; i < classArray.length; i++) {
        if(classArray[i] != " ") {
          if(re.test(classArray[i])) {
            // print out what class was read
            var matchNo = classArray[i].split('-')[1]
            console.log("Match " + matchNo + " was read...");
            matchList += matchNo;
          }
          else {
            console.log("No Match read...");
          }
        }
      }
      for(i = 0; i < matchList.length; i++) {
        console.log("Here is what is in matchList: " + matchList[i]);
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
tfoot,
th {
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

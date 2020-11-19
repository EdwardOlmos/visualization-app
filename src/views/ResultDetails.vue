<template>
  <div class="result-details">
    <h2 style="text-align: center;">
      Matches for {{ result.fileOneName }} and {{ result.fileTwoName }} (Score:
      {{ result.score }})
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
                  v-on:click="clickLineA(fixIndex(index))"
                  :class="[
                    isMatchA(fixIndex(index))
                      ? 'matched-theme'
                      : 'normal-theme',
                    intervalsA(fixIndex(index))
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
                  v-on:click="clickLineB(fixIndex(index))"
                  :class="[
                    isMatchB(fixIndex(index))
                      ? 'matched-theme '
                      : 'normal-theme ',
                    intervalsB(fixIndex(index))
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
import store from "@/script_results.js";

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
      var matches = this.result.matches;
      var setOfClasses = "";
      var i;
      for (i = 0; i < matches.length; i++) {
        var match = matches[i];
        // Check File A interval of this match
        if (match[0].includes(index)) {
          setOfClasses = setOfClasses + "match-" + i + " ";
        }
      }
      return setOfClasses;
    },
    intervalsB: function(index) {
      var matches = this.result.matches;
      var setOfClasses = "";
      var i;
      for (i = 0; i < matches.length; i++) {
        var match = matches[i];
        // Check File B interval of this match
        if (match[1].includes(index)) {
          setOfClasses = setOfClasses + "match-" + i + " ";
        }
      }
      return setOfClasses;
    },
    clickLineA: function(lineNo) {
      var i;
      console.log("-----------------------------------");
      console.log("LineNo " + lineNo + " was clicked");
      var selectedDiv = document.getElementById("line-" + lineNo + "-a");

      // clean up all div's with highlighted matches, if any
      if (document.getElementsByClassName("highlight-theme")) {
        var HTMLColl = document.getElementsByClassName("highlight-theme");
        console.log("HTMLCOLL: " + HTMLColl.length);

        var lengthHTML = HTMLColl.length;
        if (HTMLColl.length != 0) {
          for (i = lengthHTML; i > 0; i--) {
            var tokenList1 = HTMLColl[i - 1].classList;
            tokenList1.remove("highlight-theme");
          }
        }
      }

      var classList = "" + selectedDiv.classList;
      var classArray = classList.split(" ");
      if (classArray.length > 1) {
        var matchList = [];
        let re = /match-/;
        // collect matches and push them into matchList

        for (i = 0; i < classArray.length; i++) {
          if (classArray[i] != " ") {
            if (re.test(classArray[i])) {
              var matchNo = classArray[i].split("-")[1];
              matchList.push("match-" + matchNo);
            }
          }
        }
        var j;
        console.log("Matches Found: " + matchList);

        // inject highlight class - create a for loop that iterates through matchList[]
        for (i = 0; i < matchList.length; i++) {
          var HTMLCollection = document.getElementsByClassName(matchList[i]);
          //  console.log(HTMLCollection)
          for (j = 0; j < HTMLCollection.length; j++) {
            var tokenList = HTMLCollection[j].classList;
            tokenList.add("highlight-theme");
          }
        }
      } else {
        console.log("No matches...");
      }
    },
    clickLineB: function(lineNo) {
      var i;
      console.log("-----------------------------------");
      console.log("LineNo " + lineNo + " was clicked");
      var selectedDiv = document.getElementById("line-" + lineNo + "-b");

      // clean up all div's with highlighted matches, if any
      if (document.getElementsByClassName("highlight-theme")) {
        var HTMLColl = document.getElementsByClassName("highlight-theme");
        console.log("HTMLCOLL: " + HTMLColl.length);

        var lengthHTML = HTMLColl.length;
        if (HTMLColl.length != 0) {
          for (i = lengthHTML; i > 0; i--) {
            var tokenList1 = HTMLColl[i - 1].classList;
            tokenList1.remove("highlight-theme");
          }
        }
      }

      var classList = "" + selectedDiv.classList;
      var classArray = classList.split(" ");
      if (classArray.length > 1) {
        var matchList = [];
        let re = /match-/;
        // collect matches and push them into matchList

        for (i = 0; i < classArray.length; i++) {
          if (classArray[i] != " ") {
            if (re.test(classArray[i])) {
              var matchNo = classArray[i].split("-")[1];
              matchList.push("match-" + matchNo);
            }
          }
        }
        var j;
        console.log("Matches Found: " + matchList);

        // inject highlight class - create a for loop that iterates through matchList[]
        for (i = 0; i < matchList.length; i++) {
          var HTMLCollection = document.getElementsByClassName(matchList[i]);
          for (j = 0; j < HTMLCollection.length; j++) {
            var tokenList = HTMLCollection[j].classList;
            tokenList.add("highlight-theme");
          }
        }
      } else {
        console.log("No matches...");
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
  color: black;
}

.highlight-theme {
  background-color: yellow;
  color: black;
}

.code {
  overflow-x: auto;
  width: "100%";
  width: 40vmax;
  max-height: 35vmax;
}

/* .center {
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
} */
</style>

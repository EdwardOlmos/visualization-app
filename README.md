# visualization-app

## About

A Vue.js client for [FETT](https://github.com/lawtonnichols/plagiarism-detector), A Software Plagiarism Detection Tool, to visualize the results of the tool. 

FETT takes source code files, compares the files for plagiarism, and outputs scores that reflects the weight of suspicion of plagiarism. These scores alone are not informative enough for the user to know which sections of the source code files caused suspicion of plagiarism. Therefore, [this paper](http://hdl.handle.net/10211.3/218231) elaborates the approach of modifying FETT's use of the [Smith-Waterman Algorithm](https://en.wikipedia.org/wiki/Smith%E2%80%93Waterman_algorithm) and presenting the results using Vue.js. 

## Goal

Users should be able to:
* see within 7 seconds the top file pairs that caused the most suspicion of plagiarism
* see the file pair matches on a side-by-side view of both source code files

### Built With
* Vue.js

## Project Setup
To run locally, follow the steps below

### Prerequisites
* Node.js 8.11+ installed
* npm

### Installation
* Clone Repo
```
git clone git@github.com:EdwardOlmos/visualization-app.git
```

* Install dependencies
```
npm install
```

### Sample Data File
There is sample data located at `/src/script_results.js` to enact as a GET call for results data provided by FETT. The sample data is imported and used for the following information about the compared source code files fed into FETT:
* File Names
* Set of Matches for each file comparison
* Scores for each file comparison

## Roadmap
See the open issues for a list of proposed features (and known issues)

## Available Scripts

### Compiles and hot-reloads for development
```
npm run serve
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

[Contribution guidelines for this project](docs/CONTRIBUTING.md)

## Acknowledgements

## References
* [Plagiarism Detection Tool](https://dl.acm.org/doi/10.1145/3304221.3319789)
* []()

## Glossary
* File Pairs: Two source code files compared by FETT
* Suspicion of Plagiarism: Suspicion of plagiarism based on FETT
* File Pair Matches: An array of source code files' line numbers that matched based on FETT

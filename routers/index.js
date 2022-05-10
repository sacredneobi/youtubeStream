const fs = require("fs");
const path = require("path");
const { compareString, compareStringInArray } = require("../utils/compare");
const { Router } = require("express");

const showErrorLoadingModule = (fileName, errorMessage) => {
  console.log(`❌ not load route: ${fileName} error - "${errorMessage}"`);
};

const def = (server) => {
  let notProcessing = ["index.js", "temp.js"];

  let data = fs.readdirSync(__dirname).filter((item) => {
    return compareString(path.extname(item), ".js") && !compareStringInArray(item, notProcessing);
  });

  data.forEach((file) => {
    const fileRoute = require(`./${file}`);
    const moduleName = path.basename(file, ".js").toLowerCase();
    if (typeof fileRoute === "function") {
      try {
        let route = Router();
        fileRoute(route);
        server.use(`/${moduleName}`, route);
        console.log(`✅ route: ${moduleName}`);
      } catch (error) {
        showErrorLoadingModule(file, error.message);
      }
    } else {
      showErrorLoadingModule(file, `not 'module.exports' function`);
    }
  });
};

module.exports = def;

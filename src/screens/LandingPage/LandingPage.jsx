import React from "react";
import "./styles.css";
const fs = require("fs");
const formsDb = fs.readFileSync("./forms/formsDb.json", "utf8");
const forms = JSON.parse(formsDb);

const LandingPage = () => {
  return <div>Este es el lugar en donde reside el landing page</div>;
};

export default LandingPage;

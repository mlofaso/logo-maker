const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "text",
    message: "what 3 characters would you like to enter?",
  },
  {
    type: "input",
    name: "shapeColor",
    message: "what color shape would you like?",
  },
  {
    type: "input",
    name: "textColor",
    message: "what color would you like the text inside the shape to be?",
  },
  {
    type: "list",
    name: "shape",
    message: "what shape would you like the SVG to be?",
    choices: ["Triangle", "Circle", "Square"],
  },
];

const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");

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

inquirer.prompt(questions).then((answers) => {
  console.log(answers);
  let newLogo;

  if (answers.shape === "Circle") {
    newLogo = new Circle(answers.text, answers.shapeColor, answers.textColor);
  } else if (answers.shape === "Triangle") {
    newLogo = new Triangle(answers.text, answers.shapeColor, answers.textColor);
  } else {
    newLogo = new Square(answers.text, answers.shapeColor, answers.textColor);
  }
  fs.writeFile("logo.svg", newLogo.render(), function (err, res) {
    if (err) throw err;
    console.log("SVG created!");
  });
});

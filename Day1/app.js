import { input } from "./input.js";

function findMostCalories(input) {
  // Remove line breaks
  let arr = input.split("\n");
  let elfCalorie = 0;
  let calorieArr = [];

  // Total calories for each "block" and add result to calorieArr
  arr.map((entry) => {
    if (entry !== "") {
      elfCalorie += Number(entry);
    } else {
      calorieArr.push(elfCalorie);
      elfCalorie = 0;
    }
  });
  // Sort big to small
  calorieArr.sort((a, b) => (a > b ? -1 : 1));

  // Log biggest -> Answer
  console.log(calorieArr[0]);
}

let testInput = `100

200
300

400
`;

findMostCalories(input);

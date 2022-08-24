/**
 * @question {
 *  Employees names should be printed
 *  from this API -> https://api.b2gsoft.com/api/v1/interview/question/one
 *  Output: [nishad, shahidul, rizwan, shamsul, akib]
 * }
 *
 * @approached_solution [
 *  1. Request api using axios
 *  2. Initialize an variable to store results name output
 *  2. Loop object keys using Object.values, so we can get value of object keys
 *  4. Push each component employee to output
 *  5. Return output variable
 * ]
 */
const axios = require("axios");

async function getOutput() {
  let output = [];

  try {
    let { data: response } = await axios.get(
      "https://api.b2gsoft.com/api/v1/interview/question/one"
    );
    Object.values(response.data.content.component).map((data) => {
      output.push(data.employee);
    });

    return output;
  } catch (error) {
    return new Error("Unable to get api response, please try again");
  }
}

(async () => {
  const response = await getOutput();
  console.log("Question-1 solution: ", response);
  return;
})();

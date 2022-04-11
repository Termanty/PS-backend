const red = "\x1b[31m";
const green = "\x1b[32m";

const info = (...params) => {
  console.log(`${green}${params.join(" ")}`);
};

const error = (...params) => {
  console.error(`${red}${params.join(" ")}`);
};

module.exports = {
  info,
  error,
};

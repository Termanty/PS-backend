const red = "\x1b[31m";
const green = "\x1b[32m";

const info = (...params) => {
  if (process.env.NODE_ENV !== "test") {
    console.log(`${green}${params.join(" ")}`);
  }
};

const error = (...params) => {
  if (process.env.NODE_ENV !== "test") {
    console.error(`${red}${params.join(" ")}`);
  }
};

module.exports = {
  info,
  error,
};

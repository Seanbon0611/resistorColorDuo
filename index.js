const COLORS = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
};
const decodedValue = (colors) => {
  const firstTwo = colors.slice(0,2)
  let result = []
  for (let color of firstTwo) {
      if(COLORS[color] === "black") {
        result.push("0")
      } else {
        result.push(COLORS[color])
      }
    }
  return parseInt(result.join(""))
};

decodedValue(["brown", "black"])
decodedValue(["blue", "grey", "red", "orange"])
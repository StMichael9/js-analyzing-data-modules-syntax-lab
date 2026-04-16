require("datejs");

const combineUsers = (...args) => {
  const combinedObject = {
    users: [],
    merge_date: "",
  };

  for (let arr of args) {
    combinedObject.users.push(...arr);
  }
  combinedObject.merge_date = new Date().toString("M/d/yyyy");
  return combinedObject;
};

module.exports = {
  ...(typeof combineUsers !== "undefined" && { combineUsers }),
};

function checkRequiredField(object) {
  const unsettledFields = Object.entries(object).filter((el) => el[1] === undefined);
  if (unsettledFields.length > 0) {
    throw new Error(`Please fill in required fields below: ${unsettledFields.map((el) => el[0]).join(', ')}`);
  }
}
module.exports = checkRequiredField;

let mockedDate;

module.exports = {
  getDate: () => mockedDate || new Date(),
  setDate: date => mockedDate = date,
};

const studentRepository = require('./student-repository');

module.exports = () => ({
  studentRepository: {
    getAvailableSpaces: studentRepository().getAvailableSpaces,
    addRegistration: studentRepository().addRegistration,
  },
});

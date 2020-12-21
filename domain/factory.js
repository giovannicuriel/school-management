const studentRegistration = require('./student-registration');

module.exports = (dependencies) => ({
  validateStudentRegistration: studentRegistration(dependencies).validateStudentRegistration,
  hasAvailableSpace: studentRegistration(dependencies).hasAvailableSpace,
});

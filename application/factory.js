const studentRegistration = require('./student-registration');
const infrastructure = require('../infrastructure');
const helpers = require('../helpers');

const dependencies = {
  infrastructure: infrastructure(),
  helpers,
};
dependencies.domain = require('../domain')(dependencies);


module.exports = () => ({
  registerStudent: studentRegistration(dependencies).registerStudent,
});

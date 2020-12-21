/**
 * @typedef {import('./model').IStudentRegistration} StudentRegistration
 * @typedef {import('..').IDependencies} Dependencies
 */

/**
 *
 * @param {Dependencies} dependencies All dependencies needed by this module
 */
module.exports = () => {
  const availableSpaces = {
    1: 10,
    2: 20,
    3: 20,
    4: 25,
    5: 25,
    6: 10,
  };
  const registrations = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  };
  return {
    getAvailableSpaces: (grade) => availableSpaces[grade] - registrations[grade].length,
    addRegistration: (studentRegistration) => registrations[studentRegistration.grade].push(studentRegistration),
  };
};

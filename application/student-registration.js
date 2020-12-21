/**
 * @typedef {import('../domain/model').IStudentRegistration} StudentRegistration
 * @typedef {import('../').IDependencies} Dependencies
 */

/**
 *
 * @param {Dependencies} dependencies All dependencies needed by this module
 */
module.exports = (dependencies) => ({
  /**
   * Register a new student.
   * @param {StudentRegistration} studentRegistration The registration to be
   * processed
   * @return {import('..').IAPIReturn} Process results.
   */
  registerStudent: (studentRegistration) => {
    const validRegistration = dependencies.domain.validateStudentRegistration(studentRegistration);
    if (validRegistration === false) {
      return dependencies.helpers.makeReturn(400, { message: 'Registration is not valid' });
    }
    if (dependencies.domain.hasAvailableSpace(studentRegistration)) {
      dependencies.infrastructure.studentRepository.addRegistration(studentRegistration);
    } else {
      return dependencies.helpers.makeReturn(400, { message: 'No more available spaces' });
    }
    return dependencies.helpers.makeReturn(201, { message: 'Student was successfully registered' });
  },
});

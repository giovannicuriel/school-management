/**
 * @typedef {import('./model').IStudentRegistration} StudentRegistration
 * @typedef {import('..').IDependencies} Dependencies
 */

/**
 *
 * @param {Dependencies} dependencies All dependencies needed by this module
 */
module.exports = (dependencies) => ({
  /**
   * Validate a student registration
   * @param {StudentRegistration} studentRegistration The registration to be
   * validated
   */
  validateStudentRegistration: (studentRegistration) => {
    if (studentRegistration.guardians.length === 0) {
      return false;
    }
    if (studentRegistration.grade < 1) {
      return false;
    }
    return true;
  },
  /**
   * Checks whether there is at least one available spaces that fulfills a
   * particular student registration
   * @param {StudentRegistration} studentRegistration
   */
  hasAvailableSpace: (studentRegistration) => {
    // We are going to accept all students with life threatening conditions
    const availableSpaces = dependencies.infrastructure.studentRepository.getAvailableSpaces(studentRegistration.grade);
    if (studentRegistration.medicalInfo.hasLifeThreateningCondition) {
      return true;
    }
    return availableSpaces > 0;
  },
});

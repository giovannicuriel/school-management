/**
 * @typedef {import('./model').IStudentRegistration} StudentRegistration
 * @typedef {import('../../').IDependencies} Dependencies
 */

const studentRegistrationSchemas = require('./student-registration-schemas');

/**
 *
 * @param {Dependencies} dependencies All dependencies needed by this module
 */
module.exports = (application) => [
  {
    path: '/v1/student/registration',
    method: 'POST',
    config: {
      description: 'Register a new student',
      notes: 'No extra notes',
      tags: ['student', 'registation', 'api'],
      handler: (req, res) => {
        try {
          const ret = application.registerStudent(req.payload);
          return res.response(ret.data).code(ret.statusCode);
        } catch (error) {
          return res.response('internal error').code(500);
        }
      },
      validate: {
        options: {
          allowUnknown: true,
        },
        payload: studentRegistrationSchemas.post.payload,
      },
    },
  },
];


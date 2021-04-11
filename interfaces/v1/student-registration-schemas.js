const joi = require('joi');

module.exports = {
  post: {
    payload: joi.object({
      firstName: joi.string().min(3).required(true),
      middleName: joi.string(),
      lastName: joi.string().min(3).required(true),
      homeAddress: joi.object({
        street: joi.string(),
        city: joi.string(),
        state: joi.string(),
        zipCode: joi.string()
      }),
      contact: joi.object({
        homePhone: joi.string(),
        cellPhone: joi.string(),
        email: joi.string(),
      }),
      guardians: joi.array().items({
        name: joi.string().min(3).required(true),
        relationship: joi.string().required(true),
        homePhone: joi.string(),
        workPhone: joi.string(),
      }).min(1).required(true),
      emergencyPhone: joi.string().required(true),
      alternateEmergencyPhone: joi.string(),
      emergencyContact: joi.string().required(true),
      medicalInfo: joi.object({
        hasLifeThreateningCondition: joi.bool().required(true),
        lifeThreateningConditionDescription: joi.string(),
        useMedication: joi.bool(),
        medicationDescription: joi.string(),
        hasOtherMedicalIssues: joi.bool(),
        otherMedicalIssuesDescription: joi.string()
      }).required(true),
      grade: joi.number().min(1).required(true),
    }).description('Student registration card').meta({ className: 'Student Registration' })
  },
};

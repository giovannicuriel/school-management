export interface IAddress {
  street: string,
  city: string,
  state: string,
  zipCode: string
}

export interface IContact {
  homePhone: string,
  cellPhone: string,
  email: string,
}

export interface IStudentRegistration {
  firstName: string,
  middleName: string,
  lastName: string,
  homeAddress: IAddress,
  contact: IContact,
  guardians: [{
    name: string,
    relationship: string,
    homePhone: string,
    workPhone: string,
  }],
  emergencyPhone: string,
  alternateEmergencyPhone: string,
  emergencyContact: string,
  medicalInfo: {
    hasLifeThreateningCondition: boolean,
    lifeThreateningConditionDescription: string,
    useMedication: boolean,
    medicationDescription: string,
    hasOtherMedicalIssues: boolean,
    otherMedicalIssuesDescription: string
  },
  grade: number,
}
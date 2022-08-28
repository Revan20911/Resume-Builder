import uniqid from "uniqid";

const stateList = {

    personalInfo: {

        firstName: '',
        middleName: '',
        lastName: '',
        address: '',
        phone: '',
        email: '',
    },

    education: {
        id: uniqid(),
        educationInstitution: '',
        educationLevel: '',
        field: '',
    },

    experienceInfo: {

        id: uniqid(),
        companyName: '',
        jobTitle: '',
        startDate: '',
        endDate: '',
        description: '',
    }
};


export default stateList;
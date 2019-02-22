import React from 'react'

export default React.createContext({
    token: null,
    name: null,
    logIn: (token, name) => {},
    logOut: () => {},
    submitMultiStepForm: (values) => {},
    showModalHandler: () => { },
    closeModalHandler : () => {},
    deleteStudentData: (id) => {},
    updateStudentData : (id) => {}
})
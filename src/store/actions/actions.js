// import * as types from './acitionTypes'




export const onSubmitForm =  values => {
    return {
        type: "ONSUBMIT",
        values
    }
}


export const deleteStudent = id => {
    return {
        type: "DELETE_STUDENT",
        id
    }
}


export const singleStudentData = values => {
    return {
        type: "UPDATE_STUDENT",
        values
    }
}
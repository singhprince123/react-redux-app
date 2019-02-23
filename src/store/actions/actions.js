// import * as types from './acitionTypes'

export const onSubmitForm = values => {
  return {
    type: "ONSUBMIT",
    values
  };
};

export const deleteStudent = id => {
  return {
    type: "DELETE_STUDENT",
    id
  };
};

export const singleStudentData = values => {
  return {
    type: "GET_STUDENT",
    values
  };
};

export const loadSingleStudent = data => {
  return {
    type: "LOADING_DATA",
    data
  };
};

export const closeModal = () => {
  return {
    type: "CLOSE_MODAL"
  };
};

export const updateSingleStudent = data => {
  return {
    type: "UPDATE_STUDENT",
    data
  };
};

export const fetchAllStudent = data => {
  return {
    type: "FETCH_ALL_STUDENT",
    data
  };
};

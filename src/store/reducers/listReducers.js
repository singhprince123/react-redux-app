// import * as types from '../actions/acitionTypes'

const initialState = {
  studentsData: [],
  updating: false,
  singleStudentData: null
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_STUDENT":
      return state;
    case "ONSUBMIT":
      const {
        firstName,
        lastName,
        sex,
        favouriteSubject,
        email,
        address
      } = action.values;
      let id = Date.now() + Math.random();
      return {
        ...state,
        studentsData: state.studentsData.concat({
          id,
          firstName,
          lastName,
          sex,
          favouriteSubject,
          email,
          address
        })
      };
    case "DELETE_STUDENT":
      let tempData = [...state.studentsData];
      const newData = tempData.filter(student => student.id !== action.id);
      return { ...state, studentsData: newData };

    case "GET_STUDENT":
      state.updating = true;
      console.log(" action.values = ", action.values);
      const {
        id: newId,
        firstName: fname,
        lastName: lname,
        email: em,
        favouriteSubject: favsub,
        sex: gender,
        address: adrs
      } = action.values;
      const dataArray = { newId, fname, lname, em, favsub, gender, adrs };
      return {
        ...state,
        singleStudentData: dataArray
      };
    case "LOADING_DATA":
      return { ...state, singleStudentData: action.data };

    case "CLOSE_MODAL":
      return { ...state, updating: false };
    case "UPDATE_STUDENT":
      let newState = { ...state };
      // const { newId, gender, fname, lname, em, favsub, adrs } = action.data;
      newState.studentsData.forEach((student, index) => {
        if (student.id === action.data.newId) {
          newState.studentsData[index].firstName = action.data.fname;
          newState.studentsData[index].lastName = action.data.lname;
          newState.studentsData[index].email = action.data.em;
          newState.studentsData[index].sex = action.data.gender;
          newState.studentsData[index].favouriteSubject = action.data.favsub;
          newState.studentsData[index].address = action.data.adrs;
        }
      });
      newState.updating = false;
      return newState;

    default:
      return state;
  }
};

export default listReducer;

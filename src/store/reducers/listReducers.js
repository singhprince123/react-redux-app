// import * as types from '../actions/acitionTypes'

const initialState = {
   studentsData: [],
   updating: false,
   singleStudentData : null
}


const  listReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ONSUBMIT" :
        
         const { firstName ,lastName , sex , favouriteSubject , email, address }  = action.values;
          let id =   Date.now() + Math.random();
          return {
            ...state, studentsData: state.studentsData.concat({id, firstName,lastName,sex,favouriteSubject,email,address})
         }
      case "DELETE_STUDENT" :
          let tempData = [...state.studentsData];
          const newData = tempData.filter(student =>  student.id !== action.id);
          return { ...state, studentsData: newData};
          
      case "UPDATE_STUDENT":
           console.log(" action.values = " , action.values)
           const { id:newId , firstName:fname, lastName:lname, email:em, favouriteSubject:favsub, sex:gender ,address:adrs} = action.values;
           const dataArray = [{newId, fname,lname,em,favsub ,gender,adrs}]
           return {
             ...state,udating:true, singleStudentData: dataArray
           }
      default:
        return state}
    }
  

  export default listReducer;


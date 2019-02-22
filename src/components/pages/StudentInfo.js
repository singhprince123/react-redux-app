import React from 'react'
import Modal from '../Modal/Modal'
import Backdrop from '../Backdrop/Backdrop'
import StudentForm from '../StudentForm'
import {connect} from 'react-redux'
import  * as actionCreators from '../../store/actions/actions'

 function StudentInfo(props) {
    console.log("student info", props.values)
    const { id , firstName, lastName ,  email , address , sex , favouriteSubject  } = props.values;
    const { deleteStudentData,  showModalHandler, closeModalHandler, addingStudent}  = props
    const name = firstName + " " + lastName;
  return (
      <React.Fragment>
        {props.updating && <Backdrop />}
        {props.updating && 
           <Modal title="Student Detail Form"  onCancelModal={() => closeModalHandler()} canCancel><StudentForm values={props.values}/></Modal> }
        <div className="col-md-6 col-lg-4 mb-3">
          <div className="card p-3">
             <h2 className="text-capitalize text-center">student details</h2>
            <div className="card-body">
              <div className="detals">
               <p className="text-capitalize"> Name: <span className="font-weight-bold">{name}</span></p>  <br/>
               <p  className="text-capitalize">email: <span className="font-weight-bold">{email}</span></p>  <br/>
               < p className="text-capitalize"> sex: <span className="font-weight-bold">{sex}</span></p>  <br/>
               < p className="text-capitalize">fav Sub: <span className="font-weight-bold">{ favouriteSubject}</span></p>  <br/>
               <p  className="text-capitalize">Address : <span className="font-weight-bold">{address}</span></p> 
               
              </div>
              
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={()=> props.deleteStudent(id)}>Delete</button>
              <button className="btn btn-warning ml-3" onClick={() => props.singleStudentData(props.values)}>Update</button>
            </div>
          </div>
        </div>
        </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    list : state.list.updating
  }
}


const mapDispatchToProps = dispatch => {
    return{
      deleteStudent: (id) => dispatch(actionCreators.deleteStudent(id)),
      singleStudentData : (values) => dispatch(actionCreators.singleStudentData(values))

    };
  
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentInfo)




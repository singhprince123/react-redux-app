import React, { Component } from 'react'
import StudentInfo from './StudentInfo'
import Modal from '../Modal/Modal'
import StudentForm from '../StudentForm'
import Backdrop from '../Backdrop/Backdrop';
import AuthContext from '../../components/context/auth-context'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions/actions'

 class StudentList extends Component {


  render() {
     console.log("state =", this.props)
    {!this.props.updating && this.props.fetchAll()}
    return (
      <AuthContext.Consumer>
        { values => {
             console.log("valures =", values)
             const { showModalHandler , closeModalHandler, deleteStudentData, updateStudentData , addingStudent}= values
            return(
              <React.Fragment>
              {addingStudent && <Backdrop />}
           {addingStudent && 
           <Modal title="Student Detail Form"  onCancelModal={() => closeModalHandler()} canCancel><StudentForm /></Modal> }
           <div className="col-md-10 mx-auto my-5 col-10">
              <div className="card p-3">
                <div className="card-title text-capitalize text-center">
                 <h1 className="text-center">add students to your list</h1>
                 <button className="btn btn-primary text-uppercase" onClick={() => showModalHandler()}>Add student</button>
                </div>
              </div>
              </div>
              <div className="container my-3 p-5">
               <div className="row">
              {
              this.props.stdsArray.map( (student) => {
               return <StudentInfo 
                      key={ student.id}
                     values = { {...student}}
                     deleteStudentData = {deleteStudentData}
                     updateStudentData={updateStudentData}
                     showModalHandler={showModalHandler}
                     closeModalHandler={closeModalHandler}
                     addingStudent={addingStudent}
               />
             })
           }
              </div>
              </div>
           
          
           </React.Fragment>
            )
        }}

      </AuthContext.Consumer>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    stdsArray : state.list.studentsData,
    updating: state.list.updating,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAll:  () => dispatch(actionCreators.fetchAllStudent())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList)



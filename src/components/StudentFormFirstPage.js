import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const StudentFormFirstPage = (props) => {
  const { handleSubmit } = props
  
  return (
    <form onSubmit={handleSubmit}>
      <Field name="firstName" type="text" component={renderField} label="First Name"/>
      <Field name="lastName" type="text" component={renderField} label="Last Name"/>
      <div>
        <button type="submit" className="next btn-primary mt-2 pl-1 pr-1">Next</button>
      </div>
    </form>
  ) 
}
const  mapStateToProps = (state, ownProps) => {
  return {
    initialValues: {
      firstName: state.singleStudentData.fname,
      lastName: state.singleStudentData.lname,
      
    }
}
}
export default reduxForm({
  form: 'studentDetails',                 // <------ same form name
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true,
  enableReinitialize: true, 
  validate,
 
}, mapStateToProps)(StudentFormFirstPage)


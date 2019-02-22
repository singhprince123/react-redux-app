import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const renderError = ({ meta: { touched, error } }) => touched && error ?
  <span>{error}</span> : false

const StudentFormSecondPage = (props) => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" type="email" component={renderField} label="Email"/>
      <div>
        <label>Sex</label>
        <div>
          <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
          <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
          <Field name="sex" component={renderError}/>
        </div>
      </div>
      <div>
        <button type="button" className="previous btn-warning  pl-1 pr-1" onClick={previousPage}>Previous</button>
        <button type="submit" className="next btn-primary ml-3 pl-1 pr-1">Next</button>
      </div>
    </form>
  )
}
const  mapStateToProps = (state) => {
  return {
    initialValues: {
      sex: state.singleStudetnData.gender,
      email: state.singleStudetnData.em,
      
    }
}
}
export default reduxForm({
  form: 'studentDetails',  //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, 
  enableReinitialize: true, // <------ unregister fields on unmount
  validate
}, mapStateToProps)(StudentFormSecondPage)


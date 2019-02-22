import React from 'react'
import { reset,Field, reduxForm } from 'redux-form'
import validate from './validate'

const subjects = [ 'Maths', 'Science', 'History', 'Hindi', 'English', 'Computer' ];


const renderSubjectSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a subjects...</option>
      {subjects.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
)



const StudentFormThirdPage = (props) => {
  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Favorite Subject</label>
        <Field name="favouriteSubject" component={renderSubjectSelector}/>
      </div>
      
      <div>
        <label>Address</label>
        <div>
          <Field name="address" component="textarea" placeholder="address"/>
        </div>
      </div>
      <div>
        <button type="button" className="previous btn-primary pl-1 pr-1" onClick={previousPage}>Previous</button>
        <button type="submit"className="previous btn-success pl-1 pr-1 ml-3" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  )
}

const  mapStateToProps = (state, ownProps) => {
  return {
    initialValues: {
      favouriteSubject: state.singleStudentData.favsub,
      addres: state.singhleStudentData.adrs,
      
    }
}
}
export default reduxForm({
  form: 'studentDetails', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, 
  enableReinitialize: true, 
  validate,
  
  
}, mapStateToProps)(StudentFormThirdPage)


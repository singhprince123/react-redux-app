import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { loadSingleStudent as loadAccount } from "../../store/actions/actions";
import "./singleForm.css";
import  * as actionCreators from '../../store/actions/actions'

const subjects = [ 'Maths', 'Science', 'History', 'Hindi', 'English', 'Computer' ];




let singleForm = props => {
  console.log(props);
  const { handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit(props.updateSubmit)} className="container-form">
      
      <div className="name">
        <div>
          <label>First Name</label>
          <div>
            <Field
              name="fname"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <Field
              name="lname"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
      </div>
      <div className="email-gender">
        <div>
          <label>email</label>
          <div>
            <Field
              name="em"
              component="input"
              type="text"
              placeholder="Age"
            />
          </div>
        </div>
        <div>
          <label>Sex</label>
          <div>
            <label>
              <Field
                name="gender"
                component="input"
                type="radio"
                value="male"
              />{" "}
              Male
            </label>
            <label>
              <Field
                name="gender"
                component="input"
                type="radio"
                value="female"
              />{" "}
              Female
            </label>
          </div>
        </div>
      </div>
      <div className="favsub-adrs">
        <div>
          <label>Favorite Subject</label>
          <div>
            <Field name="favsub" component="select">
              <option value="">Select a Subject...</option>
              {subjects.map(colorOption => (
                <option value={colorOption} key={colorOption}>
                  {colorOption}
                </option>
              ))}
            </Field>
          </div>
        </div>
        <div>
          <label>Address</label>
          <div>
            <Field name="adrs" component="textarea" />
          </div>
        </div>
        <div>
          <button type="submit" className="btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
singleForm = reduxForm({
  form: "studentUpdatingForm" // a unique identifier for this form
})(singleForm);

// You have to connect() to any reducers that you wish to connect to yourself
singleForm = connect(
  state => ({
    initialValues: state.list.singleStudentData // pull initial values from account reducer
  }),
  { load: loadAccount } // bind account loading action creator
)(singleForm);


const mapDispatchToProps = dispatch => {
  return {
      updateSubmit : (values)=> dispatch(actionCreators.updateSingleStudent(values))
  }
}

export default connect(null, mapDispatchToProps)(singleForm);

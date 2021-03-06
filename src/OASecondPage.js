import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import {tools, environment, extentOptions, progressOptions, classSize, percentage, hours, weeks} from './Components/DropdownOptions'

export const q1 = 'Approximately how many students do you have in your class?'
export const q2 = 'Approximately what percentage of your students are second language learners?'
export const q3 = 'How many hours of class do you have each week?'
export const q3b = 'How many weeks of class do you have?'
export const q4 = 'Which of the following tools do you have access to in your classroom?'
export const q5 ='To what extent do your students share a common cultural background?' 
export const q6 = 'Where does your course fit into their academic program?'
export const q7 = 'Are your students in the course predominantly from the same discipline?'
export const q8 = 'Which of the following describes your classroom environment?'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

class OASecondPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    const { handleSubmit, previousPage } = this.props
    const formSheet =  this.props.printStyle ? this.props.printStyle : {"font-size": "40px", "position": "absolute", "top": "3%", "left": "25%", "font-weight": "200"}
    const heading = {"font-weight": "250", "font-size": "30px", "textAlign": "center", "margin-top": "25px", "margin-bottom": "15px"}

    return (
      <form onSubmit={handleSubmit} style={formSheet}>
        <div><br/><br/>
          <div style={heading}>Logistics</div>
        </div>
        <div>
          <div><label>{q1}</label></div>
          <div>
            <Field name="q1" component="select">
              <option value="">Select</option>
              {classSize.map(option =>
                <option value={option} key={option}>{option}</option>)}
            </Field>
            <Field name="q1" component={renderError} />
          </div>
        </div>
        <div>
          <div><label>{q2}</label></div>
          <div>
            <Field name="q2" component="select">
              <option value="">Select</option>
              {percentage.map(option =>
                <option value={option} key={option}>{option}</option>)}
            </Field>
            <Field name="q2" component={renderError} />
          </div>
        </div>
        <div>
          <div><label>{q3}</label></div>
          <div>
            <Field name="q3" component="select">
              <option value="">Select</option>
              {hours.map(option =>
                <option value={option} key={option}>{option}</option>)}
            </Field>
            <Field name="q3" component={renderError} />
          </div>
        </div>
        <div>
          <div><label>{q3b}</label></div>
          <div>
            <Field name="q3b" component="select">
              <option value="">Select</option>
              {weeks.map(option =>
                <option value={option} key={option}>{option}</option>)}
            </Field>
            <Field name="q3b" component={renderError} />
          </div>
        </div>
        <div>
          <div><label className="form-label">{q4}</label></div>
          <div className="checkbox-group">
            {tools.map(opt => {
              return (
                <label key={opt} className="form-label capitalize">
                  <Field
                    component="input"
                    type="checkbox"
                    name={opt}
                  />{opt}
                </label>
              );
            })}
          </div>
        </div>
        <div>
        <br/><br/>
          <div style={heading}>Background Information</div>
        </div>
        <div>
          <div><label>{q5}</label></div>
          <div>
            <Field name="q5" component="select">
              <option value="">Select</option>
              {extentOptions.map(option =>
                <option value={option} key={option}>{option}</option>)}
            </Field>
            <Field name="q5" component={renderError} />
          </div>
        </div>
        <div>
          <div><label>{q6}</label></div>
          <div>
            <Field name="q6" component="select">
              <option value="">Select</option>
              {progressOptions.map(option =>
                <option value={option} key={option}>{option}</option>)}
            </Field>
            <Field name="q6" component={renderError} />
          </div>
        </div>
        <div>
          <div><label>{q7}</label></div>
          <div>
            <label><Field name="q7" component="input" type="radio" value="Yes"/> Yes</label>
            <label><Field name="q7" component="input" type="radio" value="No"/> No</label>
            <label><Field name="q7" component="input" type="radio" value="Don't Know"/> Don't know</label>
            <Field name="q7" component={renderError} />
          </div>
        </div>
        <div>
          <div><label className="form-label">{q8}</label></div>
          <div className="checkbox-group">
            {environment.map(opt => {
              return (
                <label key={opt} className="form-label capitalize">
                  <Field
                    component="input"
                    type="checkbox"
                    name={opt}
                  />{opt}
                </label>
              );
            })}
          </div>
        </div>

        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" className="next">
            Next
          </button>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.q1) {
    errors.q1 = 'Required'
  }
  if (!values.q2) {
    errors.q2 = 'Required'
  }
  if (!values.q3) {
    errors.q3 = 'Required'
  }
  if (!values.q3b) {
    errors.q3b = 'Required'
  }
  if (!values.q5) {
    errors.q5 = 'Required'
  }
  if (!values.q6) {
    errors.q6 = 'Required'
  }
  if (!values.q7) {
    errors.q7 = 'Required'
  }
  return errors
}

export default reduxForm({
  form: 'OA',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(OASecondPage)

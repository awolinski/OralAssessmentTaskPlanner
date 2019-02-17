import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import { importanceOptions, oftenOptions } from './Components/DropdownOptions'

const q12 = 'How often are oral exams used at your institution?'
const q13 = 'How often are interviews used at your institution?'
const q14 = 'How often are student presentations used at your institution?'
const q15 = 'Do you want to determine student oral proficiency?'
const q16a = 'Do you want to see if students have mastered a specific skill?'
const q16b = 'Which one?'
const q17a = 'Do you want to see if students have mastered specific knowledge?' 
const q17b = 'What knowledge?'
const q18 = 'Are you trying to place students into groups for coursework?'
const q19 = 'How important is it for your students to be able to explain or teach things to others?'
const q20 = 'How important is it for your students to be able to present their work?'
const q21 = 'How important is it for your students to be able to negotiate?'
const q22 = 'How important is it for your students to be able to debate?'
const q23 = 'How important is it for your students to be able to demonstrate how something is done or used?'
const q24 = 'How important is it for your students to be able to ask questions or comment on another’s work?'
const q25 = 'How important is it for your students to be able to respond to questions or comments on their work?'
const q26 = 'How often do people in your field negotiate once they are in the workplace?'
const q27 = 'How often do people in your field debate once they are in the workplace?'
const q28 = 'How often do people in your field work in groups once they are in the workplace?'
const q29 = 'How often do people in your field do presentations once they are in the workplace?'
const q30 = 'How often do people in your field demonstrate how something is done or used once they are in the workplace?'
const q31 = 'How often do people in your field have to explain or teach concepts once they are in the workplace?'


const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

class OAFourthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide16: true,
      hide17: true,
    };
  this.showFields = this.showFields.bind(this)
  this.hideFields = this.hideFields.bind(this)
  }

  showFields(values) {
    if(values.target.name === 'q16a'){
      this.setState({ hide16: false })
    } else { this.setState({ hide17: false }) }
  }

  hideFields(values) {
    if(values.target.name === 'q16a'){
      this.setState({ hide16: true })
    } else { this.setState({ hide17: true })
    }
  }

  render () {
    const style16 = this.state.hide16 ? {display: 'none'} : {};
    const style17 = this.state.hide17 ? {display: 'none'} : {};
    const { handleSubmit, previousPage } = this.props

    return (
      <form onSubmit={handleSubmit}>
      <div>
        <h3>Institutional Assessment Practices</h3>
      </div>
      <div>
        <div><label>{q12}</label></div>
        <div>
          <Field name="q12" component="select">
            <option value="">Select</option>
            {oftenOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q12" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q13}</label></div>
        <div>
          <Field name="q13" component="select">
            <option value="">Select</option>
            {oftenOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q13" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q14}</label></div>
        <div>
          <Field name="q14" component="select">
            <option value="">Select</option>
            {oftenOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q14" component={renderError} />
        </div>
      </div>
      <div><h3>Purpose of the Assessment</h3></div>
      <div>
        <div><label>{q15}</label></div>
        <div>
          <label><Field name="q15" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q15" component="input" type="radio" value="No" /> No</label>
        </div>
        <div>
          <Field name="q15" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q16a}</label></div>
        <div>
          <label><Field name="q16a" component="input" type="radio" value="Yes" onChange={this.showFields} /> Yes</label>
          <label><Field name="q16a" component="input" type="radio" value="No" onChange={this.hideFields}/> No</label>
        </div>
        <div>
          <Field name="q16a" component={renderError} />
        </div>
      </div>
      <div style={style16}>
        <div><label>{q16b}</label></div>
        <div>
          <Field name="q16b" component="input" type="text">
          </Field>
          <Field name="q16b" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q17a}</label></div>
        <div>
          <label><Field name="q17a" component="input" type="radio" value="Yes" onChange={this.showFields} /> Yes</label>
          <label><Field name="q17a" component="input" type="radio" value="No" onChange={this.hideFields}/> No</label>
        </div>
        <div>
          <Field name="q17a" component={renderError} />
        </div>
      </div>
      <div style={style17}>
        <div><label>{q17b}</label></div>
        <div>
          <Field name="q17b" component="input" type="text">
          </Field>
          <Field name="q17b" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q18}</label></div>
        <div>
          <label><Field name="q18" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q18" component="input" type="radio" value="No" /> No</label>
        </div>
        <div>
          <Field name="q18" component={renderError} />
        </div>
      </div>
      <div><h3>Importance of Oral Communication Tasks</h3></div>
      <div>
        <div><label>{q19}</label></div>
        <div>
          <Field name="q19" component="select">
            <option value="">Select</option>
            {importanceOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q19" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q20}</label></div>
        <div>
          <Field name="q20" component="select">
            <option value="">Select</option>
            {importanceOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q20" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q21}</label></div>
        <div>
          <Field name="q21" component="select">
            <option value="">Select</option>
            {importanceOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q21" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q22}</label></div>
        <div>
          <Field name="q22" component="select">
            <option value="">Select</option>
            {importanceOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q22" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q23}</label></div>
        <div>
          <Field name="q23" component="select">
            <option value="">Select</option>
            {importanceOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q23" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q24}</label></div>
        <div>
          <Field name="q24" component="select">
            <option value="">Select</option>
            {importanceOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q24" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q25}</label></div>
        <div>
          <Field name="q25" component="select">
            <option value="">Select</option>
            {importanceOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q25" component={renderError} />
        </div>
      </div>
      <div><h3>Use of Oral Communication Tasks</h3></div>
      <div>
        <div><label>{q26}</label></div>
        <div>
          <Field name="q26" component="select">
            <option value="">Select</option>
            {oftenOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q26" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q27}</label></div>
        <div>
          <Field name="q27" component="select">
            <option value="">Select</option>
            {oftenOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q27" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q28}</label></div>
        <div>
          <Field name="q28" component="select">
            <option value="">Select</option>
            {oftenOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q28" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q29}</label></div>
        <div>
          <Field name="q29" component="select">
            <option value="">Select</option>
            {oftenOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q29" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q30}</label></div>
        <div>
          <Field name="q30" component="select">
            <option value="">Select</option>
            {oftenOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q30" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q31}</label></div>
        <div>
          <Field name="q31" component="select">
            <option value="">Select</option>
            {oftenOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q31" component={renderError} />
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
  if (!values.q12) {
    errors.q12 = 'Required'
  }
  if (!values.q13) {
    errors.q13 = 'Required'
  }
  if (!values.q14) {
    errors.q14 = 'Required'
  }
  if (!values.q15) {
    errors.q15 = 'Required'
  }
  if (!values.q16a) {
    errors.q16a = 'Required'
  }
  if (!values.q17a) {
    errors.q17a = 'Required'
  }
  if (!values.q18) {
    errors.q18 = 'Required'
  }
  if (!values.q19) {
    errors.q19 = 'Required'
  }
  if (!values.q20) {
    errors.q20 = 'Required'
  }
  if (!values.q21) {
    errors.q21 = 'Required'
  }
  if (!values.q22) {
    errors.q22 = 'Required'
  }
  if (!values.q23) {
    errors.q23 = 'Required'
  }
  if (!values.q24) {
    errors.q24 = 'Required'
  }
  if (!values.q25) {
    errors.q25 = 'Required'
  }
  if (!values.q26) {
    errors.q26 = 'Required'
  }
  if (!values.q27) {
    errors.q27 = 'Required'
  }
  if (!values.q28) {
    errors.q28 = 'Required'
  }
  if (!values.q29) {
    errors.q29 = 'Required'
  }
  if (!values.q30) {
    errors.q30 = 'Required'
  }
  if (!values.q31) {
    errors.q31 = 'Required'
  }
  if (values.q16a !== 'No' && !values.q16b) {
    errors.q16b = 'Required'
  }
  if (values.q17a !== 'No' && !values.q17b) {
    errors.q17b = 'Required'
  }
  return errors
}

export default reduxForm({
  form: 'OA', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  //validate
})(OAFourthPage)

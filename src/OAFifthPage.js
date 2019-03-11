import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import { oftenOptions, extentOptions } from './Components/DropdownOptions'

const q32 = 'How often do you intend to use ungraded demonstrations?'
const q33 = 'How often do you intend to use ungraded presentations?'
const q34 = 'How often do you intend to use ungraded groupwork?'
const q35 = 'To what extent do you tailor how you teach to the assessment method?'
const q36 = 'To what extent do you explain the behavioural expectations that you have of your students?'
const q37 = 'To what extent do you make students aware of how your teaching relates to their assessment?'
const q38 = 'Will the assessment require you to teach specific skills before students are able to perform the task?' 
const q39 = 'How often do you explain local vocabulary, informal language, metaphors, and cultural references?'
const q40 = 'Do you primarily use simple sentences to deliver instructions?'
const q41 = 'To what extent do you intervene when you observe other students within your class engaging in behaviours that show cultural insensitivity, racial biases or stereotyping?'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

class OAFifthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide16: true,
      hide17: true,
    };
  }

  render () {
    const { handleSubmit, previousPage, savePage } = this.props

    return (
      <form onSubmit={handleSubmit}>
      <div>
        <h3>Classroom Practices</h3>
      </div>
      <div>
        <div><label>{q32}</label></div>
        <div>
          <Field name="q32" component="select">
            <option value="">Select</option>
            {oftenOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q32" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q33}</label></div>
        <div>
          <Field name="q33" component="select">
            <option value="">Select</option>
            {oftenOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q33" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q34}</label></div>
        <div>
          <Field name="q34" component="select">
            <option value="">Select</option>
            {oftenOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q34" component={renderError} />
        </div>
      </div>
      <div><h3>Instructional Practices</h3></div>
      <div>
        <div><label>{q35}</label></div>
        <div>
          <Field name="q35" component="select">
            <option value="">Select</option>
            {extentOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q35" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q36}</label></div>
        <div>
          <Field name="q36" component="select">
            <option value="">Select</option>
            {extentOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q36" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q37}</label></div>
        <div>
          <Field name="q37" component="select">
            <option value="">Select</option>
            {extentOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q37" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q38}</label></div>
        <div>
          <label><Field name="q38" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q38" component="input" type="radio" value="No" /> No</label>
          <label><Field name="q38" component="input" type="radio" value="Maybe" /> Maybe</label>
        </div>
        <div>
          <Field name="q38" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q39}</label></div>
        <div>
          <Field name="q39" component="select">
            <option value="">Select</option>
            {oftenOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q39" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q40}</label></div>
        <div>
          <label><Field name="q40" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q40" component="input" type="radio" value="No" /> No</label>
        </div>
        <div>
          <Field name="q40" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q41}</label></div>
        <div>
          <Field name="q41" component="select">
            <option value="">Select</option>
            {extentOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q41" component={renderError} />
        </div>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="button" onClick={savePage}>
          Save page
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
  if (!values.q32) {
    errors.q32 = 'Required'
   }
  if (!values.q33) {
    errors.q33 = 'Required'
  }
  if (!values.q34) {
    errors.q34 = 'Required'
  }
  if (!values.q35) {
    errors.q35 = 'Required'
  }
  if (!values.q36) {
    errors.q36 = 'Required'
  }
  if (!values.q37) {
    errors.q37 = 'Required'
  }
  if (!values.q38) {
    errors.q38 = 'Required'
  }
  if (!values.q39) {
    errors.q39 = 'Required'
  }
  if (!values.q40) {
    errors.q40 = 'Required'
  }
  if (!values.q41) {
    errors.q41 = 'Required'
  }
  return errors
}

export default reduxForm({
  form: 'OA', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  //validate
})(OAFifthPage)

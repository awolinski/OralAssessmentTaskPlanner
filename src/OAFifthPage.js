import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import { oftenOptions, extentOptions } from './Components/DropdownOptions'

export const q32 = 'How often do you intend to use ungraded demonstrations?'
export const q33 = 'How often do you intend to use ungraded presentations?'
export const q34 = 'How often do you intend to use ungraded groupwork?'
export const q35 = 'To what extent do you tailor how you teach to the assessment method?'
export const q36 = 'To what extent do you explain the behavioural expectations that you have of your students?'
export const q37 = 'To what extent do you make students aware of how your teaching relates to their assessment?'
export const q38 = 'Will the assessment require you to teach specific skills before students are able to perform the task?' 
export const q39 = 'How often do you explain local vocabulary, informal language, metaphors, and cultural references?'
export const q40 = 'Do you primarily use simple sentences to deliver instructions?'
export const q41 = 'To what extent do you intervene when you observe other students within your class engaging in behaviours that show cultural insensitivity, racial biases or stereotyping?'

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
    const { handleSubmit, previousPage } = this.props
    const formSheet =  this.props.printStyle ? this.props.printStyle : {"font-size": "40px", "position": "absolute", "top": "3%", "left": "25%", "font-weight": "200"}
    const heading = {"font-weight": "250", "font-size": "30px", "textAlign": "center", "margin-top": "25px", "margin-bottom": "15px"}

    return (
      <form onSubmit={handleSubmit} style={formSheet}>
      <div><br/><br/>
        <div style={heading}>Classroom Practices</div>
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
      <div><br/><br/>
        <div style={heading}>Instructional Practices</div>
      </div>
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
  form: 'OA',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(OAFifthPage)

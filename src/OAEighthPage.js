import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'

export const q56 = 'Do you provide written instructions?'
export const q57 = 'Do you provide oral instructions?'
export const q58 = 'Is the expected content of the assessment known to students?'
export const q59 = 'Is the expected content of the assessment related to the course material?'
export const q60a = 'Do students understand how they will be assessed?'
export const q60b = 'How do you know this?'
export const q61a = 'Can your students understand the instructions that accompany an assessment?'
export const q61b = 'How do you know this?'
export const q62a = 'Can your students understand the grading procedures that you use?'
export const q62b = 'How do you know this?'
export const q63 = 'Do all students have access to the same information about the test and its administration?'
export const q64 = 'Is information regarding the assessment purpose, format, and administration (time, place, etc.) available ahead of time and in accessible formats?'
export const q65 = 'Are students familiar with the format and procedures used?'
export const q66 = 'Does the assessment material contain controversial or potentially inflammatory content? (e.g., religion, evolution, etc.)'
export const q67 = 'Does the assessment material depict groups in stereotyped situations? (e.g., a Chinese person running a laundromat or girls needing help with problems)'
export const q68 = 'Does the assessment method account for introverted students?'
export const q69 = 'Do you use culturally-specific content?'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

class OAEighthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide60: true,
      hide61: true,
      hide62: true,
    };
  this.showFields = this.showFields.bind(this)
  this.hideFields = this.hideFields.bind(this)
  }
  
  showFields(values) {
    if(values.target.name === 'q60a'){
      this.setState({ hide60: false })
    } else if (values.target.name === 'q61a') {
      this.setState({ hide61: false })
    } else if (values.target.name === 'q62a') {
      this.setState({ hide62: false })
    }
  }
  
  hideFields(values) {
    if(values.target.name === 'q60a'){
      this.setState({ hide60: true })
    } else if (values.target.name === 'q61a') {
      this.setState({ hide61: true })
    } else if (values.target.name === 'q62a') {
      this.setState({ hide62: true })
    }
  }

  render () {
    const style60 = this.state.hide60 ? {display: 'none'} : {};
    const style61 = this.state.hide61 ? {display: 'none'} : {};
    const style62 = this.state.hide62 ? {display: 'none'} : {};
    const formSheet =  this.props.printStyle ? this.props.printStyle : {"font-size": "40px", "position": "absolute", "top": "3%", "left": "25%", "font-weight": "200"}
    const heading = {"font-weight": "250", "font-size": "30px", "textAlign": "center", "margin-top": "25px", "margin-bottom": "15px"}

    const { handleSubmit, previousPage } = this.props

    return (
      <form onSubmit={handleSubmit} style={formSheet}>
      <div><br/><br/>
        <div style={heading}>Student Preparation</div>
      </div>
      <div>
        <div><label>{q56}</label></div>
        <div>
          <label><Field name="q56" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q56" component="input" type="radio" value="No" /> No</label>
          <Field name="q56" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q57}</label></div>
        <div>
          <label><Field name="q57" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q57" component="input" type="radio" value="No" /> No</label>
          <Field name="q57" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q58}</label></div>
        <div>
          <label><Field name="q58" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q58" component="input" type="radio" value="No" /> No</label>
          <label><Field name="q58" component="input" type="radio" value="Don't know" /> Don't know</label>
          <Field name="q58" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q59}</label></div>
        <div>
          <label><Field name="q59" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q59" component="input" type="radio" value="No" /> No</label>
          <label><Field name="q59" component="input" type="radio" value="Don't know" /> Don't know</label>
          <Field name="q59" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q60a}</label></div>
        <div>
          <label><Field name="q60a" component="input" type="radio" value="Yes" onChange={this.showFields}/> Yes</label>
          <label><Field name="q60a" component="input" type="radio" value="No" onChange={this.hideFields}/> No</label>
          <label><Field name="q60a" component="input" type="radio" value="Don't know"/> Don't know</label>
          <Field name="q60a" component={renderError} />
        </div>
      </div>
      <div style={style60}>
        <div><label>{q60b}</label></div>
        <div>
          <Field name="q60b" component="input" type="text">
          </Field>
          <Field name="q60b" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q61a}</label></div>
        <div>
          <label><Field name="q61a" component="input" type="radio" value="Yes" onChange={this.showFields}/> Yes</label>
          <label><Field name="q61a" component="input" type="radio" value="No" onChange={this.hideFields}/> No</label>
          <label><Field name="q61a" component="input" type="radio" value="Don't know"/> Don't know</label>
          <Field name="q61a" component={renderError} />
        </div>
      </div>
      <div style={style61}>
        <div><label>{q61b}</label></div>
        <div>
          <Field name="q61b" component="input" type="text">
          </Field>
          <Field name="q61b" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q62a}</label></div>
        <div>
          <label><Field name="q62a" component="input" type="radio" value="Yes" onChange={this.showFields}/> Yes</label>
          <label><Field name="q62a" component="input" type="radio" value="No" onChange={this.hideFields}/> No</label>
          <label><Field name="q62a" component="input" type="radio" value="Don't know"/> Don't know</label>
          <Field name="q62a" component={renderError} />
        </div>
      </div>
      <div style={style62}>
        <div><label>{q62b}</label></div>
        <div>
          <Field name="q62b" component="input" type="text">
          </Field>
          <Field name="q62b" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q63}</label></div>
        <div>
          <label><Field name="q63" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q63" component="input" type="radio" value="No" /> No</label>
          <Field name="q63" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q64}</label></div>
        <div>
          <label><Field name="q64" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q64" component="input" type="radio" value="No" /> No</label>
          <Field name="q64" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q65}</label></div>
        <div>
          <label><Field name="q65" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q65" component="input" type="radio" value="No" /> No</label>
          <Field name="q65" component={renderError} />
        </div>
      </div>
      <div><br/><br/>
        <div style={heading}>Student Inclusion</div>
      </div>
      <div>
        <div><label>{q66}</label></div>
        <div>
          <label><Field name="q66" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q66" component="input" type="radio" value="No" /> No</label>
          <label><Field name="q66" component="input" type="radio" value="Maybe" /> Maybe</label>
          <Field name="q66" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q67}</label></div>
        <div>
          <label><Field name="q67" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q67" component="input" type="radio" value="No" /> No</label>
          <label><Field name="q67" component="input" type="radio" value="Don't know" /> Don't know</label>
          <Field name="q67" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q68}</label></div>
        <div>
          <label><Field name="q68" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q68" component="input" type="radio" value="No" /> No</label>
          <label><Field name="q68" component="input" type="radio" value="Maybe" /> Maybe</label>
          <Field name="q68" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q69}</label></div>
        <div>
          <label><Field name="q69" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q69" component="input" type="radio" value="No" /> No</label>
          <label><Field name="q69" component="input" type="radio" value="Don't know" /> Don't know</label>
          <Field name="q69" component={renderError} />
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
  if (!values.q56) {
    errors.q56 = 'Required'
   }
  if (!values.q57) {
    errors.q57 = 'Required'
  }
  if (!values.q58) {
    errors.q58 = 'Required'
  }
  if (!values.q59) {
    errors.q59 = 'Required'
  }
  if (!values.q60a) {
    errors.q60a = 'Required'
  }
  if (!values.q61a) {
    errors.q61a = 'Required'
  }
  if (!values.q62a) {
    errors.q62a = 'Required'
  }
  if (!values.q63) {
    errors.q63 = 'Required'
  }
  if (!values.q64) {
    errors.q64 = 'Required'
  }
  if (!values.q65) {
    errors.q65 = 'Required'
  }
  if (!values.q66) {
    errors.q66 = 'Required'
  }
  if (!values.q67) {
    errors.q67 = 'Required'
  }
  if (!values.q68) {
    errors.q68 = 'Required'
  }
  if (!values.q69) {
    errors.q69 = 'Required'
  }
  if (values.q60a === 'Yes' && !values.q60b) {
    errors.q60b = 'Required'
  }
  if (values.q61a === 'Yes' && !values.q61b) {
    errors.q61b = 'Required'
  }
  if (values.q62a === 'Yes' && !values.q62b) {
    errors.q62b = 'Required'
  }

  return errors
}

export default reduxForm({
  form: 'OA',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(OAEighthPage)

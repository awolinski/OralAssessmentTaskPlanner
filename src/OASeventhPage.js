import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import { formalityOptions, somewhatOptions, numberOfMarkers, resolvingDifferences } from './Components/DropdownOptions'

const q47a = 'Are you expecting a formal academic performance?'
const q47b = 'What level of formality do you expect in the interaction or presentation to have?'
const q48a = 'Do you have criteria for grading?'
const q48b = 'Are you using established criteria?'
const q48c = 'Can each of the criterion be measured independently?'
const q48d = 'Do the criteria adequately distinguish different levels of performance?' 
const q48e = 'Do your criteria clearly and explicitly describe student performance?'
const q48f = 'Do your criteria disadvantage students with non-majority accents?'
const q49 = 'To what degree is the assessment interactive?'
const q50 = 'How many people will be marking the task?'
const q51a = 'Are other instructional staff or an outside assessor helping?'
const q51b = 'Will self-assessment be used?'
const q51c = 'Are students assessing each other’s work?'
const q51d = 'How will you resolve differences in scoring between assessors?'
const q51e = 'Will you train the other assessors?'
const q52 = 'How do you intend to train the other assessors?'
const q53 = 'How do you plan to communicate the criteria?'
const q54 = 'Do you verify (i.e., double check) the grades that you assign?'
const q55 = 'Do you plan to use more than 1 assessment method or task to determine the student grades?'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

class OASeventhPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide47: true,
      hide48: true,
      hide51: true,
      hide51e: true,
    };
  this.showFields = this.showFields.bind(this)
  this.hideFields = this.hideFields.bind(this)
  }
  
  showFields(values) {
    if(values.target.name === 'q47a'){
      this.setState({ hide47: false })
    } else if (values.target.name === 'q48a') {
      this.setState({ hide48: false })
    } else if (values.target.name === 'q51a') {
      this.setState({ hide51: false })
    } else if (values.target.name === 'q51e') {
      this.setState({ hide51e: false })
    }
  }
  
  hideFields(values) {
    if(values.target.name === 'q47a'){
      this.setState({ hide47: true })
    } else if (values.target.name === 'q48a') {
      this.setState({ hide48: true })
    } else if (values.target.name === 'q51a') {
      this.setState({ hide51: true })
    } else if (values.target.name === 'q51e') {
      this.setState({ hide51e: true })
    }
  }

  render () {
    const style47 = this.state.hide47 ? {display: 'none'} : {};
    const style48 = this.state.hide48 ? {display: 'none'} : {};
    const style51 = this.state.hide51 ? {display: 'none'} : {};
    const style51e = this.state.hide51e ? {display: 'none'} : {};
    const { handleSubmit, previousPage } = this.props

    return (
      <form onSubmit={handleSubmit}>
      <div>
        <h3>Assessment Criteria</h3>
      </div>
      <div>
        <div><label>{q47a}</label></div>
        <div>
          <label><Field name="q47a" component="input" type="radio" value="Yes" onChange={this.showFields} /> Yes</label>
          <label><Field name="q47a" component="input" type="radio" value="No" onChange={this.hideFields} /> No</label>
          <label><Field name="q47a" component="input" type="radio" value="Maybe" onChange={this.showFields} /> Maybe</label>
        </div>
        <div>
          <Field name="q47a" component={renderError} />
        </div>
      </div>
      <div style={style47}>
        <div><label>{q47b}</label></div>
        <div>
          <Field name="q47b" component="select">
            <option value="">Select</option>
            {formalityOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q47b" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q48a}</label></div>
        <div>
          <label><Field name="q48a" component="input" type="radio" value="Yes" onChange={this.showFields} /> Yes</label>
          <label><Field name="q48a" component="input" type="radio" value="No" onChange={this.hideFields} /> No</label>
        </div>
        <div>
          <Field name="q48a" component={renderError} />
        </div>
      </div>
      <div style={style48}>
        <div><label>{q48b}</label></div>
        <div>
          <label><Field name="q48b" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q48b" component="input" type="radio" value="No" /> No</label>
        </div>
        <div>
          <Field name="q48b" component={renderError} />
        </div>
      </div>
      <div style={style48}>
        <div><label>{q48c}</label></div>
        <div>
          <label><Field name="q48c" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q48c" component="input" type="radio" value="No" /> No</label>
          <label><Field name="q48c" component="input" type="radio" value="Don't know" /> Don't know</label>
        </div>
        <div>
          <Field name="q48c" component={renderError} />
        </div>
      </div>
      <div style={style48}>
        <div><label>{q48d}</label></div>
        <div>
          <label><Field name="q48d" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q48d" component="input" type="radio" value="No" /> No</label>
          <label><Field name="q48d" component="input" type="radio" value="Don't know" /> Don't know</label>
        </div>
        <div>
          <Field name="q48d" component={renderError} />
        </div>
      </div>
      <div style={style48}>
        <div><label>{q48e}</label></div>
        <div>
          <label><Field name="q48e" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q48e" component="input" type="radio" value="No" /> No</label>
          <label><Field name="q48e" component="input" type="radio" value="Don't know" /> Don't know</label>
        </div>
        <div>
          <Field name="q48e" component={renderError} />
        </div>
      </div>
      <div style={style48}>
        <div><label>{q48f}</label></div>
        <div>
          <label><Field name="q48f" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q48f" component="input" type="radio" value="No" /> No</label>
          <label><Field name="q48f" component="input" type="radio" value="Don't know" /> Don't know</label>
        </div>
        <div>
          <Field name="q48f" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q49}</label></div>
        <div>
          <Field name="q49" component="select">
            <option value="">Select</option>
            {somewhatOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q49" component={renderError} />
        </div>
      </div>
      <div>
        <h3>Scoring Practices</h3>
      </div>
      <div>
        <div><label>{q50}</label></div>
        <div>
          <Field name="q50" component="select">
            <option value="">Select</option>
            {numberOfMarkers.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q50" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q51a}</label></div>
        <div>
          <label><Field name="q51a" component="input" type="radio" value="Yes" onChange={this.showFields} /> Yes</label>
          <label><Field name="q51a" component="input" type="radio" value="No" onChange={this.hideFields} /> No</label>
          <label><Field name="q51a" component="input" type="radio" value="Maybe" onChange={this.showFields} /> Maybe</label>
        </div>
        <div>
          <Field name="q51a" component={renderError} />
        </div>
      </div>
      <div style={style51}>
        <div><label>{q51b}</label></div>
        <div>
          <label><Field name="q51b" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q51b" component="input" type="radio" value="No" /> No</label>
          <label><Field name="q51b" component="input" type="radio" value="Maybe" /> Maybe</label>
        </div>
        <div>
          <Field name="q51b" component={renderError} />
        </div>
      </div>
      <div style={style51}>
        <div><label>{q51c}</label></div>
        <div>
          <label><Field name="q51c" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q51c" component="input" type="radio" value="No" /> No</label>
          <label><Field name="q51c" component="input" type="radio" value="Maybe" /> Maybe</label>
        </div>
        <div>
          <Field name="q51c" component={renderError} />
        </div>
      </div>
      <div style={style51}>
        <div><label>{q51d}</label></div>
        <div>
          <Field name="q51d" component="select">
            <option value="">Select</option>
            {resolvingDifferences.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q51d" component={renderError} />
        </div>
      </div>
      <div style={style51}>
        <div><label>{q51e}</label></div>
        <div>
          <label><Field name="q51e" component="input" type="radio" value="Yes" onChange={this.showFields} /> Yes</label>
          <label><Field name="q51e" component="input" type="radio" value="No" onChange={this.hideFields} /> No</label>
          <label><Field name="q51e" component="input" type="radio" value="Maybe" onChange={this.showFields} /> Maybe</label>
        </div>
        <div>
          <Field name="q51e" component={renderError} />
        </div>
      </div>
      <div style={style51e}>
        <div><label>{q52}</label></div>
        <div>
          <Field name="q52" component="input" type="text">
          </Field>
          <Field name="q52" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q53}</label></div>
        <div>
          <Field name="q53" component="input" type="text">
          </Field>
          <Field name="q53" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q54}</label></div>
        <div>
          <label><Field name="q54" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q54" component="input" type="radio" value="No" /> No</label>
        </div>
        <div>
          <Field name="q54" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q55}</label></div>
        <div>
          <label><Field name="q55" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q55" component="input" type="radio" value="No" /> No</label>
        </div>
        <div>
          <Field name="q55" component={renderError} />
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
  if (!values.q47a) {
    errors.q47a = 'Required'
   }
  if (!values.q48a) {
    errors.q48a = 'Required'
  }
  if (!values.q49) {
    errors.q49 = 'Required'
  }
  if (!values.q50) {
    errors.q50 = 'Required'
  }
  if (!values.q51a) {
    errors.q51a = 'Required'
  }
  if (!values.q53) {
    errors.q53 = 'Required'
  }
  if (!values.q54) {
    errors.q54 = 'Required'
  }
  if (!values.q55) {
    errors.q55 = 'Required'
  }
  if (values.q47a !== 'No' && !values.q47b) {
    errors.q47b = 'Required'
  }
  if (values.q48a !== 'No' && !values.q48b) {
    errors.q48b = 'Required'
  }
  if (values.q48a !== 'No' && !values.q48c) {
    errors.q48c = 'Required'
  }
  if (values.q48a !== 'No' && !values.q48d) {
    errors.q48d = 'Required'
  }
  if (values.q48a !== 'No' && !values.q48e) {
    errors.q48e = 'Required'
  }
  if (values.q48a !== 'No' && !values.q48f) {
    errors.q48f = 'Required'
  }
  if (values.q51a !== 'No' && !values.q51b) {
    errors.q51b = 'Required'
  }
  if (values.q51a !== 'No' && !values.q51c) {
    errors.q51c = 'Required'
  }
  if (values.q51a !== 'No' && !values.q51d) {
    errors.q51d = 'Required'
  }
  if (values.q51a !== 'No' && !values.q51e) {
    errors.q51e = 'Required'
  }
  if (values.q51e !== 'No' && !values.q52) {
    errors.q52 = 'Required'
  }

  return errors
}

export default reduxForm({
  form: 'OA',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  //validate
})(OASeventhPage)

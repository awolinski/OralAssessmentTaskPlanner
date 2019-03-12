import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import { recordingOptions, observerOptions, timeOptions } from './Components/DropdownOptions'

const q42a = 'Do you plan to record student performances?'
const q42b = 'I will record'
const q42c = 'Will they be told that they are going to be recorded?'
const q42d = 'Will they be given a copy of the recording?'
const q43a = 'Will they be performing in front of an audience?'
const q43b = 'Who will be in the audience?'
const q44a = 'Will students have to respond to questions or comments?'
const q44b = 'Who will be asking questions or commenting?'
const q45a = 'Will students have to comment or ask questions?'
const q45b = 'Who will they be talking with?'
const q46 = 'What time constraints do you impose on oral performance tasks?' 

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

class OASixthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide42: true,
      hide43: true,
      hide44: true,
      hide45: true,
    };
  this.showFields = this.showFields.bind(this)
  this.hideFields = this.hideFields.bind(this)
  }
  
  showFields(values) {
    if(values.target.name === 'q42a'){
      this.setState({ hide42: false })
    } else if (values.target.name === 'q43a') {
      this.setState({ hide43: false })
    } else if (values.target.name === 'q44a') {
      this.setState({ hide44: false })
    } else if (values.target.name === 'q45a') {
      this.setState({ hide45: false })
    }
  }
  
  hideFields(values) {
    if(values.target.name === 'q42a'){
      this.setState({ hide42: true })
    } else if (values.target.name === 'q43a') {
      this.setState({ hide43: true })
    } else if (values.target.name === 'q44a') {
      this.setState({ hide44: true })
    } else if (values.target.name === 'q45a') {
      this.setState({ hide45: true })
    }
  }

  render () {
    const style42 = this.state.hide42 ? {display: 'none'} : {};
    const style43 = this.state.hide43 ? {display: 'none'} : {};
    const style44 = this.state.hide44 ? {display: 'none'} : {};
    const style45 = this.state.hide45 ? {display: 'none'} : {};
    const formSheet = {"font-size": "40px", "position": "absolute", "top": "3%", "left": "25%", "font-weight": "200"}
    const heading = {"font-weight": "250", "font-size": "30px", "textAlign": "center", "margin-top": "25px", "margin-bottom": "15px"}

    const { handleSubmit, previousPage, savePage } = this.props

    return (
      <form onSubmit={handleSubmit} style={formSheet}>
      <div><br/><br/>
        <div style={heading}>Assessment Environment</div>
      </div>
      <div>
        <div><label>{q42a}</label></div>
        <div>
          <label><Field name="q42a" component="input" type="radio" value="Yes" onChange={this.showFields} /> Yes</label>
          <label><Field name="q42a" component="input" type="radio" value="No" onChange={this.hideFields} /> No</label>
          <label><Field name="q42a" component="input" type="radio" value="Maybe" onChange={this.showFields} /> Maybe</label>
          <Field name="q42a" component={renderError} />
        </div>
      </div>
      <div style={style42}>
        <div><label>{q42b}</label></div>
        <div>
          <Field name="q42b" component="select">
            <option value="">Select</option>
            {recordingOptions.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q42b" component={renderError} />
        </div>
      </div>
      <div style={style42}>
        <div><label>{q42c}</label></div>
        <div>
          <label><Field name="q42c" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q42c" component="input" type="radio" value="No" /> No</label>
          <label><Field name="q42c" component="input" type="radio" value="Maybe" /> Maybe</label>
          <Field name="q42c" component={renderError} />
        </div>
      </div>
      <div style={style42}>
        <div><label>{q42d}</label></div>
        <div>
          <label><Field name="q42d" component="input" type="radio" value="Yes" /> Yes</label>
          <label><Field name="q42d" component="input" type="radio" value="No" /> No</label>
          <label><Field name="q42d" component="input" type="radio" value="Maybe" /> Maybe</label>
          <Field name="q42d" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q43a}</label></div>
        <div>
          <label><Field name="q43a" component="input" type="radio" value="Yes" onChange={this.showFields} /> Yes</label>
          <label><Field name="q43a" component="input" type="radio" value="No" onChange={this.hideFields} /> No</label>
          <label><Field name="q43a" component="input" type="radio" value="Maybe" onChange={this.showFields} /> Maybe</label>
          <Field name="q43a" component={renderError} />
        </div>
      </div>
      <div style={style43}>
        <div><label className="form-label">{q43b}</label></div>
        <div className="checkbox-group">
          {observerOptions.map(opt => {
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
        <div><label>{q44a}</label></div>
        <div>
          <label><Field name="q44a" component="input" type="radio" value="Yes" onChange={this.showFields} /> Yes</label>
          <label><Field name="q44a" component="input" type="radio" value="No" onChange={this.hideFields} /> No</label>
          <label><Field name="q44a" component="input" type="radio" value="Maybe" onChange={this.showFields} /> Maybe</label>
          <Field name="q44a" component={renderError} />
        </div>
      </div>
      <div style={style44}>
        <div><label className="form-label">{q44b}</label></div>
        <div className="checkbox-group">
          {observerOptions.map(opt => {
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
        <div><label>{q45a}</label></div>
        <div>
          <label><Field name="q45a" component="input" type="radio" value="Yes" onChange={this.showFields} /> Yes</label>
          <label><Field name="q45a" component="input" type="radio" value="No" onChange={this.hideFields} /> No</label>
          <label><Field name="q45a" component="input" type="radio" value="Maybe" onChange={this.showFields} /> Maybe</label>
          <Field name="q45a" component={renderError} />
        </div>
      </div>
      <div style={style45}>
        <div><label className="form-label">{q45b}</label></div>
        <div className="checkbox-group">
          {observerOptions.map(opt => {
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
        <div><label className="form-label">{q46}</label></div>
        <div className="checkbox-group">
          {timeOptions.map(opt => {
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
  if (!values.q42a) {
    errors.q42a = 'Required'
   }
  if (!values.q43a) {
    errors.q43a = 'Required'
  }
  if (!values.q44a) {
    errors.q44a = 'Required'
  }
  if (!values.q45a) {
    errors.q45a = 'Required'
  }
  if (!values.q46) {
    errors.q46 = 'Required'
  }
  if (values.q42a !== 'No' && !values.q42b) {
    errors.q42b = 'Required'
  }
  if (values.q42a !== 'No' && !values.q42c) {
    errors.q42c = 'Required'
  }
  if (values.q42a !== 'No' && !values.q42d) {
    errors.q42d = 'Required'
  }
  if (values.q43a !== 'No' && !values.q43b) {
    errors.q43b = 'Required'
  }
  if (values.q44a !== 'No' && !values.q44b) {
    errors.q44b = 'Required'
  }
  if (values.q45a !== 'No' && !values.q45b) {
    errors.q45b = 'Required'
  }

  return errors
}

export default reduxForm({
  form: 'OA',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(OASixthPage)

import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { languageLevel, languageLevelIelts } from './Components/DropdownOptions'

export const q9 = 'What is the minimum English proficiency that is needed for acceptance to your institution?'
export const q10 = 'What resources does your institution provide for second language learners?'
export const q11a = 'Do your students need evidence of their English proficiency level to obtain employment following graduation?'
export const q11b = 'What type of evidence is required?'
export const q11c = 'Does your institution provide a way for students to obtain this evidence?'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

class OAThirdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true,
    };
  this.showFields = this.showFields.bind(this)
  this.hideFields = this.hideFields.bind(this)
  this.openToeflScoring = this.openToeflScoring.bind(this)
  this.openIeltsScoring = this.openIeltsScoring.bind(this)
  this.openToeicScoring = this.openToeicScoring.bind(this)
  }

  showFields() {
    this.setState({ hide: false })
  }

  hideFields() {
    this.setState({ hide: true })
  }

  openToeflScoring() {
    window.open('https://www.etsglobal.org/content/download/14151/231263/version/4/file/Understanding+your+TOEFL+Primary+Speaking+Score+Reports.pdf')
  }

  openIeltsScoring() {
    window.open('https://takeielts.britishcouncil.org/sites/default/files/2018-01/Speaking%20Band%20descriptors_0.pdf')
  }

  openToeicScoring() {
    window.open('https://www.etsglobal.org/Global/Eng/content/download/825/12605/version/4/file/TOEIC+Speaking+and+Writing+Descriptor+-+MAR090-LR.pdf')
  }

  render () {
    const style = this.state.hide ? {display: 'none'} : {};
    const { handleSubmit, previousPage } = this.props
    const formSheet =  this.props.printStyle ? this.props.printStyle : {"font-size": "40px", "position": "absolute", "top": "3%", "left": "25%", "font-weight": "200"}
    const heading = {"font-weight": "250", "font-size": "30px", "textAlign": "center", "margin-top": "25px", "margin-bottom": "15px"}

    return (
      <form onSubmit={handleSubmit} style={formSheet}>
      <div><br/><br/>
        <div style={heading}>Institution Questions</div>
      </div>
      <div>
        <div><label>{q9}</label></div>
        <div>
          <label>TOEFL iBT</label>
          <Field name="q9a" component="select">
            <option value="">Select</option>
            {languageLevel.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <label>IELTS</label>
          <Field name="q9b" component="select">
            <option value="">Select</option>
            {languageLevelIelts.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <label>TOEIC</label>
          <Field name="q9c" component="select">
            <option value="">Select</option>
            {languageLevel.map(option =>
              <option value={option} key={option}>{option}</option>)}
          </Field>
        </div>
        <div>
          <Field name="q9" component={renderError} />
        </div>
      </div>
      <div><br/><br/>
          <button type="button" className="previous" onClick={this.openToeflScoring}>
            Learn more about TOEFL scores
          </button>
      </div>
      <div>
          <button type="button" className="previous" onClick={this.openIeltsScoring}>
            Learn more about IELTS scores
          </button>
      </div>
      <div>
          <button type="button" className="previous" onClick={this.openToeicScoring}>
            Learn more about TOEIC scores
          </button>
      </div>
      <div>
        <div><label>{q10}</label></div>
        <div>
          <Field name="q10" component="input" type="text">
          </Field>
          <Field name="q10" component={renderError} />
        </div>
      </div>
      <div>
        <div><label>{q11a}</label></div>
        <div>
          <label><Field name="q11a" component="input" type="radio" value="Yes" onChange={this.showFields} /> Yes</label>
          <label><Field name="q11a" component="input" type="radio" value="No" onChange={this.hideFields}/> No</label>
          <label><Field name="q11a" component="input" type="radio" value="Don't Know" onChange={this.showFields}/> Don't know</label>
          <Field name="q11a" component={renderError} />
        </div>
      </div>
      <div style={style}>
        <div><label>{q11b}</label></div>
        <div>
          <Field name="q11b" component="input" type="text" />
        </div>
        <div>
          <Field name="q11b" component={renderError} />
        </div>
      </div>
      <div style={style}>
        <div><label>{q11c}</label></div>
        <div>
          <label><Field name="q11c" component="input" type="radio" value="Yes"/> Yes</label>
          <label><Field name="q11c" component="input" type="radio" value="No"/> No</label>
          <label><Field name="q11c" component="input" type="radio" value="Don't Know"/> Don't know</label>
          <Field name="q11c" component={renderError} />
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
  if (!values.q9a) {
    errors.q9 = 'Required'
  }
  if (!values.q9b) {
    errors.q9 = 'Required'
  }
  if (!values.q9c) {
    errors.q9 = 'Required'
  }
  if (!values.q10) {
    errors.q10 = 'Required'
  }
  if (!values.q11a) {
    errors.q11a = 'Required'
  }
  if (values.q11a !== 'No' && !values.q11b) {
    errors.q11b = 'Required'
  }
  if (values.q11a !== 'No' && !values.q11c) {
    errors.q11c = 'Required'
  }
  return errors
}

export default reduxForm({
  form: 'OA',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(OAThirdPage)

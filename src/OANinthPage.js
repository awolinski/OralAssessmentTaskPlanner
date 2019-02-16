import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'

const r1a = 'Text eg: at best …'
const warningText = 'Text eg: Since you have so few language learners…'
const ar1 = 'Text statemens: eg: You should explain your expectations …'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

class OANinthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warning: true,
    };

  this.showFields = this.showFields.bind(this)
  }
  
  showFields(values) {
    console.log('Toggle warning message here')
  }

  render () {
    const { handleSubmit, previousPage, formValues } = this.props
    const warningStyle = this.state.warning ? {display: 'none'} : {};

    return (
      <form onSubmit={handleSubmit}>
      <div>
        <h3>Recommendations</h3>
      </div>
      <div>Your institution’s minimum English proficiency requirements: 
        TOEFL ibt - {formValues.q9a} IELTS - {formValues.q9b} TOEIC - {formValues.q9c}
      </div>
      <div>{r1a}</div><br/>
      <table>
        <thead>
          <tr>
            <th>Assessment Method</th>
            <th>Recommended Level</th>
            <th>Factors that support this assessment method</th>
            <th>Suggested Improvements</th>
            <th>Minimum Recommended English Proficiency</th>
            <th>Additional Recommendations</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Interviews</th>
          </tr>
          <tr>
            <th>Oral Exams</th>
          </tr>
          <tr>
            <th>Group Work (discussions)</th>
          </tr>
          <tr>
            <th>Presentations</th>
          </tr>
          <tr>
            <th>Demonstrations</th>
          </tr>
          <tr>
            <th>Participation</th>
          </tr>
          <tr>
            <th>Role Play / Simulation</th>
          </tr>
          <tr>
            <th>Speaking Portfolio</th>
          </tr>
        </tbody>
      </table>
      <div>
        <h3 style={warningStyle}>{warningText}</h3>
      </div>
      <div>
        <h3>Additional Recommendations</h3>
      </div>
      <div>{ar1}</div>

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

export default reduxForm({
  form: 'OA',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(OANinthPage)

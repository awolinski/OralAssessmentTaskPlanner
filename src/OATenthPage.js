import React from 'react'
import { Field, reduxForm } from 'redux-form'

const reminder = 'Please keep your chosen methods in mind when answering these questions.'
const chose = 'You chose: '
const pq1 = 'How do you ensure that students from different backgrounds work together?'
const pq2 = 'How do you ensure that your assessments provide ALL students with an equal opportunity to demonstrate their knowledge or skills?'
const pq3 = 'How do you ensure that your assessment methods measure what you intend?'
const pq4 = 'How do you ensure that ALL students have an equal opportunity to participate in the assessment?'
const pq5 = 'What procedures have you put in place to ensure equal participation and interaction between students?'
const pq6 = 'How do you ensure that you are not imposing your personal values on students?'
const pq7 = 'How do you accomodate different student needs and world views?'
const pq8 = 'How will you mitigate any potential repercussions that the assessment method may have?'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

const OATenthPage = props => {
  const { handleSubmit, previousPage, formValues } = props

  // TODO: fix the below code otherwise commas in wrong places depending on selection
  // These values aren't coming through
  const method1 = formValues.interviews ? formValues.interviews : ''
  const method2 = formValues.oralExams ? `, ${formValues.oralExams}` : ''
  const method3 = formValues.groupWork ? `, ${formValues.groupWork}` : ''
  const method4 = formValues.presentations ? `, ${formValues.presentations}` : ''
  const method5 = formValues.demonstrations ? `, ${formValues.demonstrations}` : ''
  const method6 = formValues.participation ? `, ${formValues.participation}` : ''
  const method7 = formValues.simulation ? `, ${formValues.simulation}` : ''
  const method8 = formValues.portfolio ? `, ${formValues.portfolio}` : ''

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Planning Questions</h3>
      </div>
      <div>{reminder}</div>
      <div>{chose}{method1}{method2}{method3}{method4}{method5}{method6}{method7}{method8}</div>
      <div>
        <div><label>{pq1}</label></div>
        <div>
          <Field name="pq1" component="input" type="text">
          </Field>
        </div>
      </div>
      <div>
        <div><label>{pq2}</label></div>
        <div>
          <Field name="pq2" component="input" type="text">
          </Field>
        </div>
      </div>
      <div>
        <div><label>{pq3}</label></div>
        <div>
          <Field name="pq3" component="input" type="text">
          </Field>
        </div>
      </div>
      <div>
        <div><label>{pq4}</label></div>
        <div>
          <Field name="pq4" component="input" type="text">
          </Field>
        </div>
      </div>
      <div>
        <div><label>{pq5}</label></div>
        <div>
          <Field name="pq5" component="input" type="text">
          </Field>
        </div>
      </div>
      <div>
        <div><label>{pq6}</label></div>
        <div>
          <Field name="pq6" component="input" type="text">
          </Field>
        </div>
      </div>
      <div>
        <div><label>{pq7}</label></div>
        <div>
          <Field name="pq7" component="input" type="text">
          </Field>
        </div>
      </div>
      <div>
        <div><label>{pq8}</label></div>
        <div>
          <Field name="pq8" component="input" type="text">
          </Field>
        </div>
      </div>
    <div>
        <h3>Goodluck with your class!</h3>
      </div>
      <a href="mailto:?Subject=Simple Share Buttons&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 https://simplesharebuttons.com">
          <img src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" />
      </a>
      <a href="javascript:;" onclick="window.print()">
        <img src="https://simplesharebuttons.com/images/somacro/print.png" alt="Print" />
    </a>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">
          Start over
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'OA',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(OATenthPage)

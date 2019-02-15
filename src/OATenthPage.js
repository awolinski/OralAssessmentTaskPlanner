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

const getChoices = (values) =>{
  console.log(values)
}

const OATenthPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Planning Questions</h3>
      </div>
      <div>{reminder}</div>
      <div>{chose}</div>
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

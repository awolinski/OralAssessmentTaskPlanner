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

const OATenthPage = props => {
  const formSheet = {"font-size": "40px", "position": "absolute", "top": "3%", "left": "25%", "font-weight": "200"}
  const text = {"font-size": "15px", "font-weight": "225"}
  const { handleSubmit, previousPage, formValues, savePage } = props

  let methods = []
  formValues.interviewsSelect ? methods.push('Interviews') : ''
  formValues.oralExamsSelect ? methods.push('Oral Exams') : ''
  formValues.groupWorkSelect ? methods.push('Group Work / Discussions') : ''
  formValues.presentationsSelect ? methods.push('Presentations') : ''
  formValues.demonstrationsSelect ? methods.push('Demonstrations') : ''
  formValues.participationSelect ? methods.push('Participation') : ''
  formValues.simulationSelect ? methods.push('Role Play / Simulation') : ''
  formValues.speakingPortfolioSelect ? methods.push('Speaking Portfolio') : ''

  if (methods.length > 1) {
    for (let i = 0; i < methods.length - 1; i++ ){
      methods[i] = methods[i] + ', '
    }
    methods[methods.length-1] = ' and ' + methods[methods.length-1]
  }

  return (
    <form onSubmit={handleSubmit} style={formSheet}>
      <div>
        <h3>Planning Questions</h3>
      </div>
      <div style={text}>{reminder}</div>
      <div style={text}>{chose}{methods}</div>
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
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="button" onClick={savePage}>
          Save page
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

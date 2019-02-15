import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from './renderField'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

const OANinthPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" type="email" component={renderField} label="Email" />
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="male"
            />{' '}
            Male
          </label>
          <label>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="female"
            />{' '}
            Female
          </label>
          <Field name="sex" component={renderError} />
        </div>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">
          Get summary and export
        </button>
      </div>
    </form>
  )
}

const validate = values => {
  const errors = {}
  if (!values.q1) {
    errors.q1 = 'Required'
  }
  if (!values.q2) {
    errors.q2 = 'Required'
  }
  if (!values.q3) {
    errors.q3 = 'Required'
  }
  if (!values.q5) {
    errors.q5 = 'Required'
  }
  if (!values.q6) {
    errors.q6 = 'Required'
  }
  if (!values.q7) {
    errors.q7 = 'Required'
  }
  return errors
}

export default reduxForm({
  form: 'OA', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(OANinthPage)

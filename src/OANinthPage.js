import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

class OANinthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide60: true,
    };

  this.showFields = this.showFields.bind(this)
  this.hideFields = this.hideFields.bind(this)
  }
  
  showFields(values) {
    if(values.target.name === 'q60a'){
      this.setState({ hide60: false })
    } else if (values.target.name === 'q61a') {
      this.setState({ hide61: false })
    } else if (values.target.name === 'q2a') {
      this.setState({ hide62: false })
    } else if (values.target.name === 'q51e') {
      this.setState({ hide51e: false })
    }
  }

  render () {
    const { handleSubmit, previousPage } = this.props

    return (
      <form onSubmit={handleSubmit}>
      <div>
        <h3>Student Preparation</h3>
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

export default reduxForm({
  form: 'OA',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(OANinthPage)

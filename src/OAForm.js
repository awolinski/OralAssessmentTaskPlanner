import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OAFirstPage from './OAFirstPage'
import OASecondPage from './OASecondPage'
import OAThirdPage from './OAThirdPage'
import OAFourthPage from './OAFourthPage'
import OAFifthPage from './OAFifthPage'
import OASixthPage from './OASixthPage'
import OASeventhPage from './OASeventhPage'
import OAEighthPage from './OAEighthPage'
import OANinthPage from './OANinthPage'
import OATenthPage from './OATenthPage'

class OAForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.returnToWelcomePage = this.returnToWelcomePage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.savePage = this.savePage.bind(this)
    this.state = {
      page: 1,
      formValues: {},
    }
  }
  nextPage(values) {
    this.setState({ formValues: values, page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  savePage() {
    window.print()
  }

  returnToWelcomePage() {
    if (window.confirm("Are you sure you want to start over? Any unsaved changes will be lost.")) {
      window.location.reload(true);
    }
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state

    return (
      <div>
      <div>
        <span>Page {this.state.page} of 10</span>
      </div>
        {page === 1 && <OAFirstPage onSubmit={this.nextPage}/>}
        {page === 2 && (
          <OASecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            savePage={this.savePage}
          />
        )}
        {page === 3 && (
          <OAThirdPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            savePage={this.savePage}
          />
        )}
        {page === 4 && (
          <OAFourthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            savePage={this.savePage}
          />
        )}
        {page === 5 && (
          <OAFifthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            savePage={this.savePage}
          />
        )}
        {page === 6 && (
          <OASixthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            savePage={this.savePage}
          />
        )}
        {page === 7 && (
          <OASeventhPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            savePage={this.savePage}
          />
        )}
        {page === 8 && (
          <OAEighthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            savePage={this.savePage}
          />
        )}
        {page === 9 && (
          <OANinthPage
            formValues={this.state.formValues}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            savePage={this.savePage}
          />
        )}
        {page === 10 && (
          <OATenthPage
            formValues={this.state.formValues}
            previousPage={this.previousPage}
            onSubmit={this.returnToWelcomePage}
            savePage={this.savePage}
        />
        )}
      </div>
    )
  }
}

OAForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default OAForm

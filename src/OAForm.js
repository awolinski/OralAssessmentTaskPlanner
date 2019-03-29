import React, { Component } from 'react'
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
import OAPrintPage from './OAPrintPage'

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
    const navBarStyle = { "position": "fixed", "left" : "8%", "z-index": "2", "padding-top": "1.5%", "display": page === 11 || page === 1 ? "none" : "" }

    return (
      <div>
      <div style={{"position": "fixed","padding-bottom": "4%", "background-color" : "rgba(90, 90, 90, 0.2)", "width" : "100%", "z-index": "1", "display": page === 11 || page === 1 ? "none" : ""}}></div>
      <div style={navBarStyle} >
        <button id="b1" style={{"border": page === 1 ? "solid 1px": "none", "background-color": page === 1 ? "lightgreen" : "white"}}>
          Get started
        </button>
        <button id="b2" style={{"border": page === 2 ? "solid 1px": "none", "background-color": page === 2 ? "lightgreen" : "white"}} >
          Logistics and background
        </button>
        <button id="b3" style={{"border": page === 3 ? "solid 1px": "none", "background-color": page === 3 ? "lightgreen" : "white"}}>
          Institution questions
        </button>
        <button id="b4" style={{"border": page === 4 ? "solid 1px": "none", "background-color": page === 4 ? "lightgreen" : "white"}}>
          Assessment and oral tasks
        </button>
        <button id="b5" style={{"border": page === 5 ? "solid 1px": "none", "background-color": page === 5 ? "lightgreen" : "white"}}>
          Practices
        </button>
        <button id="b6" style={{"border": page === 6 ? "solid 1px": "none", "background-color": page === 6 ? "lightgreen" : "white"}}>
          Environment
        </button>
        <button id="b7" style={{"border": page === 7 ? "solid 1px": "none", "background-color": page === 7 ? "lightgreen" : "white"}}>
          Assessment criteria
        </button>
        <button id="b8" style={{"border": page === 8 ? "solid 1px": "none", "background-color": page === 8 ? "lightgreen" : "white"}}>
          Student preparation
        </button>
        <button id="b9" style={{"border": page === 9 ? "solid 1px": "none", "background-color": page === 9 ? "lightgreen" : "white"}}>
          Recommendations
        </button>
        <button id="b10" style={{"border": page === 10 ? "solid 1px": "none", "background-color": page === 10 ? "lightgreen" : "white"}}>
          Finish
        </button>
      </div>
        {page === 1 && <OAFirstPage onSubmit={this.nextPage}/>}
        {page === 2 && (
          <OASecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <OAThirdPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 4 && (
          <OAFourthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 5 && (
          <OAFifthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 6 && (
          <OASixthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 7 && (
          <OASeventhPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 8 && (
          <OAEighthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 9 && (
          <OANinthPage
            formValues={this.state.formValues}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 10 && (
          <OATenthPage
            formValues={this.state.formValues}
            previousPage={this.previousPage}
            returnHomePage={this.returnToWelcomePage}
            onSubmit={this.nextPage}
        />
        )}
        {page === 11 && (
          <OAPrintPage
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

export default OAForm

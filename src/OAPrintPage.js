import React, { Component } from 'react'
import OASecondPage from './OASecondPage'
import OAThirdPage from './OAThirdPage'
import OAFourthPage from './OAFourthPage'
import OAFifthPage from './OAFifthPage'
import OASixthPage from './OASixthPage'
import OASeventhPage from './OASeventhPage'
import OAEighthPage from './OAEighthPage'
import OANinthPage from './OANinthPage'
import OATenthPage from './OATenthPage'

class OAPrintPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formValues: {},
    }
  }

  componentDidMount() {
      window.print()
      this.props.previousPage()
  }

  render() {
    const { onSubmit, formValues, previousPage, savePage } = this.props
    const divStyle = {"font-size": "15px", "top": "3%", "left": "5%", "right": "5%", "font-weight": "200", "position": "relative !important", "padding-top": "100px !important"}
    return (
      <div>
        <div style={divStyle}>
          <OASecondPage
            printStyle={divStyle}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        </div><br/><br/>
        <div style={divStyle}>
          <OAThirdPage
            printStyle={divStyle}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        </div><br/><br/>
        <div style={divStyle}>
          <OAFourthPage
            printStyle={divStyle}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        </div><br/><br/>
        <div style={divStyle}>
          <OAFifthPage
            printStyle={divStyle}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        </div><br/><br/>
        <div style={divStyle}>
          <OASixthPage
            printStyle={divStyle}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        </div><br/><br/>
        <div style={divStyle}>
          <OASeventhPage
            printStyle={divStyle}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        </div><br/><br/>
        <div style={divStyle}>
          <OAEighthPage
            printStyle={divStyle}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        </div><br/><br/>
        <div style={divStyle}>
          <OANinthPage
            printStyle={divStyle}
            formValues={this.state.formValues}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        </div><br/><br/>
        <div style={divStyle}>
          <OATenthPage
            printStyle={divStyle}
            formValues={this.state.formValues}
            previousPage={this.previousPage}
            returnHomePage={this.returnToWelcomePage}
            onSubmit={this.nextPage}
        />
        </div>
      </div>
    )
  }
}

export default OAPrintPage

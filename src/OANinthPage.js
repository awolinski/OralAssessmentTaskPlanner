import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import { tools } from './Components/DropdownOptions'

const proficiency1a = 'At best, students at this level have partial command of the language and can cope with overall meaning in most situations. Although they are likely to make many mistakes, they should be able to handle basic communication in own field.'
const proficiency1b = 'Students at this level have a generally effective command of the language despite some inaccuracies, inappropriacies and misunderstandings. THey can use and understand fairly complex language, particularly in familiar situations.'
const proficiency1c = 'Students at this level have operational command of the language, though with occasional inaccuracies, inappropriacies and misunderstandings in some situations. They generally handle complex language well and understand detailed reasoning.'
const proficiency1d = 'At a minimum students at this level have fully operational command of the language with only occasional unsystematic inaccuracies and inappropriacies. Misunderstandings may occur in unfamiliar situations. They handles complex detailed argumentation well.'

const toolsPart1 = 'You should provide some time for students to familarize themselves with the tools that are available in the classroom (e.g. the '
const toolsPart2 = ') if you plan on letting students use them.'

const warningText = 'Text eg: Since you have so few language learners…'

const oralFactorsUsed = 'They are used at your institution'

class OANinthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warning: '',
      showTOEFL: '',
      showIELTS: '',
      showTOEIC: '',
      proficiencyDescription: '',
      addRec: '',
      oralRec: 'Not',
      oralFactors: '',
      oralImp: '',
      oralAddRec: '',
      interviewRec: 'Not',
      interviewFactors: '',
      interviewImp: '',
      interviewAddRec: '',
      groupRec: 'Not',
      groupFactors: '',
      groupImp: '',
      groupAddRec: '',
      presentationRec: 'Not',
      presentationFactors: '',
      presentationImp: '',
      presentationAddRec: '',
      demoRec: 'Not',
      demoFactors: '',
      demoImp: '',
      demoAddRec: '',
      participationRec: 'Not',
      participationFactors: '',
      participationImp: '',
      participationAddRec: '',
      simulationRec: 'Not',
      simulationFactors: '',
      simulationImp: '',
      simulationAddRec: '',
      portfolioRec: '',
      portfolioFactors: '',
      portfolioImp: '',
      portfolioAddRec: true,
    };

  this.showWarningMessage = this.showWarningMessage.bind(this)
  this.proficiencyCalculationsDescriptions = this.proficiencyCalculationsDescriptions.bind(this)
  this.proficiencyCalculationsAdditional = this.proficiencyCalculationsAdditional.bind(this)
  this.additionalRecommendations = this.additionalRecommendations.bind(this)
  this.oralExamCalculations = this.oralExamCalculations.bind(this)
  this.interviewCalculations = this.interviewCalculations.bind(this)
}

  componentDidMount() {
    const { formValues } = this.props
    this.setState({ 
      showTOEFL: formValues.q9a > 0 ? ` TOEFL ibt - ${formValues.q9a}` : '',
      showIELTS: formValues.q9b > 0 ? ` IELTS - ${formValues.q9b}` : '',
      showTOEIC: formValues.q9c > 0 ? ` TOEIC - ${formValues.q9c}` : '',
    })
    this.proficiencyCalculationsDescriptions(formValues)
    //this.proficiencyCalculationsAdditional(formValues)
    this.additionalRecommendations(formValues)
    this.showWarningMessage(formValues)
    this.oralExamCalculations(formValues)
    this.interviewCalculations(formValues)
  }

  additionalRecommendations(formValues) {
    const t = tools.map(option => {
      if (formValues[option]) {
        this.setState({ addRec: `${toolsPart1}${option}${toolsPart2}` })
      }
    })
  }

  oralExamCalculations(formValues) {
    if (formValues.q12 === 'Often' || formValues.q12 === 'Very often' || formValues.q12 === 'Always') {
      this.setState({ oralFactors: oralFactorsUsed })
    }
  }

  interviewCalculations(formValues) {

  }

  proficiencyCalculationsAdditional(formValues) {
    if (formValues.q9b < 5.5 || formValues.q9a < 46 || formValues.q9c < 130){
      //this.setState({ portfolioAddRec })
    } 
    if (formValues.q9b < 6.0 || formValues.q9a < 75 || formValues.q9c < 150){
      //this.setState({ demoAddRec })
    } 
    if (formValues.q9b < 6.5 || formValues.q9a < 85 || formValues.q9c < 160) {
      //this.setState({ interviewAddRec })
    } 
    if (formValues.q9b < 7.0 || formValues.q9a < 100 || formValues.q9c < 160){
      //this.setState({ groupAddRec, participationAddRec, oralAddRec})
    } 
    if (formValues.q9b < 7.5 || formValues.q9a < 107 || formValues.q9c < 180) {
      //this.setState({ simulationAddRec })
    } 
  }

  proficiencyCalculationsDescriptions(formValues) {
    if (formValues.q9b < 5.5 || formValues.q9a < 46 || formValues.q9c < 130){
      this.setState({ proficiencyDescription: proficiency1a })
    } else if (formValues.q9b < 6.5 || formValues.q9a < 85 || formValues.q9c < 160) {
      this.setState({ proficiencyDescription: proficiency1b })
    } else if (formValues.q9b < 7.5 || formValues.q9a < 107 || formValues.q9c < 180) {
      this.setState({ proficiencyDescription: proficiency1c })
    } else {
      this.setState({ proficiencyDescription: proficiency1d })
    }
  }

  showWarningMessage(formValues) {
    if (formValues.q2 < 30) { //actual number needed
      this.setState({ warning: `${warningText}` })
    }
  }

  render () {
    const formSheet = {"font-size": "15px", "position": "absolute", "top": "3%", "left": "5%", "right": "5%", "font-weight": "200"}
    const warningStyle = {"color": "red"}
    const heading = {"font-weight": "250", "font-size": "30px", "textAlign": "center", "margin-top": "25px", "margin-bottom": "15px"}
    const table = {"padding": "15px", "textAlign": "center"}

    const { handleSubmit, previousPage, formValues, savePage } = this.props

    return (
      <form onSubmit={handleSubmit} style={formSheet}>
      <div>
        <div style={heading}>Recommendations</div>
      </div>
      <div>Your institution’s minimum English proficiency requirements: 
      {this.state.showTOEFL}{this.state.showIELTS}{this.state.showTOEIC}
      </div>
      <div>{this.state.proficiencyDescription}</div><br/>
      <table style={{"background-color": "rgb(240,240,240)"}}>
        <tbody>
          <tr style={table}>
            <th>Assessment Method</th>
            <th>Recommended Level</th>
            <th>Factors that support this assessment method</th>
            <th>Suggested Improvements</th>
            <th>Minimum Recommended English Proficiency</th>
            <th>Additional Recommendations</th>
            <th>Select</th>
          </tr>
          <tr style={table}>
            <td>Interviews</td>
            <td>{this.state.interviewRec}</td>
            <td>{this.state.interviewFactors}</td>
            <td>{this.state.interviewImp}</td>
            <td><br/><br/>IELTS 6.5<br/>TOEFL 85<br/>TOEIC 160<br/><br/></td>
            <td>{this.state.interviewAddRec}</td>
            <td>
              <Field
                component="input"
                type="checkbox"
                name="interviewsSelect"
              />
            </td>
          </tr>
          <tr style={table}>
            <td>Oral Exams</td>
            <td>{this.state.oralRec}</td>
            <td>{this.state.oralFactors}</td>
            <td>{this.state.oralImp}</td>
            <td><br/><br/>IELTS 7<br/>TOEFL 100<br/>TOEIC 160<br/><br/></td>
            <td>{this.state.oralAddRec}</td>
            <td>
              <Field
                component="input"
                type="checkbox"
                name="oralExamsSelect"
              />
            </td>
          </tr>
          <tr style={table}>
            <td>Group Work / Discussions</td>
            <td>{this.state.groupRec}</td>
            <td>{this.state.groupFactors}</td>
            <td>{this.state.groupImp}</td>
            <td><br/><br/>IELTS 7<br/>TOEFL 100<br/>TOEIC 160<br/><br/></td>
            <td>{this.state.groupAddRec}</td>
            <td>
              <Field
                component="input"
                type="checkbox"
                name="groupWorkSelect"
              />
            </td>
          </tr>
          <tr style={table}>
            <td>Presentations</td>
            <td>{this.state.presentationRec}</td>
            <td>{this.state.presentationFactors}</td>
            <td>{this.state.presentationImp}</td>
            <td><br/><br/>IELTS 5.5<br/>TOEFL 55<br/>TOEIC 130<br/><br/></td>
            <td>{this.state.presentationAddRec}</td>
            <td>
              <Field
                component="input"
                type="checkbox"
                name="presentationsSelect"
              />
            </td>
          </tr>
          <tr style={table}>
            <td>Demonstrations</td>
            <td>{this.state.demoRec}</td>
            <td>{this.state.demoFactors}</td>
            <td>{this.state.demoImp}</td>
            <td><br/><br/>IELTS 6<br/>TOEFL 75<br/>TOEIC 150<br/><br/></td>
            <td>{this.state.demoAddRec}</td>
            <td>
              <Field
                component="input"
                type="checkbox"
                name="demonstrationsSelect"
              />
            </td>
          </tr>
          <tr style={table}>
            <td>Participation</td>
            <td>{this.state.participationRec}</td>
            <td>{this.state.participationFactors}</td>
            <td>{this.state.participationImp}</td>
            <td><br/><br/>IELTS 7<br/>TOEFL 100<br/>TOEIC 170<br/><br/></td>
            <td>{this.state.participationAddRec}</td>
            <td>
              <Field
                component="input"
                type="checkbox"
                name="participationSelect"
              />
            </td>
          </tr>
          <tr style={table}>
            <td>Role Play / Simulation</td>
            <td>{this.state.simulationRec}</td>
            <td>{this.state.simulationFactors}</td>
            <td>{this.state.simulationImp}</td>
            <td><br/><br/>IELTS 7.5<br/>TOEFL 107<br/>TOEIC 180<br/><br/></td>
            <td>{this.state.simulationAddRec}</td>
            <td>
              <Field
                component="input"
                type="checkbox"
                name="simulationSelect"
              />
            </td>
          </tr>
          <tr style={table}>
            <td>Speaking Portfolio</td>
            <td>{this.state.portfolioRec}</td>
            <td>{this.state.portfolioFactors}</td>
            <td>{this.state.portfolioImp}</td>
            <td><br/><br/><br/><br/><br/><br/></td>
            <td>{this.state.portfolioAddRec}</td>
            <td>
              <Field
                component="input"
                type="checkbox"
                name="speakingPortfolioSelect"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <div style={warningStyle}>{this.state.warning}</div>
      </div>
      <div>
        <div style={heading}>Additional Recommendations</div>
      </div>
      <div>{this.state.addRec}</div><br/><br/>

      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="button" onClick={savePage}>
          Save page
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

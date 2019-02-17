import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'

const proficiency1a = 'At best, students at this level have partial command of the language and can cope with overall meaning in most situations. Although they are likely to make many mistakes, they should be able to handle basic communication in own field.'
const proficiency1b = 'Students at this level have a generally effective command of the language despite some inaccuracies, inappropriacies and misunderstandings. THey can use and understand fairly complex language, particularly in familiar situations.'
const proficiency1c = 'Students at this level have operational command of the language, though with occasional inaccuracies, inappropriacies and misunderstandings in some situations. They generally handle complex language well and understand detailed reasoning.'
const proficiency1d = 'At a minimum students at this level have fully operational command of the language with only occasional unsystematic inaccuracies and inappropriacies. Misunderstandings may occur in unfamiliar situations. They handles complex detailed argumentation well.'

const improvement1 = 'Your students performance may be hindered if they are being recorded because of their low English proficiency .'
// Need to figure out how to get example tool chosen
const tools = `You should provide some time for students to familarize themselves with the tools that are available in the classroom (e.g.$VARIABLE) if you plan on letting students use them.`
const warningText = 'Text eg: Since you have so few language learners…'
const ar1 = 'Text statemens: eg: You should explain your expectations …'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

class OANinthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warning: true,
      showTOEFL: '',
      showIELTS: '',
      showTOEIC: '',
      proficiencyDescription: '',
      improvmentDescription: '',
    };

  this.showFields = this.showFields.bind(this)
  this.proficiencyCalculationsDescriptions = this.proficiencyCalculationsDescriptions.bind(this)
  this.proficiencyCalculationsAdditional = this.proficiencyCalculationsAdditional.bind(this)
}

  componentDidMount() {
    const { formValues } = this.props
    console.log(formValues)
    this.setState({ 
      showTOEFL: formValues.q9a > 0 ? ` TOEFL ibt - ${formValues.q9a}` : '',
      showIELTS: formValues.q9b > 0 ? ` IELTS - ${formValues.q9b}` : '',
      showTOEIC: formValues.q9c > 0 ? ` TOEIC - ${formValues.q9c}` : '',
    })
    this.proficiencyCalculationsDescriptions(formValues)
    this.proficiencyCalculationsAdditional(formValues)
    // recFlexTime = true if limited time with hard cut-offs
    // q11a or c?? true --> recordingRec = true, goodPort3.Text = "This would give your students the evidence that they need."
    // ?? q11a false --> recordingRec = false
    // q42c no/ maybe --> recordingNotificatiionRec = true else false
    // q42d no/maybe --> improvePort2.Text = "You should give a copy to your students.";
    // q42a yes --> goodPort2.Text = "You are already recording their performances.";  else improvPort1 ="You should record their performances.";
    // q16a yes --> goodSim1.Text = "These allow students to demonstrate specific skills."; updateDemo(2)
    // q16a no/maybe --> updateDemo(-1)
    // q17a yes --> updateDemo(1); updateExplain(2); updatePresent(2); updateQuestion(1); interviewRec = recLevels.Moderately; goodSim2.Text = "These allow students to demonstrate specific knowledge.";
    // q17 else --> updateDemo(-1); updateExplain(-1); updatePresent(-1); updateQuestion(-1);
    // if tools? show tools listed? then tools text under additional recommendations
    // q15 yes --> updateGroup(2)

  }

  proficiencyCalculationsAdditional(formValues) {
    if (formValues.q9b < 5.5 || formValues.q9a < 55 || formValues.q9c < 130){
      this.setState({ proficiencyDescription: proficiency1a, improvmentDescription: improvement1 })
    // presentations
    } 
    if (formValues.q9b < 6.0 || formValues.q9a < 75 || formValues.q9c < 150){
      this.setState({ proficiencyDescription: proficiency1a, improvmentDescription: improvement1 })
    // demo
    } 
    if (formValues.q9b < 6.5 || formValues.q9a < 85 || formValues.q9c < 160) {
      this.setState({ proficiencyDescription: proficiency1b })
      //interviews
    } 
    if (formValues.q9b < 7.0 || formValues.q9a < 100 || formValues.q9c < 160){
      this.setState({ proficiencyDescription: proficiency1a, improvmentDescription: improvement1 })
    // //group, participation (part), oral exam
    } 
    if (formValues.q9b < 7.5 || formValues.q9a < 107 || formValues.q9c < 180) {
      this.setState({ proficiencyDescription: proficiency1c })
      //simulation (sim)
    } 
    //port add?
  }

  proficiencyCalculationsDescriptions(formValues) {
    if (formValues.q9b < 5.5 || formValues.q9a < 46 || formValues.q9c < 130){
      this.setState({ proficiencyDescription: proficiency1a, improvmentDescription: improvement1 })
    } else if (formValues.q9b < 6.5 || formValues.q9a < 85 || formValues.q9c < 160) {
      this.setState({ proficiencyDescription: proficiency1b })
    } else if (formValues.q9b < 7.5 || formValues.q9a < 107 || formValues.q9c < 180) {
      this.setState({ proficiencyDescription: proficiency1c })
    } else {
      this.setState({ proficiencyDescription: proficiency1d })
    }
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
      {this.state.showTOEFL}{this.state.showIELTS}{this.state.showTOEIC}
      </div>
      <div>{this.state.proficiencyDescription}</div><br/>
      <table>
        <tbody>
          <tr>
            <th>Assessment Method</th>
            <th>Recommended Level</th>
            <th>Factors that support this assessment method</th>
            <th>Suggested Improvements</th>
            <th>Minimum Recommended English Proficiency</th>
            <th>Additional Recommendations</th>
            <th>Select</th>
          </tr>
          <tr>
            <td>Interviews</td>
            <td>eg Moderately</td>
            <td>eg They are used at your institution</td>
            <td>eg </td>
            <td>IELTS 6.5<br/>TOEFL 85<br/>TOEIC 160<br/></td>
            <td>eg Provide additional time.</td>
            <td>
              <Field
                component="input"
                type="checkbox"
                name="interviews"
              />
            </td>
          </tr>
          <tr>
            <td>Oral Exams</td>
          </tr>
          <tr>
            <td>Group Work (discussions)</td>
          </tr>
          <tr>
            <td>Presentations</td>
          </tr>
          <tr>
            <td>Demonstrations</td>
          </tr>
          <tr>
            <td>Participation</td>
          </tr>
          <tr>
            <td>Role Play / Simulation</td>
          </tr>
          <tr>
            <td>Speaking Portfolio</td>
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

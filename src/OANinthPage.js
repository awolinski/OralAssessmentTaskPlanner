import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import { tools } from './Components/DropdownOptions'

const proficiency1a = 'At best, students at this level have partial command of the language and can cope with overall meaning in most situations. Although they are likely to make many mistakes, they should be able to handle basic communication in own field.'
const proficiency1b = 'Students at this level have a generally effective command of the language despite some inaccuracies, inappropriacies and misunderstandings. THey can use and understand fairly complex language, particularly in familiar situations.'
const proficiency1c = 'Students at this level have operational command of the language, though with occasional inaccuracies, inappropriacies and misunderstandings in some situations. They generally handle complex language well and understand detailed reasoning.'
const proficiency1d = 'At a minimum students at this level have fully operational command of the language with only occasional unsystematic inaccuracies and inappropriacies. Misunderstandings may occur in unfamiliar situations. They handles complex detailed argumentation well.'

// Constants that show in Additional Recommendations outside of the table
const toolsPart1 = 'You should provide some time for students to familarize themselves with the tools that are available in the classroom (e.g. the '
const toolsPart2 = ') if you plan on letting students use them.\n'
const addRec2 = 'You should explain your expectations for each of your assessment methods since many of your students may be unfamiliar with your discipline\'s practices.\n'
const addRec3 = 'It\'s great that you are using established criteria.\n'
const addRec4 = 'It\'s great that your criteria measure different aspects and levels of student performance.\n'
const addRec5 = 'You may want to give more attention to your criteria in order to ensure that they fairly and adequately distinguish different aspects and levels of student performance.\n'
const addRec6 = 'You may want to consider recording your students\' performances and giving them a copy so that they have evidence of their abilities to communicate orally.\n'
const addRec8 = 'Your students may benefit from your providing more detailed descriptions of your expectations and how they relate to your assessment practices.\n'
const addRec9 = 'You may want to consider reducing your use of local vocabulary, cultural references, or metaphors unless you plan to take the time to explain them to your students. You may want to incorporate a tool like the Corpus of Contemporary American English. This can help students understand culturally specific vocabulary and phrases.\n'
const addRec11 = 'Based on what you have reported, you may want to work towards being more inclusive of students with different backgrounds and opinions.\n'
const addRec12 = 'Remember to teach your students the skills that they need to perform your chosen assessment tasks.\n'
const addRec13 = 'You should notify students that they will be recorded when the assessment criteria are communicated.\n'
const addRec7 = 'You may want to be more flexible in your time limits to ensure that students have the opportunity to clarify misunderstandings and respond appropriately.\n'
const addRec14 = 'You should consider how you plan to resolve the differences in the scores that are assigned by different graders.\n'
//const addRec15 = 'You may want to consider using a method to ensure that you are grading student performances consistently.'

// Red Warning after table
const warningText = 'Since you have so few second language learners, it is especially important that you pay attention to their involvement and inclusion in your course.'
const warningText2 = 'At least one other assessment method must be selected.'

// Constants that show up in factors row
const portfolioFactors1 = 'You are already recording their performances.'
const portfolioFactors2 = 'You are already using multiple assessment methods.'
const simulationFactors1 = 'These allow students to demonstrate specific skills.'
const simulationFactors2 = 'These allow students to demonstrate specific knowledge.'
const demoFactors1 = 'Your students need to be able to explain things to others.'
const usedFactors = 'They are used at your institution.'
const presentationFactors1 = 'It\'s important for your students to be able to do this.'
const particAndGroupFactors1 = 'This will help students develop their much needed negotiation or debate skills.'
const oralFactors1 = 'This will help develop their ability to respond to questions and comments.'
const interviewFactors1 = 'This is a lower-pressure way of helping your students dvelop their ability to respond to questions and comments.'
const groupFactors1 = 'This can help build their negotiation skills for the workplace.'
const oralFactors2 = 'This can help build their debating skills for the workplace.'
const participationFactors1 = 'This can help them learn to participate in group settings in the workplace.'
const demoFactors2 = 'This can help their ability to demonstrate tasks or products for the workplace.'
const demoFactors3 = 'You use them in your classroom activities.'
const presentationFactors2 = 'You use them in your classroom.'
const participationFactors2 = 'This will help prepare them for interactive assessments.'
const groupFactors2 = 'You use this in your class.'

// Constants that show up in Additional Recommendations row
const interviewAddRec1 = 'Provide additonal time. Teach them how to ask for and provide clarification. Speak slowly.'
const oralAddRec1 = 'Have proficient speakers go first to provide an example. Allow extra time for questions. Ensure questions are understood. Move on when they aren\'t.'
const groupAddRec1 = 'Provide a model of group work or discussions. Allow the use of support tools (e.g. translators).'
const presentationAddRec1 = 'Avoid using hard cut-off times. Provide students with a model presentation.'
//const presentationAddRec2 = 'Avoid using hard cut-off times. Provide students with a model presentation.'
const demoAddRec1 = 'Avoid using hard cut-off times. Provide students with a model presentation.'
const participationAddRec1 = 'Encourage the sharing of different viewpoints. Change the seating arrangement/groups often.'
const simulationAddRec1 = 'Provide a model role play. Encourage the sharing of different viewpoints. Change the seating arrangement/groups often.'
const portfolioAddRec1 = 'Make sure that they understand the importance of all tasks.'

// Constants that show up in Imrovements row
const presentationImp1 = 'You may want to incorportate more of these into your everyday class activities.'
const demoImp1 = 'You may want to use more demonstrations in class.'
const portfolioImp1 = 'Your students\' performance may be hindered if they are being recorded because of their low English proficiency.'
const groupImp1 = 'You may want to incorporate more of it into your class.'
const simulationImp1 = 'Using these in class will help prepare them for other interactive assessments.'

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
      portfolioRec: 'Not',
      portfolioFactors: '',
      portfolioImp: '',
      portfolioAddRec: portfolioAddRec1,
    };

  this.showWarningMessage = this.showWarningMessage.bind(this)
  this.proficiencyCalculationsDescriptions = this.proficiencyCalculationsDescriptions.bind(this)
  this.proficiencyCalculationsAdditional = this.proficiencyCalculationsAdditional.bind(this)
  this.additionalRecommendations = this.additionalRecommendations.bind(this)
  this.oralExamCalculations = this.oralExamCalculations.bind(this)
  this.interviewCalculations = this.interviewCalculations.bind(this)
  this.groupCalculations = this.groupCalculations.bind(this)
  this.portfolioCalculations = this.portfolioCalculations.bind(this)
  this.presentationCalculations = this.presentationCalculations.bind(this)
  this.simulationCalculations = this.simulationCalculations.bind(this)
}

  componentDidMount() {
    const { formValues } = this.props
    this.setState({ 
      showTOEFL: formValues.q9a > 0 ? ` TOEFL ibt - ${formValues.q9a}` : '',
      showIELTS: formValues.q9b > 0 ? ` IELTS - ${formValues.q9b}` : '',
      showTOEIC: formValues.q9c > 0 ? ` TOEIC - ${formValues.q9c}` : '',
    })
    this.proficiencyCalculationsDescriptions(formValues)
    this.proficiencyCalculationsAdditional(formValues)
    this.additionalRecommendations(formValues)
    this.showWarningMessage(formValues)
    this.oralExamCalculations(formValues)
    this.interviewCalculations(formValues)
    this.groupCalculations(formValues)
    this.portfolioCalculations(formValues)
    this.presentationCalculations(formValues)
    this.simulationCalculations(formValues)
  }

  additionalRecommendations(formValues) {
    let additionalRecs = []
    let toolExample
    const t = tools.map(option => {
      if (formValues[option]) {
        toolExample = `${toolsPart1}${option}${toolsPart2}`
      }
    })
    if (toolExample) { 
      additionalRecs.push(toolExample)
    }
    if (formValues.q7 !== 'No') {
      additionalRecs.push(addRec2)
    }
    if (formValues.q48b === 'Yes') {
      additionalRecs.push(addRec3)
    } 
    if (formValues.q48c === 'Yes' && formValues.q48d === 'Yes') {
      additionalRecs.push(addRec4)
    }
    if (formValues.q48c !== 'Yes' || formValues.q48d !== 'Yes') {
      additionalRecs.push(addRec5)
    }
    if (formValues.q42a !== 'Yes') {
      additionalRecs.push(addRec6)
    }
    if (formValues.Limitedtimewithhardcutoff) {
      additionalRecs.push(addRec7)
    }
    if (formValues.q36 === 'A small extent' || formValues.q36 === 'A very small extent') {
      additionalRecs.push(addRec8)
    }
    if (formValues.q39 === 'Never' || formValues.q39 === 'Rarely' || formValues.q39 === 'Sometimes') {
      additionalRecs.push(addRec9)
    }

    if (formValues.q66 !== 'No' || formValues.q67 !== 'No' || formValues.q68 !== 'Yes' || formValues.q69 !== 'No') {
      additionalRecs.push(addRec11)
    }
    if (formValues.q38 !== 'No') {
      additionalRecs.push(addRec12)
    } 
    if (formValues.q42c === 'No') {
      additionalRecs.push(addRec13)
    }
    if (formValues.q51d === 'Don\t know') {
      additionalRecs.push(addRec14)
    }
    this.setState({ addRec: additionalRecs })
  }

  oralExamCalculations(formValues) {
    if (formValues.q12 === 'Often' || formValues.q12 === 'Very often' || formValues.q12 === 'Always') {
      this.setState({ oralFactors: usedFactors })
    }
  }

  interviewCalculations(formValues) {
    if (formValues.q13 === 'Often' || formValues.q13 === 'Very often' || formValues.q13 === 'Always') {
      this.setState({ interviewFactors: usedFactors })
    }
  }

  groupCalculations(formValues) {
    if (formValues.q2 < 8) { //Need actual values
      this.setState({ groupFactors: particAndGroupFactors1 })
    }
  }

  presentationCalculations(formValues) {
    if (formValues.q14 === 'Often' || formValues.q14 === 'Very often' || formValues.q14 === 'Always') {
      this.setState({ presentationFactors: usedFactors })
    }
  }

  portfolioCalculations(formValues) {
    if (formValues.q42a === 'Yes' || formValues.q42a === 'Maybe') {
      this.setState({ portfolioFactors: portfolioFactors1 })
    }
  }

  proficiencyCalculationsAdditional(formValues) {
    if (formValues.q9b < 5.5 || formValues.q9a < 46 || formValues.q9c < 130){
      this.setState({ presentationAddRec: presentationAddRec1 })
    } 
    if (formValues.q9b < 6.0 || formValues.q9a < 75 || formValues.q9c < 150){
      this.setState({ demoAddRec: demoAddRec1 })
    } 
    if (formValues.q9b < 6.5 || formValues.q9a < 85 || formValues.q9c < 160) {
      this.setState({ interviewAddRec: interviewAddRec1 })
    } 
    if (formValues.q9b < 7.0 || formValues.q9a < 100 || formValues.q9c < 160){
      this.setState({ groupAddRec: groupAddRec1, participationAddRec: participationAddRec1, oralAddRec: oralAddRec1})
    } 
    if (formValues.q9b < 7.5 || formValues.q9a < 107 || formValues.q9c < 180) {
      this.setState({ simulationAddRec: simulationAddRec1 })
    } 
  }

  proficiencyCalculationsDescriptions(formValues) {
    if (formValues.q9b < 5.5 || formValues.q9a < 46 || formValues.q9c < 130){
      this.setState({ proficiencyDescription: proficiency1a, portfolioImp: portfolioImp1 })
    } else if (formValues.q9b < 6.5 || formValues.q9a < 85 || formValues.q9c < 160) {
      this.setState({ proficiencyDescription: proficiency1b })
    } else if (formValues.q9b < 7.5 || formValues.q9a < 107 || formValues.q9c < 180) {
      this.setState({ proficiencyDescription: proficiency1c })
    } else {
      this.setState({ proficiencyDescription: proficiency1d })
    }
  }

  simulationCalculations(formValues) {
    if (formValues.q16a === 'Yes' && formValues.q17a === 'Yes') {
      this.setState({ simulationRec: 'Highly', simulationFactors: `${simulationFactors1} ${simulationFactors2}` })
    } else if (formValues.q16a === 'Yes') {
      this.setState({ simulationRec: 'Highly', simulationFactors: simulationFactors1 })
    }  else if (formValues.q17a === 'Yes') {
      this.setState({ simulationRec: 'Highly', simulationFactors: simulationFactors2 })
    } 
  }

  showWarningMessage(formValues) {
    if (formValues.q2 <= 30) {
      this.setState({ warning: `${warningText}` })
    }
    if  (formValues.q55 !== 'Yes') {
      this.setState({ warning: [...this.state.warning, `${warningText2}`] })
    }
  }

  render () {
    const formSheet = this.props.printStyle ? this.props.printStyle : {"font-size": "15px", "position": "absolute", "top": "3%", "left": "5%", "right": "5%", "font-weight": "200"}
    const warningStyle = {"color": "red"}
    const heading = {"font-weight": "250", "font-size": "30px", "textAlign": "center", "margin-top": "25px", "margin-bottom": "15px"}
    const table = {"padding": "15px", "textAlign": "center"}

    const { handleSubmit, previousPage, formValues } = this.props

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

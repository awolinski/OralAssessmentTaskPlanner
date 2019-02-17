import React from 'react'
import { Field, reduxForm } from 'redux-form'

// TODO: Change font, center title and text, update description with time to complete
// application and how to use it, fix background image to adjust size with screen
// size adjustment

const background = {"background": 'url("https://image.freepik.com/free-photo/modern-white-office-desk-table-with-laptop-cup-coffee-supplies_33795-1.jpg") no-repeat', "height": "100vh", "width": "100vw", "background-size": "cover"}
const title = {"font-family": "Times New Roman", "font-size": "70px", "position": "fixed", "bottom": "60%", "right": "30%"}
const button = {"position": "fixed", "bottom": "30%", "right": "60%"}
const info = {"position": "fixed", "bottom": "45%", "right": "30%", "font-family": "Times New Roman"}

const welcomeTitle = "Welcome to the Oral Assessment Task Planner"
const programInfo = "This adaptive tool was designed for undergraduate instructors of courses where English is the language of instruction. It can be used to plan classroom activities and assessments that are fair to all students regardless of students’ background and language abilities. Further information about the tool can be found at https://link.springer.com/article/10.1007%2Fs11423-015-9375-8."

const OAFirstPage = props => {
  const { handleSubmit } = props
  return (
    <div style={background} >
    <form onSubmit={handleSubmit}>
      <div><h1 style={title}>{welcomeTitle}</h1></div>
      <div style={info}>{programInfo}</div>
      <div>
        <button type="submit" className="next" style={button}>
          Get started
        </button>
      </div>
    </form>
    </div>
  )
}

export default reduxForm({
  form: 'OA',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(OAFirstPage)

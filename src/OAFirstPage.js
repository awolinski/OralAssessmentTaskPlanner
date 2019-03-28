import React from 'react'
import { Field, reduxForm } from 'redux-form'

const background = {"opacity": "0.5", "position": "absolute", "width": "100%", "height": "100%", "top": "0", "left": "0" }
const title1 = {"font-size": "40px", "position": "absolute", "top": "15%", "left": "8%", "z-index": "2", "font-weight": "200"}
const title2 = {"font-size": "70px", "position": "absolute", "top": "29%", "left": "18%", "z-index": "2", "font-weight": "300"}
const button = {"position": "fixed", "position": "fixed", "bottom": "12%", "left": "70%"}
const info = {"font-size": "15px", "position": "absolute", "z-index": "2", "top": "57%", "padding-left": "20%", "padding-right": "20%", "background-color": "white", "line-height": "20px", "font-weight": "220"}
const icon = {"position": "fixed", "bottom": "7%", "left": "3.5%"}
const share = {"position": "fixed", "bottom": "4%", "left": "4%", "font-weight": "300"}

const programInfo = "Designed for undergraduate English-speaking instructors, this application helps teachers plan oral assessments and activities best suited for their course, given the language abilities of their students, and the classroom environment. It will take approximately ten minutes to complete, and will generate a recommendation chart on page nine. Further information about the tool can be found at: https://link.springer.com/article/10.1007%2Fs11423-015-9375-8."

const OAFirstPage = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <img style={background} src="https://cloudfront.ualberta.ca/-/media/ualberta/university-relations/community-relations/photos/12784-06-115-athabasca02.png" />
      <div style={title1}>Welcome to the </div>
      <div style={title2}>Oral Assessment Task Planner</div>
      <div style={info}>
        <br/>{programInfo}<br/><br/>
      </div>
      <div>
        <button type="submit" className="next" style={button}>
          Get started
        </button>
      </div>
      <div style={icon}>
        <a href="mailto:?Subject=Oral%20Assessment%20Task%20Planner&amp;Body=https://awolinski.github.io/OralAssessmentTaskPlanner/">
          <img src="https://cdn3.iconfinder.com/data/icons/social-media-circle-flat-1/1024/mail-01-01-512.png" height="50px" width="50px" alt="Email" />
        </a>
      </div>
      <div style={share}>Share</div>
    </form>
  )
}

export default reduxForm({
  form: 'OA',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(OAFirstPage)

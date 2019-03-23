// import React, {Component} from 'react'
// import { Field, reduxForm } from 'redux-form'

// const q1 = 'Approximately how many students do you have in your class?'
// const q2 = 'Approximately what percentage of your students are second language learners?'
// const q3 = 'How many hours of class do you have each week?'
// const q3b = 'How many weeks of class do you have?'
// const q4 = 'Which of the following tools do you have access to in your classroom?'
// const q5 ='To what extent do your students share a common cultural background?' 
// const q6 = 'Where does your course fit into their academic program?'
// const q7 = 'Are your students in the course predominantly from the same discipline?'
// const q8 = 'Which of the following describes your classroom environment?'

// const renderError = ({ meta: { touched, error } }) =>
//   touched && error ? <span>{error}</span> : false

// class OAPrintPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render () {
//     const { handleSubmit, previousPage, savePage, formValues } = this.props
//     const formSheet = {"font-size": "40px", "position": "absolute", "top": "3%", "left": "25%", "font-weight": "200"}
//     const heading = {"font-weight": "250", "font-size": "30px", "textAlign": "center", "margin-top": "25px", "margin-bottom": "15px"}

//     return (
//       <form onSubmit={handleSubmit} style={formSheet}>
//         <div><br/><br/>
//           <div style={heading}>Logistics</div>
//         </div>
//         <div>
//           <div><label>{q1}</label></div>
//           <div>
//             {formValues.q1}
//           </div>
//         </div>
//         <div>
//           <div><label>{q2}</label></div>
//           <div>
//             {formValues.q2}
//           </div>
//         </div>
//         <div>
//           <div><label>{q3}</label></div>
//           <div>
//           {formValues.q3}
//           </div>
//         </div>
//         <div>
//           <div><label>{q3b}</label></div>
//           <div>
//           {formValues.q3b}
//           </div>
//         </div>
//         <div>
//           <div><label className="form-label">{q4}</label></div>
//           <div>
//           {formValues.q4}
//           </div>
//         </div>
//         <div>
//         <br/><br/>
//           <div style={heading}>Background Information</div>
//         </div>
//         <div>
//           <div><label>{q5}</label></div>
//           <div>
//           {formValues.q5}
//           </div>
//         </div>
//         <div>
//           <div><label>{q6}</label></div>
//           <div>
//           {formValues.q6}
//           </div>
//         </div>
//         <div>
//           <div><label>{q7}</label></div>
//           <div>
//           {formValues.q7}
//           </div>
//         </div>
//         <div>
//           <div><label>{q8}</label></div>
//           {formValues.q8}
//         </div>

//       <div>
//         <button type="button" className="previous" onClick={previousPage}>
//           Previous
//         </button>
//         <button type="button" onClick={savePage}>
//           Save all
//         </button>
//         <button type="submit" className="next">
//           Start over
//         </button>
//       </div>
//       </form>
//     )
//   }
// }

// export default reduxForm({
//   form: 'OA',
//   destroyOnUnmount: false,
//   forceUnregisterOnUnmount: true,
// })(OAPrintPage)

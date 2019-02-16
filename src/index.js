import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import {
  Values, //    <Values form="OA" />
} from 'redux-form-website-template'

const dest = document.getElementById('content')
const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
})
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer)

let render = () => {
  const OAForm = require('./OAForm').default
  const readme = require('./Wizard.md')
  const rawWizard = require('!!raw-loader!./OAForm')
  const rawRenderField = require('!!raw-loader!./renderField')
  const OAFirstPage = require('!!raw-loader!./OAFirstPage')
  const OASecondPage = require('!!raw-loader!./OASecondPage')
  const OAThirdPage = require('!!raw-loader!./OAThirdPage')
  const OAFourthPage = require('!!raw-loader!./OAFourthPage')
  const OAFifthPage = require('!!raw-loader!./OAFifthPage')
  const OASixthPage = require('!!raw-loader!./OASixthPage')
  const OASeventhPage = require('!!raw-loader!./OASeventhPage')
  const OAEigthPage = require('!!raw-loader!./OAEighthPage')
  const OANinthPage = require('!!raw-loader!./OANinthPage')
  const OATenthPage = require('!!raw-loader!./OATenthPage')
  ReactDOM.hydrate(
    <Provider store={store}>
      <OAForm />
    </Provider>,
    dest
  )
}

render()

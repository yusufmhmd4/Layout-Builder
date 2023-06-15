import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import ConfigurationContext from './context/ConfigurationContext'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {left: true, content: true, right: true}

  onToggleShowLeftNavbar = e => {
    this.setState({left: e})
  }

  onToggleShowContent = e => {
    this.setState({content: e})
  }

  onToggleShowRightNavbar = e => {
    this.setState({right: e})
  }

  render() {
    const {left, right, content} = this.state
    console.log(left)
    return (
      <ConfigurationContext.Provider
        value={{
          showLeftNavbar: left,
          showRightNavbar: right,
          showContent: content,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
        }}
      >
        <div>
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App

import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
            onToggleShowContent,
          } = value

          const onChangeLeft = e => {
            onToggleShowLeftNavbar(e.target.checked)
          }

          const onChangeRight = e => {
            onToggleShowRightNavbar(e.target.checked)
          }

          const onChangeContent = e => {
            onToggleShowContent(e.target.checked)
          }

          return (
            <div className="top-container">
              <h1 className="top-heading">Layout</h1>

              <div className="input-container">
                <input
                  type="checkbox"
                  id="left"
                  className="checkbox"
                  checked={showLeftNavbar}
                  onChange={onChangeLeft}
                />
                <label className="label" htmlFor="left">
                  Left Navbar
                </label>
              </div>
              <div className="input-container">
                <input
                  type="checkbox"
                  id="content"
                  className="checkbox"
                  checked={showContent}
                  onChange={onChangeContent}
                />
                <label className="label" htmlFor="content">
                  Content
                </label>
              </div>
              <div className="input-container">
                <input
                  type="checkbox"
                  id="right"
                  className="checkbox"
                  checked={showRightNavbar}
                  onChange={onChangeRight}
                />
                <label className="label" htmlFor="right">
                  Right Navbar
                </label>
              </div>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}
export default ConfigurationController

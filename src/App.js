import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
            switchStatus: "On", 
            bulbImg: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png",
            catImg: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
          }

  onClickOffSwitch = () => {
    const {switchStatus} = this.state

    if (switchStatus === "On") {
      this.setState({
        switchStatus: "Off",
        bulbImg: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png",
        catImg: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
      })
    }
  }

  onClickOnSwitch = () => {
    const {switchStatus} = this.state

    if (switchStatus === "Off") {
      this.setState({
        switchStatus: "On",
        bulbImg: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png",
        catImg: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"})
    }
  }

  render() {
    const {switchStatus, bulbImg, catImg} = this.state

    const onSwitchBgColor = switchStatus === "On" ? "on-switch" : ""
    const offSwitchBgColor = switchStatus === "Off" ? "off-switch" : ""

    return(
      <div className="app-container">
        <div className='bulb-container'>
            <img src={bulbImg} className="bulb-image" alt="bulb img" />
        </div>

        <div className='cat-container'>
            <img src={catImg} className="cat-image" alt="cat img" />
        </div>

        <div className="switch-board-container">
            <h1 className="switch-status">Switched {switchStatus}</h1>

            <div className='switch-controls-container'>
              <button className={`switch ${offSwitchBgColor}`} onClick={this.onClickOffSwitch}>
                  OFF
              </button>
              <button className={`switch ${onSwitchBgColor}`} onClick={this.onClickOnSwitch}>
                  ON
              </button>
            </div>
        </div>
    </div>
    )
  }
}

export default App
import React from "react"
import ZiaPizza from '../pages/ZiaPizzaProducts'
import Menu from '../components/ZiaPizzaMenu'
import AboutUs from '../components/aboutUs'
import LocateUs from '../components/locateUs'
// import '../styleSheets/appStyle.css'

class IndexPage extends React.Component {
  render() {
    return (
      <div id="appFont">
        <ZiaPizza id="app" />
        <Menu />
        <AboutUs />
        <LocateUs />
      </div>
    )
  }
}

export default IndexPage

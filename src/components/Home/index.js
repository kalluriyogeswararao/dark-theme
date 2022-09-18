import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const lightThemeData = {
  bgContainer: 'light-theme-home-container',
  homeLogo: 'https://assets.ccbp.in/frontend/react-js/home-light-img.png',
  heading: 'light-theme-home-heading',
}

const darkThemeData = {
  bgContainer: 'dark-theme-home-container',
  homeLogo: 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png',
  heading: 'dark-theme-home-heading',
}
const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div>
          <Navbar />
          <div
            className={
              isDarkTheme
                ? darkThemeData.bgContainer
                : lightThemeData.bgContainer
            }
          >
            <img
              src={
                isDarkTheme ? darkThemeData.homeLogo : lightThemeData.homeLogo
              }
              alt="home"
              className="home"
            />
            <h1
              className={
                isDarkTheme ? darkThemeData.heading : lightThemeData.heading
              }
            >
              Home
            </h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home

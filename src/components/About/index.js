import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const lightThemeData = {
  aboutContainer: 'light-theme-about-container',
  aboutLogo: 'https://assets.ccbp.in/frontend/react-js/about-light-img.png',
  aboutHeading: 'light-theme-about-heading',
  alt: 'theme',
}

const darkThemeData = {
  aboutContainer: 'dark-theme-about-container',
  aboutLogo: 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png',
  aboutHeading: 'dark-theme-about-heading',
  alt: 'about',
}

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <div>
          <Navbar />
          <div
            className={
              isDarkTheme
                ? darkThemeData.aboutContainer
                : lightThemeData.aboutContainer
            }
          >
            <img
              src={
                isDarkTheme ? darkThemeData.aboutLogo : lightThemeData.aboutLogo
              }
              alt="about"
              className="about"
            />
            <h1
              className={
                isDarkTheme
                  ? darkThemeData.aboutHeading
                  : lightThemeData.aboutHeading
              }
            >
              About
            </h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About

import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const lightThemeData = {
  notfoundContainer: 'light-theme-not-found-container',
  notfoundHeading: 'light-theme-not-found-heading',
  para: 'light-theme-not-found-para',
}

const darkThemeData = {
  notfoundContainer: 'dark-theme-not-found-container',
  notfoundHeading: 'dark-theme-not-found-heading',
  para: 'dark-theme-not-found-para',
}

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <div>
          <Navbar />
          <div
            className={
              isDarkTheme
                ? darkThemeData.notfoundContainer
                : lightThemeData.notfoundContainer
            }
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found"
            />
            <h1
              className={
                isDarkTheme
                  ? darkThemeData.notfoundHeading
                  : lightThemeData.notfoundHeading
              }
            >
              Lost Your Way!
            </h1>
            <p
              className={isDarkTheme ? darkThemeData.para : lightThemeData.para}
            >
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound

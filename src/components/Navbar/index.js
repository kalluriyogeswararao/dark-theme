import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const lightThemeData = {
  darkThemeIcon: 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png',
  navbarBg: 'navbar-container-light-theme',
  homeLogo:
    'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png',
  headerLink: 'link-light-theme',
  alt: 'theme',
}

const darkThemeData = {
  lightThemeIcon:
    'https://assets.ccbp.in/frontend/react-js/light-theme-img.png',
  navbarBg: 'navbar-container-dark-theme',
  homeLogo:
    'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png',
  headerLink: 'link-dark-theme',

  alt: 'theme',
}

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {toggleTheme, isDarkTheme} = value
      const onClickToggleBtn = () => {
        toggleTheme()
      }

      return (
        <div
          className={
            isDarkTheme ? darkThemeData.navbarBg : lightThemeData.navbarBg
          }
        >
          <img
            src={isDarkTheme ? darkThemeData.homeLogo : lightThemeData.homeLogo}
            alt="website logo"
            className="web-logo"
          />
          <ul className="header-options">
            <li>
              <Link
                to="/"
                className={
                  isDarkTheme
                    ? darkThemeData.headerLink
                    : lightThemeData.headerLink
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={
                  isDarkTheme
                    ? darkThemeData.headerLink
                    : lightThemeData.headerLink
                }
              >
                About
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="toggle-btn"
            onClick={onClickToggleBtn}
            testid="theme"
          >
            <img
              src={
                isDarkTheme
                  ? darkThemeData.lightThemeIcon
                  : lightThemeData.darkThemeIcon
              }
              alt="theme"
              className="dark-image"
            />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar

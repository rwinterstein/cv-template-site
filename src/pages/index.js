import React, { Component } from "react"
import styled from "styled-components"

// Import all Stylesheets (It's important this comes prior to any components)
import "../styles/layout.css"
import "../styles/colors.css"
import "../styles/global.scss"

// Import components
import SEO from "../components/seo" // SEO is only necessary for rendered pages
import ButtonsWrapper from "../components/buttonsWrapper"
import { Sun, Moon } from "../components/theme-switcher/icons" // Import icons for theme-switcher
import Hero from "../components/hero"
import Resume from "../components/resume/resume"
import Footer from "../components/footer"

const Layout = styled.main`
  .content-wrapper {
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;
  }

  ${"" /* Dark Mode styles */}
  &.dark-mode {
    background-color: var(--black);

    .toggle-switcher {
      > :nth-child(1) {
        display: none;
        visibility: hidden;
      }

      > :nth-child(2) {
        display: block;
        visibility: visible;

        &:hover {
          background-color: var(--green);
        }
      }
    }

    .contact-links {
      .icon {
        background-color: var(--grayDark);

        &:hover {
          background-color: var(--white);
        }
      }
    }

    h1,
    h2,
    h3,
    h5,
    p,
    li {
      color: var(--white);
    }

    h4 {
      color: var(--grayDark);
    }

    .divider {
      background-color: var(--grayDark);
    }
  }

  ${"" /* Light Mode styles */}
  &.light-mode {
    background-color: var(--white);

    .toggle-switcher {
      > :nth-child(1) {
        display: block;
        visibility: visible;

        &:hover {
          background-color: var(--green);
        }
      }

      > :nth-child(2) {
        display: none;
        visibility: hidden;
      }
    }

    .contact-links {
      .icon {
        background-color: var(--gray);

        &:hover {
          background-color: var(--black);
        }
      }
    }
  }
`

export default class index extends Component {
  constructor() {
    super()
    this.state = {
      theme: "",
    }
  }

  changeTheme() {
    if (this.state.theme === "dark") {
      this.setState({ theme: "light" })
      localStorage.setItem("theme", "light")
    } else {
      this.setState({ theme: "dark" })
      localStorage.setItem("theme", "dark")
    }
  }

  handleBtnKeyDown(event) {
    // Check to see if space or enter were pressed
    if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
      // Prevent the default action to stop scrolling when space is pressed
      event.preventDefault()
      this.changeTheme(event.target)
    }
  }

  componentDidMount() {
    this.setState({ theme: localStorage.theme })
  }

  render() {
    return (
      <Layout className={this.state.theme === "dark" ? "dark-mode" : "light-mode"} >
        <div className="content-wrapper">
          <SEO title="" />
          <Hero>
            <ButtonsWrapper className="buttons">
              <div
                className="toggle-switcher"
                onClick={this.changeTheme.bind(this)}
                onKeyDown={this.handleBtnKeyDown.bind(this)}
                role="button"
                tabIndex="0"
                aria-pressed={this.state.theme === "dark" ? true : false}
              >
                <Moon className={this.state.theme === "light" ? "visible" : "hidden"} />
                <Sun className={this.state.theme === "dark" ? "visible" : "hidden"} />
              </div>
            </ButtonsWrapper>
          </Hero>
          <Resume />
          <Footer />
        </div>
      </Layout>
    )
  }
}

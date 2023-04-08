import React from "react"
import styled from "styled-components"

// Import desired stylesheets
import "../styles/colors.css"
import "../styles/global.scss"

// Import relevant components
import ContactLinks from "../components/contact-links/contactLinks"

const ButtonsWrapper = styled.div`
  position: fixed;
  right: 0;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 16px;

  .icon {
    height: 24px;
    width: 24px;
  }

  .toggle-switcher {
    margin-bottom: 64px;

    > :nth-child(n) {
      -webkit-transition: all 200ms ease-in-out;
      -moz-transition: all 200ms ease-in-out;
      -o-transition: all 200ms ease-in-out;
      transition: all 200ms ease-in-out;
    }
  }

  @media (min-width: 1024px) {
    padding-right: 7.5%;
  }

  @media (min-width: 1280px) {
    padding-right: 10%;
  }

  @media (min-width: 1600px) {
    left: 50%;
    padding-left: 600px;
    padding-right: 0;
  }
`

const buttonsWrapper = (props) => {
  return (
    <ButtonsWrapper>
      {props.children}
      <ContactLinks />
    </ButtonsWrapper>
  )
}

export default buttonsWrapper

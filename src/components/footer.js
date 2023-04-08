import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
  display: flex;
  padding-top: 80px;
  padding-bottom: 16px;

  p {
    width: 100%;
    font-family: "Roboto Mono", monospace;
    font-size: 14px;
    text-align: center;
    margin-bottom: 0;
  }
`

const footer = () => {
  return (
    <Footer className="container">
      <p>© {new Date().getFullYear()} </p>
    </Footer>
  )
}

export default footer

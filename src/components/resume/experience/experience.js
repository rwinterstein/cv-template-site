import React from "react"
import styled from "styled-components"

const Experience = styled.div`
  &:first-child {
    padding-top: 16px;
    margin-bottom: 80px;
  }

  span {
    position: relative;
    width: 16px;
    left: -16px;
    margin-left: -16px;
    color: var(--green);
  }

  h2 {
    margin-bottom: 24px;
  }

  h3,
  h4 {
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 16px;
  }

  li {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const experience = (props) => {
  return (
    <Experience>
      <h2>
        <span>{">"}</span>
        {props.sectionTitle}
      </h2>
      {props.children}
    </Experience>
  )
}

export default experience

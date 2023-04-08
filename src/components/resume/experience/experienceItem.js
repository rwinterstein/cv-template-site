import React from "react"
import styled from "styled-components"

const ExperienceItem = styled.div`
  &:nth-child(n) {
    margin-bottom: 40px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const experienceItem = (props) => {
  return (
    <ExperienceItem>
      <h3>{props.title}</h3>
      <h4>{props.subTitle}</h4>
      <h4>{props.dateRange}</h4>
      <p>{props.description}</p>
      <ul>{props.children}</ul>
    </ExperienceItem>
  )
}

export default experienceItem

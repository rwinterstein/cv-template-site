import React from "react"
import styled from "styled-components"

const List = styled.div`
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
    margin-bottom: 16px;
  }
`

const list = (props) => {
  return (
    <List>
      <h2>
        <span>{">"}</span>
        {props.sectionTitle}
      </h2>
      {props.children}
    </List>
  )
}

export default list

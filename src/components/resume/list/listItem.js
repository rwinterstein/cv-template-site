import React from "react"
import styled from "styled-components"

const ListItem = styled.li`
  list-style: none;

  &:nth-child(n) {
    margin-bottom: 4px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const listItem = (props) => {
  return <ListItem>{props.text}</ListItem>
}

export default listItem

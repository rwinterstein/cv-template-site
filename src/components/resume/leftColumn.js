import React from "react"
import styled from "styled-components"

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 7.5%;
  padding-right: 10%;
  margin-bottom: 80px;

  @media (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
    margin-bottom: 0;
  }
`

const leftColumn = (props) => {
  return <LeftColumn className="col-9">{props.children}</LeftColumn>
}

export default leftColumn

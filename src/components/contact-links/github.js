import React, { Component } from "react"
import styled from "styled-components"

import icon from "../../images/icons/github.svg"

const GitHub = styled.svg`
  -webkit-mask: url(${(props) => props.src}) no-repeat center;
  mask: url(${(props) => props.src}) no-repeat center;
  cursor: pointer;
`

export default class github extends Component {
  render() {
    return <GitHub src={icon} className="icon" />
  }
}

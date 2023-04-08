import React, { Component } from "react"
import styled from "styled-components"

import icon from "../../images/icons/instagram.svg"

const Instagram = styled.svg`
  -webkit-mask: url(${(props) => props.src}) no-repeat center;
  mask: url(${(props) => props.src}) no-repeat center;
  cursor: pointer;
`

export default class instagram extends Component {
  render() {
    return <Instagram src={icon} className="icon" />
  }
}

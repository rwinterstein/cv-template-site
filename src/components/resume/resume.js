import React, { Component } from "react";
import styled from "styled-components";

// Import relevant components
import LeftColumn from "./leftColumn";
import RightColumn from "./rightColumn";
import Experience from "./experience/experience";
import ExperienceItem from "./experience/experienceItem";
import List from "./list/list";
import ListItem from "./list/listItem";

const Resume = styled.section`
  display: block;
  padding-top: 80px;

  .divider {
    display: none;
    height: auto;
    width: 2px;
    background-color: var(--grayLight);

    @media (min-width: 1024px) {
      display: block;
      margin-left: 80px;
      margin-right: 80px;
    }

    @media (min-width: 1280px) {
      display: block;
      margin-left: 160px;
      margin-right: 80px;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export default class resume extends Component {
  render() {
    return (
      <Resume className='container'>
        <LeftColumn>
          <Experience sectionTitle='Experience'>
            <ExperienceItem
              title='Job Title - Company Name'
              subTitle='Jan 2018 – Current'
              description='Lorem ipsum dolor sit amet consectetur, adipisicing elit:'
            >
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                odit adipisci eligendi sed itaque minima porro nesciunt, ipsa ut
                deserunt ad sit et, magni, maiores eius maxime voluptates harum
                in.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                odit adipisci eligendi sed itaque minima porro nesciunt, ipsa ut
                deserunt ad sit et, magni, maiores eius maxime voluptates harum
                in.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                odit adipisci eligendi sed itaque minima porro nesciunt, ipsa ut
                deserunt ad sit et, magni, maiores eius maxime voluptates harum
                in.
              </li>
            </ExperienceItem>

            <ExperienceItem
              title='Job Title - Company Name'
              subTitle='Jan 2018 – Current'
              description='Lorem ipsum dolor sit amet consectetur, adipisicing elit:'
            >
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                odit adipisci eligendi sed itaque minima porro nesciunt, ipsa ut
                deserunt ad sit et, magni, maiores eius maxime voluptates harum
                in.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                odit adipisci eligendi sed itaque minima porro nesciunt, ipsa ut
                deserunt ad sit et, magni, maiores eius maxime voluptates harum
                in.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                odit adipisci eligendi sed itaque minima porro nesciunt, ipsa ut
                deserunt ad sit et, magni, maiores eius maxime voluptates harum
                in.
              </li>
            </ExperienceItem>

            <ExperienceItem
              title='Job Title - Company Name'
              subTitle='Jan 2018 – Current'
              description='Lorem ipsum dolor sit amet consectetur, adipisicing elit:'
            >
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                odit adipisci eligendi sed itaque minima porro nesciunt, ipsa ut
                deserunt ad sit et, magni, maiores eius maxime voluptates harum
                in.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                odit adipisci eligendi sed itaque minima porro nesciunt, ipsa ut
                deserunt ad sit et, magni, maiores eius maxime voluptates harum
                in.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                odit adipisci eligendi sed itaque minima porro nesciunt, ipsa ut
                deserunt ad sit et, magni, maiores eius maxime voluptates harum
                in.
              </li>
            </ExperienceItem>
          </Experience>

          <Experience sectionTitle='Education'>
            <ExperienceItem title='Degree' subTitle='University' />
            <ExperienceItem title='Degree' subTitle='University' />
            <ExperienceItem title='Certificate' subTitle='Organization' />
          </Experience>
        </LeftColumn>

        <div className='divider'></div>

        <RightColumn>
          <List sectionTitle='Skills'>
            <ListItem text='Lorem ipsum' />
            <ListItem text='Lorem ipsum' />
            <ListItem text='Lorem ipsum' />
            <ListItem text='Lorem ipsum' />
            <ListItem text='Lorem ipsum' />
            <ListItem text='Lorem ipsum' />
            <ListItem text='Lorem ipsum' />
            <ListItem text='Lorem ipsum' />
          </List>
          <List sectionTitle='Tools'>
            <ListItem text='Lorem ipsum' />
            <ListItem text='Lorem ipsum' />
            <ListItem text='Lorem ipsum' />
            <ListItem text='Lorem ipsum' />
            <ListItem text='Lorem ipsum' />
            <ListItem text='Lorem ipsum' />
            <ListItem text='Lorem ipsum' />
            <ListItem text='Lorem ipsum' />
          </List>
        </RightColumn>
      </Resume>
    );
  }
}

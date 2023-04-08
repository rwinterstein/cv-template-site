import React from "react";
import styled from "styled-components";

const Hero = styled.section`
  display: flex;
  padding-top: 40px;

  .contentWrapper {
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin-bottom: 40px;
  }

  h5 {
    padding-right: 10%;
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    padding-top: 80px;

    h5 {
      padding-right: 17.5%;
      margin-bottom: 0;
    }
  }
`;

const hero = (props) => {
  return (
    <Hero className='container'>
      <div className='contentWrapper'>
        <h1>
          Lorem
          <br />
          Ipsum
        </h1>
        <h5>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque odit
          adipisci eligendi sed itaque minima porro nesciunt, ipsa ut deserunt
          ad sit et, magni, maiores eius maxime voluptates harum in. Ipsam,
          recusandae unde quis nemo excepturi, sint cupiditate nesciunt
          consequatur temporibus alias dicta hic quod maxime accusamus
          provident? Nobis vero excepturi nostrum tenetur? Tempora facilis,
          voluptates voluptate suscipit reprehenderit saepe? Sequi quis eum,
          quae labore, repudiandae voluptatem debitis dolores obcaecati vitae
          asperiores odio nihil voluptatum dolor recusandae earum quo.
        </h5>
      </div>
      {props.children}
    </Hero>
  );
};

export default hero;

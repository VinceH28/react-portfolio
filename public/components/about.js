import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  padding-top: 7rem;
`;

export default function About() {
  return (
    <ContentWrapper>
      <div
        className="about card col shadow-lg p-3 mb-5 bg-white rounded alert"
        id="about"
      >
        <div className="card-content">
          <h4>About</h4>
          <hr />
          <p className="display-5">
          A father of a smart, beautiful little girl, I'm a proud #girldad!
          I am a New York based full stack JavaScript developer student and a tier 2 support technician for Air Techniques. As a support technician with some computer science background, it was a natural choice to join the Columbia Coding Bootcamp. 
          
          I am a musician and started playing the drums at the age of 2. Since then I have learned an additional 4 insturments; the chello,baritone,trumbone and tuba. With aspirations to master the bass guitar and piano.
          
          I specialize in developing innovative solutions and maintaining an exceptional user experience. Since the mid 2020, I have acquired knowledge and experience with technologies such as HTML, CSS, JavaScript, Python, React.js, Node.js, Express.js, SQL and MongoDB. Recognized as an organized, passionate, and adaptable critical thinker, I am committed to improve my expertise while embracing new challenges alongside an innovative team focused on building accessible, human-centered products.
          </p>
        </div>
      </div>
    </ContentWrapper>
  );
}
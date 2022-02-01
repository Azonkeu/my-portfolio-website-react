import React from 'react';
import PropTypes from 'prop-types';
import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import LeftSection from './HeroStyle';

const Hero = ({ handleClick }) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To
          <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I'm a software engineer specializing in building and designing exceptional digital experiences.
        </SectionText>
        <Button onClick={handleClick}>Learn more</Button>
      </LeftSection>
    </Section>
  </>
);

Hero.propTypes = { handleClick: PropTypes.func.isRequired };

export default Hero;

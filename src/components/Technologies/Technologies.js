import React from 'react';
import {
  DiFirebase,
  DiReact,
  DiZend,
} from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyle';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I&apos;ve worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with
            <br />
            HTML5
            <br />
            CSS3
            <br />
            JavaScript
            <br />
            React.js
            <br />
            Redux
            <br />
            Bootstrap
            <br />
            Next.js
            <br />
            Vue.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with
            <br />
            Node and Databases
            <br />
            Ruby
            <br />
            Rails
            <br />
            MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tools & Methods:</ListTitle>
          <ListParagraph>
            Experience with
            <br />
            Git
            <br />
            GitHub
            <br />
            Heroku
            <br />
            Netlify
            <br />
            Mobile/Responsive Development
            <br />
            RSpec
            <br />
            TDD
            <br />
            Chrome Dev Tools
            <br />
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;

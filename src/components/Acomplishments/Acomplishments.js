import React from 'react';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  Box,
  Boxes,
  BoxNum,
  BoxText,
} from './AcomplishmentsStyle';

const data = [
  { number: 20, text: 'Open Source Projects' },
  { number: 50, text: 'Students' },
  { number: 12, text: 'Github Followers' },
  { number: 20, text: 'Github Stars' },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card) => (
        <Box key={card}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;

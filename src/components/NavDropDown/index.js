import React from 'react';
import PropTypes from 'prop-types';
import {
  AiFillPhone,
  AiOutlineMail,
} from 'react-icons/ai';
import { FaLocationArrow } from 'react-icons/fa';
import {
  DropDownContainer,
  DropDownIcon,
  DropDownItem,
  DropDownItemDesc,
  DropDownItemTitle,
  DropDownTextContainer,
} from './NavDropDown';

const NavDropDown = ({ isOpen }) => (
  <DropDownContainer active={isOpen}>
    <DropDownItem href="#" target="_blank" rel="noreferrer">
      <DropDownIcon>
        <AiFillPhone />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Phone</DropDownItemTitle>
        <DropDownItemDesc>Let&apos;s get together and have a chat?</DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
    <DropDownItem href="#" target="_blank" rel="noreferrer">
      <DropDownIcon>
        <AiOutlineMail />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Email</DropDownItemTitle>
        <DropDownItemDesc>
          If you want to talk just send a message and
          I&apos;ll get back to you as fast as possible.
        </DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
    <DropDownItem href="#" target="_blank" rel="noreferrer">
      <DropDownIcon>
        <FaLocationArrow />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Address</DropDownItemTitle>
        <DropDownItemDesc>Checkpoint, Molyko, Buea, Cameroon</DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
  </DropDownContainer>
);

NavDropDown.propTypes = { isOpen: PropTypes.node.isRequired };

export default NavDropDown;

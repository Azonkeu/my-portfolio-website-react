import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBack, ButtonFront } from './index';

const Button = ({
  alt,
  form,
  disabled,
  onClick,
  children,
}) => (
  <ButtonBack alt={alt} form={form} disabled={disabled}>
    {children}
    <ButtonFront alt={alt} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonFront>
  </ButtonBack>
);

Button.propTypes = { form: PropTypes.node.isRequired };
Button.propTypes = { disabled: PropTypes.node.isRequired };
Button.propTypes = { onClick: PropTypes.func.isRequired };
Button.propTypes = { alt: PropTypes.node.isRequired };
Button.propTypes = { children: PropTypes.node.isRequired };

export default Button;

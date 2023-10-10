import styled from "@emotion/styled"

interface ButtonProps {
  borderColor: string
  backgroundColor: string
}

const StyledButton = styled.button<ButtonProps>`
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  padding: 0.7em 2em;
  border: ${({ borderColor }) => `3px solid ${borderColor}`};
  border-radius: 4px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  color: ${({ borderColor }) => borderColor};
  text-decoration: none;
  transition: 0.3s ease all;
  z-index: 1;

  &:before {
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: "";
    background-color: ${({ backgroundColor }) => backgroundColor};
    z-index: -1;
  }

  &:hover,
  &:focus {
    color: white;
  }

  &:hover:before,
  &:focus:before {
    transition: 0.5s all ease;
    left: 0;
    right: 0;
    opacity: 1;
  }

  &:active {
    transform: scale(0.9);
  }
`

export default StyledButton

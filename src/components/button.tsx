import styled from "@emotion/styled"

interface ButtonProps {
  borderColor: string
  backgroundColor: string
}

interface ButtonProps2 {
  backgroundColor: string
  hoverColor: string
  color: string
  AfterBackground: string
  width: string
}

const StyledButton1 = styled.button<ButtonProps>`
  font-size: 12px;
  letter-spacing: 1px;
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

const StyledButton2 = styled.button<ButtonProps2>`
  width: ${({ width }) => width || "4.5rem"};
  padding-left: 4px;
  padding-right: 4px;

  height: 2.3em;
  margin: 0.5em;
  background: ${({ backgroundColor }) => backgroundColor || "black"};
  border: 2px solid #171515;
  color: ${({ color }) => color || "white"};

  border-radius: 0.3rem;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &:hover {
    color: ${({ hoverColor }) => hoverColor || "black"};
  }

  &:after {
    content: "";
    background: ${({ AfterBackground }) => AfterBackground || "white"};
    position: absolute;
    z-index: -1;
    left: -20%;
    right: -20%;
    top: 0;
    bottom: 0;
    transform: skewX(-45deg) scale(0, 1);
    transition: all 0.5s;
  }

  &:hover:after {
    transform: skewX(-45deg) scale(1, 1);
    transition: all 0.5s;
  }
`

// StyledButton2.defaultProps = {
//   color: "white",
//   AfterBackground: "white",
//   backgroundColor: "black",
//   hoverColor: "black",
// }

export { StyledButton1, StyledButton2 }

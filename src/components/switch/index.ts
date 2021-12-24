import styled from "styled-components";

const SwitchButton = styled.input`
  border:none;
  background-image:none;
  background-color:transparent;
  box-shadow: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;

  height: 32px;
  width: 52px;
  border-radius: 1rem;
  display: inline-block;
  position: relative;
  border: 2px solid #474755;
  background: linear-gradient(180deg, #2d2f39 0%, #1f2027 100%);
  transition: all 0.2s ease;

  :after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 1px 2px rgba(44, 44, 44, 0.2);
    transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);
  }
  :checked {
    border-color: #654fec;

    :after {
      transform: translatex(20px);
    }
  }
`;

export default SwitchButton;

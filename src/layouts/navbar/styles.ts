import styled from "styled-components"
import SwitchButton from "../../components/switch";

export const NavWrapper = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  height: 3rem;
  margin-bottom: 2rem;
  background-color: transparent;
`;

export const ToggleButton = styled(SwitchButton)`
  :focus {
    outline: 0;
  }

  border: 2px solid #f1c40f;

  :after {
    background: None;
    background-image: url('./icons/Sun.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  :checked {
    :after {
      background-image: url('./icons/Moon.svg');
    }
  }
`;

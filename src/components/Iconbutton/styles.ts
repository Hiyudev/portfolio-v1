import styled from "styled-components";

export const ButtonWrapper = styled.button`
	background-color: transparent;

	svg {
		color: ${({ theme }) => theme.colors.text};

		width: 16px;
		height: 16px;
	}
`

import styled from "styled-components";

export const Tag = styled.span`
	:before {
    content: '<';
		font-style: italic;
		font-weight: bold;
		color: ${({ theme }) => theme.main.default};
		-webkit-text-stroke: 1px ${({ theme }) => theme.colors.text};
  }

  :after {
    content: '/>';
		font-style: italic;
		font-weight: bold;
		color: ${({ theme }) => theme.main.default};
		-webkit-text-stroke: 1px ${({ theme }) => theme.colors.text};
  }
`

export const TagStyle = styled.div`
	font-weight: bold;
	color: transparent;
	text-transform: uppercase;
	-webkit-text-stroke: 1px ${({ theme }) => theme.colors.text};
`

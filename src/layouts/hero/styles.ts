import styled from "styled-components";
import glitch, { svglitch } from "../../animations/glitch";

export const HeroWrapper = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

	& > svg {
		color: ${({ theme }) => theme.colors.text};
		animation: ${svglitch} 0.01s infinite;
		animation-direction: alternate;
	}

	& > div {
		display: flex;
		flex-direction: column;
		align-items: center;

		h1 {
			font-size: 4em;

			span {
				animation: ${glitch} 0.01s infinite;
			animation-direction: alternate;
			}
		}

		h2 {
			font-size: 2em;
			font-weight: 300;
		}

		p {
			font-weight: 300;
			font-size: 1.5em;
			text-align: center;
		}
	}
`

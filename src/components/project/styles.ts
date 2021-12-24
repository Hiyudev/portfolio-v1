import device from 'src/styles/device';
import styled from 'styled-components';
export const ProjectPreview = styled.div`
  img {
		background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 1rem;
    max-width: 450px;
    max-height: 300px;
    width: 100%;
  }
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
	height: fit-content;
  padding: 1.5rem;
  z-index: 1;
  background-color: ${({ theme }) => theme.main.dark};
  border-radius: 1rem;
  gap: 1.5rem;

	@media ${device.max.mobile} {
		margin-top: -2rem;
	}

	@media ${device.min.mobile} {
		margin-top: 2rem;
  	margin-bottom: 2rem;
	}

  p {
    word-wrap: break-word;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: flex-start;
		list-style: none;

		li {
			font-weight: 100;
			font-size: 0.8rem;
		}
  }
`;

export const ProjectFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

	a {
		align-self: flex-start;

		svg {
			width: 24px;
		}
	}
`;

interface IProjectWrapper {
	reverse?: boolean;
}

export const ProjectWrapper = styled.div<IProjectWrapper>`
  display: grid;
  gap: 0.625rem;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;

	& > ${ProjectPreview}, ${ProjectCard} {
		grid-row: 1 / -1;
	}

	& > ${ProjectPreview} {
		grid-column: ${props => props.reverse ? '6 / -1' : '1 / 8'};
	}

	& > ${ProjectCard} {
  	grid-column: ${props => props.reverse ? '1 / 8' : '6 / -1'};
	}


	@media ${device.max.mobile} {
		display: flex;
		flex-direction: column;
	}
`;


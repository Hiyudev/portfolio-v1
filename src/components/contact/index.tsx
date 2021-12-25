import device from 'src/styles/device';
import styled from 'styled-components';

export const ContactList = styled.div`
	display: flex;
	justify-content: space-around;
	gap: 2rem;

	@media ${device.max.mobile} {
		flex-direction: column;
	}
`;

interface IContact {
	color: string;
}

export const Contact = styled.div<IContact>`
	background-color: ${({ theme }) => theme.main.dark};
	padding: 1.5rem;
	border-radius: 1rem;
	gap: 1.5rem;
	height: 100%;

	margin-top: 2.5rem;
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;

	:hover {
		svg,
		h2 {
			transition: color 0.3s;
			color: ${(props) => props.color};
		}
	}

	svg {
		margin-top: -2rem;
		width: 64px;
	}
`;

export const ContactInfo = styled.div`
	display: flex;
	gap: 0.5rem;
`;

import { keyframes } from "styled-components";

const glitch = keyframes`
	from {
		text-shadow: 1px 0 0 #cc0f39
, -2px 0 0 #0ffbf9;
	}
	to {
		text-shadow: 2px 0.5px 2px #cc0f39
, -1px -0.5px 2px #0ffbf9;
	}
`;

export const svglitch = keyframes`
	from {
		filter: drop-shadow(1px 0 0 #cc0f39
) drop-shadow(-2px 0 0 #0ffbf9);
	}

	to {
		filter: drop-shadow(2px 0.5px 2px #cc0f39
) drop-shadow(-1px -0.5px 2px #0ffbf9
);
	}
`;

export default glitch;

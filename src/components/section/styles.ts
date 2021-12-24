import styled from 'styled-components';
import device from '../../styles/device';


export const Tag = styled.section`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const TagBody = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  margin-left: 2.5rem;
  margin-right: 2.5rem;

  @media ${device.max.laptop} {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  @media ${device.max.tablet} {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  @media ${device.max.mobile} {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const Tags = styled.div`
  font-style: italic;
  color: transparent;
  -webkit-text-stroke: 1px ${({ theme }) => theme.colors.text};
  font-weight: 300;
`;

export const TagsStart = styled(Tags)`
  :before {
    content: '<';
  }

  :after {
    content: '>';
  }
`;

export const TagsEnd = styled(Tags)`
  :before {
    content: '</';
  }

  :after {
    content: '>';
  }
`;

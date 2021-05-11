import styled from 'styled-components';

interface Props {
	isVisible: boolean;
}

export const Wrapper = styled.div`
  margin: 10px;
`;

export const DetailsToFill = styled.div`
  display: ${(props: Props) => (props.isVisible ? 'block' : 'none')};
`;

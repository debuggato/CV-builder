import styled from 'styled-components';

interface Props {
  isVisible: boolean;
};

export const Container = styled.section`
  display: ${(props: Props) => (props.isVisible ? 'block' : 'none')};
`;

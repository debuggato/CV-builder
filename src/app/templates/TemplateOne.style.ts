import styled from 'styled-components';

import colors from '../../styles/color.style';

export const Container = styled.div`
  display: grid;
  grid-template:
    'header header'
    'aside main';
`;

export const Email = styled.div``;

export const Header = styled.header`
  border-bottom: 1px solid ${colors.black};
  grid-area: header;
`;

export const Address = styled.div`
  text-transform: capitalize;
`;

export const Phone = styled.div``;

export const Description = styled.p``;

export const Title = styled.h4`
  border-bottom: 1px solid ${colors.black};
`;

export const Main = styled.main`
  grid-area: main;
  padding: 5px;
`;

export const Sidebar = styled.aside`
  grid-area: aside;
  padding: 5px;
`;

export const FullName = styled.h1`
  margin-left: 10px;
  text-transform: capitalize;
  margin-bottom: 0;
`;

export const JobTitle = styled.h3`
  margin-left: 10px;
  text-transform: capitalize;
  font-size: 15px;
  margin-top: 5px;
  color: ${colors.lightGrey};
`;

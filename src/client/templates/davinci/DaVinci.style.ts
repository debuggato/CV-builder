import styled from 'styled-components';
import colors from '../../styles/colors';
import sizes from '../../styles/sizes';

interface Props {
	border: string;
}

export const Container = styled.div`
  display: grid;
  grid-template:
    'header header header header'
    'aside main main main'
    'aside main main main'
    'aside main main main'
    'aside main main main';
`;

export const Email = styled.div``;

export const Header = styled.header<Props>`
  border-bottom: ${({ border }) => (border ? `5px solid ${colors.border}` : 'none')};
  grid-area: header;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

export const Address = styled.div`
  text-transform: capitalize;
`;

export const Phone = styled.div``;

export const WhoIam = styled.div`

`;

export const ContactDetails = styled.div`
  max-width: 225px;
  text-align: right;
  line-height: 25px;
  margin-right: 10px;
`;

export const Main = styled.main`
  grid-area: main;
  padding: 5px;
`;

export const Sidebar = styled.aside`
  grid-area: aside;
  padding: 5px 10px;
  background: #f1f1f1;
  min-height: 465px;
  max-width: 180px;
  min-width: 100px;
`;

export const FullName = styled.h1`
  text-transform: capitalize;
  margin: 0;
  font-size: ${sizes.h1};
`;

export const JobTitle = styled.h3`
  text-transform: capitalize;
  font-size: ${sizes.h3};
  margin-top: 5px;
  color: ${colors.paragraph};
`;

import styled from 'styled-components';
import colors from '../../styles/colors';

export const ActionsWrapper = styled.div`
  margin-bottom: 10px;
  
  button {
    color: ${colors.black};
  }
`;

export const EditorStyled = styled.div`
  border: 1px solid ${colors.grey};
  min-height: 150px;

  .public-DraftEditor-content {
    min-height: 150px;
    padding: 10px;
  }
`;
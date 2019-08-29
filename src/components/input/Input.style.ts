import styled from 'styled-components'

import colors from '../../styles/color.style'

export type StyleProps = {
  withoutStyle?: boolean
}

const Input = styled.input`
  display: block;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  background: ${ colors.white };
  background-clip: border-box;
  border: 1px solid #ced4da;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-size: 15px;
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;

  &:focus {
    color: #495057;
    background: ${ colors.white };
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,0.25)
  }
`

export default Input
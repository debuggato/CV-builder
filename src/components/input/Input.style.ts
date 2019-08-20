import styled, { css } from 'styled-components'

import { colors } from '../../styles/color.style'

export interface StyleProps {
  withoutStyle?: boolean
}

export const Input = styled.input`
  ${ (props: StyleProps) => props.withoutStyle ? css`
    background: blue;
  ` : css`
      display: block;
      padding: 0.375rem 0.75rem;
      line-height: 1.5;
      color: #495057;
      background: ${ colors.basic.white };
      background-clip: border-box;
      border: 1px solid #ced4da;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      font-size: 15px;
      border-radius: 5px;
      box-sizing: border-box;
      width: 100%;

      &:focus {
        color: #495057;
        background: ${ colors.basic.white };
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0,123,255,0.25)
      }
    `
  }
`

export const Wrapper = styled.div`

`
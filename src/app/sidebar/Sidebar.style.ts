import styled from 'styled-components'

import colors from '../../styles/color.style'

export const Wrapper = styled.div`
  width: 40%;
  min-height: 100vh;
  position: relative;
`

export const Action = styled.div`
  width: 40%;
  height: auto;
  background-color: ${ colors.white };
  position: fixed;
  bottom: 0;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-top: 1px solid ${ colors.lightGrey };
`
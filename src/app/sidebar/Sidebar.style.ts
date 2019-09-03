import styled from 'styled-components'

import colors from '../../styles/color.style'

export const Container = styled.aside`
  width: 30%;
  min-height: 100vh;
  position: relative;
`

export const ActionBar = styled.div`
  width: 30%;
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
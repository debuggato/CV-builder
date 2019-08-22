import styled from 'styled-components'

import colors from '../../styles/color.style'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
  background: ${ colors.lightGrey };
`

export const PageWrapper = styled.div`
  background: #fff;
  box-shadow: 0px 0px 2px #999;
  width: 700px;
  height: auto;
  margin: 35px;
`
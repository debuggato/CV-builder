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
  background: ${ colors.white };
  width: 595px;
  height: 842px;
  margin: 15px 30px 60px 30px;
`

export const Actions = styled.div`
  background: ${ colors.lightGrey };
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
`
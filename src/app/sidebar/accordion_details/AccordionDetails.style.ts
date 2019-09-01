import styled from 'styled-components'

import colors from '../../../styles/color.style'

type Props = {
  isVisible: boolean
}

export const Container = styled.div`
  padding: 10px;
  border: 1px solid ${ colors.lightGrey };
  height: auto;
  margin-bottom: 10px;
`

export const Wrapper = styled.div`
  margin: 10px 0;
`

export const Header = styled.div`
  cursor: pointer;

  i {
    float: right;
  }
`

export const Body = styled.div`
  display: ${ (props: Props) => props.isVisible ? 'block' : 'none' };
`

export const Title = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
`

export const Dates = styled.div`
  color: ${ colors.lightGrey };
  font-weight: 500;
`
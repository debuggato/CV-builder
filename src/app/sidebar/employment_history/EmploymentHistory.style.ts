import styled from 'styled-components'

type Props = {
  isVisible: boolean
}

export const Container = styled.div`
  padding: 10px;
`

export const Wrapper = styled.div`
  margin: 10px;
`

export const DetailsToFill = styled.div`
  display: ${ (props: Props) => props.isVisible ? "block" : "none" };
`
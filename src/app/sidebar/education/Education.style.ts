import styled from 'styled-components'

type Props = {
  isVisible: boolean
}

export const Container = styled.section``

export const Subtitle = styled.p``

export const Wrapper = styled.div`
  margin: 10px;
`

export const DetailsToFill = styled.div`
  display: ${ (props: Props) => props.isVisible ? "block" : "none" };
`
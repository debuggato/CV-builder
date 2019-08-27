import styled from 'styled-components'

interface Props {
  isVisible: boolean
}

export const Container = styled.div`
  padding: 10px;
`

export const Subtitle = styled.p`

`

export const Wrapper = styled.div`
  margin: 10px;
`

export const DetailsToFill = styled.div`
  display: ${ (props: Props) => props.isVisible ? "grid" : "none" };
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`
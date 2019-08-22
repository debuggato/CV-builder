import styled from 'styled-components'

interface Props {
  isVisible: boolean
}

export const Wrapper = styled.div`
  padding: 10px;
`

export const Subtitle = styled.p`

`

export const DetailsToFill = styled.div`
  display: ${ (props: Props) => props.isVisible ? "grid" : "none" };
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`
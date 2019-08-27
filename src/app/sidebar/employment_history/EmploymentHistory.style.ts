import styled from 'styled-components'

interface Props {
  isVisible: boolean
}

export const Container = styled.div`
  padding: 10px;
`

export const Wrapper = styled.div`
  margin: 10px;
`

export const Subtitle = styled.p`

`

export const DetailsToFill = styled.div`
  display: ${ (props: Props) => props.isVisible ? "block" : "none" };
`
import styled from 'styled-components'

interface Props {
  isVisible?: boolean
}

export const Wrapper = styled.div`
  display: ${ (props: Props) => props.isVisible ? 'block' : 'none' };
`
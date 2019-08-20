import styled from 'styled-components'

interface Props {
  isVisible: boolean
}

export const Wrapper = styled.div`
  padding: 10px;
`

export const Title = styled.h3`

`

export const LinkAccordion = styled.a`
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    text-decoration: underline;
  }
`

export const MainDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`

export const AdditionalDetails = styled(MainDetails)`
  display: ${ (props: Props) => props.isVisible ? "grid" : "none" };
`
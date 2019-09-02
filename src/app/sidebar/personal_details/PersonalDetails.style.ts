import styled from 'styled-components'

type Props = {
  isVisible: boolean
}

export const Container = styled.section`
  position: absolute;
  width: 100%;
  box-sizing: border-box;
`

export const Wrapper = styled.div`
  margin: 10px;
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

`

export const AdditionalDetails = styled(MainDetails)`
  display: ${ (props: Props) => props.isVisible ? "block" : "none" };
  padding-bottom: 120px;
`
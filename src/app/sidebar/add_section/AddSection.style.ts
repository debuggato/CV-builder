import styled from 'styled-components'

export const Container = styled.section``

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`

export const Wrapper = styled.div`
  padding: 10px 0;

  label:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
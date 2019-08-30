import styled from 'styled-components'

type Props = {
  iconPosition?: string
}

const Btn = styled.button`
  display: inline-block;
  font-weight: 400;
  color: white;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  font-size: 15px;
  margin: 0 5px;
  background: ${ props => props.color };

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.5);
  }
`

export default Btn
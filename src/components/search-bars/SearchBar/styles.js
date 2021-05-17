import styled from 'styled-components'

export const StyledInput = styled.input`
  --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-bottom: 1rem;
  width: 100%;
  display: block;
  border-radius: 1.75rem;
  background-color: #fff;
  height: 3.5rem;
  -webkit-appearance: textfield;
  outline-offset: -2px;
  font-size: 1.125rem;
  border: 0;
  outline: none;
  transition: 0.3s;
  &:focus {
    border: 1px solid #aaa;
  }
`

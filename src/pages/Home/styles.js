import styled from 'styled-components'

export const PageInfo = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: #555;
`

export const ToggleButton = styled.button`
  height: 3.5rem;
  border-radius: 1.75rem;
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  border: none;
  color: white;
  background-color: ${(props) => (props.favorites ? '#3b82f6' : '#f59e0b')};
  &:hover {
    background-color: ${(props) => (props.favorites ? '#2563eb' : '#d97706')};
  }
`

import styled from 'styled-components'

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  border-radius: 1.25rem;
  width: 100%;
  max-width: 320px;
  margin-bottom: 20px;
`

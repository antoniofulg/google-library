import styled from 'styled-components'

export const PaginationDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
`

export const PageNavigation = styled.button`
  background-color: #3b82f6;
  border: none;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1.75rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #2563eb;
  }
  &:disabled {
    background-color: #888;
  }
`

export const PageInfo = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #555;
`

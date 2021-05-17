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
  @media only screen and (max-width: 425px) and (min-width: 321px) {
    order: 1;
    padding: 0.25rem 1.25rem;
  }
  @media only screen and (max-width: 320px) {
    order: 1;
  }
`

export const PageInfo = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #555;
  @media only screen and (max-width: 425px) {
    order: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`

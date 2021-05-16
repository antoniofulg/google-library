import styled from 'styled-components'

export const PaginationDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
`

export const PageNavigation = styled.button`
  border-radius: 12px;
  margin: 0 1em;
  padding: 0.75em 1em;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  background-color: #fff;
  color: #555;
  width: 250px;
`

export const PageInfo = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #555;
`

import styled from 'styled-components'

const getWidthGrid = (value) => {
  if (!value) return 'width: 100%'
  const width = (value / 12) * 100
  return `width: ${width}%`
}

export const StyledColumn = styled.div`
  float: left;
  padding: 0.25rem;
  min-height: 1px;
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    ${({ mobile }) => getWidthGrid(mobile)}
  }

  @media only screen and (min-width: 768px) {
    ${({ tablet }) => getWidthGrid(tablet)}
  }

  @media only screen and (min-width: 1024px) {
    ${({ desktop }) => getWidthGrid(desktop)}
  }
`

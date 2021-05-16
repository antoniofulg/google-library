import styled from 'styled-components'

export const StyledContainer = styled.div`
  max-width: 1360px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }
`

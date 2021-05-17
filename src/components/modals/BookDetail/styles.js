import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 600px;
  margin-bottom: 10px;
`

export const CardDescription = styled.div`
  padding: 2px 16px;
  margin-bottom: 20px;
  height: 300px;
  overflow-y: auto;
  @media only screen and (max-width: 425px) {
    height: 200px;
  }
`

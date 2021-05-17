import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 600px;
  margin-bottom: 10px;
`

export const CardPreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 12px;
`

export const CardContent = styled.div`
  padding: 2px 16px;
`

export const CardDescription = styled.div`
  padding: 2px 16px;
  margin-bottom: 20px;
  height: 300px;
  overflow-y: scroll;
  @media only screen and (max-width: 425px) {
    height: 200px;
  }
`

export const CardActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`

export const Image = styled.img`
  width: 100%;
  max-width: 140px;
  height: 100%;
  border: 1px solid #eee;
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.25rem;
  margin: 0.75rem 0 0.5rem;
`

export const Info = styled.h2`
  font-weight: 500;
  font-size: 1.125rem;
  margin: 0.25rem 0 0.5rem;
  display: inline-block;
`

export const Snippet = styled.p`
  font-weight: 400;
  font-size: 1rem;
  margin-top: 0.5rem;
`

const buttonStyle = `
border-size: 1px;
border-style: solid;
color: #fff;
padding: 0.25rem 0.5rem;
border-radius: 0.75rem;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 14px;
font-weight: 600;
cursor: pointer;
transition: 0.3s;
@media only screen and (max-width: 768px) {
  padding: 0.25rem;
}`

export const DetailButton = styled.button`
  ${buttonStyle}
  background-color: #3b82f6;
  border-color: #3b82f6;
  &:hover {
    background-color: #2563eb;
    border-color: #2563eb;
  }
`

export const FavButton = styled.button`
  ${buttonStyle}
  background-color: ${(props) => (props.favorites ? '#fff' : '#f59e0b')};
  color: ${(props) => (props.favorites ? '#f59e0b' : '#fff')};
  border-color: #f59e0b;
  &:hover {
    background-color: ${(props) => (props.favorites ? '#ddd' : '#d97706')};
    color: ${(props) => (props.favorites ? '#d97706' : '#fff')};
    border-color: #d97706;
  }
`

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
  max-width: 370px;
  margin-bottom: 20px;
`

export const CardPreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 12px;
`

export const Image = styled.img`
  width: 100%;
  max-width: 140px;
  height: 100%;
  border: 1px solid #eee;
`

export const CardContent = styled.div`
  padding: 2px 16px;
`

export const CardActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
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

export const DetailButton = styled.button`
  background-color: #3b82f6;
  border: none;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 0.75rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #2563eb;
  }
`

export const FavButton = styled.button`
  background-color: #f59e0b;
  border: none;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 0.75rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #d97706;
  }
`

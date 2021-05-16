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
`

export const CardBox = styled.div`
  padding: 2px 16px;
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
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

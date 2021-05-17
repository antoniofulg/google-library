import styled, { keyframes } from 'styled-components'

export const Background = styled.div`
  background: rgb(230, 230, 230);
  background: linear-gradient(
    180deg,
    rgba(230, 230, 230, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  min-height: 100vh;
  padding-top: 1rem;
  padding-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #555;
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Loading = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #888;
    border-color: #888 transparent #888 transparent;
    animation: ${loadingAnimation} 1.2s linear infinite;
  }
`

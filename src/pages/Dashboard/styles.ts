import styled, { keyframes } from 'styled-components'

import signOutBackgroundImg from '../../assets/dashboard-background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-left: 20px;

  width: 100%;
  max-width: 700px;

  h1 {
    margin-left: 17px;
  }

  Button {
    width: 25%;
    margin-left: 20px;
  }
`
const appearFromCenter = keyframes`
  from {
    opacity: 0;
    transform: translateX(0px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromCenter} 1s;
`

export const Background = styled.div`
  flex: 1;
  background: url(${signOutBackgroundImg}) no-repeat center;
  background-size: cover;
`

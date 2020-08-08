import styled, { keyframes } from 'styled-components'

import signOutBackgroundImg from '../../assets/dashboard-background.jpg'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  Button {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 6%;
    height: 36px;
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

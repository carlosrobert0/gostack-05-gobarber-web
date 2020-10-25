import React from 'react'

import { FiLogOut } from 'react-icons/fi'

import { useAuth } from '../../hooks/auth'

import { Container, Content, Background, AnimationContainer } from './styles'

import Button from '../../components/Button'

const Dashboard: React.FC = () => {
  const { signOut } = useAuth()

  return (
    <>
      <Container>
        <Background />

        <Content>
          <Button onClick={signOut}>
            <FiLogOut color='#ff9000' size={20}/>
          </Button>

          <AnimationContainer>
            <h1>Dashboard</h1>
          </AnimationContainer>
        </Content>
      </Container>

    </>
  )
}

export default Dashboard

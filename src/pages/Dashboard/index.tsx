import React from 'react'

// import { FiLogOut } from 'react-icons/fi'

import { useAuth } from '../../hooks/auth'

import Button from '../../components/Button'
import { Container, Content, Background } from './styles'

const Dashboard: React.FC = () => {
  const { signOut } = useAuth()

  return (
    <>
      <Container>
        <Content>
          <h1>Dashboard</h1>
          <Button onClick={signOut}>logOut</Button>
        </Content>

        <Background />
      </Container>

    </>
  )
}

export default Dashboard

import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import MockAdapter from 'axios-mock-adapter'
import SignUp from '../../pages/SignUp'
import api from '../../services/api'

const mockedHistoryPush = jest.fn()
const apiMock = new MockAdapter(api)

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush
    }),
    Link: ({ children }: { children: React.ReactNode }) => children
  }
})

apiMock.onPost('users').reply(200, {
  name: 'Carlos',
  email: 'Carlos@gmail.com',
  password: '123456'
})

describe('SignUp Page', () => {
  it('should be able to sign up', async () => {
    const { getByPlaceholderText, getByText } = render(<SignUp />)

    const nameField = getByPlaceholderText('Nome')
    const emailField = getByPlaceholderText('E-mail')
    const passwordField = getByPlaceholderText('Senha')
    const buttonElement = getByText('Cadastrar')

    fireEvent.change(nameField, { target: { value: 'Carlos' } })
    fireEvent.change(emailField, { target: { value: 'Carlos@gmail.com' } })
    fireEvent.change(passwordField, { target: { value: '123456' } })

    fireEvent.click(buttonElement)

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/')
    })
  })
})

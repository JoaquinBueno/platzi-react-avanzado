import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../components/container/RegisterMutation'
import { LoginMutation } from '../components/container/LoginMutation'
import { Helmet } from 'react-helmet'

export default () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(({ data }) => {
                const { signup } = data
                activateAuth(signup)
              })
            }
            const errorMsg = error && 'User already exist'
            return <UserForm disabled={loading} error={errorMsg} title='Register' onSubmit={onSubmit} />
          }

        }

      </RegisterMutation>
      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(({ data }) => {
                const { login } = data
                activateAuth(login)
              })
            }
            const errorMsg = error && 'Incorrect user or password'
            return (
              <>
                <Helmet>
                  <title>Log in | Petgram</title>
                  <meta name='description' content='Log in or Register' />
                </Helmet>
                <UserForm disabled={loading} error={errorMsg} title='Log In' onSubmit={onSubmit} />
              </>)
          }
        }
      </LoginMutation>

    </>

  )
}

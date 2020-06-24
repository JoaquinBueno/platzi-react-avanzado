import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'
import { Layout } from '../components/Layout'

export default () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <Layout title='User settings' subtitle=''>
        <SubmitButton onClick={removeAuth}>Log out</SubmitButton>
      </Layout>
    </>
  )
}

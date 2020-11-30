export const signIn = () => {
  console.log('signin click')
  return {
    type: 'SIGN_IN'
  }
}

export const signOut = () => {
  console.log('signout click')
  return {
    type: 'SIGN_OUT'
  }
}
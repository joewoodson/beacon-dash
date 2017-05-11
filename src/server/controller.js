// @flow

export const homePage = () => ({
  nav: { active: true },
  app: { isAuth: true },
})

export const loginPage = () => ({
  nav: { active: true },
})

export const helloPage = () => ({
  hello: { message: 'Server-side preloaded message' },
})

export const helloAsyncPage = () => ({
  hello: { messageAsync: 'Server-side preloaded message for async page' },
})

export const helloEndpoint = (num: number) => ({
  serverMessage: `Hello from the server! (received ${num})`,
})

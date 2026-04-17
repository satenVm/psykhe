import { getRequestConfig } from 'next-intl/server'

const locales = ['en', 'hy', 'ru']

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale

  if (!locale || !locales.includes(locale)) {
    return {
      locale: 'en',
      messages: (await import('./app/messages/en.json')).default
    }
  }

  return {
    locale,
    messages: (await import(`./app/messages/${locale}.json`)).default
  }
})
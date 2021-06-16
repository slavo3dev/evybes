import getConfig from 'next/config'

const {publicRuntimeConfig} = getConfig()


export const API = publicRuntimeConfig.API

export const API_NAME = publicRuntimeConfig.API_NAME

export const DOMAIN = publicRuntimeConfig.DOMAIN

export const PRODUCTION = publicRuntimeConfig.PRODUCTION

export const FB_APP_ID = publicRuntimeConfig.FB_APP_ID

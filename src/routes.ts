import { Router } from '@edgio/core/router'
import shoppingFlowRouteHandler from './shoppingFlowRouteHandler'

export default new Router()
  .match('/', shoppingFlowRouteHandler)
  .match('/miko-logo.svg', ({ cache, proxy }) => {
    cache({
      edge: {
        maxAgeSeconds: 60 * 60 * 24 * 365,
      },
    })
    proxy('origin')
  })
  .match('/homepage/miko-robo-mobile.webp', ({ cache, proxy }) => {
    cache({
      edge: {
        maxAgeSeconds: 60 * 60 * 24 * 365,
      },
    })
    proxy('origin')
  })
  .match('/_nuxt/:path*', ({ cache, proxy }) => {
    cache({
      edge: {
        maxAgeSeconds: 60 * 60 * 24 * 365,
      },
    })
    proxy('origin')
  })
  .match('/fonts/:path*', ({ cache, proxy }) => {
    cache({
      edge: {
        maxAgeSeconds: 60 * 60 * 24 * 365,
      },
    })
    proxy('origin')
  })
  .match('/:suffix', shoppingFlowRouteHandler)
  .match('/store/:suffix', shoppingFlowRouteHandler)
  .match(
    '/:path*/:file.:ext(js|mjs|css|png|ico|svg|jpg|jpeg|gif|ttf|woff|otf)',
    ({ cache, proxy, removeUpstreamResponseHeader, setResponseHeader }) => {
      setResponseHeader('cache-control', 'public, max-age=86400')
      removeUpstreamResponseHeader('set-cookie')
      cache({
        edge: {
          maxAgeSeconds: 60 * 60 * 24 * 365,
        },
      })
      proxy('origin')
    }
  )
  .fallback(({ proxy }) => {
    proxy('origin')
  })

import transformResponse from './transform'
import { RouteHandler } from '@edgio/core/router/Router'

const handler: RouteHandler = async ({ cache, removeUpstreamResponseHeader, updateResponseHeader, proxy }) => {
  cache({
    edge: {
      maxAgeSeconds: 60,
      staleWhileRevalidateSeconds: 60 * 60 * 24 * 365,
    },
  })
  removeUpstreamResponseHeader('set-cookie')
  removeUpstreamResponseHeader('cache-control')
  updateResponseHeader('location', /https:\/\/miko\.ai\//gi, '/')
  updateResponseHeader('location', /https:\/\/in\.miko\.ai\//gi, '/')
  proxy('origin', { transformResponse })
}

export default handler

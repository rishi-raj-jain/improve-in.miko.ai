import * as cheerio from 'cheerio'
import Request from '@edgio/core/router/Request'
import Response from '@edgio/core/router/Response'

export default function transformResponse(response: Response, request: Request) {
  if (response.body) {
    const $ = cheerio.load(response.body)
    response.body = $.html()
      .replace(/\=\"\/\//g, '="https://')
      .replace(/https?:\/\/in\.miko\.ai\//g, '/')
  }
}

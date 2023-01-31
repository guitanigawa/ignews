import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'

const routes = [
    {
      type: 'posts',
      path: '/posts',
    },
  ]

export const createClient = (config = {}) => {
    const client = prismic.createClient(sm.apiEndpoint, {
      routes,
      ...config,
    })
  
    prismicNext.enableAutoPreviews({
      client,
      previewData: config.previewData,
      req: config.req,
    })
  
    return client
  }

import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'spmc989j',
    dataset: 'production',
    cors: [
      {
        "origin": "https://portfolio-q1as.vercel.app/",
        "maxAge": 86400 // Adjust as needed
      }
    ]
  }
})

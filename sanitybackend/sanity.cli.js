import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'spmc989j',
    dataset: 'production',
    cors: [
      {
        "origin": "https://portfolio-fawn-three-23.vercel.app/",
        "maxAge": 86400 // Adjust as needed
      }
    ]
  }
})

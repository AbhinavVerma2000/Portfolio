import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: 'spmc989j',
  dataset: 'production',
  cors: [
    {
      "origin": "https://portfolio-q1as.vercel.app/",
      "maxAge": 86400 // Adjust as needed
    }
  ],

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

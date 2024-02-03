export default {
    name: 'project',
    type: 'document',
    title: 'Project Thumbnail',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image'
      },
      {
        title: 'Url',
        name: 'url',
        type: 'url'
    }
    ]
}
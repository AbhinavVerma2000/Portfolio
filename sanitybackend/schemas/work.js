export default {
    name: 'work',
    type: 'document',
    title: 'Work',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'logo',
            type: 'image',
            title: 'Logo'
        },
        {
            name: 'desc',
            type: 'array',
            of: [
                {
                  type: 'block'
                }
              ],
            title: 'About',
        },
        {
            name: 'interval',
            type: 'string',
            title: 'Time-interval'
        }
    ]
}

export default {
    name: 'profile',
    type: 'document',
    title: 'Profile',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'desc',
            type: 'string',
            title: 'About',
        },
        {
            title: 'Instagram',
            name: 'instagram',
            type: 'url'
        },
        {
            title: 'Facebook',
            name: 'facebook',
            type: 'url'
        },
        {
            title: 'LinkedIn',
            name: 'linkedin',
            type: 'url'
        },
        {
            title: 'Github',
            name: 'github',
            type: 'url'
        }
    ]
}

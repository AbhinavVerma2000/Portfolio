export default {
    name: "knowledge",
    type: "document",
    title: "Knowledge",
    fields: [
        {
            title: "Skill",
            name: "skill",
            type: "string"
        },
        {
            title: 'Percentage',
            name: 'percentage',
            type: 'number',
            validation: Rule => Rule.required().min(0).max(100)
        }
    ]
}
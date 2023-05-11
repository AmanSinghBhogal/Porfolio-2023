export default{
    name: "projects",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        },
        {
            name: "projectLink",
            title: "ProjectLink",
            type: "string"
        },
        {
            name: "codelink",
            title: "CodeLink",
            type: "string"
        },
        {
            name: "imgURL",
            title: "ImageURL",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [
                {
                    name: "tag",
                    title: "Tag",
                    type: "string"
                }
            ]
        }
    ]
}
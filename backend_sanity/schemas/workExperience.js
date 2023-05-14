export default{
    name: "workexperience",
    title: "WorkExperience",
    type: "document",
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: "company",
            title: "Company",
            type: "string"
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        },
        {
            name: "imgurl",
            title: "ImgURL",
            type: "image",
            options: {
                hotspot: true
            }
        }
    ]
}
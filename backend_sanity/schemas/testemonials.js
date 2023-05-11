export default{
    name: "testemonials",
    title: "Testemonials",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "company",
            title: "Company",
            type: "string"
        },
        {
            name: "imageurl",
            title: "ImgURL",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: "feedback",
            title: "Feedback",
            type: "string" 
        }
    ],
}
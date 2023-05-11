export default{
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        {
            name: "year",
            title: "Year",
            type: "string"
        },
        {
            name: "work",
            title: "Work",
            type: "array",
            of:[{type:"workexperience"}]
        }
    ]
}
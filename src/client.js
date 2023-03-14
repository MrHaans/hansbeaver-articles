import client from "@sanity/client"

export default client({
    projectId: "y13jp1on",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-03-14"
})
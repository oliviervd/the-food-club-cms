import type {CollectionConfig} from "payload";

const Designer: CollectionConfig = {
    slug: "designer",
    admin: {
        useAsTitle: "name"
    },
    access: {
        read: () => true
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true
        }
    ]
}

export default Designer
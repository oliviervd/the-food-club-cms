import type {CollectionConfig} from "payload";

const Lists:CollectionConfig = {
    slug: 'lists',
    access: {
        read: () => true
    },
    fields: [
        {
            name: "title",
            type: "text",
        },
        {
            name: "items",
            type: "array",
            fields: [
                {
                    name: "item",
                    type: "relationship",
                    relationTo: ["categories", "venue"]
                }
            ]
        }
    ]
}
export default Lists
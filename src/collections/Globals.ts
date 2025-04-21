import type {CollectionConfig} from "payload";

const Globals: CollectionConfig = {
    slug: "globals",
    access: {
        read: () => true
    },
    fields:[
        {
            //menu items
            name: "texts",
            type: "array",
            fields: [
                {
                    label: "title",
                    name: "title",
                    type: "text"
                },
                {
                    label: "text",
                    name: "text",
                    type: "richText"
                }
            ]

        }
    ]
}

export default Globals;
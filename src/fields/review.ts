import {Field} from "payload";

const review: Field = {
    name: "reviews",
    label: "reviews",
    admin: {
      description: "this is what the food club had to say. - rule number 2. don't argue with the food club."
    },
    type: "group",
    fields: [
        {
            name: "review",
            type: "richText",
            localized: true,
            label: "review"
        },
        {
            name: "author",
            type: "relationship",
            relationTo: "users"
        }
    ]
}

export default review
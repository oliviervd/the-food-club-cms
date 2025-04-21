import {Field} from "payload";

const occasion: Field = {
    name: "type",
    type: "select",
    hasMany: true,
    required: true,
    options: [
        {
            value: "breakfast",
            label: {
                en: "breakfast",
                fr: "petit déjeuner",
                nl: "ontbijt"
            }
        },
        {
            value: "brunch",
            label: "brunch"
        },
        {
            value: "lunch",
            label: "lunch"
        },
        {
            value: "dinner",
            label: "dinner"
        },
        {
            value: "market",
            label: {
                en: "market",
                fr: "marché",
                nl: "markt"
            }
        },
        {
            value: "bar",
            label: "bar"
        },
        {
            value: "bakery",
            label: {
                en: "bakery",
                fr: "boulangier",
                nl: "bakkerij"
            }
        },
        {
            value: "snack",
            label: "snack"
        }
    ]
}

export default occasion;
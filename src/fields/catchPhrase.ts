import {Field} from "payload";

const catchPhrase: Field = {
    name: "slugs",
    label: "slugs",
    admin: {
        description: "this is what the food club had to say (in short). - rule number 2. don't argue with the food club."
    },
    type: "group",
    // todo: remove group after migration
    fields: [
        {
            name: "slug",
            label: {
                en: "short introduction",
                fr: "description sommaire",
                nl: "korte introductie",
            },
            type: "richText",
            localized: true,
            admin: {
                description: {
                    en: "short description that comes below the title. restrict to 1 or two sentences max!",
                    fr: "courte description qui figure sous le titre. limiter à 1 ou 2 phrases maximum !",
                    nl: "korte beschrijving die onder naam van restaurant/bar komt. Hou het kort en bondig!"
                }
            }
        },
        {
            name: "author",
            type: "relationship",
            relationTo: "users"
        }
    ]
}

export default catchPhrase
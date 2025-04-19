import type {CollectionConfig} from "payload";
import notes from "../fields/notes";

const Cuisine: CollectionConfig = {
    slug: "cuisine",
    admin: {
        useAsTitle: "name",
        description: {
            en: "collection of kitchens/cusines used to type venues",
            fr: "collection de cuisines utilisées pour la typologie des lieux",
            nl: "verzameling van keukens om locaties te categoriseren"
        }
    },
    labels: {
        singular: {
            en: "kitchen",
            fr: "cuisine",
            nl: "keuken"
        },
        plural: {
            en: "kitchens",
            fr: "cuisines",
            nl: "keukens"
        }
    },
    access: {
        read: ()=> true,
    },
    fields: [
        {
            name: "name",
            type: "text",
            required:true,
            localized: true,
        },
        {
            // categorise tag
            name: "type",
            type: "select",
            required: true,
            admin: {
                description: {
                    en: "select the type to which this category belongs",
                    fr: "sélectionner le type auquel appartient cette catégorie",
                    nl: "selecteer het type waartoe deze categorie behoort"
                }
            },
            options: [
                {
                    label: {
                        en:"drinks",
                        fr:"boissons",
                        nl:"dranken"
                    },
                    value: "drinks"
                },
                {
                    label: {
                        en: "kitchen",
                        fr: "cuisine",
                        nl: "keuken"
                    },
                    value: "cuisine"
                },
                {
                    label: {
                        en: "dish",
                        nl: "gerecht",
                        fr: "plat"
                    },
                    value: "dish"
                },
                {
                    label: {
                        en: "shop",
                        fr: "shop",
                        nl: "shop"
                    },
                    value: "shop"
                },
                {
                    label: {
                        en: "style",
                        fr: "style",
                        nl: "style"
                    },
                    value: "style"
                }
            ]
        },
        {
            name: "description",
            label: "description",
            type: "richText",
            localized: true,
            admin: {
                description: "write a short wiki-like text that explains what this category is about. This doesn't need to be formal, encyclopedic."
            }
        },
        notes,
        {
            name: "active",
            admin:{
                position: "sidebar",
                description: "tick if this category needs to be displayed. - if unticked, the category keeps existing but isn\'t displayed on the website (homepage)."
            },
            label: {
                en: "active?",
                fr: "actif?",
                nl: "actief?"
            },
            type: "checkbox",
        }
    ]
}

export default Cuisine
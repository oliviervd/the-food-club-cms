import {Field} from "payload";

const category:Field = {
    name: "category",
    label: {
        en: "categorie(s)",
        fr: "categorie(s)",
        nl: "categorie(en)"
    },
    admin: {
        description: {
            en: "pick the categories to which this venue belongs",
            fr: "Choisissez les catégories auxquelles ce lieu appartient",
            nl: "kies de categorieën waartoe deze locatie behoort"
        },
    },
    access: {
        read: () => true
    },
    type: "relationship",
    hasMany: true,
    relationTo: "categories"
}
export default category
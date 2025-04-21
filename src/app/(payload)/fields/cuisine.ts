import {Field} from "payload";

const cuisine:Field = {
    name: "cuisineUsed",
    label: {
        en: "cuisine(s)",
        fr: "cuisine(s)",
        nl: "keuken(s)"
    },
    admin: {
        description: {
            en:"pick the appropriate cuisine or cuisines served at this restaurant/venue",
            fr:"choisir la ou les cuisine(s) appropriée(s) servie(s) dans ce restaurant/lieu",
            nl:"selecteer de juiste keuken of keukens die in dit restaurant/op deze locatie worden geserveerd"
        },
    },
    type: "relationship",
    hasMany: true,
    relationTo: "cuisine",
    required: false
}

export default cuisine
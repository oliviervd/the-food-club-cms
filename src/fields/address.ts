import {Field} from "payload";

const address: Field = {
    name: "address",
    type: "group",
    fields: [
        {
            type: "row",
            fields: [
                {
                    name: "street",
                    label: {
                        en: "street",
                        fr: "rue",
                        nl: "straat"
                    },
                    type: "text",
                },
                {
                    name: "houseNumber",
                    label: {
                        en: "house number",
                        fr: "numéro de maison",
                        nl: "huisnummer"
                    },
                    type: "text",
                },
                {
                    name: "city",
                    label: {
                        en: "city",
                        fr: "ville",
                        nl: "gemeente"
                    },
                    type: "text",
                },
                {
                    name: "postalCode",
                    label: {
                        en: "postal code",
                        fr: "code postal",
                        nl: "postcode"
                    },
                    type: "text",
                }
            ]
        },
        {
            type: "row",
            fields: [
                {
                    name: "longitude",
                    label: {
                        en: "longitude",
                        fr: "longitude",
                        nl: "lengtegraad"
                    },
                    type: "number"
                },
                {
                    name: "latitude",
                    label: {
                        en: "latitude",
                        fr: "latitude",
                        nl: "breedtegraad"
                    },
                    type: "number"
                }
            ]
        }

    ]
}

export default address
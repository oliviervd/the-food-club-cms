import {Field} from "payload";

const pricing: Field = {
    name: "pricing",
    label: {
      en: "pricing",
      fr: "catégorie de prix",
      nl: "prijscategorie"
    },
    type: "select",
    admin: {
        description: {
            en: "indicative price range per head - translates to number of € symbols on frontend (one : €, four: €€€€)",
            fr: "Fourchette de prix indicative par tête - traduit en nombre de symboles € sur le frontend (un : €, quatre : €€€€)",
            nl: "dicatieve prijsklasse per persoon - vertaalt zich naar aantal €-symbolen op de website (één: €, vier: €€€€)"
        }
    },
    options: [
        {
            value: "one",
            label: "10-20EUR"
        },
        {
            value: "two",
            label: "20-30EUR"
        },
        {
            value: "three",
            label: "30-50EUR"
        },
        {
            value: "four",
            label: "50+"
        }
    ]
}

export default pricing
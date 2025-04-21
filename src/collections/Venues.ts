import type {CollectionConfig} from "payload";

import address from "../fields/address";
import contentStatus from "../fields/contentStatus";
import pricing from "../fields/pricing";
import review from "../fields/review";
import memberStatus from "../fields/memberStatus";
import notes from "../fields/notes";
import {seoFields} from "../fields/SEO";

import catchPhrase from "../fields/catchPhrase";
import occasion from "../fields/type";
import openingHours from "../fields/openingHours";

const Venues:CollectionConfig = {
    slug: "venue",
    labels: {
        singular: {
            en: "venue",
            fr: "lieu",
            nl: "locatie"
        },
        plural: {
            en: "venues",
            fr: "lieux",
            nl: "locaties"
        }
    },
    admin: {
        useAsTitle: "venueName"
    },
    access: {
        read: ()=> true,
        create: ()=> true,
        update: ()=> true,
        delete: ()=> true
    },
    fields: [
        {
            name: "venueName",
            label: {
                en: "venue name",
                nl: "naam locatie",
                fr: "nom de lieu"
            },
            type: "text",
            required: true,
            admin: {
                placeholder: {
                    en: "enter venue name",
                    nl: "voeg naam van de locatie toe",
                    fr: "Entrer le nom du lieu"
                }
            }
        },
        {
            type: "row",
            fields: [
                {
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
                    required: false,
                },
                {
                    name: "drinks",
                    label: {
                        en: "drinks",
                        fr: "boissons",
                        nl: "dranken"
                    },
                    type: "relationship",
                    relationTo: "cuisine",
                    admin:{
                        description: {
                            en: "drinks served at this place",
                            nl: "dranken die de locatie aanbiedt",
                            fr: "boissons servies dans ce lieu"
                        }
                    }
                }
            ]
        },
        {
            type:"row",
            fields: [
                pricing,
                occasion
            ]
        },
        {
            type: "row",
            fields: [
                {
                    name: "website",
                    label: "website",
                    type: "text"
                },
                {
                    name: "phone",
                    label: {
                        en: "phone number",
                        fr: "numéro de téléphone",
                        nl: "telefoonnummer"
                    },
                    admin: {
                        placeholder: {
                            en: "add phone number here",
                            fr: "ajouter un numéro de téléphone",
                            nl: "voeg hier het telefoonnummer toe"
                        }
                    },
                    type: "text"
                }
            ]
        },
        catchPhrase,
        review,
        {
            name: "foodClubOrder",
            type: "richText",
            localized: true,
            label: "Food Club tip",
            admin: {
                description: {
                    en: "add a short text on what the Food Club orders when coming here, or any tips.",
                    fr: "ajouter un court texte sur ce que le Food Club commande lorsqu'il vient ici, ou des conseils.",
                    nl: "korte tekst met tips van de food club."
                }
            }
        },
        openingHours,
        {
            label: "other opening hours (atypical)",
            name: "otherOpeningHours",
            type: "richText",
            localized: true,
            admin: {
                description: {}
            }
        },
        address,

        // media
        {
            type: "tabs",
            tabs: [
                {name: "media",
                    label: "Media",
                    fields:[
                        {
                            name: "hero",
                            label: "hero image",
                            type: "relationship",
                            relationTo: "media"
                        },
                        {
                            type: "array",
                            name : "gallery",
                            label: "gallery",
                            fields: [
                                {
                                    label: "image",
                                    name: "image",
                                    type: "relationship",
                                    relationTo: "media"
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        {
            name: "club",
            label: "club",
            type: "select",
            admin: {
                position: "sidebar"
            },
            options: [
                {
                    label:"brussels",
                    value: "brussels"
                },
                {
                    label: "gent",
                    value: "gent"
                },
                {
                    label: "antwerp",
                    value: "antwerp"
                }
            ]
        },
        {
            name: "url",
            label: "URL",
            type: "text",
            admin: {
                position: "sidebar",
                description: "NO SPACES! USE '-' INSTEAD. - example: 'antwerp-brussel' or 'gent-brussel'."
            }
        },
        contentStatus,
        memberStatus,
        {
          name: 'new',
          label: 'new',
          type: "checkbox",
          defaultValue: false,
          admin: {
              position: "sidebar",
              description: 'tick to highlight this venue as new. - will be removed after a while.'
          }
        },
        {
            name: 'takeAway',
            label: 'take-away',
            type: "checkbox",
            defaultValue: false,
            admin: {
                position: "sidebar",
                description: "tick if take-away possible."
            }
        },
        {
            name: 'vegetarian',
            label: {
                en: "vegetarian friendly?",
                fr: "végétarienne?",
                nl: "vegetarisch aanbod?"
            },
            type: "checkbox",
            defaultValue: false,
            admin: {
                position: "sidebar",
                description: {
                    en: "does this venue offer vegetarian menu?",
                    fr: "Ce lieu propose-t-il un menu végétarien?",
                    nl: "biedt deze locatie vegetarische opties?"
                }
            },
        },
        {
            name: 'vegan',
            label: {
                en: 'vegan friendly?',
                fr: "vegan friendly?",
                nl: 'vegan friendly?'
            },
            type: "checkbox",
            defaultValue: false,
            admin: {
                position: "sidebar",
                description: {
                    en: "does this venue offer vegan menu?",
                    fr: "Ce lieu propose-t-il un menu vegan?",
                    nl: "biedt deze locatie vegan opties?"
                }
            },
        },
        {
            name:"toVisit",
            label: "to visit",
            admin: {
                position: "sidebar",
                description: "venue that needs to be visited by the foodclub."
            },
            type: "checkbox"
        },
        {
            name: "lastVisit",
            label: "date of last visit",
            type: "date",
            admin: {
                position: "sidebar",
            }
        },
        {
            name: "reservations",
            label: "booking URL",
            type: "text",
            admin: {
                position: "sidebar",
                description: {
                    en: "url to booking service (Resengo or other)",
                    fr: "url vers le service de réservation (Resengo ou autre)",
                    nl: "url naar booking service (Resengo, ...)"
                }
            }
        },
        notes,
        seoFields
    ],
    endpoints: [
        /*
        // endpoint for SEO
        {
            path: "venues/:url/seo",
            method: "get",
            handler: async (req) => {

            }

        },
        // endpoint containing all data
        {
            path: "venues/:url",
            method: "get",
            handler: async (req) => {
                return "test"
            }
        }

        */
    ]
}

export default Venues;
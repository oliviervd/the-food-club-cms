import {Field} from "payload";

const memberStatus:Field = {
    name: "status",
        label: "part of the club?",
    type: "select",
    required: true,
    admin: {
    position: "sidebar",
        description: "is this venue currently selected as member of the food club?"
    },
    options: [
        {
            label: "yes",
            value: "yes"
        },
        {
            label: "alumni",
            value: "alumni"
        },
        {
            label: "no (wannabe)",
            value: "no"
        }
    ]

}

export default memberStatus
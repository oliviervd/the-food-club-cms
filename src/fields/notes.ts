import {Field} from "payload";

const notes:Field = {
    access: {
        read: ()=>false // don't publish this field on API.
    },
    name: 'notes',
        label: "notes",
    type: "richText",
    admin: {
    position: "sidebar"
    }
}

export default notes

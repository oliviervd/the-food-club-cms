import {Field} from "payload";

const openingHours: Field = {
    type: "array",
    label: {
        en: "hours",
        fr: "horaires",
        nl: "openingsuren"
    },
    name: "hours",
    fields:[
        {
            type: "row",
            fields: [
                {
                    name: "openDay",
                    label: {
                        en: "day",
                        fr: "jour",
                        nl: "dag"
                    },
                    type: "select",
                    options: [
                        {
                            value: "Mo",
                            label: {
                                en: "Monday",
                                fr: "Lundi",
                                nl: "maandag"
                            }
                        },
                        {
                            value: "Tu",
                            label: {
                                en: "Tuesday",
                                fr: "Mardi",
                                nl: "dinsdag"
                            }
                        },
                        {
                            value: "We",
                            label: {
                                en: "Wednesday",
                                fr: "Mercredi",
                                nl: "woensdag"
                            }
                        },
                        {
                            value: "Thu",
                            label: {
                                en: "Thursday",
                                fr: "Jeudi",
                                nl: "donderdag"
                            }
                        },
                        {
                            value: "Fr",
                            label: {
                                en: "Friday",
                                fr: "Vendredi",
                                nl: "vrijdag"
                            }
                        },
                        {
                            value: "Sat",
                            label: {
                                en: "Saturday",
                                fr: "Samedi",
                                nl: "zaterdag"
                            }
                        },
                        {
                            value: "Sun",
                            label: {
                                en: "Sunday",
                                fr: "Dimanche",
                                nl: "zondag"
                            }
                        },
                        {
                            value: "UNDEFINED",
                            label: "UNDEFINED"
                        }
                    ]
                },
                {
                    name: "openFrom",
                    label: {
                        en: "open from (hour)",
                        fr: "ouvert de (heure)",
                        nl: "open van (uur)"
                    },
                    type: "date",
                    admin: {
                        date: {
                            pickerAppearance: "timeOnly"
                        }
                    }
                },
                {
                    name: "openTill",
                    label: {
                        en: "open till (hour)",
                        fr: "ouvert jusqu'à (heure)",
                        nl: "open tot (uur)"
                    },
                    type: "date",
                    admin: {
                        date: {
                            pickerAppearance: "timeOnly"
                        }
                    }
                }
            ]
        }

    ]
}

export default openingHours
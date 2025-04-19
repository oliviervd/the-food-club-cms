import type {CollectionConfig} from "payload";
import notes from "../fields/notes";

// @ts-ignore
const Categories: CollectionConfig = {
  slug: "categories",
  labels: {
    singular: {
      en: "category",
      nl: "categorie",
      fr: "catégorie"
    },
    plural: {
      en: "categories",
      nl: "categorieen",
      fr: "catégories"
    }
  },
  admin: {
    useAsTitle: "categoryTitle",
  },
  access: {
    read: () => true,
  },
  fields: [
      {
    name: "categoryTitle",
    label: {
      nl: "titel categorie",
      fr: "titre de catégorie",
      en: "category title"
    },
    type: "text",
    required: false,
  },
    {
      name: "categorySubTitles",
      label: {
        nl: "ondertitel categorie",
        fr: "catégorie sous-titre",
        en: "category subtitle"
      },
      localized:true,
      type: "text"
    },
    {
      name: "categoryDescription",
      admin: {
        description: "brief description of the category."
      },
      label: {
        nl: "beschrijving categorie",
        fr: "catégorie description",
        en: "category desc"
      },
      type: "richText",
      localized: true
    },
    {
      type: "tabs",

      tabs: [
        {
          name: "venues",
          label: "venues",
          fields: [
            {
              name: "venues",
              label: "venues",
              admin: {
                description: "venues in category (order will be maintained)"
              },
              type: "array",
              fields: [
                  {
                    name: "venue",
                    label: "venue",
                    relationTo: "venue",
                    type: "relationship",
                  }
              ]
            }
          ]
        },
        {
          name: "media",
          label: "media",
          fields: [
            {
              name: "hero",
              label: "hero image",
              type:"relationship",
              relationTo: "media",
            },
          ]
        }
      ]
    },
    notes,
    {
      name: "active",
      label: {
        en: "active?",
        nl: "actief?",
        fr: "active?"
      },
      type: "checkbox",
      admin: {
        position: "sidebar",
        description:{
          en: "tick if this category needs to be displayed. - if unticked, the category keeps existing but isn't displayed on the website.",
          fr: "cocher si cette catégorie doit être affichée. - si la case n'est pas cochée, la catégorie continue d'exister mais n'est pas affichée sur le site web.",
          nl: "categorie gebruiken op website?"
        }
      },
    },
    {
      name: "url",
      label: "URL",
      type: "text",
      admin: {
        position: "sidebar"
      }
    }
  ],
};

export default Categories;

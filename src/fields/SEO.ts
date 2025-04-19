import {Field} from "payload";

export const seoFields: Field = {
    name: 'seo',
    type: 'group',
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'SEO Title',
            required: false,
        },
        {
            name: 'description',
            type: 'textarea',
            label: 'Meta Description',
            required: false,
        },
        {
            name: 'keywords',
            type: 'text',
            label: 'Keywords (comma-separated)',
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            label: 'Open Graph Image',
        },
    ],
};
import type {CollectionConfig} from "payload";

// todo change acces rights

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    useAPIKey: true,
  },
  admin: {
    useAsTitle: 'email',
  },
  access: {
    update: ()=> true,
    create: ()=> true,
    read: ()=> true,
    delete: ()=> true
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name:'firstName',
          type:'text',
          label:'first name'
        },
        {
          name:'lastName',
          type:'text',
          label:'last name'
        }
      ]
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      saveToJWT: true,
      defaultValue: ['editor'],
      access: {
        //create: isAdminFieldLevel,
        //update: isAdminFieldLevel
      },
      options: [
        {
          label: "Admin",
          value: "admin"
        },
        {
          label: "Editor",
          value: "editor"
        },
        {
          label: "User",
          value: "user"
        }
      ]
    }
  ],
};

export default Users;
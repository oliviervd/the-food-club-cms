import { buildConfig } from 'payload'
import { s3Storage } from '@payloadcms/storage-s3'
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import path from "path";
import Users from "./collections/Users";
import Categories from "./collections/Categories";
import Venues from "./collections/Venues";
import Cuisine from "./collections/Cuisine";
import Media from "./collections/Media";
import Designer from "./collect ions/Designer";
import Lists from "./collections/Navigation";
import Globals from "./collections/Globals";

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL,
  secret: process.env.PAYLOAD_SECRET,
  admin: {
    user: Users.slug,
    autoLogin: {
      email: 'demo@payloadcms.com',
      password: 'demo',
      prefillOnly: true,
    },
  },
  editor: lexicalEditor({}),
  plugins: [
    s3Storage({
      collections: {
        media: {
          generateFileURL: ({ filename, prefix }) => {
            return ['https://d3nidktcupd88v.cloudfront.net', prefix, filename]
              .filter(Boolean)
              .join('/');
          },
        },
      },
      bucket: process.env.S3_BUCKET,
      config: {
        endpoint: process.env.S3_ENDPOINT, // only include if you're using something like DigitalOcean Spaces
        region: process.env.S3_REGION,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
      },
    }),
  ],
  localization:{
    locales: [
      {
        code: 'nl',
        label: {
          nl: "Nederlands",
          en: "Dutch",
          fr: "Néerlandais"
        }
      },
      {
        code: 'en',
        label: {
          en: "English",
          fr: "Anglais",
          nl: "Engels"
        }
      },
      {
        code: 'fr',
        label: {
          fr: "Francais",
          en: "French",
          nl: "Frans"
        }
      }
    ],
    defaultLocale: 'en',
    fallback: true
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI,
  }),
  //CORS
  cors: [
    "https://the-food-club-front.vercel.app",
    "http://localhost:3000",
    "https://p01--cms--j4bvc8vdjtjb.code.run/", // legacy instance (v 2.0)
    "https://p01--the-food-club-cms--zg6qw4mbhtcr.code.run", // new instance (v3.0)
    "vitals.vercel-insights.com",
    "https://www.thefoodclub.be",
  ],
  //CSRF
  csrf: [
    "https://the-food-club-front.vercel.app",
    "http://localhost:3000",
    "https://p01--cms--j4bvc8vdjtjb.code.run/", // legacy instance (v 2.0)
    "https://p01--the-food-club-cms--zg6qw4mbhtcr.code.run", // new instance (v3.0)
    "vitals.vercel-insights.com",
    "https://www.thefoodclub.be"
  ],
  collections: [Users, Venues, Categories, Cuisine, Designer, Media, Lists, Globals],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});

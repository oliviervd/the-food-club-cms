import type {CollectionConfig} from "payload";
import notes from "../fields/notes";

const Media: CollectionConfig = {
  slug: "media",
  admin: {
    useAsTitle: "title",
  },
  upload: {
    //staticURL: "/media",
    staticDir: "media",
    disableLocalStorage: true,
    imageSizes: [
      {
        name: "mobileThumbnail",
        width: 360,
        height: undefined,
        position: "centre",
      },
      {
        name: "mobileFriendly",
        width: 550,
        height: undefined,
        position: "centre",
      },

      {
        name: "tablet",
        width: 1024,
        height: undefined,
        position: "centre",
      },
      {
        name: "original",
        width: undefined,
        height: undefined,
      },
    ],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "alt",
      type: "text",
    },
    {
      name: "dish",
      type: "text",
      admin: {
        description:
          "if a picture of  a dish on the menu, describe the dish in one or two sentences. Keep it short! ",
      },
    },
    notes,
  ],
  /*
  hooks: {
    beforeChange: [
      async ({ data, file }) => {
        // Check MIME type to ensure the uploaded file is an image
        if (!file.mimetype.startsWith("image/")) return;

        // Process the image using sharp
        const buffer = await sharp(file.buffer)
            .raw()
            .ensureAlpha()
            .toBuffer({ resolveWithObject: true });

        const { data: rawPixels, info } = buffer;

        const imageData = {
          width: info.width,
          height: info.height,
          data: rawPixels,
        };

        // Apply Floyd-Steinberg dithering
        const ditheredImage = floydSteinbergDither(imageData);

        // Re-encode the dithered image to a valid PNG buffer using sharp
        const finalBuffer = await sharp(
            Buffer.from(ditheredImage.data.buffer),
            {
              raw: {
                width: ditheredImage.width,
                height: ditheredImage.height,
                channels: 4,
              },
            }
        )
            .toFormat("png")
            .toBuffer();

        // Replace the original file buffer with the processed dithered image buffer
        file.buffer = finalBuffer;
      },
    ],
  },
  */
};

export default Media;

import { defineConfig } from "tinacms";
import { galleryFields } from "./templates";
import { homeFields } from "./templates";
import { mediaFields } from "./templates";
import { mediaGalleryFields } from "./templates";
import { postFields } from "./templates";
import { projectsFields } from "./templates";
import { workshop_singleFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "43cf2b33-f53d-4905-9769-53b2821bbf7f",
  token: "8a435b3a012a3ad93ce3f4070cd250acdf977678",
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "./_site",
  },
  media: {
    tina: {
      mediaRoot: "./uploads",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Workshops",
        name: "workshops",
        path: "_workshop",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...workshop_singleFields(),
        ],
      },
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "pages",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        format: "md",
        label: "Projects",
        name: "projects",
        path: "_posts",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...postFields(),
        ],
      },
    ],
  },
});

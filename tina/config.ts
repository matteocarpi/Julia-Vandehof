import { defineConfig } from "tinacms";
import { galleryFields } from "./templates";
import { homeFields } from "./templates";
import { mediaFields } from "./templates";
import { mediaGalleryFields } from "./templates";
import { postFields } from "./templates";
import { projectsFields } from "./templates";
import { workshop_singleFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

console.log(process.env);

export default defineConfig({
  branch,
  clientId: process.env.TINA_CMS_CLIENT_ID as string,
  token: process.env.TINA_CMS_TOKEN as string,
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

import type { TinaField } from "tinacms";
export function galleryFields() {
  return [
    {
      type: "string",
      name: "name",
      label: "name",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
  ] as TinaField[];
}
export function homeFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "Layout",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
    },
    {
      type: "string",
      name: "bio",
      label: "Bio",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "avatar",
      label: "Avatar",
    },
    {
      type: "object",
      name: "upcoming_performances",
      label: "Upcoming Performances",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "datetime",
          name: "date",
          label: "Date",
        },
        {
          type: "string",
          name: "link",
          label: "Link",
        },
        {
          type: "string",
          name: "venue",
          label: "Venue",
        },
        {
          type: "string",
          name: "venue_link",
          label: "Venue Link",
        },
      ],
    },
  ] as TinaField[];
}
export function mediaFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "Layout",
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "sub_title",
      label: "Subtitle",
    },
    {
      type: "string",
      name: "credits",
      label: "Credits",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "preview_picture",
      label: "Preview Picture",
    },
    {
      type: "boolean",
      name: "current",
      label: "Current",
    },
    {
      type: "boolean",
      name: "only_current",
      label: "Only Current",
    },
    {
      type: "image",
      name: "main_pictures",
      label: "Main Pictures",
      list: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "gallery",
      label: "gallery",
      list: true,
    },
    {
      type: "string",
      name: "youtube_link",
      label: "YouTube link",
    },
    {
      type: "boolean",
      name: "press",
      label: "Press",
    },
    {
      type: "image",
      name: "press_pictures",
      label: "Press Pictures",
      list: true,
    },
    {
      type: "string",
      name: "press_text",
      label: "Press Text",
      ui: {
        component: "textarea",
      },
    },
  ] as TinaField[];
}
export function mediaGalleryFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "permalink",
      label: "permalink",
    },
    {
      type: "object",
      list: true,
      templateKey: "template",
      label: "Gallery",
      name: "gallery",
      templates: [
        {
          fields: galleryFields(),
          label: "gallery",
          name: "gallery",
        },
      ],
    },
  ] as TinaField[];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "Layout",
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "string",
      name: "categories",
      label: "Category",
      options: ["project", "media"],
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "sub_title",
      label: "Subtitle",
    },
    {
      type: "string",
      name: "credits",
      label: "Credits",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "preview_picture",
      label: "Preview Picture",
    },
    {
      type: "boolean",
      name: "current",
      label: "Current",
    },
    {
      type: "boolean",
      name: "only_current",
      label: "Only Current",
    },
    {
      type: "image",
      name: "main_pictures",
      label: "Main Pictures",
      list: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "gallery",
      label: "gallery",
      list: true,
    },
    {
      type: "string",
      name: "youtube_link",
      label: "YouTube link",
    },
    {
      type: "boolean",
      name: "press",
      label: "Press",
    },
    {
      type: "image",
      name: "press_pictures",
      label: "Press Pictures",
      list: true,
    },
    {
      type: "string",
      name: "press_text",
      label: "Press Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "partners",
      label: "Partners",
      list: true,
    },
  ] as TinaField[];
}
export function projectsFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "permalink",
      label: "permalink",
    },
    {
      type: "object",
      list: true,
      templateKey: "template",
      label: "Gallery",
      name: "gallery",
      templates: [
        {
          fields: galleryFields(),
          label: "gallery",
          name: "gallery",
        },
      ],
    },
  ] as TinaField[];
}
export function workshop_singleFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "Layout",
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "string",
      name: "categories",
      label: "Category",
      options: ["workshop"],
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "sub_title",
      label: "Subtitle",
    },
    {
      type: "string",
      name: "credits",
      label: "Credits",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "preview_picture",
      label: "Preview Picture",
    },
    {
      type: "boolean",
      name: "current",
      label: "Current",
    },
    {
      type: "boolean",
      name: "only_current",
      label: "Only Current",
    },
    {
      type: "image",
      name: "main_pictures",
      label: "Main Pictures",
      list: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "gallery",
      label: "gallery",
      list: true,
    },
    {
      type: "string",
      name: "youtube_link",
      label: "YouTube link",
    },
    {
      type: "boolean",
      name: "press",
      label: "Press",
    },
    {
      type: "image",
      name: "press_pictures",
      label: "Press Pictures",
      list: true,
    },
    {
      type: "string",
      name: "press_text",
      label: "Press Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "partners",
      label: "Partners",
      list: true,
    },
  ] as TinaField[];
}

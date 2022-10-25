import PluginId from "../../pluginId";
const axios = require("axios");
import { auth } from "@strapi/helper-plugin";

// Plugins for Editor.js
import Image from "@editorjs/image";

const requiredTools = {
  image: {
    class: Image,
    config: {
      field: "files.image",
      additionalRequestData: {
        data: JSON.stringify({}),
      },
      actions: [
        {
          name: "show_create_button",
          icon: '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="#444" d="M15.7 5.3l-1-1c-0.2-0.2-0.4-0.3-0.7-0.3h-13c-0.6 0-1 0.4-1 1v5c0 0.3 0.1 0.6 0.3 0.7l1 1c0.2 0.2 0.4 0.3 0.7 0.3h13c0.6 0 1-0.4 1-1v-5c0-0.3-0.1-0.5-0.3-0.7zM14 10h-13v-5h13v5z"></path></svg>',
          title: "Show Create Button",
          action: (name) => {
            return true;
          },
        },
      ],
      additionalRequestHeaders: {
        Authorization: `Bearer ${auth.getToken()}`,
      },
      endpoints: {
        byUrl: `/api/${PluginId}/image/byUrl`,
      },
      uploader: {
        async uploadByFile(file) {
          const formData = new FormData();
          formData.append("data", JSON.stringify({}));
          formData.append("files.image", file);

          const { data } = await axios.post(
            `/api/${PluginId}/image/byFile`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${auth.getToken()}`,
              },
            }
          );

          return data;
        },
      },
    },
  },
};

export default requiredTools;

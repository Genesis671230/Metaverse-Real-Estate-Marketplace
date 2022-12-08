import { useState } from "react";
import { client } from "../lib/utils";

export const useSanity = () => { 
    const [sanity, setSanity] = useState(null)


     const uploadToGetLink = async(image) => {
        const type = image.type;
        if (
          type === "image/png" ||
          type === "image/svg" ||
          type === "image/jpeg" ||
          type === "image/gif" ||
          type === "image/tiff"
        ) {
          const res = await client.assets.upload("image", image, {
            contentType: type,
            filename: image.name,
          });

      

            const doc = {
              _type: "photo",
              image: {
                _type: "image",
                asset: {
                  _type: "reference",
                  _ref: res?._id,
                },
              },
              
              title: image.name,
              pitch: 0,
              yaw: 0,
              hfov: 0,
              hotspotsposition:[],
            };

            const waitToGetUrl = await client.create(doc);
            return waitToGetUrl

        }
     }
     return {
        sanity,
        setSanity,
        // uploadToSanity,
        uploadToGetLink,
    }
 }
import { useContext, useState } from "react";
import { client } from "../lib/utils";
import { UserContext } from "../states/user_context";

export const useSanity = () => {
  const [sanity, setSanity] = useState(null);
  const {user} = useContext(UserContext)

  const uploadToGetLink = async (image) => {
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
        _type: "hotspotImages",
        title: image.name,
        owner:user.email,
        image: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: res?._id,
          },
        },
      };

      const waitToGetUrl = await client.create(doc);
      return waitToGetUrl;
    }
    
    const videoTypes = ["video/mp4", "video/webm", "video/ogg"];
    
    if (videoTypes.includes(type)) {
      const video = image
      const videoAsset = await client.assets.upload("file", video, {
        contentType: type,
        filename: video.name,
      });
      console.log(videoAsset,videoAsset?.url,"goood we are uploading");
      const doc = {
        _type: "hotspotVideos",
        caption: video.name,
        owner: user.email, 
        video: {
          _type: "file",
          asset: {
            _type: "reference",
            _ref: videoAsset?._id,
          },
        },
      };
      
      const waitToGetUrl = await client.create(doc);
      return {...videoAsset,_type:waitToGetUrl._type};
    }
  };
  return {
    sanity,
    setSanity,
    // uploadToSanity,
    uploadToGetLink,
  };
};

import { useDispatch, useSelector } from "react-redux";
import { PanoramaContext } from "../states/panorama_context";
import { setEditParanomaData } from "../redux/editParanoma";
import { useContext } from "react";

export const useParanoma = () => {
  const { datas, setDatas } = useContext(PanoramaContext);
  const dispatch = useDispatch();

  const ParanomaData = useSelector(
    (state) => state.ParanomaEdit.editParanomaData
  );

  const editParanoma = (value) => {
    dispatch(setEditParanomaData({ ...ParanomaData, ...value }));
  };

  const editHotspots = (
    activeParanoma,
    paranomaCheckbox,
    type,
    linkedScene
  ) => {
    const paranomaPositions = {
      ...paranomaCheckbox,
      type: type,
      linkedScene: linkedScene,
    };
    const newHotspots = ParanomaData?.image[
      activeParanoma
    ]?.hotspotsposition?.concat([paranomaPositions]);
    const updatedParanomaHotspots = {
      ...ParanomaData.image[activeParanoma],
      hotspotsposition: newHotspots,
    };

    let imagesArray = [...ParanomaData.image];
    imagesArray[activeParanoma] = updatedParanomaHotspots;

    const updatedParanoma = { ...ParanomaData, image: imagesArray };
    dispatch(setEditParanomaData({ ...ParanomaData, ...updatedParanoma }));

    return imagesArray;
  };

  const editInfoHotspots = (
    activeParanoma,
    paranomaCheckbox,
    type,
    url,
    hotspotDescription
  ) => {
    const paranomaPositions = {
      ...paranomaCheckbox,
      type: type,
      url: url,
      hotspotDescription: hotspotDescription,
    };
    const newHotspots = ParanomaData?.image[
      activeParanoma
    ]?.hotspotsposition?.concat([paranomaPositions]);
    const updatedParanomaHotspots = {
      ...ParanomaData.image[activeParanoma],
      hotspotsposition: newHotspots,
    };

    let imagesArray = [...ParanomaData.image];
    imagesArray[activeParanoma] = updatedParanomaHotspots;

    const updatedParanoma = { ...ParanomaData, image: imagesArray };
    dispatch(setEditParanomaData({ ...ParanomaData, ...updatedParanoma }));

    return imagesArray;
  };

  const deleteHotspots = (activeParanoma, key) => {
    const filteredHotspots = ParanomaData.image[
      activeParanoma
    ]?.hotspotsposition?.filter((paranoma) => paranoma._key !== key);
    const filtered = {
      ...ParanomaData.image[activeParanoma],
      hotspotsposition: filteredHotspots,
    };
    let newHotspotsArray = [...ParanomaData.image];
    newHotspotsArray[activeParanoma] = filtered;

    const updatedParanoma = { ...ParanomaData, image: newHotspotsArray };
    dispatch(setEditParanomaData({ ...ParanomaData, ...updatedParanoma }));

    return newHotspotsArray;
  };

  const deleteImage = (activeParanoma) => {
    const filteredImages = ParanomaData.image.filter(
      (_, itemIndex) => itemIndex !== activeParanoma
    );

    const filteredAll = filteredImages.reduce((prev, singleImage) => {
      const filteredHotspots = singleImage.hotspotsposition.filter(
        (hotspot) => hotspot.linkedScene !== activeParanoma
      );

      const updatedLinkedHotspots = filteredHotspots.map((hotspot) =>
        hotspot.type === "customHotspot"
          ? {
              ...hotspot,
              linkedScene:
                hotspot.linkedScene > activeParanoma
                  ? hotspot.linkedScene - 1
                  : hotspot.linkedScene,
            }
          : hotspot
      );

      console.log(updatedLinkedHotspots, filteredHotspots);
      return [
        ...prev,
        { ...singleImage, hotspotsposition: updatedLinkedHotspots },
      ];
    }, []);

    const updatedParanoma = { ...ParanomaData, image: filteredAll };
    dispatch(setEditParanomaData({ ...ParanomaData, ...updatedParanoma }));
  };

  const addNewImage = (newImage) => {
    const allImages = [...ParanomaData.image, newImage];
    const updatedParanoma = { ...ParanomaData, image: allImages };
    dispatch(setEditParanomaData({ ...ParanomaData, ...updatedParanoma }));
  };

  return {
    addNewImage,
    editParanoma,
    editHotspots,
    editInfoHotspots,
    deleteHotspots,
    deleteImage,
  };
};

import React, { useState } from 'react';
import { HiOutlineQuestionMarkCircle, HiOutlinePlusSm, HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { CgMenuGridR } from "react-icons/cg";

// This line imports the image from your local assets folder.
import placeholderImage from '../assets/placeholder.jpg';

const initialImages = [placeholderImage, placeholderImage, placeholderImage];

const GalleryWidget = () => {
  const [images, setImages] = useState(initialImages);

  const addImage = () => {
    setImages([...images, placeholderImage]);
  };

  return (
    <div className="bg-[#1C1C1C] rounded-2xl p-6 flex flex-col gap-6 border border-[#383838] shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <HiOutlineQuestionMarkCircle className="text-2xl text-gray-400" />
          <div className="bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium">
            Gallery
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={addImage}
            className="flex items-center gap-2 bg-[#292929] hover:bg-gray-700 transition-colors text-white px-4 py-1.5 rounded-full text-sm font-medium"
          >
            <HiOutlinePlusSm className="text-lg" />
            Add Image
          </button>
          <div className="flex items-center gap-1">
            <button className="p-2 bg-[#292929] hover:bg-gray-700 transition-colors rounded-full text-gray-300">
              <HiArrowLeft />
            </button>
            <button className="p-2 bg-[#292929] hover:bg-gray-700 transition-colors rounded-full text-gray-300">
              <HiArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <CgMenuGridR className="text-2xl text-gray-400 flex-shrink-0" />
        <div className="grid grid-cols-3 gap-4 w-full">
          {images.map((imgSrc, index) => (
            <div key={index} className="aspect-square rounded-lg overflow-hidden">
              <img src={imgSrc} alt={`gallery-item-${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryWidget;
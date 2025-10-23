import React, { useState, useRef } from 'react';
import { HiOutlineQuestionMarkCircle, HiOutlinePlusSm, HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { CgMenuGridR } from "react-icons/cg";
import { motion, AnimatePresence } from 'framer-motion';
import placeholderImage from '../assets/placeholder.jpg';

const initialImages = [placeholderImage, placeholderImage, placeholderImage];

const GalleryWidget = () => {
  const [images, setImages] = useState(initialImages);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isGridView, setIsGridView] = useState(false); // STATE for layout toggle
  const scrollContainerRef = useRef(null);

  const addImage = () => {
    setImages([...images, placeholderImage]);
  };

  // Function to toggle the layout state
  const toggleLayout = () => {
    setIsGridView(!isGridView);
  };

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const newScrollPosition =
        direction === 'left'
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div className="bg-[#1C1C1C] rounded-2xl p-6 flex flex-col gap-6 border border-[#383838] shadow-lg">
        {/* Top Bar */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button onClick={() => alert('This widget showcases a gallery of relevant images. Click an image to enlarge it or click the grid icon to change the layout.')}>
              <HiOutlineQuestionMarkCircle className="text-2xl text-gray-400" />
            </button>
            <div className="bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium">
              Gallery
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={addImage} className="flex items-center gap-2 bg-[#292929] hover:bg-gray-700 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-transform hover:scale-105 hover:shadow-glow">
              <HiOutlinePlusSm className="text-lg" />
              Add Image
            </button>
            {/* Conditionally render arrows ONLY if not in grid view */}
            {!isGridView && (
              <div className="flex items-center gap-1">
                <button onClick={() => handleScroll('left')} className="p-2 bg-[#292929] hover:bg-gray-700 rounded-full text-gray-300 transition-transform hover:scale-105 hover:shadow-glow">
                  <HiArrowLeft />
                </button>
                <button onClick={() => handleScroll('right')} className="p-2 bg-[#292929] hover:bg-gray-700 rounded-full text-gray-300 transition-transform hover:scale-105 hover:shadow-glow">
                  <HiArrowRight />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Image Display Area */}
        <div className="flex items-start gap-4">
          <button onClick={toggleLayout} className="mt-8">
            <CgMenuGridR className="text-2xl text-gray-400 flex-shrink-0" />
          </button>
          <div className="w-full overflow-hidden">
            {/* DYNAMIC LAYOUT: Switches classes based on isGridView state */}
            <div
              ref={scrollContainerRef}
              className={`w-full transition-all duration-500 ${
                isGridView
                  ? 'grid grid-cols-2 md:grid-cols-3 gap-4'
                  : 'flex gap-4 pb-4 overflow-x-auto'
              }`}
            >
              {images.map((imgSrc, index) => (
                <motion.div key={index} className={`aspect-square rounded-lg overflow-hidden cursor-pointer shadow-lg ${isGridView ? 'w-full' : 'w-32 md:w-40 flex-shrink-0'}`} onClick={() => setSelectedImage(imgSrc)} whileHover={{ scale: 1.1, y: -8, transition: { duration: 0.2 } }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
                  <img src={imgSrc} alt={`gallery-item-${index + 1}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.img src={selectedImage} alt="Enlarged view" className="rounded-lg max-w-xl" initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }} transition={{ duration: 0.3 }} onClick={(e) => e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryWidget;
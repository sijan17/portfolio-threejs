import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ImageSlider = ({ images, setIsImageVisible }) => {
    const [index, setIndex] = useState(0);

    const handlePrevClick = () => {
        setIndex(index === 0 ? images.length - 1 : index - 1);
    };

    const handleNextClick = () => {
        setIndex(index === images.length - 1 ? 0 : index + 1);
    };

    const handleCloseClick = () => {
        setIsImageVisible(false)
    }

    useEffect(()=>{
        const windowWidth = window.innerWidth;
        if(windowWidth<700){
            toast.warn('Small Device detected. Screenshots of larger devices might not be displayed properly.', {
                position: "top-center",
                autoClose: 8000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

        }
    }, [])

    return (
        <>
       
        <div className="fixed top-0 left-0 w-full h-full z-[100] flex items-center justify-center ">
            <div className="text-sm">
        <ToastContainer />
        </div>

            <div className="absolute inset-0 bg-gray-900 opacity-90"></div>
            <div className="relative  max-w-[90%] h-full p-4 backdrop-blur-lg">
                <img
                    src={`/assets/images/${images[index]}`}
                    alt={`Slide ${index + 1}`}
                    className="rounded-lg shadow-md object-cover object-center max-h-full   "
                />
                
                <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-4">
                    <button
                        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-1 px-4 rounded"
                        onClick={handlePrevClick}
                    >
                        Prev
                    </button>
                    <button
                        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleNextClick}
                    >
                        Next
                    </button>
                    <button
                        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleCloseClick}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default ImageSlider;

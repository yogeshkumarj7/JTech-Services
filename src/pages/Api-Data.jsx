import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import axios from "axios";

const GifGenerator = () => {
  const [gif, setGif] = useState("");  
  const [gifLoading, setGifLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = 'R72ldEvSvOA4P0AieF5CwayK4Q0iZViV';

  const fetchRandomGif = async () => {
    if (!API_KEY) {
      setError("Giphy API key is missing");
      return;
    }

    try {
      setGifLoading(true);
      setError(null);
      const { data } = await axios.get(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
      );
      setGif(data.data.images.downsized_medium.url);
    } catch (err) {
      console.error("Failed to fetch GIF:", err);
      setError("Failed to load GIF. Please try again.");
    } finally {
      setGifLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomGif();
  }, []);

  if (error) {
    return (
      <div className="max-w-md mx-auto p-6 bg-red-50 rounded-2xl shadow-2xl text-center my-10 ">
        <h2 className="text-2xl font-bold text-red-600 mb-4 ">
          Error Loading GIF
        </h2>
        <p className="text-red-500 mb-6">{error}</p>
        <button
          onClick={fetchRandomGif}
          className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 mt-24 mb-10 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-2xl ">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          Random Gif Generator
        </h2>

        {gifLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-16 h-16 animate-spin text-blue-500" />
          </div>
        ) : (
          <div className="mb-6 rounded-2xl overflow-hidden shadow-lg transform transition-all hover:scale-105">
            <img
              src={gif}
              alt="Random GIF"
              className="w-full h-64 object-cover object-center"
            />
          </div>
        )}

        <button
          onClick={fetchRandomGif}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white 
          rounded-full hover:from-purple-600 hover:to-blue-600 
          transition duration-300 ease-in-out transform 
          hover:scale-105 hover:shadow-lg focus:outline-none"
        >
          Generate New GIF
        </button>
      </div>
    </div>
  );
};

export default GifGenerator;
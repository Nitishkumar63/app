import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { fabric } from "fabric";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [canvas, setCanvas] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const canvasRef = useRef(null);

  const fetchImages = async () => {
    if (!searchQuery) return;
    try {
      const response = await axios.get(`https://api.pexels.com/v1/search`, {
        params: { query: searchQuery, per_page: 10 },
        headers: {
          Authorization:
            "WE3UiOFe9xt2TR2yXFj01hF52TtHuXqtXlBxeQTi5TB61f0V4Euai5N8",
        },
      });
      setImages(response.data.photos);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const newCanvas = new fabric.Canvas(canvasRef.current, {
      preserveObjectStacking: true,
      selection: true,
    });
    setCanvas(newCanvas);

    return () => newCanvas.dispose();
  }, []);

  const handleImageSelect = (imageUrl) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.setAttribute("crossorigin", "anonymous");
    img.src = imageUrl;

    img.onload = () => {
      fabric.Image.fromURL(imageUrl, (fabricImg) => {
        fabricImg.set({ left: 0, top: 100, width: 700, height: 500 });
        canvas.setWidth(fabricImg.width || canvas.width);
        canvas.setHeight(fabricImg.height || canvas.height);
        canvas.clear();
        canvas.add(fabricImg);
        canvas.renderAll();
        setSelectedImage(fabricImg);
      });
    };

    img.onerror = () => {
      console.error("Error loading image");
    };
  };

  const addTextLayer = () => {
    if (!canvas || !selectedImage) return;

    const text = new fabric.Textbox("Enter caption", {
      left: 50,
      top: selectedImage.top + 50,
      width: 200,
      fontSize: 20,
      fill: "black",
    });
    canvas.add(text);
    canvas.renderAll();
  };

  const addShapeLayer = (shape) => {
    if (!canvas) return;
    let shapeObject;
    switch (shape) {
      case "circle":
        shapeObject = new fabric.Circle({
          radius: 50,
          fill: "red",
          left: 100,
          top: 100,
        });
        break;
      case "rectangle":
        shapeObject = new fabric.Rect({
          width: 100,
          height: 50,
          fill: "blue",
          left: 100,
          top: 100,
        });
        break;
      case "triangle":
        shapeObject = new fabric.Triangle({
          width: 100,
          height: 100,
          fill: "green",
          left: 100,
          top: 100,
        });
        break;
      default:
        return;
    }
    canvas.add(shapeObject);
    canvas.renderAll();
  };

  const downloadImage = () => {
    if (!canvas) return;

    const dataURL = canvas?.toDataURL("image/png");

    const link = document.createElement("a");
    link.download = "edited-image.png";
    link.href = dataURL;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setErrorMessage("");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setErrorMessage("Search query cannot be empty.");
      return;
    }
    fetchImages();
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for images..."
          className="border p-2"
        />
        <button
          onClick={handleSearchSubmit}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Search
        </button>
      </div>

      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

      <div className="grid grid-cols-2 gap-4 mb-4">
        {images.map((image) => (
          <div key={image.id} className="relative">
            <img
              src={image.src.medium}
              alt={image.alt}
              className="w-full h-auto cursor-pointer"
              crossOrigin="anonymous"
              onClick={() => handleImageSelect(image.src.medium)}
            />
            <button
              onClick={() => handleImageSelect(image.src.medium)}
              className="absolute bottom-0 left-0 bg-black text-white p-2"
            >
              Select Image
            </button>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="relative">
          <div className="absolute top-0 left-0 z-10 flex space-x-4 p-4">
            <button
              onClick={addTextLayer}
              className="bg-gray-500 text-white p-2 rounded"
            >
              Add Text
            </button>
            <button
              onClick={() => addShapeLayer("circle")}
              className="bg-red-500 text-white p-2 rounded"
            >
              Add Circle
            </button>
            <button
              onClick={() => addShapeLayer("rectangle")}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Add Rectangle
            </button>
            <button
              onClick={() => addShapeLayer("triangle")}
              className="bg-green-500 text-white p-2 rounded"
            >
              Add Triangle
            </button>
            <button
              onClick={downloadImage}
              className="bg-black text-white p-2 rounded"
            >
              Download
            </button>
          </div>

          <canvas ref={canvasRef} className="border w-full h-auto" />
        </div>
      )}
    </div>
  );
};

export default SearchPage;

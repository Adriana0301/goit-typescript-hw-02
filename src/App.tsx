import { useState } from "react";
import "./App.module.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect } from "react";
import FetchImages from "./components/API/API";
import { Toaster } from "react-hot-toast";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import { Image } from "./App.types";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query) return;

    const getGallery = async () => {
      try {
        setIsLoading(true);
        const response = await FetchImages(query, page);
        setImages((prev) => [...prev, ...response.results]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getGallery();
  }, [query, page]);

  const getInputValue = (newQuery: string) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const loadMore = () => setPage((prevPage: number) => prevPage + 1);

  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <SearchBar onSubmit={getInputValue} />
      <Toaster />
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && !isLoading && <LoadMoreBtn onClick={loadMore} />}
      <ImageModal
        isOpen={!!selectedImage}
        image={selectedImage}
        onClose={closeModal}
      />
    </>
  );
}

export default App;

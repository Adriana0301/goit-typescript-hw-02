import { useState } from 'react'
import './App.module.css'
import ImageGallery from './components/ImageGallery/ImageGallery'
import SearchBar from './components/SearchBar/SearchBar'
import { useEffect } from 'react';
import FetchImages from './components/API/API';
import { Toaster } from 'react-hot-toast';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';


function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const getGallery = async () => {
      try{
        setIsLoading(true)
        const response = await FetchImages(query, page);
        setImages((prev) => [...prev, ...response.results]);
      } catch {
        setIsError(true)
      } finally {
      setIsLoading(false);
      }
    }
    getGallery()
  }, [query, page])

  const getInputValue = newQuery => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const loadMore = () => setPage((prevPage) => prevPage + 1);

  const closeModal = () => setSelectedImage(null);

  return (
    <>
    <SearchBar onSubmit={getInputValue}/>
    <Toaster/>
    <ImageGallery images = {images} onImageClick={setSelectedImage}/>
    {isLoading && <Loader/>}
    {isError && <ErrorMessage/>}
    {images.length > 0 && !isLoading && <LoadMoreBtn onClick={loadMore}/>}
    <ImageModal isOpen={!!selectedImage} image={selectedImage} onClose={closeModal} />
    </>
  )
}

export default App

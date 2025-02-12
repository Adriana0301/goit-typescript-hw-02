import axios from "axios";
import { Image } from "../../App.types";
const API_KEY = "RBTkvXB46BeSnAPpFHVqJzLaY377shfkafR0-veN3Xw";
const BASE_URL = "https://api.unsplash.com/search/photos";

const FetchImages = async (
  query: string,
  page: number
): Promise<UnsplashResponse> => {
  const { data } = await axios.get<UnsplashResponse>(BASE_URL, {
    params: {
      query,
      page,
      per_page: 15,
      orientation: "portrait",
    },
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
  });

  return data;
};

export default FetchImages;

interface UnsplashResponse {
  total: number;
  results: Image[];
}

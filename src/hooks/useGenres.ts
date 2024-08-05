import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Genre {
  id: number;
  name: string;
  
}
interface FetchGenreResponse {
  count: number;
  results: Genre[];
}
const useGenres = () => {
  const [genres, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoding, setIsloding] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsloding(true);
    apiClient
      .get<FetchGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenre(res.data.results);
        setIsloding(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsloding(false);
      });
    return () => controller.abort();
  }, []);
  return { genres, error, isLoding };
};
export default useGenres;

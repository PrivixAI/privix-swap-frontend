import { useEffect, useState } from 'react';

// Define the type for the API response
type ApiResponse = {
  price: string;
};

/**
 * Custom hook to fetch price data from the API.
 * Due to CORS issues, the API was forked and a proxy was created.
 * @see https://github.com/pancakeswap/gatsby-pancake-api/commit/e811b67a43ccc41edd4a0fa1ee704b2f510aa0ba
 */
const api = 'http://localhost:3001/price';

const useGetPriceData = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const res: ApiResponse = await response.json();
        setData(res);
        setError(null);
      } catch (fetchError: any) {
        setError(fetchError.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};

export default useGetPriceData;

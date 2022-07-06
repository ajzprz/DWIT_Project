import { useState,useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData(url) {
            try {
              let response = await fetch(url);
              let data = await response.json();
              console.log(data)
              setData(data);
              setIsPending(false);
            } catch (err) {
              setError(err.message);
            }
          }
        fetchData();
      },[url]);

  return {data, isPending, error}

}

export default useFetch
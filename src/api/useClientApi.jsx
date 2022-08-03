import { useEffect, useState } from "react";
import axios from "axios";

function useClientApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setTimeout(function () {
          //set delay ,so I can see the animation
          setLoading(false);
        }, 600);
      });
  }, [url]);

  return { data, loading, error };
}

export default useClientApi;

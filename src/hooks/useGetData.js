import React from 'react';

export const useGetData = initUrl => {
  const [url, setUrl] = React.useState(initUrl);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [data, setData] = React.useState();

  React.useEffect(() => {
    const fetchAPI = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await window.fetch(url, {
          headers: { token: 'secretNumber' },
        });
        // const response = await window.fetch(url);

        const resData = await response.json();

        if (response.status >= 400) {
          throw new Error();
        }

        setData(resData.results || [resData]);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchAPI();
  }, [url]);

  return [{ isLoading, isError, data }, setUrl];
};

export default useGetData;

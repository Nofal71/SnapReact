import { useState, useEffect } from "react";

interface Item {
  name: string;
}

interface UseSearchProps {
  data: Item[];
  input: string;
}

const useSearch = ({ data, input }: UseSearchProps) => {
  const [filteredData, setFilteredData] = useState<Item[]>(data);
  const [progress, setProgress] = useState<boolean>(false);

  useEffect(() => {
    setProgress(true);
    const timer = setTimeout(() => {
      if (input?.trim() === "") {
        setFilteredData(data);
        setProgress(false);
      } else {
        const lowerCaseQuery = input?.toLowerCase();
        const filtered = data.filter((item) =>
          item.name.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredData(filtered);
        setProgress(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [input, data]);

  return { filteredData, progress };
};

export default useSearch;

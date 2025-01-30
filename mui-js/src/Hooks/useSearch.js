import { useState, useEffect } from "react";

const useSearch = ({ data, input }) => {
    const [filteredData, setFilteredData] = useState(data);
    const [progress, setProgress] = useState(false)

    useEffect(() => {
        setProgress(true)
        const timer = setTimeout(() => {
            if (input?.trim() === "") {
                setFilteredData(data);
                setProgress(false)
            } else {
                const lowerCaseQuery = input?.toLowerCase();
                const filtered = data.filter((item) =>
                    item.name.toLowerCase().includes(lowerCaseQuery)
                );
                setFilteredData(filtered);
                setProgress(false)
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [input, data]);

    return { filteredData, progress };
};

export default useSearch;

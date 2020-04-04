import { useState, useEffect } from "react";

function Fetch(url) {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(url);

            if (response.status >= 200 && response.status <= 299) {
                const data = await response.json();
                setData(data);
            }
            else {
                setData(null);
            }
        }
        getData();
    }, [url]);

    return data;
}

export default Fetch;
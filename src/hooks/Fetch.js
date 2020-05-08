import { useState, useEffect } from "react";

function Fetch(url) {
    const [data, setData] = useState(undefined);
    
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(url);
            await sleep(1000);

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

const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export default Fetch;
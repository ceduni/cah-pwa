import { useState, useEffect } from "react"
import getData from './../api/getData';

const useGardenData = () => {
    const [errors, setErrors] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getData();
                setData(response.records);
            } catch (error) {
                console.log(error);
                setErrors(error);
            } finally {
                setisLoading(false);
            }
        }
        fetchData()
    }, []);

    return { data, isLoading, errors };
}

export default useGardenData;
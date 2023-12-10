import React, { useState, useEffect } from "react";
import { getRandomActivity } from "../api";

export default function ActivityComponent() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            setError(false);
            const data = await getRandomActivity();
            setData(data);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="attivity-component">
            {!loading && data ? data.activity : <div>...Loading</div>}
            {error && <div>Something wrong</div>}
        </div>
    );
}

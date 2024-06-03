import Header from '../Header'
import '../styles/actus.css'
import { Scheduler } from "@bitnoi.se/react-scheduler"
import { useState, useEffect } from 'react'

function Actus() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Replace with your data fetching logic
        const response = await fetch('your-api-endpoint'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result); // Assuming the result is an array
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="actus">
        {error && <p>Error: {error}</p>}
        <Scheduler
          isLoading={isLoading}
          data={data} // Provide the fetched data to Scheduler
          onItemClick={(clickedItem) => console.log(clickedItem)}
          onFilterData={() => {
            // filter your data
          }}
          onClearFilterData={() => {
            // clear all your filters
          }}
          config={{
            filterButtonState: 0,
            zoom: 0,
            lang: "en",
            maxRecordsPerPage: 20,
          }}
        />
      </div>
    </>
  );
}

export default Actus;

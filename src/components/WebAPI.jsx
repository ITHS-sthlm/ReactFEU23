import  { useState, useEffect } from 'react';
import axios from 'axios';

const WebAPI = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://avancera.app/cities');
        setCities(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>City List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {cities.map(city => (
            <li key={city.id}>{city.name}{city.population}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WebAPI;




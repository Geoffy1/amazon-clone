import React, { useState, useEffect } from 'react';
import PicCard from './components/PicCard';
import PicSearch from './components/PicSearch';

function App() {
  const [pics, setPics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setPics(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      <PicSearch searchText={(text) => setTerm(text)} />

      {!isLoading && pics.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Pics Found</h1> }

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
        {pics.map(pic => (
          <PicCard key={pic.id} pic={pic} />
        ))}
      </div>}
    </div>
  );
}

export default App;

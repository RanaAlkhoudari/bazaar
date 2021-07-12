import React from 'react';
import SearchBar from './searchBar';

const Search = (props) => {
  const [input, setInput] = useState('');
  const [product, setProduct] = useState();

  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  };

  const updateInput = async (input) => {
    const filtered = products.filter((product) => {
      return product.name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setproduct(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <SearchBar input={input} onChange={updateInput} />
    </div>
  );
};

export default Search;

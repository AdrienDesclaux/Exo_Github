import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ReposResults from '../ReposResults/ReposResults';
import { Repo } from '../../@types/repo';

import './App.scss';

function App() {
  const [searchedText, setSearchedText] = useState('');
  const [dataGit, setDataGit] = useState<Repo[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchData = (textForData: string, page: number) => {
    console.log(
      `https://api.github.com/search/repositories?q=${textForData}&sort=stars&order=desc&page=${page}&per_page=9`
    );
    fetch(
      `https://api.github.com/search/repositories?q=${textForData}&sort=stars&order=desc&page=${page}&per_page=9`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.items) {
          setDataGit((prevData) => {
            const updatedData = [...prevData, ...data.items];
            console.log('updatedData', updatedData);
            return updatedData;
          });
          setTotalCount(parseInt(data.total_count, 10));
        } else {
          setDataGit([]);
        }
      });
  };

  const handleSubmit = (searchValue: string) => {
    setCurrentPage(1);
    const textForData = searchValue;
    setSearchedText(textForData);
    setDataGit([]);
    fetchData(textForData, 1);
    console.log('handleSubmit, Data, CurrentPage', dataGit, currentPage);
  };

  const loadMore = () => {
    console.log('LoadMore()');
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchData(searchedText, nextPage);
  };

  return (
    <div className="App">
      <SearchBar handleSubmit={handleSubmit} totalCount={totalCount} />
      <ReposResults dataGit={dataGit} />
      {dataGit.length > 0 && (
        <button type="button" onClick={loadMore}>
          Plus de résultats
        </button>
      )}
    </div>
  );
}

export default App;

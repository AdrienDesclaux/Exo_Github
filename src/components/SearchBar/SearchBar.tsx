import { FormEvent } from 'react';
import img from '../../assets/images/logo-github.png';
import './Search.scss';

type SearchBarProps = {
  handleSubmit: (text: string) => void;
  totalCount: number;
};

function SearchBar({ handleSubmit, totalCount }: SearchBarProps) {
  function handleForm(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const inputElement = event.currentTarget.querySelector('input');
    if (inputElement && inputElement instanceof HTMLInputElement) {
      const searchedValue = inputElement.value;
      handleSubmit(searchedValue);
    }
  }

  return (
    <header>
      <img src={img} alt="" />
      <form onSubmit={handleForm}>
        <input placeholder="Rechecher Repos" />
      </form>
      {totalCount !== 0}
      <div className="total__count">{totalCount} Trouvées</div>
    </header>
  );
}

export default SearchBar;

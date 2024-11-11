import './SearchPiu.css'

interface SearchPiuProps {
  searchTerm: string,
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

function SearchPiu({ searchTerm, setSearchTerm }: SearchPiuProps) {
  return (
    <form onSubmit={e => e.preventDefault()} className="SearchPiu">
      <div className="SearchPiu__wrap">
        <input
          className="SearchPiu__input"
          type="text"
          name="procurarPiu"
          placeholder="Ouvir um piu..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
   );
}

export default SearchPiu;
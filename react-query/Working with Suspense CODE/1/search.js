export default function Search({ onSubmit }) {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e.target.elements.search.value);
      }}>
        <label>Search:
          <input
            type="text"
            name="search"
            placeholder="e.g. useQuery"
          />
        </label>
      </form>
    )
  }
  
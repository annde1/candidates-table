function SortList({ onSortChange }) {
  const handleFilterChange = (e) => {
    e.preventDefault();
    const selectedFilter = e.target.value;
    onSortChange(selectedFilter);
  };
  return (
    <>
      <label
        for="candidates"
        style={{
          fontWeight: "bold",
          marginBottom: "0.5rem",
          marginTop: "0.5rem",
        }}
      >
        Sort By:
      </label>
      <select
        name="candidates"
        onChange={handleFilterChange}
        style={{ width: "20rem", height: "2rem" }}
      >
        <option value="f-a">Frontend Question (ASC)</option>
        <option value="f-d">Frontend Question (DES)</option>
        <option value="a-a">Algorithmic Question (ASC)</option>
        <option value="a-d">Algorithmic Question (DES)</option>
        <option value="name-a">Name (A-Z)</option>
        <option value="name-d">Name (Z-A)</option>
      </select>
    </>
  );
}
export default SortList;

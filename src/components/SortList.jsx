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
        <option value="f-a" style={{ fontSize: "1rem" }}>
          Frontend Question (ASC)
        </option>
        <option value="f-d" style={{ fontSize: "1rem" }}>
          Frontend Question (DES)
        </option>
        <option value="a-a" style={{ fontSize: "1rem" }}>
          Algorithmic Question (ASC)
        </option>
        <option value="a-d" style={{ fontSize: "2rem" }}>
          Algorithmic Question (DES)
        </option>
        <option value="name-a" style={{ fontSize: "1rem" }}>
          Name (A-Z)
        </option>
        <option value="name-d" style={{ fontSize: "1rem" }}>
          Name (Z-A)
        </option>
      </select>
    </>
  );
}
export default SortList;

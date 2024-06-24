import { useState } from "react";

function Form({ onAddCandidate }) {
  const [newCandidate, setNewCandidate] = useState({
    name: "",
    algorithmicScore: "",
    frontEndScore: "",
  });
  const [error, setError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //Normalize data
    const candidate = {
      name: newCandidate.name,
      frontEndScore: +newCandidate.frontEndScore,
      algorithmicScore: +newCandidate.algorithmicScore,
    };

    if (
      !candidate.frontEndScore ||
      !candidate.algorithmicScore ||
      !candidate.name
    ) {
      setError(
        "All fields are required. Algorithmic score and frontend score must be numbers."
      );
      return;
    }

    //if we got here then all data was valid
    //We can submit form
    onAddCandidate(candidate);
    //At the end of  submition reset state of error and newCandidate
    setError("");
    setNewCandidate({ name: "", algorithmicScore: "", frontEndScore: "" });
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    setNewCandidate({ ...newCandidate, name: name });
  };

  const handleAlgorithmicScoreChange = (e) => {
    const algorithmicScore = e.target.value;
    setNewCandidate({ ...newCandidate, algorithmicScore: algorithmicScore });
  };

  const handleFrontendScoreChange = (e) => {
    const frontEndScore = e.target.value;
    setNewCandidate({ ...newCandidate, frontEndScore: frontEndScore });
  };

  const handleClearForm = () => {
    setError(""); // Clear the error message
    setNewCandidate({ name: "", algorithmicScore: "", frontEndScore: "" });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <label style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
            Candidate Name:
          </label>
          <input
            type="text"
            onChange={handleNameChange}
            value={newCandidate.name}
            style={{ width: "20rem", height: "1.5rem" }}
          />
          <label
            style={{
              fontWeight: "bold",
              marginBottom: "0.5rem",
              marginTop: "0.5rem",
            }}
          >
            Algorithmic Question Score:
          </label>
          <input
            type="text"
            onChange={handleAlgorithmicScoreChange}
            value={newCandidate.algorithmicScore}
            style={{ width: "20rem", height: "1.5rem" }}
          />
          <label
            style={{
              fontWeight: "bold",
              marginBottom: "0.5rem",
              marginTop: "0.5rem",
            }}
          >
            Frontend Question Score:
          </label>
          <input
            type="text"
            onChange={handleFrontendScoreChange}
            value={newCandidate.frontEndScore}
            style={{ width: "20rem", height: "1.5rem" }}
          />
          {error && <p>{error}</p>}
          <div
            style={{
              marginTop: "1rem",
            }}
          >
            <button
              type="submit"
              style={{ fontSize: "1.1rem", marginRight: "2rem" }}
            >
              Add
            </button>
            <button
              type="button"
              onClick={handleClearForm}
              style={{ fontSize: "1.1rem" }}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;

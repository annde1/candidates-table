import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import SortList from "./components/SortList";
import CandidatesTable from "./components/CandidatesTable";

function App() {
  const [candidates, setCandidates] = useState([]);

  const handleAddNewCandidate = (candidate) => {
    setCandidates((current) => [...current, candidate]);
  };

  const handleSortChange = (sortName) => {
    console.log(sortName);
    const candidatesCopy = [...candidates];

    if (sortName === "f-a") {
      setCandidates(
        candidatesCopy.sort((a, b) => a.frontEndScore - b.frontEndScore)
      );
    } else if (sortName === "f-d") {
      setCandidates(
        candidatesCopy.sort((a, b) => b.frontEndScore - a.frontEndScore)
      );
    } else if (sortName === "a-a") {
      setCandidates(
        candidatesCopy.sort((a, b) => a.algorithmicScore - b.algorithmicScore)
      );
    } else if (sortName === "a-d") {
      setCandidates(
        candidatesCopy.sort((a, b) => b.algorithmicScore - a.algorithmicScore)
      );
    } else if (sortName === "name-a") {
      setCandidates(
        candidatesCopy.sort((a, b) => a.name.localeCompare(b.name))
      );
    } else if (sortName === "name-d") {
      setCandidates(
        candidatesCopy.sort((a, b) => b.name.localeCompare(a.name))
      );
    }
  };

  return (
    <>
      <Form onAddCandidate={handleAddNewCandidate} />
      {candidates.length > 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <SortList onSortChange={handleSortChange} />
        </div>
      )}
      {candidates.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <CandidatesTable candidates={candidates} />
        </div>
      )}
    </>
  );
}

export default App;

import React from "react";

function CandidatesTable({ candidates }) {
  return (
    <>
      <table style={{ borderCollapse: "collapse", width: "50%" }}>
        <thead>
          <tr>
            <th style={{ padding: "10px", textAlign: "left" }}>#</th>
            <th style={{ padding: "10px", textAlign: "left" }}>
              Candidate's Name
            </th>
            <th style={{ padding: "10px", textAlign: "left" }}>
              Frontend Score
            </th>
            <th style={{ padding: "10px", textAlign: "left" }}>
              Algorithmic Score
            </th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={index}>
              <td
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                {index + 1}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                {candidate.name}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                {candidate.frontEndScore}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                {candidate.algorithmicScore}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CandidatesTable;

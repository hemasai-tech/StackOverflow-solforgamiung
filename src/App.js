import "./styles.css";
import { useState } from "react";

export default function App() {
  const [teamName, setTeamName] = useState("");
  const [killPoints, setKillPoints] = useState("");
  const [placePoints, setPlacePoints] = useState("");
  const [chickenDinner, setChickenDinner] = useState("");

  const [tableData, setTableData] = useState([]);

  const [tableValues, setTableValues] = useState([]);

  const handleChange = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;
    // console.log(value)

    if (name === "teamName") {
      setTeamName(value);
    } else if (name === "chickenDinner") {
      setChickenDinner(value);
    } else if (name === "killPoints") {
      setKillPoints(value);
    } else if (name === "placePoints") {
      setPlacePoints(value);
    }
  };

  const addData = () => {
    let data = {
      teamName: teamName,
      killPoints: killPoints,
      placePoints: placePoints,
      chickenDinner: chickenDinner
    };
    console.log(data);
    setTableData([...tableData, data]);
    // reset();
  };
  return (
    <div className="col-12">
      <input
        name="teamName"
        onChange={handleChange}
        className="p-2 mb-3 mr-1"
        placeholder="Team Name"
        value={teamName}
        // ref = {teamNameRef}
      />
      <input
        name="killPoints"
        onChange={handleChange}
        className="p-2 mb-3 mr-1"
        placeholder="Kill Points"
        value={killPoints}
        // ref = {killPointsRef}
      />
      <input
        name="placePoints"
        onChange={handleChange}
        className="p-2 mb-3 mr-1"
        placeholder="Place Points"
        value={placePoints}
        // ref = {placePointsRef}
      />
      <input
        name="chickenDinner"
        onChange={handleChange}
        className="p-2 mb-3 mr-1"
        placeholder="Chicken Dinner"
        value={chickenDinner}
        // ref = {chickenDinnerRef}
      />
      <button className="btn btn-primary" onClick={addData}>
        Add Row
      </button>
      <div>
        {tableData.map((item, idx) => {
          return (
            <ol>
              <li>{item.teamName}</li>
              <li>{item.killPoints}</li>
              <li>{item.chickenDinner}</li>
              <li>{item.placePoints}</li>
            </ol>
          );
        })}
      </div>
    </div>
  );
}

import { useState } from "react";

const gifts = [
  { id: 1, name: "Macbook pro M1" },
  { id: 2, name: "Ipad gen 9" },
  { id: 3, name: "Ipad gen 10" },
  { id: 4, name: "iphone 14" },
];

function App() {
  const [job, setJob] = useState("");
  const [checked, setChecked] = useState([]);
  const [activities, setActivity] = useState(
    () => JSON.parse(localStorage.getItem("jobs")) ?? []
  );

  const handleChecked = (id) => {
    setChecked((checked) => {
      if (checked.includes(id)) {
        return checked.filter((checkbox) => checkbox !== id);
      } else {
        const checkedItem = [...checked, id];
        return checkedItem;
      }
    });
  };
  const handleSubmit = () => {
    setActivity((activities) => {
      const newJobs = activities.filter((activity) => {
        setChecked(checked.filter((check) => check === activity.id));
        //console.log(checked.filter((check) => check === activity.id));
        return !checked.includes(activity.id);
      });

      //save to the storage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
  };
  const handleAddActivity = (job) => {
    setActivity((activities) => {
      const newJobs = [...activities, { id: activities.length, name: job }];

      //save to the storage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };
  // console.log(activities);
  const probs = {
    position: "absolute",
    left: "30%",
    top: "30%",
  };
  const style = {
    textDecoration: "line-through",
  };
  return (
    <div className="App" style={{ ...probs }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={() => handleAddActivity(job)}>Add Activity</button>
      <h1>Your Todo-list</h1>
      {activities.map((activity, index) => {
        return (
          <div key={activity.id}>
            <input
              value={activity.name}
              type="checkbox"
              checked={checked.includes(activity.id)}
              onChange={() => handleChecked(activity.id)}
            />
            <label style={checked.includes(activity.id) ? { ...style } : {}}>
              {activity.name}
            </label>
          </div>
        );
      })}
      <button style={{ marginTop: 20 }} onClick={handleSubmit}>
        Save Change
      </button>
    </div>
  );
}

export default App;

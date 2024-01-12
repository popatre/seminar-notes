import React from "react";

function CheckItem({ task, setChecklist }) {
  function handleClick(e) {
    const val = e.target.value;
    setChecklist((currList) => {
      const newList = [...currList];
      return newList.map((entry) => {
        if (entry.task === val) {
          entry.completed = !entry.completed;
        }
        return entry;
      });
    });
  }
  return (
    <>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleClick}
        value={task.task}
      ></input>
      <label>{task.task}</label>
    </>
  );
}

export default CheckItem;

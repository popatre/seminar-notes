import React from "react";
import { useState } from "react";
import { getList } from "../utils";
import CheckItem from "./CheckItem";

export default function Checklist() {
  const [checklist, setChecklist] = useState(getList());

  return (
    <ul>
      {checklist.map((task) => {
        return (
          <li key={task.task}>
            <CheckItem task={task} setChecklist={setChecklist} />
          </li>
        );
      })}
    </ul>
  );
}

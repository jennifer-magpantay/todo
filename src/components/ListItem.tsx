import { Trash } from "phosphor-react";
import React from "react";

type ListItemType = {
  id: string;
  item: string;
  onChange: () => void;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

export const ListItem = ({ id, item, onChange, onClick }: ListItemType) => {
  return (
    <li className="task__container" id={id}>
      <label className="task">
        {item}
        <input type="checkbox" onChange={onChange} />
        <span className="checkmark" aria-hidden={true}></span>
      </label>

      <button type="button" onClick={(event) => onClick(event)} id={id}>
        <span className="sr-only">Delete task</span>
        <Trash size={24} weight="bold" color="#d9d9d9" />
      </button>
    </li>
  );
};

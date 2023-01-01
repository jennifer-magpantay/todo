import React from "react";
import { PlusCircle } from "phosphor-react";

type InputTYpe = {
  value: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Form = ({ value, onSubmit, onChange }: InputTYpe) => {
  return (
    <form className="form" onSubmit={(event) => onSubmit(event)}>
      <label htmlFor="task">New task</label>
      <div className="container__row">
        <input
          type="text"
          name="task"
          id="task"
          value={value}
          placeholder="Ex.: Feed the cat"
          onChange={(event) => onChange(event)}
        />
        <button type="submit">
          Add
          <PlusCircle size={24} color="#ffffff" weight="bold" />
        </button>
      </div>
    </form>
  );
};

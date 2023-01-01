import React, {
  FormEvent,
  useState,
  useRef,
  useEffect,
  ChangeEvent,
} from "react";
import { formatNumber } from "../assets/helpers/format";
import { Form } from "./Form";
import { ListItem } from "./ListItem";

export const Main = () => {
  const [list, setList] = useState<string[]>([]);
  const [checkedListLenght, setCheckedListLenght] = useState<number>(0);
  const [inputValue, setInputValue] = useState("");

  const checkedListLenghtRef = useRef<number>(0);

  useEffect(() => {}, [list]);

  const handleAddNewTaskToList = (event: FormEvent) => {
    event.preventDefault();
    setList((prev) => [...prev, inputValue]);
    setInputValue("");
  };

  const handleDeleteItemList = (event: FormEvent) => {
    const targetId = event.currentTarget.id;
    const filteredList = list.filter(
      (item, i) => item[i] !== item[Number(targetId)]
    );
    setList(filteredList);
  };

  const handleCheckedItem = () => {
    const checkedTasks = document.querySelectorAll(
      "input[type='checkbox']:checked"
    );

    setCheckedListLenght(checkedTasks.length);
  };

  return (
    <main className="main">
      <Form
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onSubmit={(event) => handleAddNewTaskToList(event)}
      />

      <div className="results__container">
        {list.length === 0 && <p>There are no tasks created</p>}

        {list.length > 0 && (
          <div className="results__header">
            <p>Tasks created: {formatNumber(list.length)}</p>
            <p>
              Tasks completed:
              {checkedListLenght === 0 ? "00" : formatNumber(checkedListLenght)}
            </p>
          </div>
        )}

        {list.length > 0 && (
          <ul>
            {list.map((task, i) => (
              <ListItem
                key={i}
                id={String(i)}
                item={String(task)}
                onChange={() => handleCheckedItem()}
                onClick={(event) => handleDeleteItemList(event)}
              />
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";

const options = [
  {
    label: "High",
    value: "High",
  },
  {
    label: "Medium",
    value: "Medium",
  },
  {
    label: "Low",
    value: "Low",
  },
];

export type CardType = {
  label?: string;
  priority?: string;
  id: string | number;
};

export interface PrioritySelectOption {
  label: string;
  value: string;
}
const App = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [todoLabel, setTodoLabel] = useState<string>("");
  const [priority, setPriority] = useState<string>("");

  const handleTodoChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const todo = event.target.value;
    setTodoLabel(todo);
  };

  const handlePrioritySelected = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();

    const label = event.target.value;

    setPriority(label);
  };

  const handleAddTodo = (event: FormEvent) => {
    event.preventDefault();

    if (!todoLabel || !priority) return;

    const newTodo: CardType = {
      label: todoLabel,
      id: Date.now(),
      priority,
    };
    console.log(newTodo);

    setCards([...cards, newTodo]);
  };

  return (
    <div className="todo-layout">
      <header className="todo-header">
        <p>Logo</p>
        <p>Header</p>
      </header>
      <div className="todo-layout__content">
        <h1> Todo App Without Atomic Design</h1>
        <form className="todo-form" onSubmit={(event) => handleAddTodo(event)}>
          <p>Add Todo</p>
          <div className="todo-input">
            <label className="todo-input__label">
              <p className="todo-text todo-text-base">Label</p>
            </label>
            <input
              className="todo-input__input"
              type="text"
              value={todoLabel}
              placeholder="Placeholder"
              onChange={(e) => handleTodoChange(e)}
            />
          </div>

          <div className="todo-select">
            <select
              className="todo-select todo-select__label"
              onChange={(e) => handlePrioritySelected(e)}
            >
              {options.map((option) => {
                const { value, label } = option;
                return (
                  <option key={value} value={value}>
                    {label}
                  </option>
                );
              })}
            </select>
          </div>
          <button
            type="submit"
            className="todo-button-container todo-button-base"
          >
            Submit
          </button>
        </form>
        <div className="todo-grid-with-flex">
          {cards.map((card) => {
            const { id, label, priority } = card;

            return (
              <div
                key={id}
                className="todo-card"
                style={{ height: 100, width: 200 }}
              >
                <div className="todo-card__content">
                  <input
                    type="checkbox"
                    className="todo-card__checkbox todo-checkbox-input todo-width-md todo-height-md"
                    value={todoLabel}
                    onChange={(event) => handleTodoChange(event)}
                  />
                  <div>
                    <p className="undefined todo-text todo-text-base">
                      {label}
                    </p>
                    <p className="undefined todo-text todo-text-base">
                      Priority: {priority}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <footer className="todo-footer">
        <p>Footer</p>
        <p>2024</p>
      </footer>
    </div>
  );
};

export default App;

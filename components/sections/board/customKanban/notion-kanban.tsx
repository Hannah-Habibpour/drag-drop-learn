"use client";

import { useState } from "react";

export function NotionKanban() {
  return (
    <div className="h-screen w-full bg-neutral-900 text-neutral-50">
      <Board />
    </div>
  );
}

const Board = () => {
  const [cards, setCards] = useState([]);
  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      <Column
        title="TODO"
        column="todo"
        headingColor="text-red-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In Progress"
        column="doing"
        headingColor="text-yellow-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Done"
        column="done"
        headingColor="text-green-500"
        cards={cards}
        setCards={setCards}
      />
    </div>
  );
};

const Column = ({ title, headingColor, column, cards, setCards }: any) => {
  const [active, setActive] = useState(false);
  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">{cards.length}</span>
      </div>
      <div
        className={`h-full w-full transition-colors ${
          active ? "bg-neuteral-800/50" : "bg-neuteral-800/0"
        }`}
      ></div>
    </div>
  );
};

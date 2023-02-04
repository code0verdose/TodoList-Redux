import React from "react";
import { Title } from "../../Title";
import s from "./Header.module.sass";

const Header = () => {
  return (
    <header className={s.Header}>
      <Title className={s.title} text="ToDo List" />
    </header>
  );
};

export { Header };

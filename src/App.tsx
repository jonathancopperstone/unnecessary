import React from "react";
import { XColumn } from "./components/x-column"
import { XRow } from "./components/x-row"
import { ThoughtsList } from "./modules/thoughts/views/thoughts-list"
import css from "./app.module.css";
import "./design-system.css";
import "./globals.css";

export const App: React.FC = () => {
  return (
    <XColumn className={css.app}>
      <XRow className={css.app_body} grow={1} justify={"center"}>
        <ThoughtsList />
      </XRow>
    </XColumn>
  );
};

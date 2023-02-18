import * as React from "react";

import { Card, Screen } from "./components/Containers";
import { Title, Form } from "./components/UI";
import "./styles.css";

export default function App() {
  return (
    <Screen>
      <Card>
        <Title text={"Example UI Kit"} />
        <Form />
      </Card>
    </Screen>
  );
}

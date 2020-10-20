import React from "react";

import { Backdrop, Container, Actions } from "./Style";
import { Loading } from "../";

interface ModalInterface {
  title: string;
  onCancel?: (e: React.MouseEvent) => void;
  onSubmit?: (e: React.MouseEvent) => void;
  loading?: boolean;
}

export const Modal: React.FC<ModalInterface> = (props) => {
  return (
    <Backdrop>
      <Container>
        <h2>{props.title}</h2>

        <form>{props.loading ? <Loading /> : props.children}</form>

        <Actions>
          <button onClick={props.onCancel}>Cancelar</button>
          <button onClick={props.onSubmit}>Adicionar</button>
        </Actions>
      </Container>
    </Backdrop>
  );
};

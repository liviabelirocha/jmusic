import React from "react";

import { Backdrop, Container, Actions } from "./Style";
import { Loading } from "../";

interface ModalInterface {
  title: string;
  visible: boolean;
  onCancel?: (e: React.MouseEvent) => void;
  onSubmit?: (e: React.MouseEvent) => void;
  loading?: boolean;
}

export const Modal: React.FC<ModalInterface> = ({
  title,
  visible = false,
  onCancel,
  onSubmit,
  loading,
  children,
}) => {
  
  if (!visible) {
    return null;
  }
  
  return (
    <Backdrop>
      <Container>
        <h2>{title}</h2>

        { loading ? <Loading /> : <form>{children}</form> }

        <Actions>
          <button onClick={onCancel}>Cancelar</button>
          <button onClick={onSubmit}>Adicionar</button>
        </Actions>
      </Container>
    </Backdrop>
  );
};

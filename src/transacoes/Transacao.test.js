import React from "react";
import { render } from "@testing-library/react";
import Transacao from "./Transacao";

//Teste com Snapshot
describe("Componente de transação do extrato", () => {
  it("O Snapshot do componente deve permanecer sempre o mesmo", () => {
    const { container } = render(
      <Transacao data="23/02/2022" tipo="saque" valor="150.00" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});


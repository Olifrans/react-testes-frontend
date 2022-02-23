import React from "react";
import Conta from "./Conta";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Componente de conta", () => {
  it("Exibir o saldo da conta como valor monetária", () => {
    render(<Conta saldo={1000} />);
    const saldo = screen.getByTestId("saldo-conta");
    expect(saldo.textContent).toBe("R$ 1000");
  });

  //Simulando uma função
  it("Chama a função de realizar transação, quando o botão é clicado", () => {
    const funcaoRealizarTransacao = jest.fn();
    render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao} />);

    fireEvent.click(screen.getByText("Realizar operação"));

    expect(funcaoRealizarTransacao).toHaveBeenCalled();
  });
});

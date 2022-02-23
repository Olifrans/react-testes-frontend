import React from "react";
import {
  fireEvent,
  getByLabelText,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import App, { calcularNovoSaldo } from "./App";

describe("Componente principal", () => {
  //Teste de componente React
  describe("Quando eu abrir a aplicação", () => {
    test("o nome é exibido", () => {
      render(<App />);
      expect(screen.getByText("ITI Controle")).toBeInTheDocument();
    });

    it("o saldo é exibido", () => {
      render(<App />);
      expect(screen.getByText("Saldo:")).toBeInTheDocument();
    });

    it("o botão de realizar a transação é exibido", () => {
      render(<App />);
      expect(screen.getByText("Realizar operação")).toBeInTheDocument();
    });
  });

  //Teste de uma Função
  describe("Quando eu realizo uma transação", () => {
    it("que é saque, o valor vai diminuir", () => {
      const valores = {
        transacao: "saque",
        valor: 50,
      };
      const novoSaldo = calcularNovoSaldo(valores, 150);
      expect(novoSaldo).toBe(100);
    });

    //React Testing Library
    it("que é saque, a transação deve ser realizada", () => {
      const { getByText, getByTestId, getByLabelText } = render(<App />);

      const saldo = getByText("R$ 1000");
      const transacao = getByLabelText("Saque");
      const valor = getByTestId("valor");

      const botaoTransacoa = getByText("Realizar operação");

      expect(saldo.textContent).toBe("R$ 1000");

      fireEvent.click(transacao, { target: { value: "saque" } });
      fireEvent.change(valor, { target: { value: 10 } });
      fireEvent.click(botaoTransacoa);

      expect(saldo.textContent).toBe("R$ 990");
    });
  });
});

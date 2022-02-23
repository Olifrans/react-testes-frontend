import React from "react";
import { render, screen } from "@testing-library/react";
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


  });
});



import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from ".";

describe("Verifica se o titulo inicia em 0", () => {

  
  // TESTE 1
  test("deve iniciar o titulo com o valor 0", () => {
    render(<Counter />);

    const counterTitle = screen.getByText("0");
    expect(counterTitle).toBeInTheDocument();
  });

  // TESTE 2
  test("deve contar a classe counter__title", () => {
    render(<Counter />);

    const counterTitle = screen.getByText("0");
    expect(counterTitle).toHaveClass("counter__title");
  });

  // TESTE 3
  test("deve conter um botão ADD com as classes button e button_increment", () => {
    render(<Counter />);

    const buttonADD = screen.getByRole("button", { name: /ADD/ });
    expect(buttonADD).toBeInTheDocument();
    expect(buttonADD).toHaveClass("button");
    expect(buttonADD).toHaveClass("button_increment");
  });

  // TESTE 4
  test("deve conter um botão REMOVE com as classes button e button_decrement", () => {
    render(<Counter />);

    const buttonREMOVE = screen.getByRole("button", { name: /REMOVE/ });
    expect(buttonREMOVE).toBeInTheDocument();
    expect(buttonREMOVE).toHaveClass("button");
    expect(buttonREMOVE).toHaveClass("button_decrement");
  });

  // TESTE 5
  test("deve incrementar mais 1 ao clicar no botão ADD", () => {
    render(<Counter />);

    const buttonADD = screen.getByRole("button", { name: /ADD/ });

    expect(screen.queryByText("1")).toBeNull();
    userEvent.click(buttonADD);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  // TESTE 6
  test("deve decrementar mais 1 ao clicar no botão REMOVE", () => {
    render(<Counter />);

    const buttonREMOVE = screen.getByRole("button", { name: /REMOVE/ });

    expect(screen.queryByText("-1")).toBeNull();
    userEvent.click(buttonREMOVE);
    expect(screen.getByText("-1")).toBeInTheDocument();
  });
});

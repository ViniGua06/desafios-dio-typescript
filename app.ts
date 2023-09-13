class Employee {
  public codigo;
  public nome;
  constructor(cod: number, name: string) {
    this.codigo = cod;
    this.nome = name;
  }
}

const pessoa1 = new Employee(22, "Vinicius");

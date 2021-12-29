import { Container } from "./styles";

export function TransactionsTable(){
  return (
    <>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Desenvolvimento site</td>
              <td className="deposit">R$ 12.000</td>
              <td>Serviço</td>
              <td>23/03/2021</td>
            </tr>
            <tr>
              <td>Desenvolvimento site</td>
              <td className="deposit">R$ 12.000</td>
              <td>Serviço</td>
              <td>23/03/2021</td>
            </tr>
            <tr>
              <td>Carro</td>
              <td className="withdraw">R$ -1.000</td>
              <td>Serviço</td>
              <td>23/03/2021</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  )
}

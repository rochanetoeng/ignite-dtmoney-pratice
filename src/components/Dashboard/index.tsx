import { Container } from "./styles";
import { Sumary } from "../Sumary";
import { TransactionsTable } from "../TransactionsTable";

export function Dashboard() {
  return (
    <>
      <Container>
        <Sumary></Sumary>
        <TransactionsTable></TransactionsTable>
      </Container>
    </>
  );
}

import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import CabinTableOperation from "../features/cabins/CabinTableOperation";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperation />
      </Row>
      <Row>
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;

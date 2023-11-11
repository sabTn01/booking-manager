import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperation() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          {
            value: "all",
            label: "all",
          },
          {
            value: "no-discount",
            label: "No discount",
          },
          {
            value: "with-discount",
            label: "With discount",
          },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort By name (A-Z)" },
          { value: "name-desc", label: "Sort By name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort By price (A-Z)" },
          { value: "regularPrice-desc", label: "Sort By price (Z-A)" },
          { value: "maxCapacity-asc", label: "Sort By max capacity asc" },
          { value: "maxCapacity-desc", label: "Sort By max capacity desc" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperation;

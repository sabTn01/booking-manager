import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";
import AddBooking from "./AddBooking";
import { usePermissions } from "../../hooks/usePermissions";

const accessName = "insert-bookings";
function BookingTableOperations() {
  const { access } = usePermissions();
  console.log(access);
  return (
    <TableOperations>
      {access.find((x) => x === accessName) && <AddBooking />}
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-asc", label: "Sort by date (earlier first)" },
          {
            value: "totalPrice-desc",
            label: "Sort by amount (high first)",
          },
          { value: "totalPrice-asc", label: "Sort by amount (low first)" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;

import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import { useCabins } from "../cabins/hooks/useCabins";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";
import { usePermissions } from "../../hooks/usePermissions";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading: isLoadingBookings, bookings } = useRecentBookings();
  const { access } = usePermissions();

  const {
    isLoading: isLoadingStays,
    confirmedStays,
    numDays,
  } = useRecentStays();
  const { cabins } = useCabins();

  if (isLoadingBookings || isLoadingStays) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins?.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays}></DurationChart>
      {access.find((x) => x === "read-sales") && (
        <SalesChart bookings={bookings} numDays={numDays} />
      )}
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;

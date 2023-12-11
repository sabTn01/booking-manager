import { useState, useEffect } from "react";
import { useUser } from "../features/authentication/hooks/useUser";

const permissions = [
  {
    role: "webadmin",
    access: [
      "read-bookings",
      "insert-bookings",
      "update-bookings",
      "delete-bookings",
      "read-cabins",
      "insert-cabins",
      "update-cabins",
      "delete-cabins",
      "read-guests",
      "insert-guests",
      "update-guests",
      "delete-guests",
      "read-settings",
      "insert-settings",
      "update-settings",
      "delete-settings",
      "read-sales",
    ],
  },
  {
    role: "supervisor",
    access: [
      "read-bookings",
      "insert-bookings",
      "update-bookings",
      "delete-bookings",
      "read-cabins",
      "insert-cabins",
      "update-cabins",
      "read-guests",
      "insert-guests",
      "update-guests",
      "delete-guests",
      "read-settings",
      "update-settings",
      "read-sales",
    ],
  },
];
const initialState = [
  "read-bookings",
  "insert-bookings",
  "update-bookings",
  "read-cabins",
  "read-guests",
  "insert-guests",
  "update-guests",
  "delete-guests",
];

export function usePermissions() {
  const [access, setAccess] = useState(initialState);
  const { isAdmin, isSupervisor } = useUser();

  useEffect(
    function () {
      if (isAdmin) setAccess(permissions[0].access);
      else if (isSupervisor) setAccess(permissions[1].access);
    },
    [isAdmin, isSupervisor]
  );

  return { access };
}

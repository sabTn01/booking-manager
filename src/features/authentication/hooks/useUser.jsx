import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../../services/apiAuth";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    isLoading,
    user,
    isAuthenticated: user?.role === "authenticated",
    isAdmin: user?.app_metadata?.userrole === "webadmin",
    isSupervisor: user?.app_metadata?.userrole === "supervisor",
  };
}

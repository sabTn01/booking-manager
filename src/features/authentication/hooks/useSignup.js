import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success("Account successfully created! ");
    },
    onError: (err) => {
      console.error("ERROR", err);
      toast.error("Account not created! ");
    },
  });

  return { signup, isLoading };
}

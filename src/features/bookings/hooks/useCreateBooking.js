import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import CreateBookingForm from "../CreateBookingForm";

export function useCreateBooking() {
  const queryClient = useQueryClient();

  const { mutate: createBooking, isLoading: isCreating } = useMutation({
    mutationFn: CreateBookingForm,
    onSuccess: () => {
      toast.success("New booking successfully created");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
      //   reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createBooking };
}

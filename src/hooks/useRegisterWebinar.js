import { useMutation } from "@tanstack/react-query";
import { createWebinarRegistration } from "../services/webinar.service";

export function useRegisterWebinar() {
  const { mutate: register, isPending } = useMutation({
    mutationFn: createWebinarRegistration,
  });

  return {
    register,
    submitting: isPending,
  };
}

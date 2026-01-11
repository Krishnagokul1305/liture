import { useMutation } from "@tanstack/react-query";
import { createInternshipRegistration } from "../services/internship.service";

export function useRegisterInternship() {
  const { mutate: register, isPending } = useMutation({
    mutationFn: createInternshipRegistration,
  });

  return {
    register,
    submitting: isPending,
  };
}

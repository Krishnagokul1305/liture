import { useMutation } from "@tanstack/react-query";
import { registerMembership } from "../services/membership.service";

export function useRegisterMembership() {
  const { mutate: register, isPending } = useMutation({
    mutationFn: registerMembership,
  });

  return {
    register,
    submitting: isPending,
  };
}

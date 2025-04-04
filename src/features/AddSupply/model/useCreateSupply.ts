import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSupply } from "../../../shared/api/api.ts";

export const useCreateSupply = () => {
  const queryClient = useQueryClient();
  const { mutate: createNewSupply, isPending: isCreating } = useMutation({
    mutationFn: createSupply,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["supplies"],
      });
    },
  });

  return {
    createNewSupply,
    isCreating,
  };
};

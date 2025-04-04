import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSupply } from "../../../shared/api/api.ts";
import { ISupply } from "../../../shared/types.ts";

export const useCreateSupply = () => {
  const queryClient = useQueryClient();
  const { mutate: createNewSupply, isPending: isCreating } = useMutation({
    mutationFn: (newSupply: ISupply) => createSupply(newSupply),
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

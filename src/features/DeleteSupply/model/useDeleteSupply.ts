import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSupplyById } from "../../../shared/api/api.ts";

export const useDeleteSupply = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteSupply } = useMutation({
    mutationFn: (id: number) => deleteSupplyById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["supplies"],
      });
    },
  });

  return { deleteSupply };
};

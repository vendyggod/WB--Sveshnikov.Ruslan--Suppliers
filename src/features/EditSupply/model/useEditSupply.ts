import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSupply } from "../../../shared/api/api.ts";
import { ISupply } from "../../../shared/types.ts";

export const useEditSupply = () => {
  const queryClient = useQueryClient();

  const { mutate: editSupply, isPending: isEditing } = useMutation<
    ISupply,
    Error,
    { id: number; newSupplyData: Omit<ISupply, "id"> }
  >({
    mutationFn: ({ id, newSupplyData }) => updateSupply(id, newSupplyData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["supplies"],
      });
    },
  });

  return {
    editSupply,
    isEditing,
  };
};

import { ButtonAction } from "../../../shared/ui/ButtonMore/ButtonAction.tsx";
import { useDeleteSupply } from "../model/useDeleteSupply.ts";

interface DeleteSupplyProps {
  id: number;
}

export const DeleteSupply = ({ id }: DeleteSupplyProps) => {
  const { deleteSupply } = useDeleteSupply();

  const handleDeleteSupply = () => {
    deleteSupply(id);
  };

  return (
    <ButtonAction
      $path="/images/icon-delete.svg"
      onClick={handleDeleteSupply}
    />
  );
};

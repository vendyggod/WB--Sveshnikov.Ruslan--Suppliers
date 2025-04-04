import { ButtonActionsWrapper } from "../../../shared/ui/ButtonMore/ButtonAction.tsx";
import { EditSupply } from "../../EditSupply/ui/EditSupply.tsx";
import { ISupply } from "../../../shared/types.ts";
import { DeleteSupply } from "../../DeleteSupply/ui/DeleteSupply.tsx";

export const ButtonSupplyActions = ({ supply }: { supply: ISupply }) => {
  return (
    <ButtonActionsWrapper>
      <EditSupply supply={supply} />
      <DeleteSupply id={supply.id} />
    </ButtonActionsWrapper>
  );
};

import {
  ButtonAction,
  ButtonActionsWrapper,
} from "../../../shared/ui/ButtonMore/ButtonAction.tsx";
import { EditSupply } from "../../EditSupply/ui/EditSupply.tsx";
import { ISupply } from "../../../shared/types.ts";

export const ButtonSupplyActions = ({ supply }: { supply: ISupply }) => {
  return (
    <ButtonActionsWrapper>
      <EditSupply supply={supply} />
      <ButtonAction $path="/images/icon-delete.svg" />
    </ButtonActionsWrapper>
  );
};

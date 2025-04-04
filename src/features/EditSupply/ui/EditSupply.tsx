import { FC } from "react";
import { Modal } from "../../../widgets/Modal/Modal.tsx";
import { EditSupplyForm } from "./EditSupplyForm.tsx";
import { ButtonAction } from "../../../shared/ui/ButtonMore/ButtonAction.tsx";
import { ISupply } from "../../../shared/types.ts";

interface EditSupplyProps {
  supply: ISupply;
}

export const EditSupply: FC<EditSupplyProps> = ({ supply }) => {
  return (
    <Modal>
      <Modal.Open>
        <ButtonAction $path="/images/icon-edit.svg" />
      </Modal.Open>

      <Modal.Window>
        <EditSupplyForm supply={supply} onCloseModal={() => {}} />
      </Modal.Window>
    </Modal>
  );
};

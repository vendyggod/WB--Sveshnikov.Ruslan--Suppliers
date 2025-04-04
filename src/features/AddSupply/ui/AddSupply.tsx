import { FC } from "react";
import { IconPlus } from "../../../shared/ui/Icons";
import { Button } from "../../../shared/ui";
import { Modal } from "../../../widgets/Modal/Modal.tsx";
import { AddSupplyForm } from "./AddSupplyForm.tsx";

export const AddSupply: FC = () => {
  return (
    <Modal>
      <Modal.Open>
        <Button>
          <IconPlus />
          <span>Добавить поставку</span>
        </Button>
      </Modal.Open>

      <Modal.Window>
        <AddSupplyForm />
      </Modal.Window>
    </Modal>
  );
};

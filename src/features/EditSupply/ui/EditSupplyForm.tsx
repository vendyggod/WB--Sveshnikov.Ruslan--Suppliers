import { FC, useEffect } from "react";
import {
  Form,
  FormInfo,
  FormRowInput,
  FormTitle,
} from "../../../shared/ui/Form/Form.tsx";
import { FormRow } from "../../../shared/ui/Form/FormRow.tsx";
import { ButtonRow, FormButton } from "../../../shared/ui/Form/FormButton.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { IForm, ISupply } from "../../../shared/types.ts";
import { FormRowSelect } from "../../../shared/ui/Form/FormRowSelect.tsx";
import {
  cities,
  statuses,
  supplyTypes,
  warehouses,
} from "../../AddSupply/ui/consts.ts";
import { useEditSupply } from "../model/useEditSupply.ts";

export const EditSupplyForm: FC<IForm & { supply: ISupply }> = ({
  onCloseModal,
  supply,
}) => {
  const { register, handleSubmit, reset } = useForm<ISupply>({
    defaultValues: supply,
  });

  const { editSupply, isEditing } = useEditSupply();

  useEffect(() => {
    reset(supply);
  }, [supply, reset]);

  const onSubmit: SubmitHandler<ISupply> = (data: ISupply) => {
    console.log("Отправляемые данные:", data); // Добавить это
    editSupply(
      {
        id: supply.id,
        newSupplyData: data,
      },
      {
        onSuccess: () => {
          onCloseModal();
        },
      },
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Редактирование</FormTitle>
      <FormInfo>{`#${supply.id}`}</FormInfo>

      <FormRow label="Дата поставки">
        <FormRowInput
          type="date"
          id="date"
          disabled={isEditing}
          {...register("date")}
        />
      </FormRow>

      <FormRow label="Город">
        <FormRowSelect id="city" disabled={isEditing} {...register("city")}>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </FormRowSelect>
      </FormRow>

      <FormRow label="Количество">
        <FormRowInput
          type="number"
          id="quantity"
          disabled={isEditing}
          {...register("quantity", {
            required: "Обязательное поле",
            min: { value: 1, message: "Минимум 1" },
          })}
        />
      </FormRow>

      <FormRow label="Тип поставки">
        <FormRowSelect id="type" disabled={isEditing} {...register("type")}>
          {supplyTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </FormRowSelect>
      </FormRow>

      <FormRow label="Склад">
        <FormRowSelect
          id="warehouse"
          disabled={isEditing}
          {...register("warehouse")}
        >
          {warehouses.map((warehouse) => (
            <option key={warehouse} value={warehouse}>
              {warehouse}
            </option>
          ))}
        </FormRowSelect>
      </FormRow>

      <FormRow label="Статус">
        <FormRowSelect id="status" disabled={isEditing} {...register("status")}>
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </FormRowSelect>
      </FormRow>

      <ButtonRow>
        <FormButton $variation="primary" disabled={isEditing}>
          {isEditing ? "Сохранение..." : "Сохранить изменения"}
        </FormButton>
        <FormButton type="reset" $variation="secondary" onClick={onCloseModal}>
          Отменить
        </FormButton>
      </ButtonRow>
    </Form>
  );
};

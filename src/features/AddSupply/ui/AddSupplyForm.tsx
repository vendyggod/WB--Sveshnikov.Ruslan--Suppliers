import { FC } from "react";
import {
  Form,
  FormInfo,
  FormRowInput,
  FormTitle,
} from "../../../shared/ui/Form/Form.tsx";
import { FormRow } from "../../../shared/ui/Form/FormRow.tsx";
import { ButtonRow, FormButton } from "../../../shared/ui/Form/FormButton.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateSupply } from "../model/useCreateSupply.ts";
import { IForm, ISupply } from "../../../shared/types.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store.ts";
import { FormRowSelect } from "../../../shared/ui/Form/FormRowSelect.tsx";
import {
  cities,
  supplyTypes,
  warehouses,
  warehouseAddresses,
  statuses,
} from "./consts.ts";

export const AddSupplyForm: FC<IForm> = ({ onCloseModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISupply>({
    defaultValues: {
      date: new Date().toISOString().split("T")[0],
      city: "Москва",
      type: "Короб",
      quantity: 0,
      warehouse: "Черная грязь",
      status: "В пути",
    },
  });
  const { createNewSupply, isCreating } = useCreateSupply();
  const totalItems = useSelector(
    (state: RootState) => state.ui.pagination.totalItems,
  );
  const formedId = totalItems + 1;

  const onSubmit: SubmitHandler<ISupply> = (data: ISupply) => {
    const { date, city, quantity, type, warehouse, status } = data;
    const formattedData = {
      id: formedId,
      date,
      city,
      quantity,
      type,
      warehouse,
      status,
      address: warehouseAddresses[warehouse] || "Адрес не указан",
    };
    createNewSupply(formattedData, {
      onSuccess: () => {
        reset();
        onCloseModal();
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Новая поставка</FormTitle>
      <FormInfo>{`#${formedId}`}</FormInfo>

      <FormRow label="Дата поставки" error={errors?.date?.message}>
        <FormRowInput
          type="date"
          id="date"
          disabled={isCreating}
          {...register("date", { required: "Обязательное поле" })}
        />
      </FormRow>

      <FormRow label="Город" error={errors?.city?.message}>
        <FormRowSelect
          id="city"
          disabled={isCreating}
          {...register("city", { required: "Обязательное поле" })}
        >
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
          defaultValue={0}
          disabled={isCreating}
          {...register("quantity", {
            required: "Обязательное поле",
            min: { value: 1, message: "Минимум 1" },
          })}
        />
      </FormRow>

      <FormRow label="Тип поставки" error={errors?.type?.message}>
        <FormRowSelect
          id="type"
          disabled={isCreating}
          {...register("type", { required: "Обязательное поле" })}
        >
          {supplyTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </FormRowSelect>
      </FormRow>

      <FormRow label="Склад" error={errors?.warehouse?.message}>
        <FormRowSelect
          id="warehouse"
          disabled={isCreating}
          {...register("warehouse", { required: "Обязательное поле" })}
        >
          {warehouses.map((warehouse) => (
            <option key={warehouse} value={warehouse}>
              {warehouse}
            </option>
          ))}
        </FormRowSelect>
      </FormRow>

      <FormRow label="Статус" error={errors?.status?.message}>
        <FormRowSelect
          id="status"
          disabled={isCreating}
          {...register("status", { required: "Обязательное поле" })}
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </FormRowSelect>
      </FormRow>

      <ButtonRow>
        <FormButton variation="primary" disabled={isCreating}>
          Создать
        </FormButton>
        <FormButton type="reset" variation="secondary" onClick={onCloseModal}>
          Отменить
        </FormButton>
      </ButtonRow>
    </Form>
  );
};

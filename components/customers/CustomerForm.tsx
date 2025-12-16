"use client";

import {
  insertCustomerSchema,
  InsertCustomerSchemaType,
  SelectCustomerSchemaType,
} from "@/zod-schemas/customer";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormProvider, useForm } from "react-hook-form";
import InputWithLabel from "../InputWithLabel";
import { Button } from "../ui/button";
import TextAreaWithLabel from "../TextAreaWithLabel";
import SelectWithLabel from "../SelectWithLabel";
import { STATES } from "@/constants/States";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

type Props = {
  customer?: SelectCustomerSchemaType;
};

export default function CustomerForm({ customer }: Props) {
  const kindeClient = useKindeBrowserClient();
  const permissions = kindeClient.getPermissions();
  const isManager = !kindeClient.isLoading && kindeClient?.getPermission("manager")?.isGranted
   

  const defaultValues: InsertCustomerSchemaType = {
    id: customer?.id || 0,
    firstName: customer?.firstName || "",
    email: customer?.email || "",
    lastName: customer?.lastName || "",
    address1: customer?.address1 || "",
    address2: customer?.address2 || "",
    city: customer?.city || "",
    zip: customer?.zip || "",
    notes: customer?.notes || "",
    phone: customer?.phone || "",
    state: customer?.state || "",
  };

  const form = useForm<InsertCustomerSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(insertCustomerSchema),
    defaultValues,
  });

  const onSubmit = (data: InsertCustomerSchemaType) => {};

  return (
    <div className="flex flex-col gap-2 sm:px-8">
      <h1 className="text-2xl font-bold">
        {customer?.id ? "Edit Customer" : "New Customer"}
      </h1>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col max-w-xs gap-5"
        >
          <InputWithLabel<InsertCustomerSchemaType>
            fieldTitle={"First Name"}
            nameInSchema="firstName"
          />
          <InputWithLabel<InsertCustomerSchemaType>
            fieldTitle={"Last Name"}
            nameInSchema="lastName"
          />
          <InputWithLabel<InsertCustomerSchemaType>
            fieldTitle={"Email"}
            nameInSchema="email"
          />
          <InputWithLabel<InsertCustomerSchemaType>
            fieldTitle={"Phone"}
            nameInSchema="phone"
          />
          {/* Address */}
          <InputWithLabel<InsertCustomerSchemaType>
            fieldTitle={"Address 1"}
            nameInSchema="address1"
          />
          <InputWithLabel<InsertCustomerSchemaType>
            fieldTitle={"Address 2"}
            nameInSchema="address2"
          />
          <InputWithLabel<InsertCustomerSchemaType>
            fieldTitle={"City"}
            nameInSchema="city"
          />
          <TextAreaWithLabel<InsertCustomerSchemaType>
            fieldTitle={"Notes"}
            nameInSchema="notes"
            className="h-40"
          />

          <SelectWithLabel<InsertCustomerSchemaType>
            data={STATES}
            nameInSchema="state"
            fieldTitle="State"
          />

          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    </div>
  );
}

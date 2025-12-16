"use client";

import {
  insertTicketSchema,
  InsertTicketSchemaType,
  SelectTicketSchemaType,
} from "@/zod-schemas/ticket";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { FormField } from "../ui/form";
import InputWithLabel from "../InputWithLabel";
import TextAreaWithLabel from "../TextAreaWithLabel";
import { Button } from "../ui/button";
import CheckboxWithLabel from "../CheckboxWithLabel";

type Props = {
  customerId: number;
  ticket?: SelectTicketSchemaType;
  techs?: { id: string; name: string }[];
};

export default function TicketForm({ ticket, customerId }: Props) {
  const defaultValues: InsertTicketSchemaType = {
    id: ticket?.id || "(New)",
    customerId: ticket?.customerId || customerId,
    description: ticket?.description || "",
    tech: ticket?.tech || "new",
    title: ticket?.title || "",
    completed: ticket?.completed || false,
  };

  const form = useForm<InsertTicketSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(insertTicketSchema),
    defaultValues,
  });

  console.log("errors", form.formState.errors);

  const onSubmit = (data: InsertTicketSchemaType) => {
    alert("succeess");
  };

  return (
    <>
      <div>
        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col max-w-xs gap-5 p-2"
          >
            <InputWithLabel<InsertTicketSchemaType>
              nameInSchema="title"
              fieldTitle="Title"
            />
            <TextAreaWithLabel<InsertTicketSchemaType>
              nameInSchema="description"
              fieldTitle="Description"
            />
            <CheckboxWithLabel<InsertTicketSchemaType>
              fieldTitle="Completed"
              nameInSchema="completed"
              message="Yes"
            />
            <Button type="submit">Save Ticket</Button>
          </form>
        </FormProvider>
      </div>
    </>
  );
}

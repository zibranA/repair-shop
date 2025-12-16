"use client";

import { InputHTMLAttributes } from "react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

type Props<T> = {
  fieldTitle: string;
  nameInSchema: keyof T & string;
  message: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function CheckboxWithLabel<T>({
  fieldTitle,
  nameInSchema,
  message,
}: Props<T>) {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{fieldTitle}</FormLabel>
          <div className="flex items-center gap-3">
            <FormControl>
              <Checkbox
                id={nameInSchema}
                {...field}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            {message}
          </div>
          <FormMessage />

          {/* <Label htmlFor={nameInSchema}>{fieldTitle}</Label> */}
        </FormItem>
      )}
    />
  );
}

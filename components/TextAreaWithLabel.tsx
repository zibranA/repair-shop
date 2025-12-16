"use client"
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";

type Props<S> = {
  fieldTitle: string;
  nameInSchema: keyof S & string;
  className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextAreaWithLabel<S>({
  fieldTitle,
  nameInSchema,
  className,
  ...props
}: Props<S>) {
  const form = useFormContext();

  return (
    <>
      <FormField
        control={form.control}
        name={nameInSchema}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{fieldTitle}</FormLabel>
            <FormControl>
              <Textarea {...props} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}

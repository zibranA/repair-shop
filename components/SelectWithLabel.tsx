"use client";

import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type DataObj = { description: string; id: string };

type Props<S> = {
  fieldTitle: string;
  nameInSchema: keyof S & string;
  className?: string;
  data: DataObj[];
};

export default function SelectWithLabel<S>({
  fieldTitle,
  nameInSchema,
  data,
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
              <Select {...field} onValueChange={field.onChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {/* <SelectLabel>Fruits</SelectLabel> */}
                  {data.map((item) => (
                    <SelectItem key={item.id} value={item.id}>
                      {item.description}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}

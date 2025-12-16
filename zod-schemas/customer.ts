import { customers } from "@/db/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import z from "zod";

export const insertCustomerSchema = createInsertSchema(customers, {
  firstName: (schema) => schema.min(1, "First name is required"),
  lastName: (schema) => schema.min(1, "Last name is required"),
  email: (schema) => schema.min(1, "Email is required").email("Invalid email address"),
  address1: (schema) => schema.min(1, "Address is required"),
  city: (schema) => schema.min(1, "City is required"),
  state: (schema) => schema.length(2, "State must be 2 characters"),
  zip: (schema) => schema.min(1, "Zip is required"),
  phone: (schema) => schema.min(1, "Phone number is required"),
});

export const selectCustomerSchema = createSelectSchema(customers);

export type InsertCustomerSchemaType = z.infer<typeof insertCustomerSchema>;
export type SelectCustomerSchemaType = z.infer<typeof selectCustomerSchema>;

import { tickets } from "@/db/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import z from "zod";

export const insertTicketSchema = createInsertSchema(tickets, {
  id: z.union([z.number(), z.literal("(New)")]),
  title: (schema) => schema.min(1, "Title is required"),
  description: (schema) => schema.min(1, "Description is required"),
  tech: (schema) => schema.min(1, "Technician is required"),
});

export const selectTicketSchema = createSelectSchema(tickets);

export type InsertTicketSchemaType = z.infer<typeof insertTicketSchema>;
export type SelectTicketSchemaType = z.infer<typeof selectTicketSchema>;

import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import { notFound } from "next/navigation";

export default async function TicketFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { ticketId, customerId } = await searchParams;

  if (!customerId) {
    return <>Customer Id Missing</>;
  }

  const customer = await getCustomer(parseInt(customerId));

  if (!customer) {
    return notFound();
  }

  let ticket = null;
  if (ticketId) {
    ticket = await getTicket(parseInt(ticketId));
    if (!ticket) {
      return notFound();
    }
  }

  return <>Ticket : {JSON.stringify(ticket)}</>;
}

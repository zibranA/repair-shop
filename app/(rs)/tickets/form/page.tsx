import TicketForm from "@/components/tickets/TicketForm";
import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import { notFound } from "next/navigation";
import { Users, init as kindeInit } from "@kinde/management-api-js";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
export default async function TicketFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { ticketId, customerId } = await searchParams;

  if (!customerId) {
    return <>Customer Id Missing</>;
  }

  let techs: { id: string; name: string }[] = [];
  const [managerPermission, user] = await Promise.all([
    getKindeServerSession().getPermission("manager"),
    getKindeServerSession().getUser,
  ]);

  const isManager = managerPermission?.isGranted;

  if (isManager) {
    kindeInit();
    const { users } = await Users.getUsers();
    techs = users
      ? users?.map((item) => ({ id: item.email ?? "", name: item.email ?? "" }))
      : [];
  }

  console.log("USER", isManager);

  const customer = await getCustomer(parseInt(customerId));

  if (!customer) {
    return notFound();
  }

  let ticket;
  if (ticketId) {
    ticket = await getTicket(parseInt(ticketId));
    if (!ticket) {
      return notFound();
    }
  }

  return (
    <>
      <TicketForm
        ticket={ticket}
        customerId={parseInt(customerId)}
        techs={techs}
      />
    </>
  );
}

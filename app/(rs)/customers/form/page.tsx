import { getCustomer } from "@/lib/queries/getCustomer";
import { notFound } from "next/navigation";

export default async function CustomersFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  let customer = null;
  const { customerId } = await searchParams;
  console.log("customerId", customerId);
  if (customerId) {
    customer = await getCustomer(parseInt(customerId));
    if (!customer) {
      return notFound();
    }
  }

  return <div>Customer Form Page : {JSON.stringify(customer)}</div>;
}

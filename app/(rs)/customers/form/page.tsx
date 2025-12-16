import CustomerForm from "@/components/customers/CustomerForm";
import { getCustomer } from "@/lib/queries/getCustomer";
import { notFound } from "next/navigation";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { customerId } = await searchParams;

  if (!customerId) return { title: "New Customer" };

  return { title: `Edit Customer ${customerId}` };
}

export default async function CustomersFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  let customer;
  const { customerId } = await searchParams;
  console.log("customerId", customerId);
  if (customerId) {
    customer = await getCustomer(parseInt(customerId));
    if (!customer) {
      return notFound();
    }
  }

  return (
    <div>
      <CustomerForm customer={customer} />
    </div>
  );
}

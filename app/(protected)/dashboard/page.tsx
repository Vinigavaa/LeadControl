import DashboardContent from "@/components/dashboard/dashboard-content";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if(!session?.user?.id) {
    redirect("/")
  };

  const leads = await prisma.lead.findMany({
    where: {
      userId: session.user.id
    },
  });

  return (
    <DashboardContent leads = {leads} />
  );
}

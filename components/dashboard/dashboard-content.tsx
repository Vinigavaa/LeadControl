"use client"
import { Lead } from "@/app/generated/prisma/client";

interface DashboardContentProps {
    leads: Lead[];
};

interface DashboardLeadData {

};

export default function DashboardContent({leads}: DashboardContentProps){
    return(
        <div>aaa</div>
    )
}
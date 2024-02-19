import React from "react";
import OrgControl from "./_components/org-control";

import { startCase } from "lodash";
import { auth } from "@clerk/nextjs";


export async function generateMetadata() {
  const { orgSlug } = auth();

  return {
    title: startCase(orgSlug || "organization"),
  };
};

const OragnizationIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <OrgControl />
      {children}
    </div>
  );
};

export default OragnizationIdLayout;

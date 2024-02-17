import React from "react";
import OrgControl from "./_components/org-control";

const OragnizationIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <OrgControl />
      {children}
    </div>
  );
};

export default OragnizationIdLayout;

import Hello from "@/components/Hello";
import React, { FC } from "react";

const IndexPage: FC<void> = () => (
  <div className="flex h-screen">
    <Hello who="world" />
  </div>
);

export default IndexPage;

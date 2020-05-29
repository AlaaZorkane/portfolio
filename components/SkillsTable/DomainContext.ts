import { createContext } from "react";
import { NormalizedDomains } from "@/interfaces";

const DomainContext = createContext<NormalizedDomains>({
  allIds: [],
  byId: {},
});

export default DomainContext;

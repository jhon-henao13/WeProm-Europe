import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "z2idrboh", // Tu ID que pusiste arriba
  dataset: "production",
  useCdn: true, 
  apiVersion: "2024-03-01",
});
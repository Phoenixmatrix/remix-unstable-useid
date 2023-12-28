import { useId } from "react";

export function Unstable() {
  const id = useId();
  return <p>Unstable: {id}</p>;
}

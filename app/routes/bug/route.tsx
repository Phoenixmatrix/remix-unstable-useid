import { useId } from "react";
import { Unstable } from "./Unstable";
import { useFetcher } from "@remix-run/react";

export default function Bug() {
  const fetcher = useFetcher();
  const id = useId();
  return (
    <div>
      <p>Stable: {id}</p>
      <Unstable />
    </div>
  );
}

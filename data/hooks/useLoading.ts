import { useState } from "react";

export default function useLoading() {
  const [loading, setloading] = useState<boolean>(false);

  function loadInit() {
    setloading(true);
  }

  function loadEnd() {
    setloading(false);
  }

  return { loading, loadInit, loadEnd };
}

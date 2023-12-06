"use client";

import { StoreModal } from "@/components/modals/store-modal";
import React, { useEffect } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <StoreModal />
    </>
  );
};

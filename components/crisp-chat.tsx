"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("d0f0b454-7320-4f5d-a49f-b50596d55748");
  }, []);

  return null;
};

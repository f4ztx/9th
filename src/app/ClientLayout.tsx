'use client';

import { PropsWithChildren } from "react";
import { I18nextProvider } from "react-i18next";
import i18next from "@/i18n/client";
import ClientWrapper from "@/components/ClientWrapper";

export default function ClientLayout({ children }: PropsWithChildren) {
  return (
    <I18nextProvider i18n={i18next}>
      <ClientWrapper />
      {children}
    </I18nextProvider>
  );
}

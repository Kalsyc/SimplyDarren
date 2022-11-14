import { ComponentChildren } from "preact";
import MainHeaderWrapper from "../header/MainHeaderWrapper.tsx";
import { GeneralHead } from "./GeneralHead.tsx";

export type GeneralLayoutProps = {
  children: ComponentChildren;
  title?: string;
  name?: string;
  description?: string;
};

export function GeneralLayout({ children, ...customMeta }: GeneralLayoutProps) {
  return (
    <>
      <div class="min-h-screen bg-primaryLight dark:bg-primaryDark text-fontLight dark:text-fontDark">
        <GeneralHead {...customMeta} />
        <MainHeaderWrapper />
        {children}
      </div>
    </>
  );
}

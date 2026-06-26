import { HopewardFooter } from "@/components/hopeward-footer";
import { HopewardNavigation } from "@/components/hopeward-navigation";

type HopewardPageShellProps = {
  children: React.ReactNode;
};

/** Shared nav + main + footer wrapper used across Hopeward pages. */
export function HopewardPageShell({ children }: HopewardPageShellProps) {
  return (
    <>
      <HopewardNavigation />
      <main className="flex flex-1 flex-col">{children}</main>
      <HopewardFooter />
    </>
  );
}

"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import SideBar from "./sidebar";

import localFont from "next/font/local";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const headingFont = localFont({
  src: "../../../../public/fonts/font.woff2",
});

export const MobileSidebar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const isOpen = useMobileSidebar((state) => state.isOpen);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        onClick={onOpen}
        className="block md:hidden mr-2"
        variant="ghost"
        size="sm"
      >
        <Menu className="h-4 w-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-2 pt-10">
          <SheetHeader className="w-full">
            <SheetTitle>
              <div className="w-full flex justify-start items-center px-2 border-b mb-1">
                <Link
                  href="/"
                  className="hover:opacity-75 flex transition justify-center items-center gap-x-2"
                >
                  <Image src="/logo.svg" alt="Logo" height={30} width={30} />
                  <p
                    className={cn(
                      "text-lg text-neutral-700 pb-1",
                      headingFont.className
                    )}
                  >
                    Taskify
                  </p>
                </Link>
              </div>
            </SheetTitle>
          </SheetHeader>
          <SideBar storageKey="t-sidebar-mobile-state" />
        </SheetContent>
      </Sheet>
    </>
  );
};

"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-gradient-to-br from-blue-50 to-orange-50 dark:from-blue-950/20 dark:to-orange-950/20"></div>
);
const items = [
  {
    title: "Innovation That Endures",
    description: "Creating solutions that evolve with changing needs and stand the test of time.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: "Future-Ready Technology",
    description: "Building with tomorrow in mind, ensuring your technology never becomes obsolete.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: "Thoughtful Design",
    description: "Crafting experiences that are both beautiful and functional for generations.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-orange-500 dark:text-orange-400" />,
  },
  {
    title: "Lasting Impact",
    description:
      "Delivering solutions that create meaningful change and lasting value.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-orange-500 dark:text-orange-400" />,
  },
];

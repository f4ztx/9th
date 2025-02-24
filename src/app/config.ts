import type { Metadata } from "next";

export const siteConfig = {
  metadata: {
    title: "9th Avenue | Web Development Studio",
    description:
      "Texas-based web development studio crafting modern digital experiences with a vintage touch",
  } as Metadata,
  dynamic: "force-dynamic" as const,
  runtime: "edge" as const,
};

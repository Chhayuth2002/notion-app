"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your ideas, Documents, & Plans, Unified. Welcome to
        <span className="underline">Jotion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion is the connected workspace where <br />
        better, faster work happends.
      </h3>
      <Button size={"sm"} asChild>
        <Link href="/documents">
          Enter Jotion <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </Button>
    </div>
  );
};

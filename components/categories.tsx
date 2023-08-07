"use client";

import qs from "query-string";
import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface CategoriesProps {
  data: Category[];
}

export const Categories = ({ data }: CategoriesProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");

  const onClik = (id: string | undefined) => {
    const query = { categoryId: id };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    );

    router.push(url);
  };

  return (
    <div className="flex w-full p-1 space-x-2 overflow-x-auto">
      <button
        onClick={() => onClik(undefined)}
        className={cn(
          `
            flex
            items-center
            text-center
            text-xs
            md:text-sm
            px-2
            md:px-4
            py-2
            md:py-3
            rounded-md
            bg-primary/10
            hover:opacity-75
            transition
        `,
          !categoryId ? "bg-primary/25" : "bg-primary/10",
        )}>
        Newest
      </button>
      {data.map((item) => (
        <button
          key={item.id}
          onClick={() => onClik(item.id)}
          className={cn(
            `
            flex
            items-center
            text-center
            text-xs
            md:text-sm
            px-2
            md:px-4
            py-2
            md:py-3
            rounded-md
            bg-primary/10
            hover:opacity-75
            transition
        `,
            item.id === categoryId ? "bg-primary/25" : "bg-primary/10",
          )}>
          {item.name}
        </button>
      ))}
    </div>
  );
};

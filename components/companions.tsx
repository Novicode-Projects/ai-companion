import { Companion } from "@prisma/client";
import Image from "next/image";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { MessagesSquare } from "lucide-react";

interface CompanionsProps {
  data: (Companion & {
    _count: {
      messages: number;
    };
  })[];
}
export const Companions = ({ data }: CompanionsProps) => {
  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center pt-10 space-y-3">
        <div className="relative w-60 h-60">
          <Image fill className=" grayscale" alt="Empty" src="/empty.png" />
        </div>
        <p className="text-sm text-muted-foreground">No companions found.</p>
      </div>
    );
  }
  return (
    <div className="grid gap-2 pb-10 grid-col-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-5 xs:grid-cols-6">
      {data.map((item) => (
        <Card
          key={item.id}
          className="transition border-0 cursor-pointer bg-primary/10 rounded-xl hover:opacity-75">
          <Link href={`/chat/${item.id}`}>
            <CardHeader className="flex items-center justify-center text-center text-muted-foreground">
              <div className="relative w-32 h-32">
                <Image
                  src={item.src}
                  fill
                  className="object-cover rounded-xl"
                  alt="Companion"
                />
              </div>
              <p className="font-bold">{item.name}</p>
              <p className="text-xs">{item.description}</p>
            </CardHeader>
            <CardFooter className="flex items-center justify-between text-xs text-muted-foreground">
              <p className="lowercase">@{item.userName}</p>
              <div className="flex items-center">
                <MessagesSquare className="w-3 h-3 mr-1" />
                {item._count.messages}
              </div>
            </CardFooter>
          </Link>
        </Card>
      ))}
    </div>
  );
};

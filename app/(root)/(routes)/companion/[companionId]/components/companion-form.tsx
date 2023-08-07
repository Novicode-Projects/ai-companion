"use client";

import * as z from "zod";
import { Category, Companion } from "@prisma/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";

interface CompanionFormProps {
  initialData: Companion | null;
  categories: Category[];
}

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  description: z.string().min(1, {
    message: "Description is required.",
  }),
  inscriptions: z.string().min(200, {
    message: "Instructions require at lest 200 characters.",
  }),
  seed: z.string().min(200, {
    message: "Seed require at lest 200 characters.",
  }),
  src: z.string().min(1, {
    message: "Image is required.",
  }),
  categoryId: z.string().min(1, {
    message: "Category is required.",
  }),
});

export const CompanionForm = ({
  initialData,
  categories,
}: CompanionFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
      description: "",
      inscriptions: "",
      seed: "",
      src: "",
      categoryId: undefined,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="h-full max-w-3xl p-4 mx-auto space-y-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="pb-10 space-y-8">
          <div className="w-full space-y-2">
            <div>
              <h3 className="text-lg font-medium">General Information</h3>
              <p className="text-sm text-muted-foreground">
                General Information about your companion
              </p>
            </div>
            <Separator className="bg-primary/10" />
            <FormField
              name="src"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center justify-center col-span-2 space-y-4">
                  <FormControl>Image Upload Component</FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

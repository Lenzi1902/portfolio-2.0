"use client";

import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
const formSchema = z.object({
  email: z.string().min(1, "Email is required"),
  name: z.string().min(1, "Name is required"),
  message: z.string().min(1, "Message is required"),
});

type contactForm = z.infer<typeof formSchema>;

const FormContact = () => {
  const form = useForm<contactForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  const onSubmit = async (e: contactForm) => {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Contact-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.name,
        email: e.email,
        message: e.message,
      }),
    });
    console.log(await response.json());
  };
  return (
    <div className=" text-[#a19f94] font-inter flex flex-col gap-[2rem] h-[100%] font-semibold">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col gap-[2rem] h-[100%]">
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem className=" border-b-2">
                <FormLabel className="text-[1.1rem] font-semibold">Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Email" className=" border-none shadow-none pb-[1rem]" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem className=" border-b-2">
                <FormLabel className="text-[1.1rem] font-semibold">Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Name" className=" border-none shadow-none pb-[1rem]" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="message"
            render={({ field }) => (
              <FormItem className=" border-b-2">
                <FormLabel className="text-[1.1rem] font-semibold">Message</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Message" className="min-h-[10rem] border-none shadow-none pb-[1rem]" />
                </FormControl>
              </FormItem>
            )}
          />
          <div className=" w-full h-full flex justify-end ">
            <Button type="submit" className="h-[6rem] w-[6rem] rounded-full cursor-pointer hover:bg-black font-semibold">
              Send it
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormContact;

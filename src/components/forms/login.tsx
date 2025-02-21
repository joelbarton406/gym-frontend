import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const schema = z.object({
  email: z.string().email(),
  plaintext_password: z
    .string()
    .min(8)
    .regex(/[A-Z]/, "Must contain at least one UPPERCASE letter")
    .regex(/[a-z]/, "Must contain at least one LOWERCASE letter")
    .regex(/[0-9]/, "Must contain at least one NUMBER"),
});

type FormSchema = z.infer<typeof schema>;

const formFields: {
  name: keyof FormSchema;
  label: string;
  placeholder: string;
  type: string;
  description?: string;
}[] = [
  {
    name: "email",
    label: "email",
    placeholder: "agreat@example.com",
    type: "text",
  },
  {
    name: "plaintext_password",
    label: "password",
    placeholder: "********",
    type: "password",
  },
];

export default function Login() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "joel@gmail.com",
      plaintext_password: "********",
    },
  });

  const onSubmit = async (formData: FormSchema) => {
    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData }),
    });
    const { member, sessionId } = await res.json();

    console.log({ member, sessionId });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {formFields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input
                    type={field.type}
                    placeholder={field.placeholder}
                    {...formField}
                  />
                </FormControl>
                {field.description && (
                  <FormDescription>{field.description}</FormDescription>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

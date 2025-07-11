"use server"

import * as z from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  requirement: z.string(),
  budget: z.string(),
});

export async function handleFormSubmission(values: z.infer<typeof formSchema>) {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    throw new Error("Invalid form data");
  }

  // Here you would typically send an email, save to a database, or call an external API.
  // For this demo, we'll just log the data to the console.
  console.log("New contact form submission:");
  console.log("Name:", parsed.data.name);
  console.log("Email:", parsed.data.email);
  console.log("Budget:", parsed.data.budget);
  console.log("Requirement:", parsed.data.requirement);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "Form submitted successfully!",
  };
}

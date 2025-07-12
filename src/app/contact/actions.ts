"use server"

import * as z from "zod";

// This schema should be consistent with the one in the ContactForm component.
// In a larger application, you might want to share this schema from a common file.
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  requirement: z.string().min(10, {
    message: "Please describe your requirement in at least 10 characters.",
  }),
  budget: z.string().nonempty({ message: "Please select a budget." }),
});

export async function handleFormSubmission(values: z.infer<typeof formSchema>) {
  console.log("Form submission received:", values);
  // In a real application, you would add logic here to:
  // 1. Validate the data (already done by Zod on the client-side, but good to double-check)
  // 2. Save the data to a database
  // 3. Send a confirmation email
  // 4. Handle any potential errors
  
  // For now, we'll just return a success message.
  return {
    success: true,
    message: "Form submitted successfully!",
  };
}

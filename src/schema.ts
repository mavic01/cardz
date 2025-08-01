import { z } from "zod";

export const schema = z
    .object({
      name: z
        .string()
        .min(1, "Cardholder name is required")
        .transform((val) =>
          val
            .trim()
            .toLowerCase()
            .replace(/\b\w/g, (char) => char.toUpperCase())
        ),
      cardNumber: z
        .string()
        .min(1, "Card number is required")
        .regex(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, "Invalid card number format"),
      month: z
        .string()
        .regex(/^(0[1-9]|1[0-2])$/, "Invalid month format")
        .min(1, "Expiration month is required"),
      year: z
        .string()
        .regex(/^\d{2}$/, "Invalid year format")
        .min(1, "Year is required"),
      cvv: z
        .string()
        .min(1, "CVC is required")
        .regex(/^\d{3}$/, "CVC must be 3 digits"),
    })
    .refine(
      (data) => {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;

        const year = parseInt("20" + data.year);
        const month = parseInt(data.month);

        if (year > currentYear) return true;
        if (year === currentYear && month >= currentMonth) return true;

        return false;
      },
      {
        message: "Expiration date must be in the future",
        path: ["year"],
      }
    );
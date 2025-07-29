"use client";

import Image from "next/image";
import { Check } from "lucide-react";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function App() {
  const schema = z.object({
    name: z
      .string()
      .min(1, "Cardholder name is required")
      .regex(/^[A-Z\s]+$/, "Name must be uppercase letters only"),
    cardNumber: z
      .string()
      .min(1, "Card number is required")
      .regex(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, "Invalid card number format"),
    month: z
      .string()
      .min(1, "Expiration month is required")
      .regex(/^(0[1-9]|1[0-2])$/, "Invalid month format"),
    year: z
      .string()
      .min(1, "Year is required")
      .regex(/^\d{2}$/, "Invalid year format")
      .refine((value) => {
        const currentYear = new Date().getFullYear();
        const enteredYear =
          value.length === 2 ? parseInt("20" + value) : parseInt(value);
        return enteredYear >= currentYear || "Year must be in the future";
      }),
    cvv: z
      .string()
      .min(1, "CVC is required")
      .regex(/^\d{3}$/, "CVC must be 3 digits"),
  });

  type FormFields = z.infer<typeof schema>;

  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitted, isSubmitSuccessful },
  } = useForm<FormFields>({ resolver: zodResolver(schema), mode: "onBlur" });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  const name = watch("name") || "JANE APPLESEED";
  const cardNumber = watch("cardNumber") || "0000 0000 0000 0000";
  const month = watch("month") || "00";
  const year = watch("year") || "00";
  const cvv = watch("cvv") || "000";

  return (
    <div className="font-['Space_Grotesk']">
      <div className="flex flex-col h-screen relative min-[1280px]:flex-row">
        {/* CARD PART */}
        <div className="flex-[1.8] bg-[url('/bg-main-mobile.png')] bg-cover bg-center pb-10 h-screen w-full min-[1280px]:flex-[1] min-[1280px]:bg-[url('/bg-main-desktop.png')] min-[1280px]:z-30">
          {/* Back of Card */}
          <Image
            src="/bg-card-back.png"
            width={280}
            height={200}
            alt="Back of card"
            className="ml-18 mt-6 min-[1280px]:ml-65 min-[1280px]:mt-74 object-cover"
          />
          <span className="absolute top-22 left-71 text-white z-20 text-base min-[1280px]:top-90 min-[1280px]:left-118">
            {cvv}
          </span>
        </div>

        {/* Front of Card */}
        <div className="absolute top-[110px] left-6 w-[280px] h-[200px] rounded-xl overflow-hidden shadow-lg z-20 min-[1280px]:top-[68px] min-[1280px]:left-54 min-[1280px]:z-30">
          <Image
            src="/bg-card-front.png"
            width={280}
            height={200}
            alt="Front of card"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-10 text-white p-4 flex flex-col justify-between font-mono">
            {/* Circles */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 bg-white"></div>
              <div className="w-4 h-4 rounded-full border border-white"></div>
            </div>

            {/* Card Number */}
            <div className="text-lg tracking-widest">{cardNumber}</div>

            {/* Card Footer */}
            <div className="flex justify-between text-sm font-semibold">
              <span>{name}</span>
              <span>
                {month}/{year}
              </span>
            </div>
          </div>
        </div>

        {/* FORM PART - WITH ZOD*/}
        <div className="mt-34 flex-[2] h-screen bg-white min-[1280px]:flex-[2] min-[1280px]:mt-0 min-[1280px]:flex min-[1280px]:items-center min-[1280px]:justify-center">
          {isSubmitSuccessful ? (
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <div className="w-15 h-15 rounded-full bg-gradient-to-b flex item-center justify-center" style={{ backgroundImage: "linear-gradient(to bottom, #6040ee, #6317b3)" }}>
                <Check className="w-8 h-8 text-white m-auto mt-3" />
              </div>
              <h1 className="font-bold tracking-[0.05em] text-3xl text-[#200a2e]" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>THANK YOU!</h1>
              <p className="text-[1.2rem] tracking-[0.05em] opacity-[0.8]">We&apos;ve added your card details</p>
              <button type="button" onClick={() => reset()} className="w-[88%] lg:w-full bg-[#200a2e] text-white py-3 mt-2 rounded-md font-semibold hover:bg-gray-800 transition cursor-pointer mt-6">Continue</button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-md mx-auto p-6 bg-white rounded-md space-y-4"
            >
              {/* Cardholder Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold tracking-widest text-gray-700 mb-1"
                >
                  CARDHOLDER NAME
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  placeholder="e.g. Jane Appleseed"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                {errors.name && (
                  <div className="text-red-400">{errors.name.message}</div>
                )}
              </div>

              {/* Card Number */}
              <div>
                <label
                  htmlFor="cardNumber"
                  className="block text-xs font-semibold tracking-widest text-gray-700 mb-1"
                >
                  CARD NUMBER
                </label>
                <input
                  {...register("cardNumber")}
                  type="text"
                  id="cardNumber"
                  placeholder="e.g. 1234 5678 9123 0000"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                {errors.cardNumber && (
                  <div className="text-red-400">
                    {errors.cardNumber.message}
                  </div>
                )}
              </div>

              {/* Exp Date and CVC */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-xs font-semibold tracking-widest text-gray-700 mb-1">
                    EXP. DATE (MM/YY)
                  </label>
                  <div className="flex gap-2">
                    <input
                      {...register("month")}
                      type="text"
                      placeholder="MM"
                      className="w-full border border-gray-300 rounded-md px-2 py-2 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <input
                      {...register("year")}
                      type="text"
                      placeholder="YY"
                      className="w-full border border-gray-300 rounded-md px-2 py-2 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                  {errors.month && (
                    <div className="text-red-400">{errors.month.message}</div>
                  )}
                  {errors.year && (
                    <div className="text-red-400">{errors.year.message}</div>
                  )}
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="cvv"
                    className="block text-xs font-semibold tracking-widest text-gray-700 mb-1"
                  >
                    CVC
                  </label>
                  <input
                    {...register("cvv")}
                    type="text"
                    id="cvv"
                    placeholder="e.g. 123"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  {errors.cvv && (
                    <div className="text-red-400">{errors.cvv.message}</div>
                  )}
                </div>
              </div>

              {/* Confirm Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-[#200a2e] text-white py-3 mt-2 rounded-md font-semibold hover:bg-gray-800 transition cursor-pointer"
              >
                {isSubmitting ? "Submitting..." : "Confirm"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

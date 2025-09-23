"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [currency, setCurrency] = useState("USD");

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/* Блок выбора валюты */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <label htmlFor="currency" className="text-sm font-semibold">
            Выберите валюту:
          </label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="px-4 py-2 border rounded-md bg-white text-black"
          >
            <option value="KZT">₸ KZT (тенге)</option>
            <option value="USD">$ USD (доллар)</option>
            <option value="EUR">€ EUR (евро)</option>
            <option value="RUB">₽ RUB (рубль)</option>
          </select>
          <p className="mt-2 text-gray-300">
            Текущая выбранная валюта: <span className="font-bold">{currency}</span>
          </p>
        </div>

        {/* Остальной код */}
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
      </main>
    </div>
  );
}

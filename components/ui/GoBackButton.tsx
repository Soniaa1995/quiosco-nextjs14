"use client"

import { useRouter } from "next/navigation";

export default function GoBackButton() {
    const router = useRouter()
  return (
    <button
        onClick={() => router.back()}
        className="bg-amber-400 font-bold w-full lg:w-auto text-xl px-10 py-3 text-center"
    >
        Volver
    </button>
  )
}

"use client"

import Image from "next/image"


export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div className="w-full h-[500px] flex flex-col justify-center items-center">
            <Image src="/loading.gif" alt="loading" width={100} height={100} />
        </div>
    )
}
"use client"

import Image from "next/image"


export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div className="w-full h-[500px] flex flex-col justify-center items-center">
            <Image
                src="/loading.gif"
                alt="loading"
                width={100}
                height={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 />
        </div>
    )
}
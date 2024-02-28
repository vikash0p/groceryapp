import Image from 'next/image'
import React from 'react'

export default function AboutHeader() {
    return (
        <div className='max-w-7xl'>
            {/*section 1 about topbar section with image and text */}
            <div className="mt-4 flex flex-col lg:mt-0 lg:flex-row gap-4 lg:gap-0 justify-between items-center ">
                <div className="flex-1">
                    <Image
                        src={"/about/about-1.png"}
                        alt='aboutImageHeader'
                        width={500}
                        height={500}
                        className='max-w-sm  lg:max-w-3xl max-h-[800px] rounded-lg h-500px object-contain'
                        sizes="(min-width: 1040px) 500px, 384px"
                        priority
                    />
                </div>
                <div className="flex-1 flex gap-5  flex-col justify-center  px-2 lg:px-0 ">
                    <h1 className="text-4xl font-bold">Welcome to Nest</h1>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
                    <p className="text-gray-600">
                        Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
                    </p>
                </div>
            </div>

            {/*section 2 about the provider */}
            <div className=" mt-10 py-8">
                <div className="flex flex-col  items-center">
                    <h1 className="text-4xl font-bold ">What we Provide?</h1>
                    <Image
                        alt='wave'
                        src={"/about/wave.png"}
                        width={150}
                        height={30}
                        sizes="150px"
                        priority                 />
                </div>
            </div>

            {/* section 3 your partner for e-commerce grocery solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 py-6">
                <div className="">
                    <Image
                        src={"/about/about-5.png"}
                        alt='aboutImage'
                        width={400}
                        height={500}
                        className='w-[620px] h-[437px] object-contain'
                        sizes="(min-width: 1340px) 620px, (min-width: 1040px) calc(35.71vw + 149px), (min-width: 660px) 620px, (min-width: 420px) calc(90.91vw + 38px), calc(16vw + 336px)"
                        priority
                    />

                </div>
                <div className="flex flex-col gap-5 justify-center">
                    <h5 className="text-2xl text-gray-400">Our performance</h5>
                    <h1 className="text-4xl">Your Partner for e-commerce grocery solution</h1>
                    <p className='text-gray-600'>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                    <p className='text-gray-600'>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
                </div>
            </div>
        </div>
    )
}

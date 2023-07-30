import Link from 'next/link'
import React from 'react'

type TrendingCardProps = {
  className?: string;
}

const TrendingCard = ({className}: TrendingCardProps) => {
  return (
    <Link
    className={`${className} sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
    // href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
    href="/"
    >
      <div className='z-0 relative w-full h-full bg-wh-500'>
        image
       </div>
       <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual" />
      <div className="absolute z-2 bottom-0 left-0 p-3">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
          {/* {post?.category} */}
          Category
        </h4>
        <div className="text-wh-100 mt-2">
          {/* {post?.title} */}
          Blog Title
          </div>
      </div>
    </Link>
  )
}

type Props = {}

const Trending = (props: Props) => {
  return (
    <section className='pt-3 pb-10'>
      <div className="flex items-center  gap-3">
        <div className='bg-wh-900 py-2 px-8 text-sm font-bold text-wh-10'>
          TRENDING
        </div>
        <p className='text-sm'>Check out hot topics on AI and Tech.</p>
      </div>

      {/* Flex Version  */}
      {/* <div className="flex justify-between gap-3 my-3">
        <TrendingCard className='basis-1/2 bg-wh-500 h-96'></TrendingCard>
        <div className='flex flex-col basis-1/2 gap-3 h-96'>
          <TrendingCard className='basis-1/2 bg-wh-500 '></TrendingCard>
          <div className='flex basis-1/2 gap-3'>
            <TrendingCard className='basis-1/2 bg-wh-500'></TrendingCard>
            <TrendingCard className='basis-1/2 bg-wh-500'></TrendingCard>

          </div>
        </div>

      </div> */}

        {/* grid option */}
        <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
        <TrendingCard
          className="col-span-2 row-span-2 bg-wh-500"
     
        />
        <TrendingCard
          className="col-span-2 row-span-1 bg-wh-500"
      
        />
        <TrendingCard
          className="col-span-1 row-span-1 bg-wh-500"
  
        />
        <TrendingCard
          className="col-span-1 row-span-1 bg-wh-500"
         
        />
      </div>
      <p className='test-sm'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

    </section>
  )
}

export default Trending
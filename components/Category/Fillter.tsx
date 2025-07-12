'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'

const arr = ['dunk', 'city', 'af1', 'mercurial', 'v2k', 'vomero']

interface FilterProps {
  category?: string;
}

const Fillter = ({ category }: FilterProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleClick = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (value === category) {
      params.delete('category')
    } else {
      params.set('category', value)
    }

    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="!my-[20px]">
      <div className="flex gap-3 justify-center flex-wrap">
        {arr.map((item, i) => (
          <button
            key={i}
            onClick={() => handleClick(item)}
            className={`!px-[20px] !py-[7px] rounded-[20px] font-bold transition ${
              category === item
                ? 'bg-gradient-to-r from-black to-red-600 text-white'
                : 'bg-gradient-to-r from-[#9e9e9e] to-white text-black'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="w-full h-[2px] bg-[#c9c9c9] !mt-[10px]" />
    </div>
  )
}

export default Fillter

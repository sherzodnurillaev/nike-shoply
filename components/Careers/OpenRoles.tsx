'use client'

import Image from "next/image"
import { useState } from "react"

type Role = {
  id: number
  title: string
  img: string
  description: string
}

const roles: Role[] = [
  {
    id: 1,
    img: "/Rols/tester.webp",
    title: "QA Tester",
    description: "Responsible for ensuring the quality of web applications through manual and automated testing. You will identify bugs, improve performance, and collaborate closely with developers."
  },
  {
    id: 2,
    img: "/Rols/frontend.webp",
    title: "Frontend Developer",
    description: "Join our team to build responsive and dynamic user interfaces using React and Next.js. We're looking for someone who loves clean code and cares about user experience."
  },
  {
    id: 3,
    img: "/Rols/design.webp",
    title: "UI/UX Designer",
    description: "Design intuitive and engaging user experiences from wireframes to final visuals. You'll work closely with developers to ensure design consistency across all platforms."
  },
]


const OpenRoles = ({ onApply }: { onApply: () => void }) => {
  if (roles.length === 0) return null

  return (
    <section className="relative !mt-10 !px-4 !mx-auto">
      <h3 className="text-2xl font-bold !mb-6">Open Roles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-between gap-10">
        {roles.map(role => (
          <div
            key={role.id}
            className="relative border !pb-4 rounded-lg h-[380px] md:h-[400px] shadow-sm bg-white sm:flex-row"
          >
            <Image src={role.img} className="rounded-t-[8px] h-[200px] w-full object-cover object-center" width={700} height={700} alt="photo" />
            <div className="!px-[20px] text-left">
              <h4 className="text-lg text-black text-left font-semibold">{role.title}</h4>
              <p className="text-[13px] text-gray-600">{role.description}</p>
            </div>
            <button
              onClick={onApply}
              className="!mt-3 absolute left-1/2 -translate-x-1/2 bottom-[10px] sm:!mt-0 bg-black text-white !px-4 !py-2 rounded hover:bg-gray-800 transition"
            >
              Apply
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OpenRoles

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, RegionIcon, ProfilingIcon } from './icons'

const navigationItems = [
  {
    name: 'Home',
    href: '/',
    icon: HomeIcon
  },
  {
    name: 'Region Snapshot',
    href: '/region-snapshot',
    icon: RegionIcon
  },
  {
    name: 'Profiling',
    href: '/profiling',
    icon: ProfilingIcon
  }
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <nav className="w-[68px] bg-[#F4F4F4] border-r border-[#E9E9E9] flex flex-col fixed left-0 top-[48px] bottom-0">
      <div className="flex-1">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`relative flex flex-col items-center justify-center h-[68px] text-[10px] transition-colors
                ${isActive 
                  ? 'text-[#1175B5] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-[#1175B5]' 
                  : 'text-[#706F6D] hover:text-[#1175B5]'}`}
            >
              <div className="mb-1">
                <item.icon filled={isActive} />
              </div>
              <span className="text-center whitespace-pre-line leading-tight">{item.name}</span>
            </Link>
          )
        })}
      </div>
      <div className="p-2 text-center">
        <span className="text-[8px] text-[#706F6D]">V2.0.0</span>
      </div>
    </nav>
  )
}


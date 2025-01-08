'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowUp } from 'lucide-react'

export default function HomeScreen() {
const [input, setInput] = useState('')

const suggestions = [
  {
    title: "I want to understand how to acquire more customers",
    subtitle: "Explore customer acquisition strategies"
  },
  {
    title: "I need help me put together my marketing plan",
    subtitle: "Get marketing planning assistance"
  },
  {
    title: "I need more facts for a lease negotiation",
    subtitle: "Access lease negotiation data"
  }
]

return (
  <div className="min-h-screen bg-[#ffffff] px-6 py-16">
    <h1 className="text-[40px] leading-[48px] font-bold text-center max-w-[800px] mx-auto mb-24 text-[#1e1e1e]">
      Powerful consumer insights, now with AI assistance to help you grow
    </h1>
    
    <div className="max-w-[800px] mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-full bg-[#f4f4f4] flex items-center justify-center flex-shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_29_1473" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="#d9d9d9"/>
            </mask>
            <g mask="url(#mask0_29_1473)">
              <path d="M22 22L18 18H4C3.45 18 2.97917 17.8042 2.5875 17.4125C2.19583 17.0208 2 16.55 2 16V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V22ZM4 16H18.85L20 17.125V4H4V16Z" fill="#1e1e1e"/>
            </g>
          </svg>
        </div>
        <div>
          <h2 className="text-[24px] leading-[28px] font-semibold mb-1 text-[#1e1e1e]">CBAiQ Agent</h2>
          <p className="text-[16px] leading-[20px] text-[#706f6d]">24/7 expertise at your fingertips</p>
        </div>
      </div>

      <div className="relative mb-6">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything about your customers..."
          className="w-full h-[48px] bg-[#f4f4f4] border border-[#e9e9e9] text-[#1e1e1e] placeholder:text-[#706f6d] px-6 pr-16 rounded-full text-[16px] focus:outline-none focus:ring-0 focus:border-[#e9e9e9] [appearance:none] [-webkit-appearance:none]"
          style={{ outline: 'none' }}
        />
        <Button 
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1e1e1e] text-[#ffffff] hover:bg-[#1e1e1e]/90 rounded-full w-9 h-9 p-0"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>

      <div>
        <p className="text-[14px] leading-[20px] text-[#706f6d] mb-2 font-medium px-6">Suggested</p>
        <div className="flex flex-col gap-1">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => setInput(suggestion.title)}
              className="flex items-center justify-between w-full text-[#1e1e1e] px-6 py-3 text-left group hover:bg-[#f4f4f4] rounded-lg transition-colors"
            >
              <div className="flex flex-col">
                <span className="text-[16px] leading-[24px] font-medium">{suggestion.title}</span>
                <span className="text-[14px] leading-[20px] text-[#706f6d]">{suggestion.subtitle}</span>
              </div>
              <svg 
                className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-4"
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.99228 17.7115L4.87207 16.5913L11.4633 10L4.87207 3.40878L5.99228 2.28857L13.7037 10L5.99228 17.7115Z" fill="#706f6d"/>
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
)
}


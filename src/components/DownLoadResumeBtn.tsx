import { cn } from '@/lib/utils'
import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import HackerBtn from './HackerBtn'

function DownLoadResumeBtn() {
  return (
    <div className="h-fit mt-[-5px] w-full py-2 px-4">
    <HackerBtn label='Try Free Class' />
  </div>
  )
}

export default DownLoadResumeBtn
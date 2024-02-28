import { clsxm } from '@/utils'

interface StatusPros {
  status: string
  className?: string
}

export const Status = ({ status, className }: StatusPros) => {
  return <div className={clsxm(className)}>{status}</div>
}

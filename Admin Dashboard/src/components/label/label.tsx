import { clsxm } from '@/utils'

interface ILabelProps {
  id?: string
  className?: string
  children: React.ReactNode
}

export const Label = ({ children, className, id }: ILabelProps) => {
  return (
    <label htmlFor={id} className={clsxm(`text-sm font-semibold`, className)}>
      {children}
    </label>
  )
}

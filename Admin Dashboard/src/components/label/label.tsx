import { clsxm } from '@/utils'

interface ILabelProps {
  htmlFor?: string
  className?: string
  children: React.ReactNode
}

export const Label = ({ children, className, htmlFor }: ILabelProps) => {
  return (
    <label htmlFor={htmlFor} className={clsxm(`text-xl text-primary font-medium`, className)}>
      {children}
    </label>
  )
}

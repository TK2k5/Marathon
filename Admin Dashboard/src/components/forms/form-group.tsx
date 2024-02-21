import { clsxm } from '@/utils'

interface IFormGroupProps {
  children: React.ReactNode
  className?: string
}

export const FormGroup = ({ children, className }: IFormGroupProps) => {
  return <div className={clsxm(`flex flex-col gap-2`, className)}>{children}</div>
}

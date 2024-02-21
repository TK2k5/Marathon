import { EButtonVariant } from '@/types'
import { Link } from 'react-router-dom'
import { clsxm } from '@/utils'

interface IButtonProps {
  children: React.ReactNode
  className?: string
  variant?: EButtonVariant
  icon?: React.ReactNode
  href?: string
}

export const Button = ({ children, className, variant, icon, href }: IButtonProps) => {
  if (href) {
    return (
      <Link
        to={href}
        className={clsxm(
          `font-semibold py-3 rounded-md w-full`,
          { 'bg-primary text-white': variant === EButtonVariant.PRIMARY },
          { 'bg-gray-l10 text-white': variant === EButtonVariant.SECONDARY },
          { 'bg-gray text-white': variant === EButtonVariant.TERTIARY },
          { 'bg-yellow text-white': variant === EButtonVariant.DANGER },
          { 'bg-blu text-white': variant === EButtonVariant.SUCCESS },
          { 'flex items-center gap-2 justify-center': icon },
          { 'flex items-center justify-center': href },
          className
        )}
      >
        {icon && icon} {children}
      </Link>
    )
  }

  return (
    <button
      className={clsxm(
        `font-semibold py-3 rounded-md w-full`,
        { 'bg-primary text-white': variant === EButtonVariant.PRIMARY },
        { 'bg-gray-l10 text-white': variant === EButtonVariant.SECONDARY },
        { 'bg-gray text-white': variant === EButtonVariant.TERTIARY },
        { 'bg-yellow text-white': variant === EButtonVariant.DANGER },
        { 'bg-blu text-white': variant === EButtonVariant.SUCCESS },
        { 'flex items-center gap-2 justify-center': icon },
        className
      )}
    >
      {icon && icon} {children}
    </button>
  )
}

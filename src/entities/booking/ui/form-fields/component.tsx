type Props = {
  children: React.ReactNode
}

export function FormFields({ children }: Props) {
  return <div className="flex flex-row items-center space-x-2">{children}</div>
}

interface CareerItemListProps {
  title: string
  children: React.ReactNode
}

export default function CareerItemList({
  title,
  children,
}: CareerItemListProps) {
  return (
    <div className="flex flex-col gap-8 border-b-2 border-gray-800 pb-8 dark:border-white">
      <h2>{title}</h2>
      <div className="flex flex-col gap-8">{children}</div>
    </div>
  )
}

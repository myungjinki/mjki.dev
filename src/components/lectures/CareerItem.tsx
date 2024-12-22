import Image from "next/image"

import { AnimationLink } from "@/components/common/Link/AnimationLink"

interface ContentItem {
  text: string
  link?: string
  content?: ContentItem[]
}

interface CareerItemProps {
  title: string
  image: string
  homepage: string
  content?: ContentItem[]
  date: string
}

export default function CareerItem({
  title,
  image,
  homepage,
  content,
  date,
}: CareerItemProps) {
  const renderNestedContent = (items: ContentItem[]) => {
    return items.map((item, index) => (
      <li key={index} className="mb-2">
        {item.text}
        {item.link && (
          <>
            <span>&nbsp;</span>
            <AnimationLink className="font-bold" href={item.link}>
              (Link)
            </AnimationLink>
          </>
        )}
        {item.content && item.content.length > 0 && (
          <ul className="mt-2 list-disc pl-5">
            {renderNestedContent(item.content)}
          </ul>
        )}
      </li>
    ))
  }

  return (
    <div className="grid grid-cols-4 items-start gap-2">
      <Image
        className="col-span-1 size-16 self-center justify-self-center p-1 lg:row-span-2 lg:size-24 lg:self-start"
        src={image}
        alt={title}
        width={128}
        height={128}
      />
      <div className="col-span-3 place-self-center justify-self-start lg:row-span-1">
        <div>
          <h3>
            <AnimationLink href={homepage}>{title}</AnimationLink>
          </h3>
          <h6>{date}</h6>
        </div>
      </div>
      {content && (
        <div className="col-span-4 lg:col-start-2 lg:col-end-5">
          <ul className="list-disc pl-5">{renderNestedContent(content)}</ul>
        </div>
      )}
    </div>
  )
}

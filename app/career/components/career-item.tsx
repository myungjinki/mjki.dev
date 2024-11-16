import { AnimationLink } from "@/app/components/animation-link";
import Image from "next/image";

interface ContentItem {
  text: string;
  link?: string;
  content?: ContentItem[];
}

interface CareerItemProps {
  title: string;
  image: string;
  homepage: string;
  content?: ContentItem[];
  date: string;
}

export default function CareerItem({ title, image, homepage, content, date }: CareerItemProps) {
  const renderNestedContent = (items: ContentItem[]) => {
    return items.map((item, index) => (
      <li key={index} className="mb-2">
        {item.text}
        {item.link && (
          <>
            <span>&nbsp;&nbsp;</span>
            <AnimationLink href={item.link}>(Link)</AnimationLink>
          </>
        )}
        {item.content && item.content.length > 0 && (
          <ul className="pl-5 mt-2 list-disc">{renderNestedContent(item.content)}</ul>
        )}
      </li>
    ));
  };

  return (
    <div className="grid items-start grid-cols-4 gap-2">
      <Image
        className="self-center w-16 h-16 col-span-1 p-1 lg:self-start lg:w-24 lg:h-24 lg:row-span-2 justify-self-center"
        src={image}
        alt={title}
        width={128}
        height={128}
      />
      <div className="col-span-3 justify-self-start place-self-center lg:row-span-1">
        <div>
          <h3>
            <AnimationLink href={homepage}>{title}</AnimationLink>
          </h3>
          <h6>{date}</h6>
        </div>
      </div>
      {content && (
        <div className="col-span-4 lg:col-start-2 lg:col-end-5">
          <ul className="pl-5 list-disc">{renderNestedContent(content)}</ul>
        </div>
      )}
    </div>
  );
}

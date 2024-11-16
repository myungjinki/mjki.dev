import { AnimationLink } from "@/app/components/animation-link";
import Image from "next/image";

interface CareerItemProps {
  title: string;
  image: string;
  content?: {
    text: string;
    link?: string;
    content?: { text: string; link?: string }[];
  }[];
  date: string;
}

export default function CareerItem({ title, image, content, date }: CareerItemProps) {
  const renderContent = (items: { text: string; link?: string; content?: { text: string; link?: string }[] }[]) => {
    return items.map((item, index) => (
      <li key={index}>
        {item.text}
        {item.link && (
          <>
            <span>&nbsp;&nbsp;</span>
            <AnimationLink href={item.link}>(Link)</AnimationLink>
          </>
        )}
        {item.content && item.content.length > 0 && (
          <ul>
            {item.content.map((subItem, subIndex) => (
              <li key={subIndex}>
                {subItem.text}
                {subItem.link && (
                  <>
                    <span>&nbsp;&nbsp;</span>
                    <AnimationLink href={subItem.link}>(Link)</AnimationLink>
                  </>
                )}
              </li>
            ))}
          </ul>
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
          <h3>{title}</h3>
          <h6>{date}</h6>
        </div>
      </div>
      {content && (
        <div className="col-span-4 lg:col-start-2 lg:col-end-5">
          <ul>{renderContent(content)}</ul>
        </div>
      )}
    </div>
  );
}

import CareerItem from "./components/career-item";
import CareerItemList from "./components/career-item-list";

export default function LecturesPage() {
  return (
    <div className="flex flex-col gap-8">
      <CareerItemList title="Scratch">
        <CareerItem
          date=""
          image="./svg/scratch.svg"
          homepage="./lectures/scratch"
          title="Scratch"
          content={[
            {
              text: "스크래치 강의 자료입니다.",
            },
          ]}
        />
      </CareerItemList>
    </div>
  );
}

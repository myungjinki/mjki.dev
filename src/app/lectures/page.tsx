import CareerItem from "@/components/lectures/CareerItem"
import CareerItemList from "@/components/lectures/CareerItemList"

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
              text: "Scratch Lectures",
            },
          ]}
        />
      </CareerItemList>
    </div>
  )
}

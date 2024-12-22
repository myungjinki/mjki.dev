import CareerItem from "@/components/careers/CareerItem"
import CareerItemList from "@/components/careers/CareerItemList"
import { careers } from "@/utils/careers"

export default function CareerPage() {
  return (
    <div className="flex flex-col gap-8">
      <CareerItemList title="Work">
        <CareerItem {...careers.experience.ssi} />
        <CareerItem {...careers.experience.aligoai} />
        <CareerItem {...careers.experience.linecorp} />
      </CareerItemList>
      <CareerItemList title="Education">
        <CareerItem {...careers.education.ftseoul} />
        <CareerItem {...careers.education.university} />
        <CareerItem {...careers.education.highschool} />
      </CareerItemList>
    </div>
  )
}

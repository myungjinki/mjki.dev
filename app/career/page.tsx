import CareerItem from "./components/career-item";
import CareerItemList from "./components/career-item-list";
import { university } from "./utils/objects";

export default function CareerPage() {
  return (
    <div className="flex flex-col gap-8">
      <CareerItemList title="Education">
        <CareerItem {...university} />
      </CareerItemList>
    </div>
  );
}

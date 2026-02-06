import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";

const LABEL_CLASS = "text-xs font-medium text-muted-foreground uppercase tracking-wider";
const CHECKBOX_CLASS = "rounded border-0 data-[state=checked]:bg-primary";

export default function FilterCheckboxGroup<T extends string>({
  label,
  items,
  selected,
  onToggle,
  idPrefix,
}: {
  label: string;
  items: T[];
  selected: T[];
  onToggle: (item: T, checked: boolean) => void;
  idPrefix: string;
}) {
  return (
    <div className="space-y-2">
      <Label className={LABEL_CLASS}>{label}</Label>
      <ScrollArea className="h-36">
        <div className="space-y-2 pr-3">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Checkbox id={`${idPrefix}-${item}`} checked={selected.includes(item)} onCheckedChange={(checked) => onToggle(item, checked === true)} className={CHECKBOX_CLASS} />
              <Label htmlFor={`${idPrefix}-${item}`} className="text-sm cursor-pointer">{item}</Label>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

import { Button, ButtonProps } from "@hdc-ui/react/components";

export default function FilterButton({ children, ...props }: ButtonProps) {
  return (
    <Button className="w-8 h-8 p-2" size="sm" {...props}>
      <svg>
        <use href="#Outlined/Base/setting-config" />
      </svg>
    </Button>
  );
}

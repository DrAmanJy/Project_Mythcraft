import { useAction } from "../../../runtime/hooks/useAction";

export function SimpleButton({
  action,
  label,
}: {
  action?: string;
  label: string;
}) {
  const onClick = useAction(action);
  return <button onClick={onClick}>{label}</button>;
}

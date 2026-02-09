import { useAction } from "../../../runtime/hooks/useAction";
type SimpleCardType = {
  title: string;
  action?: string;
  children?: React.ReactNode;
};
export function SimpleCard({ title, action, children }: SimpleCardType) {
  const onClick = useAction(action);

  return (
    <div>
      <h2>{title}</h2>
      {children}
      {action && <button onClick={onClick}>Click</button>}
    </div>
  );
}

interface LabelProps {
  name: string;
  htmlFor: string;
}

export default function Label({ name, htmlFor }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="my-1 block text-sm font-medium capitalize"
    >
      {name}
    </label>
  );
}

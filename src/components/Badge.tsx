export default function Badge(props: { muscle: string }) {
  switch (props.muscle) {
    case "chest":
      return (
        <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
          <p className="whitespace-nowrap text-sm">Chest</p>
        </span>
      );
      break;

    default:
      return (
        <span className="inline-flex items-center justify-center rounded-full bg-red-100 px-2.5 py-0.5 text-emerald-700">
          <p className="whitespace-nowrap text-sm">Issue</p>
        </span>
      );
  }
}

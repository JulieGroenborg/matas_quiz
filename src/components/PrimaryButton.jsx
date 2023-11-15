export default function PrimaryButton(props) {
  return (
    <button className={`${props.width} ${props.bg} ${props.color} p-2 rounded m-2`} onClick={props.action}>
      {props.text}
    </button>
  );
}

import "./styles.css";

export default function ButtonEle(props) {
  const { title, color } = props;

  return (
    <>
      <button
        className="button"
        style={{
          background: color,
          borderColor: color
        }}
      >
        {title}
      </button>
    </>
  );
}

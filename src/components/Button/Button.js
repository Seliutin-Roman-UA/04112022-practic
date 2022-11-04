export function Button({ title, type, onClick=null }) {
    return (
      <button onClick={onClick} type={type}>
        {title}
      </button>
    );
}

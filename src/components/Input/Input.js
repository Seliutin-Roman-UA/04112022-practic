export function Input({ label, onChange, value }) {
  return (
    <label>
      {label}
      <input name={label} value={value} onChange={onChange} />
    </label>
  );
}

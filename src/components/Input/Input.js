

export function Input({ label,  onChange }) {
   
    return (
      <label>
        {label}
        <input onChange={onChange} />
      </label>
    );
}
export default function InputElement({
  type,
  placeholder,
  name,
  value,
  onChange
}) {
  const handleChange = (event) => {
    onChange(event.target.value, event.target.name);
  };

  return (
    <input
      value={value}
      onChange={handleChange}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
}

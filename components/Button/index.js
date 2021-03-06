export const Button = ({ ...props }) => (
  <button
    {...props}
    className={`p-4 rounded-md bg-green ${props.disabled && 'opacity-50'}`}
  />
)

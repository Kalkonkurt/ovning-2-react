import type { ButtonProps } from '../types/button.types';

function Button({ text, onClick, style }: ButtonProps) {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
}
export default Button;

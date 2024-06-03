import { forwardRef } from "react";
import { Button, ButtonProps } from "./ui/button";
import { useFormStatus } from "react-dom";
import { Loader } from "lucide-react";

const SubmitButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    const { pending, action } = useFormStatus();

    const isPending = pending && action === props.formAction;

    return (
      <Button {...props} ref={ref} type="submit" disabled={isPending}>
        {isPending ? <Loader className="animate-spin" /> : children}
      </Button>
    );
  }
);

SubmitButton.displayName = "SubmitButton";

export default SubmitButton;

// const SubmitButton = forwardRef<HTMLButtonElement, ButtonProps>({ children, ...props }: Props) {
//   const { pending, action } = useFormStatus();

//   const isPending = pending && action === props.formAction;

//   return (
//     <Button
//       disabled={isPending}
//       formAction={props.formAction}
//       className={props.className}
//       variant={}
//     >
//       {isPending ? <Loader className="animate-spin" /> : children}
//     </Button>
//   );
// }

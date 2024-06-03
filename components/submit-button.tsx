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

import { Button } from "@/components/ui/button";

function ResendOTP() {
    return (
        <div className="flex items-center justify-center gap-1 text-sm pt-1">
            <span className="text-dark-gray">Didn't receive the code?</span>
            <Button
                type="button"
                variant="link"
                isNotImplemented
            >
                Resend Code
            </Button>
        </div>
    );
}

export default ResendOTP;
import { LinkButton } from "../../LinkButton/LinkButton";


function FormAction({ label, to, variant, children }) {
    return (
        <div className="flex items-center justify-between pt-1">
            <div>
                {children}
            </div>
            <LinkButton to={to} variant="link">
                {label}
            </LinkButton>
        </div>
    );
}

export default FormAction;
type PropsTypes = {
    error?: string;
    type?: string;
    children: React.ReactNode;
    isBlurred: boolean;
};

const Layout = ({error,type,children,isBlurred}:PropsTypes) => {
  return (
    <div
            className={`input-field-container ${
                error ? "input-field-container-error" : ""
            }`}
        >
            <div
                className={`input-field ${
                    type === "textarea" ? "textarea-field" : ""
                }`}
            >
                {children}
            </div>
            {error && isBlurred && <div className="error-text">{error}</div>}
        </div>
  )
}

export default Layout
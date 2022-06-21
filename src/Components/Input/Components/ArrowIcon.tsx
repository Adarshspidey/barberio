type PropsTypes = {
    arrow?: string;
    
};

const ArrowIcon = ({arrow}:PropsTypes) => {
  return (
    <div>
        <div className="arrow-right-line"></div>
        {arrow && (
            <div
                className="input-field-arrow"
                style={{
                    backgroundImage: `url(${arrow})`,
                }}
            ></div>
        )}
    </div>
  )
}

export default ArrowIcon
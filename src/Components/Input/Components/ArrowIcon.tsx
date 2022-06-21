type PropsTypes = {
    arrow?: string;
    
};

const ArrowIcon = ({arrow}:PropsTypes) => {
  return (
    <div>
        
        {arrow && (<div>
            <div className="arrow-right-line"></div>
            <div
                className="input-field-arrow"
                style={{
                    backgroundImage: `url(${arrow})`,
                }}
            ></div>
            </div>
        )}
    </div>
  )
}

export default ArrowIcon
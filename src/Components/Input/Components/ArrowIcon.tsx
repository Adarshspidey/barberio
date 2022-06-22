type PropsTypes = {
    arrow?: string;
    isLine?:boolean;
    
};

const ArrowIcon = ({arrow,isLine=false}:PropsTypes) => {
  return (
    <div>
        
        {arrow && (<div>
            {isLine && <div className="arrow-right-line"></div>}
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
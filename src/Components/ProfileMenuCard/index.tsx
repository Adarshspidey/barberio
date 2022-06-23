type PropsTypes = {
    icon?:string;
    title:string;
    arrow?:string;
    onClick: () => void;

    
};

const ProfileMenuCard = ({icon,title,arrow,onClick}:PropsTypes) => {
  return (
    <div className="profile-menu-card"
    onClick={onClick}>
        <div className="profile-card-items">
          {icon && <div ><img src={icon} alt="icon"  /></div>}
            
            <div className="profile-title">{title}</div>
        </div>
        {arrow && <div><img src={arrow} alt="arrow"  /></div>}
        
    </div>
  )
}

export default ProfileMenuCard
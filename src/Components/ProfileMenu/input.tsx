type PropsTypes = {
    icon:string;
    title:string;
    arrow:string;
    onClick: () => void;

    
};

const ProfileMenu = ({icon,title,arrow,onClick}:PropsTypes) => {
  return (
    <div className="profile-menu-card"
    onClick={onClick}>
        <div className="profile-card-items"
        >
            <div ><img src={icon} alt="icon"  /></div>
            <div className="profile-title">{title}</div>
        </div>
        <div><img src={arrow} alt="arrow"  /></div>
    </div>
  )
}

export default ProfileMenu
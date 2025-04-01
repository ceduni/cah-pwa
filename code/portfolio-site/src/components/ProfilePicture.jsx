function ProfilePicture({ pictureURL, fallbackText = "Photo de profil" }) {
    return (
        <img src={pictureURL} alt={fallbackText} className="profile-image" />
    )   
}


export default ProfilePicture;
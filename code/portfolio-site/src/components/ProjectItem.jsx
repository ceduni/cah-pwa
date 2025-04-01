export class ProjectItemModel {
    constructor(title, description, imageURL, linkURL, linkText) {
        this.title = title;
        this.description = description;
        this.imageURL = imageURL;
        this.linkURL = linkURL;
        this.linkText = linkText;
    }

    // Static method to create a user from an object
    static fromObject(obj) {
        return new ProjectItemModel(obj.title, obj.description, obj.imageURL, obj.linkURL, obj.linkText);
    }
}

/**
 * 
 * @param {ProjectItemModel} props 
 * @returns 
 */
export function ProjectItem(props) {
    const { title, description, imageURL, linkURL, linkText = "Lien vers projet" } = props;
    const imageAlt = 'Image de ' + title;

    return (
        <div className="work-item">
            <img src={imageURL} alt={imageAlt} className="work-image" />
            <div className="work-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={linkURL}>{linkText}</a>
            </div>
        </div>
    )
}
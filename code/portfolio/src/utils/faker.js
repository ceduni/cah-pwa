import { ProjectItemModel } from "../components/ProjectItem"

const ProjectData = [
    {
        title: "Application de gestion de tâches",
        description: "Développement d'une application mobile multiplateforme (iOS/Android) permettant aux utilisateurs de créer, organiser et suivre leurs tâches quotidiennes. L'application inclut des notifications push, une interface utilisateur fluide et un système de synchronisation avec le cloud pour un accès partout.",
        imageURL: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero_ToDo_960x615_2x_1_RE3HTxG?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain",
        linkURL: "#",
    },
    {
        title: "Application de suivi de fitness",
        description: "Conception d'une application dédiée au suivi des activités physiques et des objectifs de santé. Intégration de capteurs de smartphone pour mesurer les performances, suivi des progrès à travers des graphiques dynamiques et possibilité de partager les résultats avec des amis via les réseaux sociaux.",
        imageURL: "https://help.apple.com/assets/678AF3BDAED93ED9D1042F84/678AF3C89EC3C835220A70FE/en_US/e18f7ced108ea5db7034d3314925df2c.png",
        linkURL: "#",
    },
    {
        title: "Application de e-commerce",
        description: "Création d'une application mobile de e-commerce offrant une expérience d'achat personnalisée avec recommandations basées sur les préférences utilisateur. Intégration d'un système de paiement sécurisé et d'un suivi en temps réel des commandes, avec une interface intuitive et optimisée pour la vente mobile.",
        imageURL: "https://cdn.prod.website-files.com/63894f0e251e567f6e443bfa/673664ad7d4807debd0fca04_652033a42a44bf5bf252a0cd_20231006T0418-8f475758-44b3-4a29-853f-598ddf3416ce.png",
        linkURL: "#",
    }
]

export function getProjects() {
    return ProjectData.map(project => ProjectItemModel.fromObject(project));
}
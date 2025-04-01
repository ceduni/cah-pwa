import Section from "../components/Section";

function About() {
    return (
        <Section title="À propos de moi">
            <div className="about-content">
                <div>
                    <p>Bienvenue sur mon site personnel ! Je suis [votre profession] avec [X années] d'expérience, spécialisé dans [vos spécialisations]. Ma passion réside dans [ce qui vous motive professionnellement].</p>
                    <p>En dehors de ma vie professionnelle, j'apprécie [intérêts personnels ou loisirs]. Je crois que [philosophie personnelle ou approche du travail].</p>
                </div>
                <div>
                    <h3>Éducation</h3>
                    <p><strong>Nom du diplôme</strong> - Nom de l'établissement, Année</p>
                    <p><strong>Certification</strong> - Institution, Année</p>

                    <h3>Expérience</h3>
                    <p><strong>Titre</strong> - Nom de l'entreprise, Années</p>
                    <p><strong>Rôle précédent</strong> - Ancienne entreprise, Années</p>
                </div>
            </div>
        </Section>
    )
}

export default About;
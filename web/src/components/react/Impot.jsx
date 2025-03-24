import './assets/css/global.css';
import { useState } from "react";

export default function ImpotEligibility() {
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [revenu, setRevenu] = useState("");
    const [revenusEmploi, setRevenusEmploi] = useState(false);
    const [etudiant, setEtudiant] = useState(false);
    const [autresRevenus, setAutresRevenus] = useState(false);
    const [message, setMessage] = useState("");

    function verifierEligibilite() {
        if (!revenusEmploi && !etudiant && !autresRevenus) {
            setMessage("❌ Aucune donnée, veuillez sélectionner au moins un revenu.");
        } else if (revenusEmploi || etudiant) {
            setMessage("✅ Vous êtes éligible au service standard.");
        } else {
            setMessage("⚠️ Un traitement avancé pourrait être nécessaire.");
        }
    }

    const formulaireComplet = nom && email && revenu;

    return (
        <div>
            <h2>Éligibilité aux service d'impot</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    Nom
                    <input style={{border: "none", background: "#f0f0f0", padding: "6px", borderRadius: "4px"}} type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    Email
                    <input style={{border: "none", background: "#f0f0f0", padding: "6px", borderRadius: "4px"}} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    Revenu annuel
                    <input style={{border: "none", background: "#f0f0f0", padding: "6px", borderRadius: "4px"}} type="number" placeholder="Revenu annuel" value={revenu} onChange={(e) => setRevenu(e.target.value)} />
                </label>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h3>Situation durant l'annnée</h3>
                <label><input type="checkbox" checked={revenusEmploi} onChange={() => setRevenusEmploi(!revenusEmploi)} /> Revenus d'emploi</label>
                <label><input type="checkbox" checked={etudiant} onChange={() => setEtudiant(!etudiant)} /> Étudiant</label>
                <label><input type="checkbox" checked={autresRevenus} onChange={() => setAutresRevenus(!autresRevenus)} /> Autres revenus</label>
            </div>

            <button style={{display: "block", width: "240px", padding: "12px", margin: "0 auto", fontWeight: 'bold'}} disabled={!formulaireComplet} onClick={verifierEligibilite}>Vérifier l'éligibilité</button>

            {message && <p>{message}</p>}
        </div>
    );
}

function Contact() {
    return (
        <>
            <h2>Prenons contact!</h2>
            <p>Tu voudrais que je t'aide à réaliser ton prochain projet, n'hésiste pas à prendre contact!</p>
            <form>
                <div>
                    <label htmlFor="name">Nom</label>
                    <input id="name" type="text" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message"></textarea>
                </div>
            </form>
        </>
    )
}

export default Contact
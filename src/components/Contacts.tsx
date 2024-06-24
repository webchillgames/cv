export default function Contacts() {
    return (
        <>
            <h3 className="font-bold text-l">Связаться</h3>
            <ul>
                <li className="my-3"><a href='mailto:web.chill.games@gmail.com' className="flex justify-center border p-1 rounded">E-mail</a></li>
                <li className="my-3"><a className="flex justify-center border p-1 rounded" target="_blank" href='https://www.linkedin.com/in/anna-serova-556a6221a/'>LinkedIn</a></li>
                <li className="my-3"><a className="flex justify-center border p-1 rounded" target="_blank" href='https://github.com/webchillgames'>GitHub</a></li>
            </ul>
        </>
    )
}
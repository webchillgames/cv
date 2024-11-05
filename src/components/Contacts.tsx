export default function Contacts() {
    return (
        <>
            <h3 className="font-bold text-l">Связаться</h3>
            <ul>
                <li className="my-3"><a className="flex justify-center border p-1 rounded" target="_blank" href='https://github.com/webchillgames'>GitHub</a></li>

                <li className="my-3"><a href='mailto:ann.frontend.job@gmail.com' className="flex justify-center border p-1 rounded">E-mail</a></li>
                <li className="my-3"><a className="flex justify-center border p-1 rounded" target="_blank" href='https://www.linkedin.com/in/anna-serova-556a6221a/'>LinkedIn</a></li>
            </ul>

            <h3 className="font-bold text-l">Резюме на других платформах</h3>
            <ul>
                <li className="my-3"><a className="flex justify-center border p-1 rounded" target="_blank" href='https://tambov.hh.ru/resume/d3fd216eff0dc012310039ed1f6c344d694f61'>На hh.ru</a></li>
            </ul>
        </>
    )
}
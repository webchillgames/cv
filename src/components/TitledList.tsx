export default function TitledList({ list, title }: { list: string[], title: string }) {
    const elements = list.map((v, i) => <li key={i} className="my-2">{v}</li>)

    return (
        <>
            <h2 className="font-bold mb-2">{title}</h2>
            <ul className="list-disc pl-4">{elements}</ul>
        </>
    )
}
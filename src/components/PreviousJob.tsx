interface IJob {
    title: string,
    company: string,
    period: string,
    place: string,
    responsibilities: string[],
}

function listOfResponsibilities(responsibilities: string[]) {
    const list = responsibilities.map((r, i) => <li key={i} className="my-2">{r}</li>)
    return <ul className="list-disc pl-4">{list}</ul>
}

export default function PreviousJob({ job }: { job: IJob }) {
    return (
        <div className="my-4">
            <h3 className="font-bold mb-1 text-lg">{job.title}, {job.company}</h3>
            <p className="mb-1 text-stone-500">{job.period}</p>
            <p className="mb-3 text-stone-500">{job.place}</p>
            {listOfResponsibilities(job.responsibilities)}
           
        </div>
    )
}
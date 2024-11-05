interface IJob {
    title: string,
    company: string,
    period: IPeriod,
    place: string,
    responsibilities: string[],
}
interface IDate {
    month: number
    year: number
}

interface IPeriod {
    start: IDate
    end: IDate | null
}

function listOfResponsibilities(responsibilities: string[]) {
    const list = responsibilities.map((r, i) => <li key={i} className="my-1">{r}</li>)
    return <ul className="list-disc pl-5">{list}</ul>
}

function countMonth(period: IPeriod): String {
    const months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
    ];

    const start = new Date()
    const end = new Date()
    const today = new Date()

    start.setMonth(period.start.month)
    start.setFullYear(period.start.year)

    if (period.end) {
        end.setMonth(period.end.month)
        end.setFullYear(period.end.year)
    }

    const monthDiff = (d: Date) => (d.getFullYear() - start.getFullYear()) * 12 + (d.getMonth() - start.getMonth() + 1)
    const monthYear = (d: Date) => `${months[d.getMonth()]} ${d.getFullYear()}`
    const result = (diff: number): string => {
        if (diff < 12) {
            return `${diff} м.`
        }

        const years = Math.floor(diff / 12)
        const monthRemainder = diff - years * 12

        return `${years} г. ${monthRemainder} м.`
    }

    return `${monthYear(start)} - ${period.end ? monthYear(end) : 'по настоящее время'} (${period.end ? result(monthDiff(end)) : result(monthDiff(today))})`
}

export default function PreviousJob({ job }: { job: IJob }) {
    return (
        <div className="my-4">
            <h3 className="font-bold mb-1 text-lg"> {job.company} ({job.place})</h3>
            <p className="mb-1 text-stone-500">{countMonth(job.period)}</p>

            <p className="my-3">{job.title}</p>

            <p>Задачи:</p>

            {listOfResponsibilities(job.responsibilities)}
        </div>
    )
}
import About from "@/components/About"
import Contacts from "@/components/Contacts"
import DownloadCv from "@/components/DownloadCv"
import Header from "@/components/Header"
import PreviousJob from "@/components/PreviousJob"
import TitledList from "@/components/TitledList"

import { jobs, skills, additional, education } from "@/info"

function ListOfJobs() {
  return jobs.map((job, i) => <PreviousJob job={job} key={i} />)
}

export default function Home() {
  return (
    <>
      <main className="p-2 bg-slate-200 grid sm:grid-cols-3 gap-4">

        <div>
          <Header />
          <div className="bg-gradient-to-r to-green-400 from-blue-500 text-white rounded shadow-lg">
            <div className="p-2">
              <About />
              <Contacts />
              <DownloadCv />
            </div>

          </div>
        </div>

        <div className="sm:col-start-2 sm:col-end-4 grid gap-4">
          <div className="bg-white rounded p-2 shadow-lg">
            <h2 className="font-bold text-xl"> Опыт работы</h2>
            <ListOfJobs />
          </div>

          <div className="bg-white rounded p-2 shadow-lg">
            <TitledList list={skills} title="Навыки" />
          </div>

          <div className="bg-white rounded p-2 shadow-lg">
            <TitledList list={additional} title="Дополнительно" />
          </div>

          <div className="bg-white rounded p-2 shadow-lg">
            <TitledList list={education} title="Образование" />
          </div>

        </div>
      </main>
    </>
  );
}

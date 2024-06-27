export default function DownloadCv() {
    return (
        <>
            <h3 className="font-bold text-l mb-2 mt-5">Резюме в PDF формате</h3>
            <a href="serova_cv_frontend_dev.pdf" download="serova_cv_frontend_dev.pdf" className="flex justify-center border p-1 rounded">
                Скачать файл
            </a>
        </>
    )
}
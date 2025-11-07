import './EducationCard.css'

const EducationCard = ({education}) => (
    <div class="card">
        <div class="card-body">
            <div >
                <small>{education.startDate} - {education.endDate}</small>
            </div>
            <h5 class="card-title">{education?.degree ?? ''}</h5>
            <a href="https://example.org" target="_blank"><h6>{education?.institution ?? ''}</h6></a>
            <div class="py-1">Carga horária:<i><small> {education?.hours ?? ''}</small></i></div>
        </div>
    </div>
)

export default EducationCard

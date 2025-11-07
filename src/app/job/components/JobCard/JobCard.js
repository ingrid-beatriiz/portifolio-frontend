import './JobCard.css'

const JobCard = ({job}) => (
    <div class="card">
        <div class="card-body">
            <div >
                <small>{job.startDate} - {job.endDate}</small>
            </div>
            <h5 class="card-title">{job?.position ?? ''}</h5>
            <a href="https://example.org" target="_blank"><h6>{job?.company ?? ''}</h6></a>
        </div>
    </div>
)

export default JobCard

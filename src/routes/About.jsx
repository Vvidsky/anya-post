import './About.styles.css';
import not_match from '../assets/not_match.png'
import github_logo from '../assets/github.svg'

export default function About() {

  return (
    <div class="container">
        <div className="header">
            <h2 class="fw-light text-white">Meet the Team</h2>
        </div>
    <div class="row">
        {/* Team Member 1 */}
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow">
                <img class="card-img-top" width="100%" src={not_match} alt='member-1'/>
                <div class="card-body text-center">
                    <h5 class="card-title mb-0">CEO Kulawut Makkamoltham</h5>
                    <div class="card-text">Web Developer</div>
                </div>
                <div className='contact-me'>
                    {/*Contact */}
                    <p className='github-tag border-top'>
                        <img className='github-logo' src={github_logo} alt="github-logo"/>
                        <a className='github-name' href="https://github.com/Vvidsky" target="_blank" rel="noreferrer">Vvidsky</a>
                    </p>
                </div>
            </div>
        </div>
        {/* Team Member 1 */}
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow">
                <img class="card-img-top" width="100%" src={not_match} alt='member-2'/>
                <div class="card-body text-center">
                    <h5 class="card-title mb-0">Ariya Phengphon</h5>
                    <div class="card-text">Web Developer</div>
                </div>
                <div className='contact-me'>
                    {/*Contact */}
                    <p className='github-tag border-top'>
                        <img className='github-logo' src={github_logo} alt="github-logo"/>
                        <a className='github-name' href="https://github.com/ChanAndKlee" target="_blank" rel="noreferrer">ChanAndKlee</a>
                    </p>
                </div>
            </div>
        </div>
        {/* Team Member 3 */}
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow">
                <img class="card-img-top" width="100%" src={not_match} alt='member-3'/>
                <div class="card-body text-center">
                    <h5 class="card-title mb-0">Patiphan Chan</h5>
                    <div class="card-text">Web Developer</div>
                </div>
                <div className='contact-me'>
                    {/*Contact */}
                    <p className='github-tag border-top'>
                        <img className='github-logo' src={github_logo} alt="github-logo"/>
                        <a className='github-name' href="#" target="_blank" rel="noreferrer">Golf's Github</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

import genCommitMessage from '@/utils/commit-gen'
import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <p> Criado por Ingrid Beatriz &#169; {new Date().getFullYear()} </p>
    <h5> Commit aleatório feito no GitHub: {genCommitMessage()} </h5>
  </footer>
)

export default Footer

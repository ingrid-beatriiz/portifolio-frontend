import genCommitMessage from '@/utils/commit-gen'
import './Footer.css'

const comimtMessage = genCommitMessage();
const Footer = () => (
  <footer className='footer'>
    <p> Criado por Ingrid Beatriz &#169; {new Date().getFullYear()} </p>
    <p> Commit aleatório feito no Github: {comimtMessage} </p>
  </footer>
)

export default Footer

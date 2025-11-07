const header = {
  homepage: '.',
  title: 'IB.',
}

const about = {
  name: 'Ingrid',
  role: 'Estudante de Desenvolvimento de Software e Sistemas para Internet',
  picture: 'https://avatars.githubusercontent.com/u/108553706?v=4',

  description: 'Neste portfólio, você encontrará minha Experiência Acadêmica, Experiência Profissional e os Projetos Desenvolvidos, que demonstram meu aprendizado e evolução como desenvolvedor. Cada seção reflete o conhecimento adquirido e como o aplico em desafios práticos.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/ingrid-beatriiz',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Jogo da forca',
    description:
      'O jogo da forca é uma aplicação interativa onde os usuários tentam adivinhar uma palavra secreta, letra por letra, antes de esgotarem suas tentativas.',
    stack: ['Next.js', 'React', 'Vercel'],
    sourceCode: 'https://github.com/ingrid-beatriiz/jogo-forca',
    livePreview: 'https://jogo-forca-theta.vercel.app/',
    image: 'jogo-forca.png',
  },
  {
    name: 'Me',
    description:
      'Um site de apresentação usado na disciplina de Frontend',
    stack: ['Next.js', 'CSS', 'Vercel'],
    sourceCode: 'https://github.com/ingrid-beatriiz/me',
    livePreview: 'https://me-kappa-three.vercel.app/',
    image: 'me.png',
  },
  {
    name: 'Amigo secreto',
    description:
      'Este projeto é uma aplicação web simples para sortear o "amigo secreto". O objetivo principal é praticar e aprimorar a lógica de programação, usando JavaScript puro. O usuário pode adicionar nomes a uma lista e, em seguida, sortear aleatoriamente os pares de amigos secretos.',
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/ingrid-beatriiz/desafio-amigo-secreto',
    image: 'amigo-secreto.png',
  },

]

const stack = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Vercel',
  'Next.js',
  'Git',
]

const experience = {
  job: [{
    company: 'Hub de Inovação Banco Bradesco',
    position: 'Estágiaria em Desenvolvimento de Software em Java',
    startDate: 'Nov 2025',
    endDate: 'Dez 2026',
  }],
  education: [{
    institution: 'Cubos Academy',
    degree: 'Desenvolvimento de Software e Sistemas para Internet',
    startDate: 'Jun 2022',
    endDate: 'Mar 2023',
    hours: '900 horas',
  }]
}

export { header, about, projects, stack, experience }

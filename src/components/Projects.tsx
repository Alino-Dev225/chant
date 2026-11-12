import Title from "./Title"

import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import { Video } from "lucide-react";
import { CodeXml } from 'lucide-react';


const projects = [
    {
        id: 1,
        title: 'Plateforme E-commerce',
        description: 'Une plateforme e-commerce complète avec gestion des produits, panier d\'achat et paiement en ligne. Les utilisateurs peuvent parcourir les produits, ajouter des articles à leur panier et finaliser leurs achats en toute sécurité.',
        technologies: ['HTML/CSS', 'JavaScript', 'PHP'],
        demoLink: '#',
        repoLink: '#',
        image: img1,
    },
    {
        id: 2,
        title: 'Portfolio ',
        description: 'Un portfolio interactif pour présenter mes projets et compétences. Il met en avant mes réalisations, mes expériences et mes compétences techniques, offrant aux visiteurs une vue d\'ensemble de mon parcours professionnel.',
        technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
        demoLink: '#',
        repoLink: '#',
        image: img2,
    },
   {
        id: 3,
        title: 'Calculatrice scientifique',
        description: 'Une calculatrice scientifique avec une interface utilisateur intuitive et des fonctionnalités avancées pour les calculs mathématiques complexes.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        demoLink: 'https://alino-dev225.github.io/Calcuulatrice/',
        repoLink: '#',
        image: img3,
    },
   /*  {
        id: 4,
        title: 'Application de Chat en temps réel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['React', 'Socket.io', 'Express.js'],
        demoLink: '#',
        repoLink: '#',
        image: img4,
    },
    {
        id: 5,
        title: 'Système de réservation de salles',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['Next.js', 'MongoDB', 'Chakra UI'],
        demoLink: '#',
        repoLink: '#',
        image: img5,
    },
    {
        id: 6,
        title: 'Analyseur de sentiment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['Python', 'Flask', 'NLTK'],
        demoLink: '#',
        repoLink: '#',
        image: img6,
    },          */
];

const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projets" />
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl h-56 object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">{project.description}</p>

                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span className="badge badge-success badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex">
                            <a className="btn btn-primary w-2/3" href={project.demoLink}>
                                Demo
                                <Video className="w-4" />
                            </a>

                            <a className="btn btn-info w-1/3 ml-2" href={project.repoLink}>
                                Code
                                <CodeXml className="w-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
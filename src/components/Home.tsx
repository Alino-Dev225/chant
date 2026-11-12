import { Mail } from "lucide-react"
import img from '../assets/img.jpg'

const Home = () => {
    return (
        <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">

            <div className="flex flex-col ">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Bonjour , <br /> je suis {" "}
                    <span className="text-primary">Dadi Gbahi Alain</span>
                </h1>

                <p className="my-4 text-md text-center md:text-left">
                    Futur diplômé du BTS IDA, je recherche un stage de validation de diplôme de 3 mois ou plus. <br />
                    Formé au développement d'applications web (HTML, CSS, PHP, MySQL), je maîtrise les bases de la conception et de la gestion de base de données <br />Contactez-moi si vous avez besoin
                    de mes services.
                </p>
                <a href="#contactme" className=" btn btn-primary md:w-fit">
                    <Mail className="w-5 h-5" />
                    Contactez-moi
                </a>

            </div>

            <div className="flex justify-center items-center md:ml-10 mb-10 md:mb-0">
                <img src={img} alt="" className="w-96 h-96 shrink-0 object-cover border-8 border-primary shadow-xl" 
                style={{
                    borderRadius : "50% "
                }}
                />
            </div>
        </div>
    )
}

export default Home
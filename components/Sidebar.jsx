import Image from "next/image"
import useQuiosco from "@/hooks/useQuiosco"
import Categoria from "./Categoria"

const Sidebar = () => {
    const { categorias } = useQuiosco()
    return (
        <div className="bg-orange-100 h-screen">
            <div className="flex justify-center">
                <Image width={160} height={160} className="pt-2" src="/assets/img/logo.svg" alt="Imagen logotipo"/>
            </div>

            <nav className="mt-10">
                {categorias.map(categoria => <Categoria key={categoria.id} categoria={categoria} />)}
            </nav>
        </div>
    )
}

export default Sidebar
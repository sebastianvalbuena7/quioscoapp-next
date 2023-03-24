import Image from "next/image"
import { formatearDinero } from "@/helpers"
import useQuiosco from "@/hooks/useQuiosco"

const Producto = ({ producto }) => {
    const { handleSetProducto, handleChangeModal } = useQuiosco()
    const { nombre, imagen, precio } = producto
    return (
        <div className="p-3 bg-orange-100 shadow-xl rounded-md">
            <Image src={`/assets/img/${imagen}.jpg`} alt={nombre} width={400} height={500} />
            <div className="p-5">
                <h3 className="text-2xl font-bold h-14 md:h-24 lg:h-12">{nombre}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500 mb-4">{formatearDinero(precio)}</p>
                <button onClick={() => {
                    handleChangeModal()
                    handleSetProducto(producto)
                }} type="button" className="relative inline-flex items-center justify-center px-6 mt-5 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                    <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-amber-700 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-amber-200 rounded-md "></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-amber-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                    <span className="relative text-neutral-900 font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Agregar al carrito</span>
                </button>
            </div>
        </div>
    )
}

export default Producto
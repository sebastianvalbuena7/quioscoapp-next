import Layout from "@/layout/Layout"
import ResumenProducto from "@/components/ResumenProducto"
import useQuiosco from "@/hooks/useQuiosco"

const Resumen = () => {
    const { pedido } = useQuiosco()

    return (
        <Layout pagina={'Resumen'}>
            <h1 className="text-4xl font-black">Resumen</h1>
            <p className="text-2xl my-10">Revisa tu pedido</p>

            {pedido.length === 0 ? (
                <p className="text-center text-4xl font-bold">No hay elementos en tu pedido</p>
            ) : (
                pedido.map(producto => <ResumenProducto key={producto.id} producto={producto}/>)
            )}
        </Layout>
    )
}

export default Resumen
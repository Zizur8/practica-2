
export const SecondComponent = ({bienvenida, titulo}: {bienvenida: string, titulo: number}) => {
    return (
        <div>
            <h1>{bienvenida}</h1>
            <h2>{titulo}</h2>
        </div>
    )
}
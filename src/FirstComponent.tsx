interface EstudianteProps{
    bienvenida: string;
    titulo: number;
}


export const FirstComponent = ({bienvenida, titulo}: EstudianteProps) => {
    return (
        <div>
            <h1>{bienvenida}</h1>
            <h2>{titulo}</h2>
        </div>
    )
}

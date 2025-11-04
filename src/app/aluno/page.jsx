import { verificarAcesso } from "@/libs/auth";

export default async function AlunoPage() {
    await verificarAcesso(['aluno']);
    return (
        <div>
            <h1>Pagina do Aluno</h1>
        </div>
    )
}
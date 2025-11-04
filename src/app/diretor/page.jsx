import { verificarAcesso } from "@/libs/auth";

export default async function DiretorPage() {
    await verificarAcesso(['diretor']);
    return (
        <div>
            <h1>Pagina do Diretor</h1>
        </div>
    )
}
import { verificarAcesso } from "@/libs/auth";

export default async function ProfessorPage() {
    await verificarAcesso(['professor']);
    return (
        <div>
            <h1>Pagina do Professor</h1>
        </div>
    )
}
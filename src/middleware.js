import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define rotas públicas (não exigem login)
const isPublicRoute = createRouteMatcher(['/']);

// Middleware para proteger rotas privadas
export default clerkMiddleware(async (auth, req) => {
  // Se a rota não for pública, protege com autenticação
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});


/* Ou sem papeis - delete linha 3 a 12
export default clerkMiddleware({
  publicRoutes: ['/'], // mantém a página inicial pública (login)
});
*/

export const config = {
  matcher: [
    // Aplica o middleware em todas as rotas, exceto assets estáticos
    // Assets estáticos são arquivos como imagens, scripts, estilos, etc.
    // Isto serve para evitar que o middleware interfira na entrega desses arquivos
    // Evita Next.js internos e todos os arquivos estáticos, a menos que encontrados nos parâmetros de busca
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Sempre executa para rotas de API
    '/(api|trpc)(.*)',
  ],
};

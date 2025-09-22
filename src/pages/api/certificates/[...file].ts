import type { APIRoute } from 'astro';
import { readFileSync } from 'fs';
import { join } from 'path';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  try {
    const filePath = params.file;
    if (!filePath) {
      return new Response('File not found', { status: 404 });
    }

    // Construir la ruta completa al archivo
    const fullPath = join(process.cwd(), 'src', 'assets', 'certificates', filePath);
    
    // Leer el archivo
    const file = readFileSync(fullPath);
    
    // Determinar el tipo de contenido
    let contentType = 'application/octet-stream';
    if (filePath.endsWith('.pdf')) {
      contentType = 'application/pdf';
    }
    
    return new Response(file, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `inline; filename="${filePath}"`,
      },
    });
  } catch (error) {
    console.error('Error serving certificate:', error);
    return new Response('File not found', { status: 404 });
  }
};
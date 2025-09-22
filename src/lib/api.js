// Configuración de la API Laravel
export const API_CONFIG = {
  baseURL: 'http://localhost:8000/api',
  endpoints: {
    educacion: '/curriculum/educacion',
    experiencia: '/curriculum/experiencia',
    habilidades: '/curriculum/habilidades',
    historia: '/curriculum/historia',
    idiomas: '/curriculum/idiomas',
    contacto: '/curriculum/contacto',
    certificaciones: '/curriculum/certificaciones',
    curriculumCompleto: '/curriculum/completo'
  }
};

// Función para hacer requests a la API
export async function apiRequest(endpoint, options = {}) {
  const url = `${API_CONFIG.baseURL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...options.headers
      },
      ...options
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
}

// Funciones específicas para cada endpoint
export const curriculumAPI = {
  // Obtener toda la educación
  async getEducacion() {
    return await apiRequest(API_CONFIG.endpoints.educacion);
  },

  // Obtener toda la experiencia laboral
  async getExperiencia() {
    return await apiRequest(API_CONFIG.endpoints.experiencia);
  },

  // Obtener todas las habilidades
  async getHabilidades() {
    return await apiRequest(API_CONFIG.endpoints.habilidades);
  },

  // Obtener toda la historia
  async getHistoria() {
    return await apiRequest(API_CONFIG.endpoints.historia);
  },

  // Obtener todos los idiomas
  async getIdiomas() {
    return await apiRequest(API_CONFIG.endpoints.idiomas);
  },

  // Obtener información de contacto
  async getContacto() {
    return await apiRequest(API_CONFIG.endpoints.contacto);
  },

  // Obtener todas las certificaciones
  async getCertificaciones() {
    return await apiRequest(API_CONFIG.endpoints.certificaciones);
  },

  // Obtener todo el curriculum completo
  async getCurriculumCompleto() {
    return await apiRequest(API_CONFIG.endpoints.curriculumCompleto);
  }
};
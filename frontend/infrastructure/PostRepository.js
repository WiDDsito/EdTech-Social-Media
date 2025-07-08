// Infraestructura: Repositorio para acceder a la API
import axios from 'axios';

export class PostRepository {
  async getAll() {
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/posts');
    return response.data;
  }
}

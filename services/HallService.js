import { REST_ENDPOINT } from '../config';

class HallService {

  async getCategories() {
    const response = await fetch(`${REST_ENDPOINT}/categories`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (response.status && response.status !== 200) {
      throw { statusCode: response.status };
    }

    return await response.json();
  }

  async getProducts() {
    const response = await fetch(`${REST_ENDPOINT}/products`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (response.status && response.status !== 200) {
      throw { statusCode: response.status };
    }

    return await response.json();
  }

}

export default new HallService();

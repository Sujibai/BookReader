// api/api.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000', // FastAPI 服务器的基础 URL
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 定义接口类型（可选）
interface HelloResponse {
  Hello: string;
}

export const fetchHello = async (): Promise<HelloResponse> => {
  const response = await apiClient.get<HelloResponse>('/');
  return response.data;
};

export const fetchData = async (id: string): Promise<any> => {
  const response = await apiClient.get(`/data/${id}`);
  return response.data;
};


export const fetchBooks = async (): Promise<any> => {
    const res = await axios.get('http://localhost:8000/api/data');
    return res.data;
  };

// 你可以在这里继续定义更多的 API 请求方法

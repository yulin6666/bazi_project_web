import { BaziInput, BaziResponse } from '@/types/bazi';

const API_BASE_URL = 'https://yulin15.zeabur.app/api/v1';

export class BaziService {
  static async analyzeBazi(input: BaziInput): Promise<BaziResponse> {
    try {
      // Format the query string in Chinese format
      const genderStr = input.gender === 1 ? '男' : '女';
      const query = `${input.year}年${input.month}月${input.day}日${input.hour}点${input.minute}分，${genderStr}`;

      const response = await fetch(`${API_BASE_URL}/nlp/bazi`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query
        }),
      });

      if (!response.ok) {
        throw new Error(`API call failed: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error calling Bazi API:', error);
      throw error;
    }
  }

  static formatDateForAPI(year: number, month: number, day: number, hour: number, minute: number): string {
    return `${year}年${month}月${day}日${hour}点${minute}分`;
  }
}
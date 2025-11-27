export interface BaziInput {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  gender: 0 | 1; // 0 for female, 1 for male
  options?: string;
}

export interface BaziResponse {
  status: 'success' | 'error';
  message?: string;
  parsed_input: ParsedInput;
  bazi_analysis: BaziAnalysis;
  timestamp: string;
}

export interface ParsedInput {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  gender: number;
  options: string;
}

export interface BaziAnalysis {
  user_info: UserInfo;
  bazi: Bazi;
  day_master: string;
  wuxing: Wuxing;
  nayin: Nayin;
  shi_shen: ShiShen;
  qi_yun: QiYun;
  da_yun: DaYun[];
  liu_nian: LiuNian[];
}

export interface UserInfo {
  阳历: string;
  农历: string;
  生肖: string;
  性别: string;
}

export interface Bazi {
  年柱: string;
  月柱: string;
  日柱: string;
  时柱: string;
}

export interface Wuxing {
  detail: WuxingDetail;
  list: string[];
  counts: {
    金: number;
    木: number;
    水: number;
    火: number;
    土: number;
  };
}

export interface WuxingDetail {
  年柱五行: string;
  月柱五行: string;
  日柱五行: string;
  时柱五行: string;
}

export interface Nayin {
  年柱纳音: string;
  月柱纳音: string;
  日柱纳音: string;
  时柱纳音: string;
}

export interface ShiShen {
  年干十神: string;
  月干十神: string;
  日干十神: string;
  时干十神: string;
  年支十神: string[];
  月支十神: string[];
  日支十神: string[];
  时支十神: string[];
}

export interface QiYun {
  起运年数: number;
  起运月数: number;
  起运天数: number;
  起运描述: string;
}

export interface DaYun {
  序号: number;
  大运干支: string;
  起运年份: number;
  起运年龄: number;
  结束年龄: number;
}

export interface LiuNian {
  序号: number;
  年份: number;
  年龄: number;
  干支: string;
}
/**
 * Utility functions for Bazi analysis application
 */

/**
 * Format a date object to a readable Chinese date string
 */
export function formatChineseDate(year: number, month: number, day: number, hour: number, minute: number): string {
  return `${year}年${month.toString().padStart(2, '0')}月${day.toString().padStart(2, '0')}日 ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
}

/**
 * Get the zodiac animal for a given year
 */
export function getZodiacAnimal(year: number): string {
  const animals = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
  return animals[(year - 1900) % 12];
}

/**
 * Get element color for display
 */
export function getElementColor(element: string): string {
  const colorMap: { [key: string]: string } = {
    '金': 'text-yellow-400',
    '木': 'text-green-400',
    '水': 'text-blue-400',
    '火': 'text-red-400',
    '土': 'text-gray-400',
  };
  return colorMap[element] || 'text-white';
}

/**
 * Get element background color for display
 */
export function getElementBgColor(element: string): string {
  const colorMap: { [key: string]: string } = {
    '金': 'bg-yellow-900/30',
    '木': 'bg-green-900/30',
    '水': 'bg-blue-900/30',
    '火': 'bg-red-900/30',
    '土': 'bg-gray-900/30',
  };
  return colorMap[element] || 'bg-white/5';
}

/**
 * Calculate age at a given year
 */
export function calculateAge(birthYear: number, birthMonth: number, targetYear: number, targetMonth: number = 1): number {
  let age = targetYear - birthYear;
  if (targetMonth < birthMonth) {
    age--;
  }
  return age;
}

/**
 * Get Chinese numerals (一, 二, 三, etc.)
 */
export function toChineseNumber(num: number): string {
  const ones = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const tens = ['', '十', '二十', '三十', '四十', '五十', '六十', '七十', '八十', '九十'];

  if (num === 0) return '零';
  if (num < 10) return ones[num];
  if (num < 100) {
    const tenDigit = Math.floor(num / 10);
    const oneDigit = num % 10;
    return (tenDigit === 1 ? '十' : tens[tenDigit]) + (oneDigit === 0 ? '' : ones[oneDigit]);
  }

  return num.toString();
}

/**
 * Format timestamp to readable date
 */
export function formatTimestamp(timestamp: string): string {
  const date = new Date(timestamp);
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

/**
 * Get celestial stem (天干)
 */
export function getCelestialStem(index: number): string {
  const stems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
  return stems[index % 10];
}

/**
 * Get terrestrial branch (地支)
 */
export function getTerrestrialBranch(index: number): string {
  const branches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
  return branches[index % 12];
}

/**
 * Get hour name by hour number
 */
export function getHourName(hour: number): string {
  const hourNames: { [key: number]: string } = {
    0: '子时(23-01)',
    1: '丑时(01-03)',
    2: '寅时(03-05)',
    3: '卯时(05-07)',
    4: '辰时(07-09)',
    5: '巳时(09-11)',
    6: '午时(11-13)',
    7: '未时(13-15)',
    8: '申时(15-17)',
    9: '酉时(17-19)',
    10: '戌时(19-21)',
    11: '亥时(21-23)',
  };
  return hourNames[Math.floor(hour / 2)] || '';
}

/**
 * Validate Chinese date input
 */
export function isValidChineseDate(year: number, month: number, day: number): boolean {
  if (year < 1900 || year > new Date().getFullYear()) return false;
  if (month < 1 || month > 12) return false;

  const daysInMonth = new Date(year, month, 0).getDate();
  return day >= 1 && day <= daysInMonth;
}

/**
 * Convert hour to birth time period (时辰)
 */
export function convertHourToShichen(hour: number): number {
  if (hour === 0) return 0; // 子时
  if (hour === 23) return 0; // 子时后半
  return Math.floor((hour - 1) / 2) + 1;
}

/**
 * Escape HTML special characters
 */
export function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
'use client';

import { useState } from 'react';
import { BaziInput } from '@/types/bazi';

interface BaziInputFormProps {
  onSubmit: (input: BaziInput) => void;
}

export default function BaziInputForm({ onSubmit }: BaziInputFormProps) {
  const [formData, setFormData] = useState<BaziInput>({
    year: 1990,
    month: 1,
    day: 1,
    hour: 12,
    minute: 0,
    gender: 1,
    options: 'all'
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (field: keyof BaziInput, value: number) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    const currentYear = new Date().getFullYear();
    if (formData.year < 1900 || formData.year > currentYear) {
      newErrors.year = `年份必须在1900-${currentYear}之间`;
    }

    if (formData.month < 1 || formData.month > 12) {
      newErrors.month = '月份必须在1-12之间';
    }

    const maxDays = new Date(formData.year, formData.month, 0).getDate();
    if (formData.day < 1 || formData.day > maxDays) {
      newErrors.day = `日期必须在1-${maxDays}之间`;
    }

    if (formData.hour < 0 || formData.hour > 23) {
      newErrors.hour = '小时必须在0-23之间';
    }

    if (formData.minute < 0 || formData.minute > 59) {
      newErrors.minute = '分钟必须在0-59之间';
    }

    // Check for future date
    const inputDate = new Date(formData.year, formData.month - 1, formData.day, formData.hour, formData.minute);
    const now = new Date();

    if (inputDate > now) {
      newErrors.date = '请选择未来的日期';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="chinese-border p-8 bg-black/20 backdrop-blur-sm rounded-2xl">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-2">
            八字命理分析
          </h2>
          <p className="text-gray-300">请输入您的出生信息</p>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Year Input */}
          <div className="form-group">
            <label className="block text-lg font-semibold text-yellow-400 mb-2">
              出生年份
            </label>
            <div className="relative">
              <input
                type="number"
                value={formData.year}
                onChange={(e) => handleInputChange('year', parseInt(e.target.value))}
                className="w-full px-4 py-3 bg-black/30 border-2 border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors text-lg"
                placeholder="1990"
                min={1900}
                max={new Date().getFullYear()}
              />
              <span className="absolute right-3 top-3 text-yellow-500 text-lg">年</span>
            </div>
            {errors.year && (
              <p className="text-red-400 text-sm mt-1">{errors.year}</p>
            )}
          </div>

          {/* Month Input */}
          <div className="form-group">
            <label className="block text-lg font-semibold text-yellow-400 mb-2">
              出生月份
            </label>
            <div className="relative">
              <select
                value={formData.month}
                onChange={(e) => handleInputChange('month', parseInt(e.target.value))}
                className="w-full px-4 py-3 bg-black/30 border-2 border-yellow-500/30 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors text-lg"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                  <option key={month} value={month} className="bg-gray-800">
                    {month.toString().padStart(2, '0')}
                  </option>
                ))}
              </select>
              <span className="absolute right-3 top-3 text-yellow-500 text-lg">月</span>
            </div>
            {errors.month && (
              <p className="text-red-400 text-sm mt-1">{errors.month}</p>
            )}
          </div>

          {/* Day Input */}
          <div className="form-group">
            <label className="block text-lg font-semibold text-yellow-400 mb-2">
              出生日期
            </label>
            <div className="relative">
              <input
                type="number"
                value={formData.day}
                onChange={(e) => handleInputChange('day', parseInt(e.target.value))}
                className="w-full px-4 py-3 bg-black/30 border-2 border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors text-lg"
                placeholder="15"
                min={1}
                max={31}
              />
              <span className="absolute right-3 top-3 text-yellow-500 text-lg">日</span>
            </div>
            {errors.day && (
              <p className="text-red-400 text-sm mt-1">{errors.day}</p>
            )}
          </div>

          {/* Hour Input */}
          <div className="form-group">
            <label className="block text-lg font-semibold text-yellow-400 mb-2">
              出生时辰
            </label>
            <div className="relative">
              <select
                value={formData.hour}
                onChange={(e) => handleInputChange('hour', parseInt(e.target.value))}
                className="w-full px-4 py-3 bg-black/30 border-2 border-yellow-500/30 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors text-lg"
              >
                {Array.from({ length: 24 }, (_, i) => i).map(hour => (
                  <option key={hour} value={hour} className="bg-gray-800">
                    {hour.toString().padStart(2, '0')}:00
                  </option>
                ))}
              </select>
              <span className="absolute right-3 top-3 text-yellow-500 text-lg">时</span>
            </div>
            {errors.hour && (
              <p className="text-red-400 text-sm mt-1">{errors.hour}</p>
            )}
          </div>

          {/* Minute Input */}
          <div className="form-group">
            <label className="block text-lg font-semibold text-yellow-400 mb-2">
              出生分钟
            </label>
            <div className="relative">
              <select
                value={formData.minute}
                onChange={(e) => handleInputChange('minute', parseInt(e.target.value))}
                className="w-full px-4 py-3 bg-black/30 border-2 border-yellow-500/30 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors text-lg"
              >
                {Array.from({ length: 60 }, (_, i) => i).map(minute => (
                  <option key={minute} value={minute} className="bg-gray-800">
                    {minute.toString().padStart(2, '0')}
                  </option>
                ))}
              </select>
              <span className="absolute right-3 top-3 text-yellow-500 text-lg">分</span>
            </div>
            {errors.minute && (
              <p className="text-red-400 text-sm mt-1">{errors.minute}</p>
            )}
          </div>

          {/* Gender Input */}
          <div className="form-group">
            <label className="block text-lg font-semibold text-yellow-400 mb-2">
              性别
            </label>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => handleInputChange('gender', 1)}
                className={`flex-1 py-3 rounded-lg border-2 transition-colors text-lg ${
                  formData.gender === 1
                    ? 'bg-yellow-600 border-yellow-500 text-white'
                    : 'bg-transparent border-yellow-500/30 text-yellow-400 hover:border-yellow-500'
                }`}
              >
                男
              </button>
              <button
                type="button"
                onClick={() => handleInputChange('gender', 0)}
                className={`flex-1 py-3 rounded-lg border-2 transition-colors text-lg ${
                  formData.gender === 0
                    ? 'bg-yellow-600 border-yellow-500 text-white'
                    : 'bg-transparent border-yellow-500/30 text-yellow-400 hover:border-yellow-500'
                }`}
              >
                女
              </button>
            </div>
          </div>
        </div>

        {/* Error message */}
        {errors.date && (
          <div className="bg-red-900/30 border border-red-500 rounded-lg p-4 text-center">
            <p className="text-red-300">{errors.date}</p>
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center mt-8">
          <button
            type="submit"
            className="taoist-button text-xl py-4 px-12"
          >
            开始排盘
          </button>
        </div>

        {/* Ancient Chinese decoration */}
        <div className="text-center mt-8 text-yellow-500/60">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-yellow-500/60"></div>
            <span className="text-sm chinese-text">天人合一</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-yellow-500/60"></div>
          </div>
        </div>
      </form>
    </div>
  );
}
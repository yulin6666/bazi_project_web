'use client';

import { useState } from 'react';
import { BaziInput, BaziResponse } from '@/types/bazi';
import { BaziService } from '@/lib/api';
import BaziInputForm from '@/components/BaziInputForm';
import BaziResults from '@/components/BaziResults';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [baziData, setBaziData] = useState<BaziResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (input: BaziInput) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await BaziService.analyzeBazi(input);
      setBaziData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : '分析失败，请重试');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setBaziData(null);
    setError(null);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pattern-bg opacity-30"></div>

      {/* Floating Chinese symbols */}
      <div className="absolute top-10 left-10 text-yellow-200 opacity-20 text-6xl font-serif animate-floating">
        道
      </div>
      <div className="absolute top-20 right-20 text-yellow-200 opacity-20 text-4xl font-serif animate-floating" style={{ animationDelay: '1s' }}>
        易
      </div>
      <div className="absolute bottom-20 left-20 text-yellow-200 opacity-20 text-5xl font-serif animate-floating" style={{ animationDelay: '2s' }}>
        命
      </div>
      <div className="absolute bottom-10 right-10 text-yellow-200 opacity-20 text-7xl font-serif animate-floating" style={{ animationDelay: '3s' }}>
        理
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-4">
            道家八字排盘
          </h1>
          <p className="text-xl text-gray-300 mb-2">古老智慧 · 现代呈现</p>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full"></div>
        </header>

        <div className="max-w-6xl mx-auto">
          {error && (
            <div className="bg-red-900/50 border border-red-400 rounded-lg p-4 mb-8 text-center">
              <p className="text-red-200">{error}</p>
              <button
                onClick={handleReset}
                className="mt-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
              >
                重新输入
              </button>
            </div>
          )}

          {!baziData && (
            <div className="animate-fade-in">
              <BaziInputForm onSubmit={handleSubmit} />
            </div>
          )}

          {baziData && (
            <div className="animate-fade-in">
              <BaziResults data={baziData} onReset={handleReset} />
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center mt-20 text-gray-400">
          <p className="text-sm">
            © 2024 道家八字排盘 · 传承千年智慧
          </p>
          <div className="mt-4 flex justify-center space-x-4 text-xs">
            <span className="chinese-text">天人合一</span>
            <span className="chinese-text">五行相生</span>
            <span className="chinese-text">阴阳调和</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
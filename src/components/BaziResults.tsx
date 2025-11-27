'use client';

import { Bazi, BaziResponse, DaYun, LiuNian } from '@/types/bazi';

interface BaziResultsProps {
  data: BaziResponse;
  onReset: () => void;
}

export default function BaziResults({ data, onReset }: BaziResultsProps) {
  const { bazi_analysis } = data;
  const { user_info, bazi, day_master, wuxing, nayin, shi_shen, qi_yun, da_yun, liu_nian } = bazi_analysis;

  const renderBaziCard = (
    pillar: string,
    value: string,
    wuxing: string,
    nayin: string,
    shishen: string
  ) => (
    <div className="chinese-border bg-black/20 backdrop-blur-sm rounded-xl p-6 hover:bg-black/30 transition-all duration-300 group">
      <div className="text-center mb-4">
        <h4 className="text-xl font-bold text-yellow-400 mb-2">{pillar}</h4>
        <div className="text-3xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
          {value}
        </div>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between text-gray-300">
            <span>五行:</span>
            <span className="text-yellow-300">{wuxing}</span>
          </div>
          <div className="flex justify-between text-gray-300">
            <span>纳音:</span>
            <span className="text-yellow-300">{nayin}</span>
          </div>
          <div className="flex justify-between text-gray-300">
            <span>十神:</span>
            <span className="text-yellow-300">{shishen}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderElementCounts = () => (
    <div className="grid grid-cols-5 gap-4 mb-8">
      {[
        { name: '金', count: wuxing.counts.金, color: 'text-yellow-400', bg: 'bg-yellow-900/30' },
        { name: '木', count: wuxing.counts.木, color: 'text-green-400', bg: 'bg-green-900/30' },
        { name: '水', count: wuxing.counts.水, color: 'text-blue-400', bg: 'bg-blue-900/30' },
        { name: '火', count: wuxing.counts.火, color: 'text-red-400', bg: 'bg-red-900/30' },
        { name: '土', count: wuxing.counts.土, color: 'text-gray-400', bg: 'bg-gray-900/30' }
      ].map((element) => (
        <div key={element.name} className={`${element.bg} rounded-lg p-4 text-center border border-white/20`}>
          <div className={`text-2xl font-bold ${element.color} mb-1`}>{element.name}</div>
          <div className="text-white text-lg font-semibold">{element.count}</div>
        </div>
      ))}
    </div>
  );

  const renderDaYun = (dRow: DaYun) => (
    <tr key={dRow.序号} className="border-b border-white/20 hover:bg-white/5 transition-colors">
      <td className="py-3 px-4 text-yellow-400">{dRow.序号 || '初运'}</td>
      <td className="py-3 px-4 text-white font-semibold">{dRow.大运干支}</td>
      <td className="py-3 px-4 text-yellow-300">{dRow.起运年份}</td>
      <td className="py-3 px-4">{dRow.起运年龄}-{dRow.结束年龄}</td>
    </tr>
  );

  const renderLiuNian = (lRow: LiuNian) => (
    <tr key={lRow.序号} className="border-b border-white/20 hover:bg-white/5 transition-colors">
      <td className="py-2 px-4 text-yellow-400">{lRow.序号 + 1}</td>
      <td className="py-2 px-4 text-white">{lRow.年份}</td>
      <td className="py-2 px-4 text-yellow-300">{lRow.年龄}</td>
      <td className="py-2 px-4 font-semibold">{lRow.干支}</td>
    </tr>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-4">
          八字排盘结果
        </h2>
        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 chinese-border inline-block">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-gray-300 mb-1">阳历</div>
              <div className="text-white font-semibold">{user_info.阳历}</div>
            </div>
            <div>
              <div className="text-gray-300 mb-1">农历</div>
              <div className="text-yellow-300 font-semibold">{user_info.农历}</div>
            </div>
            <div>
              <div className="text-gray-300 mb-1">生肖</div>
              <div className="text-red-400 font-semibold">{user_info.生肖}</div>
            </div>
            <div>
              <div className="text-gray-300 mb-1">性别</div>
              <div className="text-blue-300 font-semibold">{user_info.性别}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bazi Pillars */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-center text-yellow-400 mb-6">四柱八字</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {renderBaziCard('年柱', bazi.年柱, wuxing.detail.年柱五行, nayin.年柱纳音, shi_shen.年干十神)}
          {renderBaziCard('月柱', bazi.月柱, wuxing.detail.月柱五行, nayin.月柱纳音, shi_shen.月干十神)}
          {renderBaziCard('日柱', bazi.日柱, wuxing.detail.日柱五行, nayin.日柱纳音, shi_shen.日干十神)}
          {renderBaziCard('时柱', bazi.时柱, wuxing.detail.时柱五行, nayin.时柱纳音, shi_shen.时干十神)}
        </div>
      </div>

      {/* Day Master */}
      <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 chinese-border">
        <h4 className="text-2xl font-bold text-yellow-400 mb-4 text-center">日主</h4>
        <div className="text-center">
          <span className="text-4xl font-bold text-white mb-2 block">{day_master}</span>
          <p className="text-gray-300">您的日主为 {day_master}，代表您的性格核心和人生主线</p>
        </div>
      </div>

      {/* Five Elements */}
      <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 chinese-border">
        <h4 className="text-2xl font-bold text-yellow-400 mb-6 text-center">五行分布</h4>
        {renderElementCounts()}
        <div className="text-center text-gray-300 mt-4">
          <p>五行统计：金{wuxing.counts.金} 木{wuxing.counts.木} 水{wuxing.counts.水} 火{wuxing.counts.火} 土{wuxing.counts.土}</p>
        </div>
      </div>

      {/* Qi Yun (Luck Period) */}
      <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 chinese-border">
        <h4 className="text-2xl font-bold text-yellow-400 mb-4 text-center">起运信息</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white/5 rounded-lg p-4">
            <div className="text-yellow-300 font-bold text-xl">{qi_yun.起运年数}</div>
            <div className="text-gray-300">年后起运</div>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <div className="text-yellow-300 font-bold text-xl">{qi_yun.起运月数}</div>
            <div className="text-gray-300">个月后起运</div>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <div className="text-yellow-300 font-bold text-xl">{qi_yun.起运天数}</div>
            <div className="text-gray-300">天后起运</div>
          </div>
        </div>
        <div className="text-center text-gray-300 mt-4">{qi_yun.起运描述}</div>
      </div>

      {/* Major Luck Periods */}
      <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 chinese-border">
        <h4 className="text-2xl font-bold text-yellow-400 mb-6 text-center">大运分析</h4>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-yellow-500">
                <th className="py-3 px-4 text-left text-yellow-400">序号</th>
                <th className="py-3 px-4 text-left text-yellow-400">大运</th>
                <th className="py-3 px-4 text-left text-yellow-400">起运年份</th>
                <th className="py-3 px-4 text-left text-yellow-400">年龄区间</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {da_yun.map(renderDaYun)}
            </tbody>
          </table>
        </div>
      </div>

      {/* Flowing Years */}
      <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 chinese-border">
        <h4 className="text-2xl font-bold text-yellow-400 mb-6 text-center">流年分析</h4>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b-2 border-yellow-500">
                <th className="py-3 px-4 text-left text-yellow-400">序号</th>
                <th className="py-3 px-4 text-left text-yellow-400">年份</th>
                <th className="py-3 px-4 text-left text-yellow-400">年龄</th>
                <th className="py-3 px-4 text-left text-yellow-400">干支</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {liu_nian.slice(0, 10).map(renderLiuNian)}
            </tbody>
          </table>
        </div>
        <div className="text-center text-gray-400 mt-4">
          <p>显示最近10年流年分析...</p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gradient-to-r from-yellow-900/30 to-red-900/30 border border-yellow-500 rounded-xl p-6 mb-8">
        <div className="text-center">
          <h5 className="text-xl font-bold text-yellow-400 mb-3">重要声明</h5>
          <p className="text-gray-300 leading-relaxed">
            本系统基于传统易学理论，旨在传承中华传统文化智慧。
            命理分析仅供参考，人生道路仍需靠自身努力开拓进取。
            信则有，不信则无，理性看待，请勿迷信。
          </p>
          <p className="text-yellow-300 mt-2 font-medium">知命不改运，修身养性方为上策。</p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="text-center space-y-4">
        <button
          onClick={onReset}
          className="taoist-button text-lg py-3 px-8 mr-4"
        >
          重新排盘
        </button>
        <button
          onClick={() => window.print()}
          className="bg-green-600 hover:bg-green-700 text-white border-2 border-green-500 py-3 px-8 rounded-full transition-all duration-300"
        >
          💾 保存结果
        </button>
      </div>

      {/* Timestamp */}
      <div className="text-center text-gray-500 text-sm">
        <p>分析时间: {new Date(data.timestamp).toLocaleString('zh-CN')}</p>
        <p>系统版本: 道家八字 v1.0</p>
      </div>

      <style jsx>{`
        tbody tr:nth-child(odd) {
          background-color: rgba(255, 255, 255, 0.05);
        }

        tbody tr:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}
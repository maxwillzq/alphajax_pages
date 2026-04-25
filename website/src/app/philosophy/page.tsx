import React from 'react';

export default function Philosophy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-slate-900/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
        {/* Decorative background gradients */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 mb-4 text-center">
            投资哲学 (通用优质成长股法则)
          </h1>
          <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto text-base">
            记录我使用 AI 辅助进行市场分析的个人笔记。这里没有绝对的真理，只有持续的思考与复盘。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-slate-800/40 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 hover:border-teal-500/30 hover:bg-slate-800/60 transition-all duration-300 group">
              <div className="flex items-center mb-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-teal-500/20 text-teal-400 text-sm font-bold group-hover:scale-110 transition-transform">01</span>
                <h2 className="text-lg font-bold text-teal-300 ml-3">绝对定价权与高护城河</h2>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                不限行业。重点布局在各自赛道拥有极高垄断地位或定价权的公司。这包括但不限于：医疗领域的独家专利与高转换成本、科技巨头的生态锁死与网络效应、以及消费品中的绝对品牌壁垒。
              </p>
              <span className="text-xs text-slate-600 mt-2 block">Pricing Power & Moats</span>
            </div>
            
            {/* Card 2 */}
            <div className="bg-slate-800/40 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 hover:border-teal-500/30 hover:bg-slate-800/60 transition-all duration-300 group">
              <div className="flex items-center mb-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 text-sm font-bold group-hover:scale-110 transition-transform">02</span>
                <h2 className="text-lg font-bold text-emerald-300 ml-3">受益于长期的结构性趋势</h2>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                公司必须处在一个未来几年持续扩张的赛道上，其增长动力并非来自于短期经济周期，而是来自于不可逆的结构性大趋势，如人工智能普及或全球人口老龄化。
              </p>
              <span className="text-xs text-slate-600 mt-2 block">Secular Growth Drivers</span>
            </div>
            
            {/* Card 3 */}
            <div className="bg-slate-800/40 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 hover:border-teal-500/30 hover:bg-slate-800/60 transition-all duration-300 group">
              <div className="flex items-center mb-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-teal-500/20 text-teal-400 text-sm font-bold group-hover:scale-110 transition-transform">03</span>
                <h2 className="text-lg font-bold text-teal-300 ml-3">强劲的自由现金流与资本回报</h2>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                公司必须具备强大的自我造血能力，能赚取真金白银的自由现金流（FCF）。同时，管理层必须乐于通过股票回购或稳定分红来回馈股东。
              </p>
              <span className="text-xs text-slate-600 mt-2 block">Cash Flow & Capital Allocation</span>
            </div>
          </div>
          
          <div className="mt-8 pt-5 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-500">
              <span className="font-bold text-emerald-400">核心理念</span>：摆脱行业限制，以“高质量”和“强现金流”为核心，捕捉具有确定性增长的优质资产。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

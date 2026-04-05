import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-slate-900/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
        {/* Decorative background gradients */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 mb-4 text-center">
            AlphaJAX 投资哲学
          </h1>
          <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto text-base">
            记录我使用 AI 辅助进行市场分析的个人笔记。这里没有绝对的真理，只有持续的思考与复盘。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-slate-800/40 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 hover:border-teal-500/30 hover:bg-slate-800/60 transition-all duration-300 group">
              <div className="flex items-center mb-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-teal-500/20 text-teal-400 text-sm font-bold group-hover:scale-110 transition-transform">01</span>
                <h2 className="text-lg font-bold text-teal-300 ml-3">底层制程垄断</h2>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                布局处于全球半导体精密制造顶端的“工业母机”级别公司。寻找具备极高准入门槛的晶圆代工及前道设备供应商，作为全产业链最稳固的底座资产。
              </p>
              <span className="text-xs text-slate-600 mt-2 block">Foundry & WFE Moats</span>
            </div>
            
            {/* Card 2 */}
            <div className="bg-slate-800/40 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 hover:border-teal-500/30 hover:bg-slate-800/60 transition-all duration-300 group">
              <div className="flex items-center mb-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 text-sm font-bold group-hover:scale-110 transition-transform">02</span>
                <h2 className="text-lg font-bold text-emerald-300 ml-3">算力稀缺性与连接带宽</h2>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                聚焦在高性能计算芯（HPC）及高带宽连接领域占据主导地位的标的。AI 的终极竞争是“规模”，寻找能有效解决数据交换瓶颈并提供核心推理/训练能力的算力巨头。
              </p>
              <span className="text-xs text-slate-600 mt-2 block">Compute & Interconnect Scarcity</span>
            </div>
            
            {/* Card 3 */}
            <div className="bg-slate-800/40 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 hover:border-teal-500/30 hover:bg-slate-800/60 transition-all duration-300 group">
              <div className="flex items-center mb-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-teal-500/20 text-teal-400 text-sm font-bold group-hover:scale-110 transition-transform">03</span>
                <h2 className="text-lg font-bold text-teal-300 ml-3">应用生态与数据霸权</h2>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                布局拥有闭环生态、海量高质量私有数据及云基础设施的科技巨头。它们是 AI 商业化落地的最终守门人，拥有将技术转化为持续现金流的分配权。
              </p>
              <span className="text-xs text-slate-600 mt-2 block">Platform & Data Sovereignty</span>
            </div>
            
            {/* Card 4 */}
            <div className="bg-slate-800/40 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 hover:border-teal-500/30 hover:bg-slate-800/60 transition-all duration-300 group">
              <div className="flex items-center mb-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 text-sm font-bold group-hover:scale-110 transition-transform">04</span>
                <h2 className="text-lg font-bold text-emerald-300 ml-3">物理边界保障</h2>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                关注 AI 扩张的“最终瓶颈”——电力供应与热能管理。重点布局为下一代超大规模数据中心提供高功率密度能源、液冷技术及电网扩容方案的能源基建商。
              </p>
              <span className="text-xs text-slate-600 mt-2 block">Power & Thermal Infrastructure</span>
            </div>
          </div>
          
          <div className="mt-8 pt-5 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-500">
              <span className="font-bold text-emerald-400">风控策略</span>：利用 AlphaJAX 的量化动量评分（Quant Score）作为过滤器，结合 LLM 叙事审计捕捉“业绩超预期 + 叙事逻辑改善”的共振点。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

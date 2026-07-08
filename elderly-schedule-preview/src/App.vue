<template>
  <div class="min-h-screen bg-gradient-to-b from-orange-50/40 to-white p-4 font-sans text-gray-800 max-w-md mx-auto shadow-2xl relative my-2 rounded-[40px] overflow-hidden border-[8px] border-gray-900 select-none">
    
    <!-- 1. 顶部状态栏 -->
    <div class="flex justify-between items-center mb-5 px-4 pt-2">
      <div class="text-base font-bold tracking-tight text-gray-900">12:00</div>
      <div class="flex gap-2 items-center text-base text-gray-900">
        <span>📶</span>
        <span>🔋</span>
      </div>
    </div>

    <div class="px-2 pb-6">
      <!-- 2. 导航栏 -->
      <div class="flex justify-between items-center mb-6 relative">
        <button class="text-2xl font-black text-gray-800 p-1 hover:opacity-60">〈</button>
        <div class="text-xl font-extrabold text-gray-900 tracking-wide">我的日程</div>
        <div class="flex items-center gap-3 bg-white/80 border border-gray-200/80 rounded-full px-3 py-1.5 shadow-sm">
          <span class="text-lg font-bold text-gray-800 tracking-tight cursor-pointer">···</span>
          <div class="w-[1px] h-4 bg-gray-200"></div>
          <span class="text-xs border-2 border-gray-800 rounded-full w-4 h-4 flex items-center justify-center font-black">●</span>
        </div>
      </div>

      <!-- 3. 分类标签栏 (已更新颜色和名称) -->
      <div class="w-full overflow-hidden mb-5 relative">
        <div 
          ref="tabContainer"
          class="flex flex-nowrap gap-2.5 overflow-x-auto pb-2 scrollbar-none px-1 cursor-grab active:cursor-grabbing touch-pan-x snap-x"
          @mousedown="startDrag"
          @mouseleave="stopDrag"
          @mouseup="stopDrag"
          @mousemove="onDrag"
          style="-webkit-overflow-scrolling: touch;"
        >
          <button 
            v-for="tab in categoryTabs" 
            :key="tab.id"
            :class="[
              'px-4 py-2.5 rounded-full whitespace-nowrap text-base flex items-center gap-1 transition-all border shadow-sm shrink-0 snap-origin',
              activeCategoryId === tab.id ? tab.activeBg + ' ' + tab.activeText + ' font-extrabold border-transparent scale-[1.03] shadow-md' : 'bg-white border-gray-200/80 text-gray-600 font-bold'
            ]"
            @click="toggleCategory(tab.id)"
          >
            <span>{{ tab.name }}</span>
            <span class="text-xs opacity-90">({{ getCategoryCount(tab.id) }})</span>
          </button>
        </div>
        <div class="absolute right-0 top-0 bottom-2 w-10 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none"></div>
      </div>

      <!-- 4. 日历主体卡片 -->
      <div class="bg-white p-5 rounded-[32px] shadow-md shadow-orange-100/30 border border-orange-100/40 mb-6">
        
        <!-- 年月筛选器 -->
        <div class="flex justify-center items-center gap-2 mb-5">
          <button class="text-gray-400 font-black text-xl px-2 hover:text-orange-500" @click="prevMonth">〈</button>
          
          <div class="flex items-center gap-1.5">
            <div class="flex items-center gap-1 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-xl text-base font-extrabold text-gray-800">
              <span>2026年</span>
              <span class="text-xs text-gray-400 scale-90">▼</span>
            </div>
            <div class="flex items-center gap-1 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-xl text-base font-extrabold text-gray-800">
              <span>7月</span>
              <span class="text-xs text-gray-400 scale-90">▼</span>
            </div>
          </div>

          <button class="text-gray-400 font-black text-xl px-2 hover:text-orange-500" @click="nextMonth">〉</button>
        </div>

        <!-- 星期表头 -->
        <div class="grid grid-cols-7 text-center text-sm font-black text-orange-600/90 mb-4">
          <div v-for="day in weekDays" :key="day" :class="{'text-red-500': day === '日' || day === '六'}">{{ day }}</div>
        </div>

        <!-- 日期网格 -->
        <div class="grid grid-cols-7 text-center gap-y-4">
          <div v-for="(item, index) in calendarGrid" :key="index" class="relative pb-5 flex flex-col items-center justify-center">
            <button 
              :class="[
                'w-11 h-11 rounded-full text-base flex items-center justify-center transition-all relative z-10 font-bold',
                item.isCurrentMonth && item.date === selectedDay ? 'bg-orange-500 text-white font-black shadow-lg shadow-orange-300 scale-110 z-20' : '',
                item.isCurrentMonth && item.date !== selectedDay && isHighlightedByFilter(item.date) ? currentHighlightBgClass + ' font-black scale-105 border-2' : '',
                item.isCurrentMonth && item.date !== selectedDay && !isHighlightedByFilter(item.date) ? 'text-gray-900 font-bold hover:bg-gray-100' : '',
                !item.isCurrentMonth ? 'text-gray-300/80 font-normal' : ''
              ]"
              :style="item.isCurrentMonth && item.date !== selectedDay && isHighlightedByFilter(item.date) ? { borderColor: getCategoryColor() } : {}"
              @click="item.isCurrentMonth && selectDate(item.date)"
            >
              {{ item.day }}
            </button>
            
            <!-- 日程事件小圆点 -->
            <div v-if="item.isCurrentMonth && item.eventDots" class="absolute bottom-1.5 flex gap-1 justify-center w-full z-20">
              <span 
                v-for="dot in item.eventDots" 
                :key="dot.color"
                :style="{ backgroundColor: item.date === selectedDay ? 'white' : dot.color }"
                class="w-1.5 h-1.5 rounded-full shadow-sm"
              ></span>
            </div>
          </div>
        </div>

        <!-- 底部色块图例 -->
        <div class="flex justify-center flex-wrap gap-x-4 gap-y-1 mt-3 border-t border-gray-100 pt-4 text-xs font-bold text-gray-500">
          <div v-for="legend in legends" :key="legend.name" class="flex items-center gap-1.5">
            <span :style="{ backgroundColor: legend.color }" class="w-2.5 h-2.5 rounded-full shadow-sm"></span>
            {{ legend.name }}
          </div>
        </div>
      </div>

      <!-- 5. 日程列表详情 -->
      <div class="mb-4">
        <div class="flex justify-between items-center mb-3.5 px-1">
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-5 bg-orange-500 rounded-full shadow-sm"></span>
            <span class="text-lg font-extrabold text-gray-900">7月{{ selectedDay }}日 日程详情</span>
          </div>
          <div class="text-xs font-bold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">共 {{ filteredSchedules.length }} 个安排</div>
        </div>

        <div v-if="filteredSchedules.length > 0" class="space-y-4">
          <div v-for="schedule in filteredSchedules" :key="schedule.id" class="relative bg-white p-5 rounded-[28px] shadow-sm border border-gray-100 overflow-hidden transition-all">
            <span class="absolute left-0 top-0 bottom-0 w-2.5" :style="{ backgroundColor: schedule.color }"></span>
            
            <div class="flex justify-between items-start mb-4 pl-1">
              <div class="flex gap-3.5 items-start">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0" :style="{ backgroundColor: schedule.color + '18', color: schedule.color }">
                  {{ schedule.icon }}
                </div>
                <div class="flex flex-col gap-1.5 justify-center">
                  <div class="flex flex-wrap items-center gap-2">
                    <span class="text-lg font-black text-gray-900 leading-snug tracking-tight">{{ schedule.title }}</span>
                    <span class="px-2.5 py-0.5 rounded-md text-xs font-extrabold shadow-sm inline-block shrink-0" :style="{ backgroundColor: schedule.color + '22', color: schedule.color }">
                      {{ schedule.tag }}
                    </span>
                  </div>
                </div>
              </div>
              
              <div class="flex flex-col items-end shrink-0 pl-1">
                <span class="bg-purple-50 border border-purple-100 text-purple-600 font-extrabold text-xs px-2.5 py-1 rounded-full shadow-sm">已接单</span>
              </div>
            </div>

            <!-- 时间地点详情 -->
            <div class="pl-1 space-y-1.5 mb-5 text-sm font-bold text-gray-500 bg-gray-50/60 p-3 rounded-2xl">
              <div class="flex items-center gap-2"><span>🕒</span> <span class="text-gray-700 font-extrabold">{{ schedule.time }}</span></div>
              <div class="flex items-center gap-2"><span>📍</span> <span class="text-gray-700 font-medium">{{ schedule.location }}</span></div>
            </div>

            <!-- 查看订单大按钮 -->
            <div class="pl-1">
              <button class="w-full flex justify-center items-center gap-1.5 bg-gradient-to-r from-orange-500 to-amber-500 py-3.5 rounded-full text-base text-white font-black shadow-md shadow-orange-200 active:scale-95 transition-all" @click="alertAction('正在跳转订单详情页面...')">查看订单</button>
            </div>
          </div>
        </div>

        <!-- 空数据状态 -->
        <div v-else class="text-center py-12 text-gray-400 text-xs border border-dashed border-gray-200 rounded-[28px] bg-gray-50/50">
           <div class="text-5xl mb-3">🌤️</div>
           <div class="text-base font-extrabold text-gray-500">这天没有安排，享受美好的一天吧~</div>
        </div>
      </div>
    </div>

    <!-- 6. 底部悬浮添加按钮 -->
    <button class="absolute bottom-8 right-6 w-14 h-14 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-3xl font-light shadow-xl flex items-center justify-center active:scale-90 transition-all z-30" @click="alertAction('开启新日程添加表单')">+</button>
    <div class="w-32 h-1.5 bg-gray-900 mx-auto mb-1 rounded-full opacity-90"></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const weekDays = ['日', '一', '二', '三', '四', '五', '六'];

// 1. 图例颜色与文案更新
const legends = [
  { id: 'service', name: '服务', color: '#A855F7' },     // 服务 -> 紫色
  { id: 'activity', name: '活动', color: '#EC4899' },    // 活动 -> 粉色
  { id: 'university', name: '老年大学', color: '#3B82F6' },// 老年大学 -> 蓝色
  { id: 'canteen', name: '长者饭堂', color: '#10B981' }   // 其他改为长者饭堂 -> 绿色
];

// 2. 顶部 Tab 的分类与颜色更新
const categoryTabs = [
  { id: 'all', name: '全部', activeBg: 'bg-gradient-to-r from-orange-500 to-amber-500', activeText: 'text-white' },
  { id: 'service', name: '服务', activeBg: 'bg-purple-500', activeText: 'text-white' },
  { id: 'activity', name: '活动', activeBg: 'bg-pink-500', activeText: 'text-white' },
  { id: 'university', name: '老年大学', activeBg: 'bg-blue-500', activeText: 'text-white' },
  { id: 'canteen', name: '长者饭堂', activeBg: 'bg-emerald-500', activeText: 'text-white' }
];

const activeCategoryId = ref('all');
const selectedDay = ref(7); 

// 手势滑动逻辑
const tabContainer = ref(null);
let isDown = false;
let startX;
let scrollLeft;

const startDrag = (e) => {
  if (!tabContainer.value) return;
  isDown = true;
  startX = e.pageX - tabContainer.value.offsetLeft;
  scrollLeft = tabContainer.value.scrollLeft;
};
const stopDrag = () => { isDown = false; };
const onDrag = (e) => {
  if (!isDown || !tabContainer.value) return;
  e.preventDefault();
  const x = e.pageX - tabContainer.value.offsetLeft;
  const walk = (x - startX) * 1.6;
  tabContainer.value.scrollLeft = scrollLeft - walk;
};

const toggleCategory = (id) => { activeCategoryId.value = id; };
const selectDate = (day) => { selectedDay.value = day; };
const alertAction = (msg) => { alert(msg); };

const prevMonth = () => { alert('已切换至 2026年 6月'); };
const nextMonth = () => { alert('已切换至 2026年 8月'); };

const getCategoryColor = () => {
  const current = legends.find(l => l.id === activeCategoryId.value);
  return current ? current.color : 'transparent';
};

// 3. 仿真日程数据库颜色和标签全局同步
const allSchedules = [
  { id: 101, date: 1, category: 'service', tag: '服务', icon: '📋', color: '#A855F7', title: '居家医疗上门送药配药', time: '08:30 - 09:30', location: '本人住所' },
  { id: 201, date: 2, category: 'university', tag: '老年大学', icon: '🎓', color: '#3B82F6', title: '智能手机应用基础课程', time: '09:30 - 11:00', location: '社区老年大学3楼' },
  { id: 202, date: 2, category: 'university', tag: '老年大学', icon: '🎓', color: '#3B82F6', title: '老年书法艺术赏析', time: '14:00 - 15:30', location: '社区中心2楼书画室' },
  { id: 301, date: 3, category: 'service', tag: '服务', icon: '📋', color: '#A855F7', title: '常规血压血脂定期上门体检', time: '10:00 - 11:00', location: '本人住所' },
  { id: 501, date: 5, category: 'activity', tag: '活动', icon: '🎉', color: '#EC4899', title: '社区长者集体活力早操会', time: '07:30 - 08:30', location: '社区中心广场' },
  { id: 502, date: 5, category: 'service', tag: '服务', icon: '📋', color: '#A855F7', title: '居家血氧血压定期随访检测', time: '10:00 - 10:30', location: '本人住所' },
  { id: 701, date: 7, category: 'canteen', tag: '长者饭堂', icon: '🍱', color: '#10B981', title: '长者饭堂两荤一素两手热活套餐', time: '11:30 - 12:30', location: '社区长者膳食中心 (越秀店)' },
  { id: 801, date: 8, category: 'service', tag: '服务', icon: '📋', color: '#A855F7', title: '助餐上门：医疗看护随行服务', time: '11:30 - 12:30', location: '本人住所' },
  { id: 1001, date: 10, category: 'university', tag: '老年大学', icon: '🎓', color: '#3B82F6', title: '国画山水入门与赏析', time: '14:00 - 16:00', location: '老年大学书画教室' },
  { id: 1201, date: 12, category: 'activity', tag: '活动', icon: '🎉', color: '#EC4899', title: '长者防诈骗趣味小剧场观影', time: '14:30 - 16:00', location: '社区活动中心' },
  { id: 1202, date: 12, category: 'service', tag: '服务', icon: '📋', color: '#A855F7', title: '预订下周居家保洁服务确认', time: '16:30 - 17:00', location: '线上办理' },
  { id: 1501, date: 15, category: 'service', tag: '服务', icon: '📋', color: '#A855F7', title: '无障碍设施上门安全排查与维护', time: '09:00 - 10:30', location: '本人住所' },
  { id: 1701, date: 17, category: 'service', tag: '服务', icon: '📋', color: '#A855F7', title: '适老化改造设备上门调试', time: '08:30 - 10:00', location: '本人住所' },
  { id: 1702, date: 17, category: 'university', tag: '老年大学', icon: '🎓', color: '#3B82F6', title: '声乐合唱基础训练课', time: '10:30 - 12:00', location: '老年大学音乐厅' },
  { id: 1703, date: 17, category: 'activity', tag: '活动', icon: '🎉', color: '#EC4899', title: '社区健康养生知识讲座', time: '14:30 - 16:00', location: '社区活动中心大厅' },
  { id: 1704, date: 17, category: 'canteen', tag: '长者饭堂', icon: '🍱', color: '#10B981', title: '长者饭堂：周末爱心粗粮面点聚餐', time: '16:30 - 18:00', location: '社区活动中心膳食角' },
  { id: 1901, date: 19, category: 'university', tag: '老年大学', icon: '🎓', color: '#3B82F6', title: '智能手机摄影与修图技巧', time: '09:30 - 11:00', location: '老年大学摄影棚' },
  { id: 2001, date: 20, category: 'canteen', tag: '长者饭堂', icon: '🍱', color: '#10B981', title: '长者低糖健康膳食交流体验会', time: '14:00 - 17:00', location: '长者膳食中心' },
  { id: 2401, date: 24, category: 'university', tag: '老年大学', icon: '🎓', color: '#3B82F6', title: '长者花卉园艺修剪赏析课', time: '09:00 - 10:30', location: '老年大学植物温室' },
  { id: 3101, date: 31, category: 'activity', tag: '活动', icon: '🎉', color: '#EC4899', title: '七月末长者文娱汇报汇演', time: '19:00 - 21:00', location: '社区小剧场' }
];

const getCategoryCount = (id) => {
  if (id === 'all') return allSchedules.length;
  return allSchedules.filter(item => item.category === id).length;
};

const isHighlightedByFilter = (day) => {
  if (activeCategoryId.value === 'all') return false; 
  return allSchedules.some(item => item.date === day && item.category === activeCategoryId.value);
};

// 4. 计算属性过滤高亮类名更新
const currentHighlightBgClass = computed(() => {
  switch (activeCategoryId.value) {
    case 'service': return 'bg-purple-50 text-purple-600';
    case 'activity': return 'bg-pink-50 text-pink-600';
    case 'university': return 'bg-blue-50 text-blue-600';
    case 'canteen': return 'bg-emerald-50 text-emerald-600';
    default: return '';
  }
});

const calendarGrid = computed(() => {
  const grid = [];
  grid.push({ day: 28, isCurrentMonth: false }, { day: 29, isCurrentMonth: false }, { day: 30, isCurrentMonth: false });

  for (let i = 1; i <= 31; i++) {
    let eventDots = [];
    const daysTasks = allSchedules.filter(t => t.date === i);
    
    if (daysTasks.length > 0) {
      daysTasks.forEach(task => {
        if (!eventDots.some(d => d.color === task.color)) {
          eventDots.push({ color: task.color });
        }
      });
    }
    if (i === 7) eventDots = [{ color: '#FFFFFF' }]; 

    grid.push({ day: i, date: i, isCurrentMonth: true, eventDots: eventDots.length > 0 ? eventDots : null });
  }

  while(grid.length < 42) {
    grid.push({ day: grid.length - 33, isCurrentMonth: false });
  }
  return grid;
});

const filteredSchedules = computed(() => {
  return allSchedules.filter(item => item.date === selectedDay.value);
});
</script>

<style>
.scrollbar-none::-webkit-scrollbar { display: none; }
.scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
</style>
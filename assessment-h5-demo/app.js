const screens = [
  { image: "介绍页.png" },
  { image: "注意事项.png", manualAudio: "notice-speech.mp3", speechY: 150 },
  { image: "准备物品.png", manualAudio: "goods-speech.mp3", speechY: 150 },
  { image: "填写预告.png", manualAudio: "preface-speech.mp3", speechY: 555 },
  { image: "填写信息.png" },
  { image: "信息录入-开始前.png", manualAudio: "ready-speech.mp3", speechY: 500 },
  { image: "握力测试 1.png", manualAudio: "grip-speech.mp3", speechY: 420 },
  { image: "开始前倒计时.png", countdown: true, autoNext: 5000 },
  { image: "计时中.png", timer: "up", autoAudio: "test-start-speech.mp3", delayedAudio: [{ after:3000, audio:"timer-speech.mp3" }, { after:21000, audio:"timer-second-speech.mp3" }] },
  { image: "完成.png" },
  { image: "2分钟踏步测试.png", manualAudio: "test-two-intro-speech.mp3", speechY: 420 },
  { image: "2分钟踏步测试前倒计时五秒.png", countdown: true, autoNext: 5000 },
  { image: "2分钟踏步测试中.png", timer: "down30", autoNext: 20000, autoAudio: "test-start-speech.mp3", delayedAudio: [{ after:2000, audio:"test-two-timer-speech.mp3" }] },
  { image: "2分钟踏步测试剩 10 秒.png", timer: "down10", autoNext: 10000, autoAudio: "test-two-ten-speech.mp3" },
  { image: "2分钟踏步测试完成.png", delayedAudio: [{ after:1000, audio:"test-two-result-speech.mp3" }] },
  { image: "最长发声时间测试.png", manualAudio: "test-three-intro-speech.mp3", speechY: 420 },
  { image: "最长发声时间测试倒计时 5 秒.png", countdown: true, autoNext: 5000 },
  { image: "最长发声时间测试中.png", timer: "down120", autoNext: 120000, autoAudio: "test-start-speech.mp3", delayedAudio: [{ after:110000, audio:"test-three-ten-speech.mp3" }] },
  { image: "发声测试完成.png", delayedAudio: [{ after:1000, audio:"test-three-result-speech.mp3" }] },
  { image: "单腿站立测试.png", manualAudio: "test-four-intro-speech.mp3", speechY: 420 },
  { image: "单腿站立测试前倒计时 5 秒.png", countdown: true, autoNext: 5000 },
  { image: "单腿站立测试中.png", timer: "up", autoAudio: "test-start-speech.mp3" },
  { image: "单腿站立测试完成.png" },
  { image: "计时走测试.png" },
  { image: "计时走测试前倒计时 5 秒.png", countdown: true, autoNext: 5000 },
  { image: "计时走测试中.png", timer: "up", autoAudio: "test-start-speech.mp3", delayedAudio: [{ after:1400, audio:"test-six-timer-speech.mp3" }] },
  { image: "计时走测试完成.png" },
  { image: "坐位体前屈测试.png", manualAudio: "test-seven-intro-speech.mp3", speechY: 420 },
  { image: "坐位体前屈测试中.png", manualAudio: "test-seven-timer-speech.mp3", autoAudio: "test-seven-timer-speech.mp3", speechY: 420 },
  { image: "坐位体前屈测试结果选择.png" },
  { image: "坐位体前屈测试结果已记录.png", autoNext: 1600 },
  { image: "肩屈曲测试.png", manualAudio: "test-eight-intro-speech.mp3", speechY: 420 },
  { image: "肩屈曲测试中.png", autoAudio: "test-eight-first-speech.mp3", delayedAudio: [{ after:5200, audio:"test-eight-second-speech.mp3" }] },
  { image: "肩屈曲测试选择结果.png" },
  { image: "肩屈曲测试结果记录.png", autoNext: 1600 },
  { image: "获取报告.png" },
  { image: "评估生成中.png", autoNext: 2200 },
  { image: "综合评估结果.png", report: true }
];
// The supplied screenshot set does not contain the 30-second chair-stand intro
// yet, so tabs 2 and 3 temporarily share the nearest supplied aerobic intro.
const testStarts = [6, 10, 10, 15, 19, 23, 27, 31];
const testRanges = [
  [6, 10], [10, 10], [10, 15], [15, 19],
  [19, 23], [23, 27], [27, 31], [31, 35]
];

const detailGroups = [
  { name:"肌肉适能",icon:"icon-strength.png",items:[["肌力",78,"良好","good"],["肌耐力",65,"中等","medium"]] },
  { name:"心肺适能",icon:"icon-cardio.png",items:[["有氧能力",82,"良好","good"],["呼吸功能",60,"中等","medium"]] },
  { name:"平衡适能",icon:"icon-balance.png",items:[["静态平衡",75,"良好","good"],["动态平衡",45,"待提升","weak"]] },
  { name:"柔韧适能",icon:"icon-flexibility.png",items:[["下肢柔韧",80,"良好","good"],["上肢柔韧",58,"中等","medium"]] }
];
const detailTests = [
  ["握力测试","优","优势手握持 45 秒","您的上肢及全身肌力储备非常充足，身体底子打得很好。请继续保持。","建议每周保持 3 次力量练习。","good"],
  ["30 秒站坐测试","良","完成 16 次","下肢肌肉耐力表现良好，日常起坐和行走能力稳定。","可配合椅子进行站坐训练，每次 2 组。","good"],
  ["2 分钟踏步测试","良","完成 92 次","有氧耐力处于良好水平，连续活动时心肺供能较稳定。","每周进行 3～5 次中等强度步行。","good"],
  ["最长发声时间测试","中","持续 18 秒","呼吸控制能力处于同龄人中等水平，仍有一定提升空间。","每天进行 5 分钟腹式呼吸练习。","medium"],
  ["单腿站立测试","良","保持 22 秒","静态平衡能力良好，身体控制较稳定。","扶稳支撑物练习单腿站立，每侧 3 次。","good"],
  ["计时走测试","待提升","完成时间 12.6 秒","动态平衡与转身衔接稍弱，快速移动时需要更加注意安全。","从慢速折返走开始练习，家人陪同更安心。","weak"],
  ["坐位体前屈测试","中","手快碰到脚尖","下肢柔韧性总体尚可，腿后侧肌群略显紧张。","运动后进行腿后侧拉伸，每次保持 20 秒。","medium"],
  ["肩屈曲测试","中","手臂接近墙面","上肢活动范围基本正常，肩部灵活性仍可继续改善。","每天做轻柔的靠墙举臂练习。","medium"]
];

let index = 0;
let voiceEnabled = true;
let countdownTimers = [];
let flowTimer = null;
let selectedTestTab = null;
let liveTimer = null;
const formData = { gender: "男", age: 59, height: 170, weight: 65, habit: "几乎不运动" };
const stage = document.querySelector("#screenStage");
const image = document.querySelector("#screenImage");
const detailView = document.querySelector("#detailView");
const narration = document.querySelector("#narration");
const progressText = document.querySelector("#progressText");
const flowStatus = document.querySelector("#flowStatus");
const welcomeMask = document.querySelector("#welcomeMask");
const testTabs = document.querySelector("#testTabs");
const formHotspots = document.querySelector("#formHotspots");
const formFeedback = document.querySelector("#formFeedback");
const speechHotspot = document.querySelector("#speechHotspot");
const liveTime = document.querySelector("#liveTime");
const primaryActionHotspot = document.querySelector("#primaryActionHotspot");
const primaryActionScreens = new Set([0, 1, 2, 3, 5, 6, 9, 10, 15, 19, 23, 27, 28, 31, 32, 35]);

testTabs.innerHTML = testStarts.map((_, tabIndex) =>
  `<button type="button" data-test-tab="${tabIndex}" aria-label="切换到第${tabIndex + 1}项测试"><span>${tabIndex + 1}</span></button>`
).join("");

function assetPath(folder, name) { return `./${folder}/${encodeURIComponent(name)}`; }
function clearFlowTimers() {
  countdownTimers.forEach(clearTimeout);
  countdownTimers = [];
  if (flowTimer) clearTimeout(flowTimer);
  flowTimer = null;
  if (liveTimer) clearInterval(liveTimer);
  liveTimer = null;
  flowStatus.classList.remove("show");
  flowStatus.textContent = "";
  liveTime.hidden = true;
}
function stopAudio() { narration.pause(); narration.currentTime = 0; }
function showFlowStatus(message, duration = 1800) {
  flowStatus.textContent = message;
  flowStatus.classList.add("show");
  setTimeout(() => flowStatus.classList.remove("show"), duration);
}
function playAudio(name) {
  if (!voiceEnabled || !name) return;
  stopAudio();
  narration.src = assetPath("audio", name);
  narration.play().catch(() => {});
}
function playCountdown() {
  stopAudio();
  [5,4,3,2,1].forEach((number, i) => {
    countdownTimers.push(setTimeout(() => {
      liveTime.textContent = number;
      narration.src = assetPath("audio", `countdown-${number}.mp3`);
      narration.play().catch(() => {});
    }, i * 1000));
  });
}
function startLiveTimer(mode) {
  if (!mode) return;
  liveTime.hidden = false;
  liveTime.style.setProperty("--timer-y", "248px");
  const startedAt = Date.now();
  const duration = mode === "down30" ? 30 : mode === "down10" ? 10 : mode === "down120" ? 120 : null;
  const update = () => {
    const elapsed = Math.floor((Date.now() - startedAt) / 1000);
    const total = duration === null ? elapsed : Math.max(0, duration - elapsed);
    const minutes = Math.floor(total / 60);
    const seconds = total % 60;
    liveTime.textContent = `${String(minutes).padStart(2,"0")} : ${String(seconds).padStart(2,"0")}`;
  };
  update();
  liveTimer = setInterval(update, 200);
}
function scheduleScreenAudio(screen) {
  if (screen.autoAudio) playAudio(screen.autoAudio);
  (screen.delayedAudio || []).forEach(item => {
    countdownTimers.push(setTimeout(() => {
      if (screens[index] === screen) playAudio(item.audio);
    }, item.after));
  });
}
function renderScreen() {
  clearFlowTimers();
  stopAudio();
  detailView.hidden = true;
  stage.hidden = false;
  stage.scrollTop = 0;
  const screen = screens[index];
  renderTestTabs();
  formHotspots.hidden = index !== 4;
  primaryActionHotspot.hidden = !primaryActionScreens.has(index);
  speechHotspot.hidden = !screen.manualAudio;
  if (screen.manualAudio) speechHotspot.style.setProperty("--speech-y", `${screen.speechY || 420}px`);
  image.classList.add("is-loading");
  image.src = assetPath("screens", screen.image);
  progressText.textContent = `${index + 1}/${screens.length}`;
  if (screen.countdown) {
    liveTime.classList.add("countdown");
    liveTime.hidden = false;
    liveTime.style.setProperty("--timer-y", "365px");
    liveTime.textContent = "5";
    playCountdown();
  } else {
    liveTime.classList.remove("countdown");
    scheduleScreenAudio(screen);
    startLiveTimer(screen.timer);
  }
  if (screen.autoNext) {
    showFlowStatus(screen.countdown ? "倒计时结束后自动开始" : "正在自动记录…", Math.min(screen.autoNext - 200, 1800));
    flowTimer = setTimeout(() => next(true), screen.autoNext);
  }
  history.replaceState(null, "", `#step=${index + 1}`);
}
function currentTestIndex() {
  if (selectedTestTab !== null && testStarts[selectedTestTab] === index) return selectedTestTab;
  return testRanges.findIndex(([start, end], tabIndex) =>
    tabIndex !== 1 && index >= start && index < end
  );
}
function renderTestTabs() {
  const active = currentTestIndex();
  testTabs.hidden = active < 0;
  testTabs.querySelectorAll("button").forEach((button, tabIndex) => {
    button.classList.toggle("active", tabIndex === active);
    button.classList.toggle("completed", tabIndex < active);
    button.setAttribute("aria-current", tabIndex === active ? "step" : "false");
  });
}
function jumpToTest(tabIndex) {
  const target = testStarts[tabIndex];
  if (target === undefined) return;
  clearFlowTimers();
  stopAudio();
  index = target;
  selectedTestTab = tabIndex;
  renderScreen();
  showFlowStatus(`已切换到第 ${tabIndex + 1} 项测试`);
}
function showFormFeedback(message) {
  formFeedback.textContent = message;
  formFeedback.classList.add("show");
  clearTimeout(showFormFeedback.timer);
  showFormFeedback.timer = setTimeout(() => formFeedback.classList.remove("show"), 1100);
}
function renderFormData() {
  const units = { age:"岁", height:"厘米", weight:"公斤" };
  Object.keys(units).forEach(field => {
    formHotspots.querySelector(`[data-value-for="${field}"]`).textContent = `${formData[field]}${units[field]}`;
  });
  formHotspots.querySelectorAll('[data-form="gender"]').forEach(button =>
    button.classList.toggle("selected", button.dataset.value === formData.gender)
  );
  formHotspots.querySelectorAll('[data-form="habit"]').forEach(button =>
    button.classList.toggle("selected", button.dataset.value === formData.habit)
  );
}
function next(fromAuto = false) {
  if (screens[index].autoNext && !fromAuto) {
    showFlowStatus("此页面将自动进入下一步");
    return;
  }
  if (screens[index].report) return showDetail();
  if (index < screens.length - 1) { index += 1; renderScreen(); }
}
function back() {
  clearFlowTimers();
  if (index > 0) { index -= 1; renderScreen(); }
}
function metricHtml(item) {
  const [name,score,level,tone] = item;
  return `<div class="metric"><span>${name}</span><span class="bar"><i></i><i></i><i></i><i></i><em class="pin ${tone}" style="left:${score}%"></em></span><span class="score ${tone}">${score}分</span><span class="level ${tone}">${level}</span></div>`;
}
function showDetail() {
  clearFlowTimers();
  stopAudio();
  stage.hidden = true;
  detailView.hidden = false;
  detailView.scrollTop = 0;
  const abilities = detailGroups.map(group => `<article class="ability-card"><div class="ability-side"><img src="./assets/${group.icon}" alt=""><span>${group.name}</span></div><div class="ability-data">${group.items.map(metricHtml).join("")}</div></article>`).join("");
  const tests = detailTests.map(test => `<article class="test-card"><div class="test-head"><b>${test[0]}</b><span class="test-tag ${test[5]}">${test[1]}</span></div><div class="test-result">您的成绩：<strong>${test[2]}</strong></div><div class="copy"><span>评</span><div><b>评价</b><p>${test[3]}</p></div></div><div class="copy advice"><span>荐</span><div><b>建议</b><p>${test[4]}</p></div></div></article>`).join("");
  detailView.innerHTML = `<header class="detail-header"><img src="./assets/report-avatar.png" alt="用户头像"><div><div class="user-line"><b>用户1204</b><span>男</span><span>62岁</span></div><div class="detail-date">2026年7月27日完成测评</div></div></header><main class="report-card"><h2 class="section-title">八项能力总览</h2><div class="ability-list">${abilities}</div><h2 class="section-title tests-title">单项测试详情</h2>${tests}<section class="summary"><h3>总体分析</h3><p class="good"><b>您的优势</b><br>肌肉力量充沛，心肺耐力良好</p><p class="medium"><b>建议关注</b><br>加强动态平衡，增加上肢柔韧练习</p></section><button class="save-report" data-action="save">保存报告</button></main><footer class="detail-actions"><button data-action="back-report">返回</button><button class="prescription" data-action="prescription">查看运动处方 →</button></footer>`;
  history.replaceState(null, "", "#detail");
}
function toast(message) {
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  document.body.appendChild(node);
  setTimeout(() => node.remove(), 1700);
}

document.querySelector("#startButton").addEventListener("click", () => { welcomeMask.hidden = true; renderScreen(); });
document.querySelector("#nextButton").addEventListener("click", next);
document.querySelector("#backButton").addEventListener("click", back);
primaryActionHotspot.addEventListener("click", next);
speechHotspot.addEventListener("click", () => {
  const audio = screens[index].manualAudio;
  if (!audio) return;
  if (!narration.paused) {
    stopAudio();
    showFlowStatus("朗读已暂停");
  } else {
    playAudio(audio);
    showFlowStatus("正在朗读，再点一次暂停");
  }
});
image.addEventListener("click", () => {
  if (index === 29 || index === 33) next();
});
testTabs.addEventListener("click", event => {
  const button = event.target.closest("[data-test-tab]");
  if (button) jumpToTest(Number(button.dataset.testTab));
});
formHotspots.addEventListener("click", event => {
  const control = event.target.closest("[data-form]");
  if (!control) return;
  const field = control.dataset.form;
  if (field === "submit") {
    next();
    return;
  }
  if (control.dataset.delta) {
    const limits = { age:[50,79], height:[150,200], weight:[35,150] };
    const [min, max] = limits[field];
    formData[field] = Math.max(min, Math.min(max, formData[field] + Number(control.dataset.delta)));
    const unit = field === "age" ? "岁" : field === "height" ? "厘米" : "公斤";
    showFormFeedback(`${field === "age" ? "年龄" : field === "height" ? "身高" : "体重"}：${formData[field]}${unit}`);
  } else {
    formData[field] = control.dataset.value;
    showFormFeedback(`${field === "gender" ? "性别" : "运动习惯"}：${formData[field]}`);
  }
  renderFormData();
});
document.querySelector("#voiceButton").addEventListener("click", event => {
  voiceEnabled = !voiceEnabled;
  event.currentTarget.textContent = voiceEnabled ? "语音开" : "语音关";
  if (!voiceEnabled) stopAudio();
});
image.addEventListener("load", () => image.classList.remove("is-loading"));
image.addEventListener("error", () => {
  image.classList.remove("is-loading");
  showFlowStatus("页面图片加载失败，请检查网络后重试", 3000);
});
detailView.addEventListener("click", event => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "back-report") { detailView.hidden = true; stage.hidden = false; index = screens.length - 1; renderScreen(); }
  if (action === "save") toast("演示报告已保存");
  if (action === "prescription") toast("运动处方演示即将开放");
});
window.addEventListener("hashchange", () => {
  const match = location.hash.match(/^#step=(\d+)$/);
  if (match) {
    const target = Number(match[1]) - 1;
    if (target >= 0 && target < screens.length && target !== index) { index = target; renderScreen(); }
  }
});
window.addEventListener("keydown", event => {
  if (!welcomeMask.hidden || !detailView.hidden) return;
  if (event.key === "ArrowRight" || event.key === "Enter") next();
  if (event.key === "ArrowLeft") back();
  if (/^[1-8]$/.test(event.key)) jumpToTest(Number(event.key) - 1);
});
const initialStep = location.hash.match(/^#step=(\d+)$/);
if (initialStep) {
  const target = Number(initialStep[1]) - 1;
  if (target >= 0 && target < screens.length) index = target;
}
renderScreen();

const screens = [
  { image: "介绍页.png" },
  { image: "注意事项.png", manualAudio: "notice-speech.mp3", speechX: 120, speechY: 160, speechWidth: 160 },
  { image: "准备物品.png", manualAudio: "goods-speech.mp3", speechX: 120, speechY: 160, speechWidth: 160 },
  { image: "填写预告.png", manualAudio: "preface-speech.mp3", speechX: 240, speechY: 435, speechWidth: 145 },
  { image: "填写信息.png" },
  { image: "信息录入-开始前.png", manualAudio: "ready-speech.mp3", speechX: 240, speechY: 545, speechWidth: 145 },
  { image: "握力测试 1.png", manualAudio: "grip-speech.mp3", speechY: 420 },
  { image: "开始前倒计时.png", countdown: true, autoNext: 5000 },
  { image: "计时中.png", timer: "up" },
  { image: "完成.png" },
  { image: "2分钟踏步测试.png", manualAudio: "test-two-intro-speech.mp3", speechY: 420 },
  { image: "2分钟踏步测试前倒计时五秒.png", countdown: true, autoNext: 5000 },
  { image: "2分钟踏步测试中.png", timer: "down120", autoNext: 110000, autoAudio: "test-start-speech.mp3" },
  { image: "2分钟踏步测试剩 10 秒.png", timer: "down10", autoNext: 10000, autoAudio: "test-three-ten-speech.mp3" },
  { image: "2分钟踏步测试完成.png" },
  { image: "最长发声时间测试.png", manualAudio: "test-four-intro-speech.mp3", speechY: 420 },
  { image: "最长发声时间测试倒计时 5 秒.png", countdown: true, autoNext: 5000 },
  { image: "最长发声时间测试中.png", timer: "up", autoAudio: "test-start-speech.mp3" },
  { image: "发声测试完成.png" },
  { image: "单腿站立测试.png", manualAudio: "test-five-intro-speech.mp3", speechY: 420 },
  { image: "单腿站立测试前倒计时 5 秒.png", countdown: true, autoNext: 5000 },
  { image: "单腿站立测试中.png", timer: "up", autoAudio: "test-start-speech.mp3" },
  { image: "单腿站立测试完成.png" },
  { image: "计时走测试.png", manualAudio: "test-six-intro-speech.mp3", speechY: 420 },
  { image: "计时走测试前倒计时 5 秒.png", countdown: true, autoNext: 5000 },
  { image: "计时走测试中.png", timer: "up", autoAudio: "test-start-speech.mp3" },
  { image: "计时走测试完成.png" },
  { image: "坐位体前屈测试.png", manualAudio: "test-seven-intro-speech.mp3", speechY: 420 },
  { image: "坐位体前屈测试中.png", manualAudio: "test-seven-timer-speech-v2.mp3", autoAudio: "test-seven-timer-speech-v2.mp3", speechY: 420 },
  { image: "坐位体前屈测试结果选择.png" },
  { image: "坐位体前屈测试结果已记录.png", autoNext: 1600 },
  { image: "肩屈曲测试.png", manualAudio: "test-eight-intro-speech.mp3", speechY: 420 },
  { image: "肩屈曲测试中.png", autoAudio: "test-eight-first-speech.mp3" },
  { image: "肩屈曲测试选择结果.png" },
  { image: "肩屈曲测试结果记录.png", autoNext: 1600 },
  { image: "获取报告.png" },
  { image: "评估生成中.png", autoNext: 5000 },
  { image: "综合评估结果.png", report: true }
];
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
const savedTestTab = sessionStorage.getItem("assessmentSelectedTestTab");
let selectedTestTab = savedTestTab === null ? null : Number(savedTestTab);
let liveTimer = null;
const resultChoices = { 29: 0, 33: 0 };
const compactDemoScreens = new Set([6,10,15,19,23,27,31]);
const compactDemoImages = new Map([
  [6,"示例页-握力测试.png"],
  [15,"示例页-最长发声时间测试.png"],
  [19,"示例页-单腿站立测试.png"],
  [23,"示例页-计时走测试.png"],
  [27,"示例页-坐位体前屈测试.png"],
  [31,"示例页-肩屈曲测试.png"]
]);
let stepRepetitions = 45;
let chairRepetitions = 6;
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
const dynamicTestPanel = document.querySelector("#dynamicTestPanel");
const dynamicComplete = document.querySelector("#dynamicComplete");
const chairTestView = document.querySelector("#chairTestView");
const resultChoiceView = document.querySelector("#resultChoiceView");
const compactDemoCaption = document.querySelector("#compactDemoCaption");
const compactDemoCaptionButton = compactDemoCaption.querySelector(".caption-image-button");
const gripPrompt = document.querySelector("#gripPrompt");
const timerTestPrompt = document.querySelector("#timerTestPrompt");
const testVideoOverlay = document.querySelector("#testVideoOverlay");
const loadingRingOverlay = document.querySelector("#loadingRingOverlay");
const voiceResultCopy = document.querySelector("#voiceResultCopy");
const repsControl = document.querySelector("#repsControl");
const repsValue = document.querySelector("#repsValue");
const recordedOverlay = document.querySelector("#recordedOverlay");
const reportReturnOverlay = document.querySelector("#reportReturnOverlay");
const primaryActionHotspot = document.querySelector("#primaryActionHotspot");
const reportDetailHotspot = document.querySelector("#reportDetailHotspot");
const nextButton = document.querySelector("#nextButton");
const primaryActionScreens = new Set([0, 1, 2, 3, 5, 6, 9, 10, 15, 19, 23, 27, 28, 31, 32, 35]);

testTabs.innerHTML = testStarts.map((_, tabIndex) =>
  `<button type="button" data-test-tab="${tabIndex}" aria-label="切换到第${tabIndex + 1}项测试"><span>${tabIndex + 1}</span></button>`
).join("");

function assetPath(folder, name) { return `./${folder}/${encodeURIComponent(name)}`; }
const countdownVoicePlayers = new Map([1,2,3,4,5].map(number => {
  const player = new Audio(assetPath("audio", `countdown-${number}.mp3`));
  player.preload = "auto";
  return [number, player];
}));
function selectTestTab(tabIndex) {
  selectedTestTab = tabIndex;
  if (tabIndex === null) sessionStorage.removeItem("assessmentSelectedTestTab");
  else sessionStorage.setItem("assessmentSelectedTestTab", String(tabIndex));
}
function clearFlowTimers() {
  countdownTimers.forEach(clearTimeout);
  countdownTimers = [];
  if (flowTimer) clearTimeout(flowTimer);
  flowTimer = null;
  if (liveTimer) clearInterval(liveTimer);
  liveTimer = null;
  flowStatus.classList.remove("show");
  flowStatus.textContent = "";
  dynamicTestPanel.hidden = true;
  recordedOverlay.hidden = true;
  reportReturnOverlay.hidden = true;
  narration.onended = null;
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
function currentManualAudio() {
  if (index === 10) {
    if (selectedTestTab === 1) return "test-two-intro-speech.mp3";
    if (selectedTestTab === 2) return "test-three-intro-speech.mp3";
  }
  return screens[index].manualAudio;
}
function playCountdown() {
  stopAudio();
  [5,4,3,2,1].forEach((number, i) => {
    countdownTimers.push(setTimeout(() => {
      liveTime.textContent = number;
      if (!voiceEnabled) return;
      const player = countdownVoicePlayers.get(number);
      player.currentTime = 0;
      player.play().catch(() => {});
    }, i * 1000));
  });
}
function startLiveTimer(mode) {
  if (!mode) return;
  dynamicTestPanel.hidden = false;
  dynamicTestPanel.classList.remove("countdown");
  dynamicTestPanel.classList.toggle("precise-timer", [12, 13, 17, 21, 25].includes(index));
  dynamicTestPanel.classList.toggle("lower-timer", [12, 13, 17].includes(index));
  dynamicTestPanel.classList.toggle("fixed-timer", index === 12 || index === 13);
  dynamicTestPanel.classList.toggle("grip-timer", index === 8);
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
  chairTestView.hidden = true;
  renderResultChoice();
  gripPrompt.hidden = index !== 8;
  gripPrompt.classList.remove("show", "second");
  if (index === 8) {
    let secondPromptShown = false;
    let secondPromptFallback = null;
    const showSecondPrompt = () => {
      if (secondPromptShown || index !== 8) return;
      secondPromptShown = true;
      if (secondPromptFallback) clearTimeout(secondPromptFallback);
      gripPrompt.classList.remove("show");
      countdownTimers.push(setTimeout(() => {
        if (index !== 8) return;
        gripPrompt.classList.add("second");
        gripPrompt.querySelector("img").src = "./assets/无法继续时提示气泡.png";
        gripPrompt.classList.add("show");
        playAudio("timer-second-speech.mp3");
      }, 340));
    };
    gripPrompt.querySelector("img").src = "./assets/请尽力保持这个姿势气泡.png";
    countdownTimers.push(setTimeout(() => {
      if (index !== 8) return;
      gripPrompt.classList.add("show");
      playAudio("timer-speech.mp3");
      narration.onended = () => countdownTimers.push(setTimeout(showSecondPrompt, 1000));
      secondPromptFallback = setTimeout(showSecondPrompt, 3800);
      countdownTimers.push(secondPromptFallback);
    }, 1000));
  }
  const timerPromptConfig = index === 21
    ? ["单腿站立提示气泡.png", "test-five-timer-speech.mp3"]
    : index === 25
      ? ["计时走测试中提示气泡.png", "test-six-timer-speech.mp3"]
      : null;
  timerTestPrompt.hidden = !timerPromptConfig;
  timerTestPrompt.classList.remove("show");
  if (timerPromptConfig) {
    timerTestPrompt.querySelector("img").src = `./assets/${timerPromptConfig[0]}`;
    countdownTimers.push(setTimeout(() => {
      if (![21, 25].includes(index)) return;
      timerTestPrompt.classList.add("show");
      playAudio(timerPromptConfig[1]);
    }, 1000));
  }
  testVideoOverlay.hidden = !([10, 11, 12].includes(index) && selectedTestTab !== 1);
  compactDemoCaption.hidden = !compactDemoScreens.has(index);
  loadingRingOverlay.hidden = index !== 36;
  voiceResultCopy.hidden = true;
  repsControl.hidden = index !== 14;
  repsValue.textContent = selectedTestTab === 1 ? chairRepetitions : stepRepetitions;
  primaryActionHotspot.hidden = !primaryActionScreens.has(index);
  reportDetailHotspot.hidden = !screen.report;
  nextButton.hidden = Boolean(screen.report);
  stage.classList.toggle("report-mode", Boolean(screen.report));
  stage.classList.toggle("chair-timer-active", index === 12 && selectedTestTab === 1);
  if (index === 2) {
    primaryActionHotspot.style.top = "630px";
    primaryActionHotspot.style.bottom = "auto";
  } else if (index === 3) {
    primaryActionHotspot.style.top = "65%";
    primaryActionHotspot.style.bottom = "auto";
  } else {
    primaryActionHotspot.style.top = "auto";
    primaryActionHotspot.style.bottom = "104px";
  }
  speechHotspot.hidden = !screen.manualAudio || compactDemoScreens.has(index);
  if (screen.manualAudio) {
    speechHotspot.style.setProperty("--speech-x", `${screen.speechX ?? 7}px`);
    speechHotspot.style.setProperty("--speech-y", `${screen.speechY || 420}px`);
    speechHotspot.style.setProperty("--speech-width", `${screen.speechWidth || 72}px`);
  }
  image.classList.add("is-loading");
  const backgroundIndex = screen.countdown ? index - 1 : index;
  let displayImage = screen.countdown ? screens[index - 1].image : screen.image;
  if (backgroundIndex === 10) {
    displayImage = selectedTestTab === 1 ? "示例页-30秒坐站测试.png" : "示例页-2分钟踏步测试.png";
  } else if (compactDemoImages.has(backgroundIndex)) {
    displayImage = compactDemoImages.get(backgroundIndex);
  }
  if (index === 8) displayImage = "计时页-握力测试无计时器气泡.png";
  if (index === 12 && selectedTestTab === 1) displayImage = "计时页-30秒坐站测试.png";
  if (index === 14 && selectedTestTab === 1) displayImage = "站坐测试完成.png";
  if (index === 21) displayImage = "计时页-单腿站立测试中.png";
  if (index === 25) displayImage = "计时页-计时走测试中.png";
  image.src = assetPath("screens", displayImage);
  progressText.textContent = `${index + 1}/${screens.length}`;
  if (screen.countdown) {
    stage.scrollTop = 0;
    dynamicTestPanel.hidden = false;
    dynamicTestPanel.classList.add("countdown");
    dynamicTestPanel.classList.remove("precise-timer");
    dynamicTestPanel.classList.remove("lower-timer", "fixed-timer");
    liveTime.textContent = "5";
    playCountdown();
  } else {
    dynamicTestPanel.classList.remove("countdown");
    scheduleScreenAudio(screen);
    if (index === 12 && selectedTestTab === 1) {
      countdownTimers.push(setTimeout(() => {
        if (index === 12 && selectedTestTab === 1) playAudio("test-two-timer-speech.mp3");
      }, 2000));
      countdownTimers.push(setTimeout(() => {
        if (index === 12 && selectedTestTab === 1) playAudio("test-two-ten-speech.mp3");
      }, 20000));
    }
    if (index === 14) {
      const resultAudio = selectedTestTab === 1 ? "test-two-result-speech.mp3" : "test-three-result-speech.mp3";
      countdownTimers.push(setTimeout(() => {
        if (index === 14) playAudio(resultAudio);
      }, 1000));
    }
    if (index === 32) {
      narration.onended = () => {
        narration.onended = null;
        countdownTimers.push(setTimeout(() => {
          if (index === 32) playAudio("test-eight-second-speech.mp3");
        }, 1000));
      };
    }
    startLiveTimer(index === 12 && selectedTestTab === 1 ? "down30" : screen.timer);
  }
  const autoNextDelay = index === 12 && selectedTestTab === 1 ? 30000 : screen.autoNext;
  if (autoNextDelay) {
    showFlowStatus(screen.countdown ? "倒计时结束后自动开始" : "正在自动记录…", Math.min(autoNextDelay - 200, 1800));
    flowTimer = setTimeout(() => {
      if (index === 12 && selectedTestTab === 1) {
        index = 14;
        renderScreen();
      } else {
        next(true);
      }
    }, autoNextDelay);
  }
  history.replaceState(null, "", `#step=${index + 1}`);
}
function renderResultChoice() {
  const isFlex = index === 29;
  const isShoulder = index === 33;
  resultChoiceView.hidden = !isFlex && !isShoulder;
  if (!isFlex && !isShoulder) return;
  const options = isFlex
    ? ["手离脚尖还有较远距离", "手快碰到脚尖", "手指能碰到脚尖", "手指超过脚尖"]
    : ["", "", "", ""];
  const prefix = isFlex ? "flex" : "shoulder";
  const cards = options.map((label, optionIndex) => {
    const value = optionIndex + 1;
    const selected = value === resultChoices[index];
    return `<button type="button" class="result-choice-card ${selected ? "selected" : ""}" data-choice="${value}" aria-label="选择第 ${value} 张图片" aria-pressed="${selected}"><img class="choice-image" src="./assets/${prefix}-choice-${value}.jpg" alt="${label || `肩屈曲动作 ${value}`}"><img class="choice-radio-image" src="./assets/${prefix}-radio-${selected ? "selected" : "default"}.png" alt="">${isFlex ? `<span>${label}</span>` : ""}</button>`;
  }).join("");
  resultChoiceView.className = `result-choice-view ${isFlex ? "flex-choice" : "shoulder-choice"}`;
  resultChoiceView.innerHTML = `<div class="${isFlex ? "result-choice-grid" : "shoulder-choice-grid"}">${cards}</div><button type="button" class="result-choice-submit" data-choice-submit>提交</button>`;
}
function currentTestIndex() {
  if (selectedTestTab === 1 && index >= 10 && index < 15) return 1;
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
  selectTestTab(tabIndex);
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
  if (screens[index].report) return;
  if (index === 9) {
    selectTestTab(1);
    index = 10;
    renderScreen();
    return;
  }
  if (selectedTestTab === 1 && index === 14) {
    selectTestTab(2);
    index = testStarts[2];
    renderScreen();
    return;
  }
  if (index < screens.length - 1) { index += 1; renderScreen(); }
}
function back() {
  if (screens[index].report) {
    reportReturnOverlay.hidden = false;
    return;
  }
  clearFlowTimers();
  if (index > 0) { index -= 1; renderScreen(); }
}
function goHome() {
  clearFlowTimers();
  stopAudio();
  selectTestTab(null);
  index = 0;
  renderScreen();
}
function metricHtml(item) {
  const [name,score,level,tone] = item;
  return `<div class="ability-row-detail"><span class="ability-name">${name}</span><span class="ability-track"><i></i><i></i><i></i><i></i><em class="ability-marker ${tone}" style="left:${score}%"><b></b></em></span><span class="ability-score ${tone}">${score}分</span><span class="ability-level ${tone}">${level}</span></div>`;
}
function showDetail() {
  clearFlowTimers();
  stopAudio();
  stage.hidden = true;
  detailView.hidden = false;
  detailView.scrollTop = 0;
  const abilities = detailGroups.map(group => `<article class="ability-group"><div class="ability-group-title"><img src="./assets/${group.icon}" alt=""><span>${group.name}</span></div><div class="ability-group-data">${group.items.map(metricHtml).join("")}</div></article>`).join("");
  const tests = detailTests.map(test => `<article class="detail-test-card"><div class="test-card-head"><strong>${test[0]}</strong><span class="test-level ${test[5]}">${test[1]}</span></div><div class="test-result">您的成绩：<strong>${test[2]}</strong></div><div class="test-copy"><span class="copy-mark good">评</span><div><strong>评价</strong><span>${test[3]}</span></div></div><div class="test-copy"><span class="copy-mark medium">荐</span><div><strong>建议</strong><span>${test[4]}</span></div></div></article>`).join("");
  detailView.innerHTML = `<header class="detail-mini-header"><button data-action="back-report" aria-label="返回"><img src="./assets/icon-back.svg" alt=""></button><h1>老年人体适能测评</h1></header><div class="detail-report-page"><div class="detail-report-scroll"><div class="detail-report-content"><section class="detail-hero"><img class="detail-avatar" src="./assets/report-avatar.png" alt="用户头像"><div class="detail-user"><div class="detail-user-line"><strong>用户1204</strong><span>男</span><span>62岁</span></div><div class="detail-date">2026年7月27日完成测评</div></div></section><main class="detail-sheet"><h2 class="detail-section-title">八项能力总览</h2><div class="ability-groups">${abilities}</div><h2 class="detail-section-title test-detail-heading">单项测试详情</h2>${tests}<section class="detail-summary-card"><h3 class="summary-title">总体分析</h3><p class="summary-block good"><strong>您的优势</strong><span>肌肉力量充沛，心肺耐力良好</span></p><p class="summary-block medium"><strong>建议关注</strong><span>加强动态平衡，增加上肢柔韧练习</span></p></section><button class="detail-save-report" data-action="save">保存报告</button><div class="detail-bottom-space"></div></main></div></div><footer class="detail-actions"><button data-action="back-report">返回</button><button class="detail-primary-action" data-action="prescription">查看运动处方 <span>→</span></button></footer></div>`;
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
nextButton.addEventListener("click", () => {
  if (index === 1) goHome();
  else next();
});
document.querySelector("#backButton").addEventListener("click", back);
reportReturnOverlay.addEventListener("click", event => {
  const action = event.target.closest("[data-report-return]")?.dataset.reportReturn;
  if (action === "no") reportReturnOverlay.hidden = true;
  if (action === "yes") {
    reportReturnOverlay.hidden = true;
    goHome();
  }
});
primaryActionHotspot.addEventListener("click", next);
reportDetailHotspot.addEventListener("click", showDetail);
dynamicComplete.addEventListener("click", () => next(true));
document.querySelector("#chairStartButton").addEventListener("click", () => {
  index = 11;
  renderScreen();
});
stage.addEventListener("click", event => {
  if (event.target !== image || !primaryActionScreens.has(index)) return;
  const bounds = stage.getBoundingClientRect();
  if (event.clientY - bounds.top > bounds.height * 0.56) next();
});
speechHotspot.addEventListener("click", () => {
  const audio = currentManualAudio();
  if (!audio) return;
  if (!narration.paused) {
    stopAudio();
    showFlowStatus("朗读已暂停");
  } else {
    playAudio(audio);
    showFlowStatus("正在朗读，再点一次暂停");
  }
});
compactDemoCaptionButton.addEventListener("click", () => {
  const audio = currentManualAudio();
  if (!audio) return;
  if (!narration.paused) {
    stopAudio();
    showFlowStatus("朗读已暂停");
  } else {
    playAudio(audio);
    showFlowStatus("正在播放语音讲解");
  }
});
image.addEventListener("click", () => {
  if (index === 29 || index === 33) next();
});
testTabs.addEventListener("click", event => {
  const button = event.target.closest("[data-test-tab]");
  if (button) jumpToTest(Number(button.dataset.testTab));
});
resultChoiceView.addEventListener("click", event => {
  const choice = event.target.closest("[data-choice]");
  if (choice) {
    resultChoices[index] = Number(choice.dataset.choice);
    renderResultChoice();
    return;
  }
  if (!event.target.closest("[data-choice-submit]")) return;
  if (!resultChoices[index]) {
    toast("请先选择一张图片");
    return;
  }
  resultChoices[index] = 0;
  next();
});
repsControl.addEventListener("click", event => {
  const deltaButton = event.target.closest("[data-reps-delta]");
  if (deltaButton) {
    const delta = Number(deltaButton.dataset.repsDelta);
    if (selectedTestTab === 1) {
      chairRepetitions = Math.max(0, Math.min(99, chairRepetitions + delta));
      repsValue.textContent = chairRepetitions;
    } else {
      stepRepetitions = Math.max(0, Math.min(999, stepRepetitions + delta));
      repsValue.textContent = stepRepetitions;
    }
    return;
  }
  if (event.target.closest("[data-reps-submit]")) {
    clearFlowTimers();
    stopAudio();
    stage.scrollTop = 0;
    recordedOverlay.hidden = false;
    flowTimer = setTimeout(() => {
      recordedOverlay.hidden = true;
      const nextTab = selectedTestTab === 1 ? 2 : 3;
      selectTestTab(nextTab);
      index = testStarts[nextTab];
      renderScreen();
    }, 2000);
  }
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

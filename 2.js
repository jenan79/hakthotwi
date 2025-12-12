// Icons (SVG strings)
const ICONS = {
    fingerprint: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fingerprint"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M21 12a9 9 0 1 1-18 0"/><path d="M12 2v2"/><path d="M12 20a2 2 0 0 1-2 2c-1 0-1.39-.53-1.68-1.04"/><path d="M17.8 7.4a6.5 6.5 0 0 0-11.6 0"/><path d="M15 11a3 3 0 1 0-5.2 1.6"/></svg>',
    shieldCheck: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
    activity: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
    clock: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    mapPin: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    wifi: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wifi"><path d="M12 2a10 10 0 0 1 10 10 4 4 0 0 1-5 5 4 4 0 0 1-5-5 10 10 0 0 0-10-10"/><path d="M12 12a5 5 0 1 0 5 5"/></svg>',
    checkCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle-2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',
    alertTriangle: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
    shieldAlert: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-alert"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',
    phone: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    refresh: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-cw"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>'
};

const STEPS = [
    { id: 'nav', label: 'Checking Navigation Speed', icon: ICONS.activity },
    { id: 'seq', label: 'Checking Step Sequence', icon: ICONS.arrowRight },
    { id: 'timing', label: 'Checking Action Timing', icon: ICONS.clock },
    { id: 'geo', label: 'Checking Geographic Location', icon: ICONS.mapPin },
    { id: 'net', label: 'Checking Network Location', icon: ICONS.wifi },
];

// State
let state = {
    view: 'login', // login, verification
    currentStep: 0,
    failedStep: null,
    isFinished: false
};

// DOM Elements
const views = {
    login: document.getElementById('view-login'),
    verification: document.getElementById('view-verification')
};

const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
const stepsContainer = document.getElementById('steps-list');
const progressBar = document.getElementById('progress-bar');
const resultContainer = document.getElementById('result-container');
const stepsWrapper = document.getElementById('steps-wrapper');

// Initial Setup
function init() {
    renderIcons();

    loginForm.addEventListener('submit', handleLogin);
}

// Render static icons
function renderIcons() {
    document.querySelectorAll('[data-icon]').forEach(el => {
        const iconName = el.getAttribute('data-icon');
        if (ICONS[iconName]) {
            el.innerHTML = ICONS[iconName];
        }
    });
}

// Handlers
function handleLogin(e) {
    e.preventDefault();

    // Set loading state
    const btnText = loginBtn.querySelector('span');
    const originalText = btnText.textContent;
    btnText.textContent = "Verifying...";
    loginBtn.disabled = true;

    // Simulate network delay
    setTimeout(() => {
        switchView('verification');
        startVerification();
    }, 800);
}

function switchView(viewName) {
    state.view = viewName;

    if (viewName === 'login') {
        views.login.classList.remove('hidden');
        views.verification.classList.add('hidden');

        // Reset login button
        loginBtn.disabled = false;
        loginBtn.querySelector('span').textContent = "Initiate Secure Login";
    } else {
        views.login.classList.add('hidden');
        views.verification.classList.remove('hidden');
    }
}

function startVerification() {
    // Reset UI
    stepsContainer.innerHTML = '';
    progressBar.style.width = '0%';
    progressBar.classList.remove('failed');
    resultContainer.innerHTML = '';
    resultContainer.classList.add('hidden');
    stepsWrapper.classList.remove('hidden');

    state.currentStep = 0;
    state.failedStep = null;
    state.isFinished = false;

    // Initialize steps in UI
    STEPS.forEach((step, index) => {
        const stepEl = document.createElement('div');
        stepEl.className = 'step-item';
        stepEl.id = `step-${index}`;
        stepEl.innerHTML = `
      <div class="step-left">
        <div class="step-icon">${step.icon}</div>
        <span class="step-label text-muted-foreground">${step.label}</span>
      </div>
      <div class="step-status"></div>
    `;
        stepsContainer.appendChild(stepEl);
    });

    // Random failure logic
    const willFail = Math.random() < 0.3;
    const failureIndex = willFail ? Math.floor(Math.random() * STEPS.length) : -1;

    processStep(0, failureIndex);
}

function processStep(index, failureIndex) {
    if (index >= STEPS.length) {
        finishVerification(failureIndex !== -1);
        return;
    }

    // Mark current step as active
    const currentStepEl = document.getElementById(`step-${index}`);
    currentStepEl.classList.add('active');
    const label = currentStepEl.querySelector('.step-label');
    label.textContent = `${STEPS[index].label}...`;
    label.classList.remove('text-muted-foreground');

    const statusEl = currentStepEl.querySelector('.step-status');
    statusEl.innerHTML = '<div class="spinner"></div>';

    // Update progress
    const progressPercent = ((index) / STEPS.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Simulate processing time
    setTimeout(() => {
        // Complete the step
        const isFailed = index === failureIndex;

        currentStepEl.classList.remove('active');
        currentStepEl.classList.add('completed');
        label.textContent = STEPS[index].label;

        if (isFailed) {
            currentStepEl.classList.add('failed');
            statusEl.innerHTML = `
        <span class="status-text-warning">
          Mismatch ${ICONS.alertTriangle}
        </span>
      `;
            state.failedStep = index;
        } else {
            currentStepEl.classList.add('success');
            statusEl.innerHTML = `
        <span class="status-text-success">
          Valid ${ICONS.checkCircle}
        </span>
      `;
        }

        // Move to next
        processStep(index + 1, failureIndex);
    }, 1200);
}

function finishVerification(hasFailed) {
    progressBar.style.width = '100%';

    if (hasFailed) {
        progressBar.classList.add('failed');
        showResult(false);
    } else {
        showResult(true);
    }
}

function showResult(isSuccess) {
    resultContainer.classList.remove('hidden');
    // Optional: Hide steps list to focus on result? No, design keeps them.
    // Actually, let's keep them visible as per original design.

    if (isSuccess) {
        resultContainer.innerHTML = `
      <div class="result-card">
        <div class="result-icon">
          ${ICONS.checkCircle}
        </div>
        <h2 class="result-title">AUTHORIZED ACCESS</h2>
        <p class="description" style="margin-bottom: 1.5rem">All security conditions have been successfully verified.</p>
        <button class="btn-primary" onclick="window.location.reload()">
          Proceed to Dashboard
        </button>
      </div>
    `;
    } else {
        resultContainer.innerHTML = `
      <div class="result-card failed">
        <div class="result-icon">
          ${ICONS.shieldAlert}
        </div>
        <h2 class="result-title">VERIFICATION REQUIRED</h2>
        <p class="description" style="margin-bottom: 1.5rem">We need to perform a verification call to confirm your identity.</p>
        
        <div class="btn-group">
          <button class="btn-primary">
            ${ICONS.phone} Start Call
          </button>
          <button class="btn-outline" onclick="startVerification()">
            ${ICONS.refresh} Retry
          </button>
        </div>
      </div>
    `;

        // Bind retry button again because innerHTML replaced it
        // Note: onclick inline attribute handles it for simplicity
    }
}

// Start
init();

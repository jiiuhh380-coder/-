
// ===== أيقونات الباصات SVG =====
const busIcons = {
    alsharif: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="15" width="100" height="50" rx="8" fill="#1565c0" stroke="#0d47a1" stroke-width="2"/>
        <rect x="15" y="22" width="25" height="18" rx="3" fill="#bbdefb" stroke="#0d47a1" stroke-width="1"/>
        <rect x="48" y="22" width="25" height="18" rx="3" fill="#bbdefb" stroke="#0d47a1" stroke-width="1"/>
        <rect x="81" y="22" width="22" height="18" rx="3" fill="#bbdefb" stroke="#0d47a1" stroke-width="1"/>
        <rect x="10" y="50" width="100" height="15" rx="0" fill="#0d47a1"/>
        <rect x="15" y="52" width="18" height="10" rx="2" fill="#64b5f6"/>
        <rect x="38" y="52" width="18" height="10" rx="2" fill="#64b5f6"/>
        <rect x="61" y="52" width="18" height="10" rx="2" fill="#64b5f6"/>
        <rect x="84" y="52" width="18" height="10" rx="2" fill="#64b5f6"/>
        <circle cx="30" cy="70" r="7" fill="#37474f" stroke="#263238" stroke-width="2"/>
        <circle cx="30" cy="70" r="3" fill="#78909c"/>
        <circle cx="90" cy="70" r="7" fill="#37474f" stroke="#263238" stroke-width="2"/>
        <circle cx="90" cy="70" r="3" fill="#78909c"/>
        <rect x="105" y="30" width="8" height="12" rx="2" fill="#ff9800"/>
        <rect x="7" y="30" width="8" height="12" rx="2" fill="#ff9800"/>
        <text x="60" y="48" text-anchor="middle" fill="#ffffff" font-size="8" font-weight="bold" font-family="Cairo">الشريف</text>
    </svg>`,

    hamrash: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="100" height="55" rx="12" fill="#c62828" stroke="#b71c1c" stroke-width="2"/>
        <rect x="16" y="17" width="30" height="20" rx="4" fill="#ffcdd2" stroke="#b71c1c" stroke-width="1"/>
        <rect x="52" y="17" width="30" height="20" rx="4" fill="#ffcdd2" stroke="#b71c1c" stroke-width="1"/>
        <rect x="10" y="48" width="100" height="17" rx="0" fill="#b71c1c"/>
        <rect x="16" y="50" width="20" height="12" rx="2" fill="#ef9a9a"/>
        <rect x="42" y="50" width="20" height="12" rx="2" fill="#ef9a9a"/>
        <rect x="68" y="50" width="20" height="12" rx="2" fill="#ef9a9a"/>
        <rect x="94" y="50" width="10" height="12" rx="2" fill="#ef9a9a"/>
        <circle cx="30" cy="70" r="7" fill="#37474f" stroke="#263238" stroke-width="2"/>
        <circle cx="30" cy="70" r="3" fill="#78909c"/>
        <circle cx="90" cy="70" r="7" fill="#37474f" stroke="#263238" stroke-width="2"/>
        <circle cx="90" cy="70" r="3" fill="#78909c"/>
        <rect x="105" y="28" width="8" height="14" rx="3" fill="#fdd835"/>
        <rect x="7" y="28" width="8" height="14" rx="3" fill="#fdd835"/>
        <text x="60" y="46" text-anchor="middle" fill="#ffffff" font-size="8" font-weight="bold" font-family="Cairo">حمرش</text>
    </svg>`,

    default: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="15" width="100" height="50" rx="6" fill="#2e7d32" stroke="#1b5e20" stroke-width="2"/>
        <rect x="16" y="22" width="22" height="16" rx="3" fill="#c8e6c9" stroke="#1b5e20" stroke-width="1"/>
        <rect x="44" y="22" width="22" height="16" rx="3" fill="#c8e6c9" stroke="#1b5e20" stroke-width="1"/>
        <rect x="72" y="22" width="32" height="16" rx="3" fill="#c8e6c9" stroke="#1b5e20" stroke-width="1"/>
        <rect x="10" y="50" width="100" height="15" rx="0" fill="#1b5e20"/>
        <rect x="16" y="52" width="20" height="10" rx="2" fill="#a5d6a7"/>
        <rect x="42" y="52" width="20" height="10" rx="2" fill="#a5d6a7"/>
        <rect x="68" y="52" width="20" height="10" rx="2" fill="#a5d6a7"/>
        <circle cx="30" cy="70" r="7" fill="#37474f" stroke="#263238" stroke-width="2"/>
        <circle cx="30" cy="70" r="3" fill="#78909c"/>
        <circle cx="90" cy="70" r="7" fill="#37474f" stroke="#263238" stroke-width="2"/>
        <circle cx="90" cy="70" r="3" fill="#78909c"/>
        <rect x="105" y="30" width="8" height="12" rx="2" fill="#ff9800"/>
        <rect x="7" y="30" width="8" height="12" rx="2" fill="#ff9800"/>
    </svg>`
};

// ===== بيانات الكراجات =====
const garagesData = {
    'حلب': [
        { id: 1, name: 'كراج الراموسة', city: 'حلب', icon: '🚐', description: 'كراج الراموسة - حلب' },
        { id: 2, name: 'كراج عفرين', city: 'حلب', icon: '🚌', description: 'كراج عفرين - حلب' },
        { id: 3, name: 'كراج اعزاز', city: 'حلب', icon: '🚍', description: 'كراج اعزاز - حلب' }
    ],
    'دمشق': [],
    'حمص': [],
    'حماة': [],
    'ادلب': []
};

// ===== بيانات الشركات =====
const companiesData = {
    'كراج عفرين': [
        {
            id: 1,
            name: 'شركة الشريف',
            garage: 'كراج عفرين',
            busIcon: 'alsharif',
            logo: 'شريف.jpg',
            description: 'شركة نقل مسافرين - خدمة متميزة',
            color: '#1565c0'
        },
        {
            id: 2,
            name: 'شركة حمرش',
            garage: 'كراج عفرين',
            busIcon: 'hamrash',
            description: 'شركة نقل مسافرين - راحة وأمان',
            color: '#c62828'
        },
        {
            id: 3,
            name: 'شركة الأمانة',
            garage: 'كراج عفرين',
            busIcon: 'default',
            description: 'شركة نقل مسافرين - أسعار مناسبة',
            color: '#2e7d32'
        }
    ],
    'كراج الراموسة': [],
    'كراج اعزاز': []
};

// ===== بيانات الرحلات =====
const tripsData = {
    'شركة الشريف': [
        {
            id: 1,
            tripNumber: 'SH-101',
            from: 'عفرين',
            to: 'دمشق',
            company: 'شركة الشريف',
            description: 'رحلة من عفرين إلى دمشق',
            icon: '🏛️',
            date: '2025-01-15',
            time: '06:00'
        },
        {
            id: 2,
            tripNumber: 'SH-102',
            from: 'عفرين',
            to: 'حمص',
            company: 'شركة الشريف',
            description: 'رحلة من عفرين إلى حمص',
            icon: '⛪',
            date: '2025-01-15',
            time: '07:30'
        },
        {
            id: 7,
            tripNumber: 'SH-103',
            from: 'عفرين',
            to: 'دمشق',
            company: 'شركة الشريف',
            description: 'رحلة من عفرين إلى دمشق',
            icon: '🏛️',
            date: '2025-01-16',
            time: '14:00'
        },
        {
            id: 8,
            tripNumber: 'SH-108',
            from: 'عفرين',
            to: 'حمص',
            company: 'شركة الشريف',
            description: 'رحلة من عفرين إلى حمص',
            icon: '⛪',
            date: '2025-01-17',
            time: '09:00'
        },
        {
            id: 11,
            tripNumber: 'SH-104',
            from: 'عفرين',
            to: 'حلب',
            company: 'شركة الشريف',
            description: 'رحلة من عفرين إلى حلب',
            icon: '🏰',
            date: '2025-01-15',
            time: '10:00'
        },
        {
            id: 12,
            tripNumber: 'SH-105',
            from: 'عفرين',
            to: 'حماة',
            company: 'شركة الشريف',
            description: 'رحلة من عفرين إلى حماة',
            icon: '🕌',
            date: '2025-01-16',
            time: '08:00'
        },
        {
            id: 13,
            tripNumber: 'SH-107',
            from: 'عفرين',
            to: 'دمشق',
            company: 'شركة الشريف',
            description: 'رحلة من عفرين إلى دمشق',
            icon: '🏛️',
            date: '2025-01-18',
            time: '18:00'
        },
        {
            id: 14,
            tripNumber: 'SH-106',
            from: 'عفرين',
            to: 'ادلب',
            company: 'شركة الشريف',
            description: 'رحلة من عفرين إلى ادلب',
            icon: '🌿',
            date: '2025-01-15',
            time: '12:00'
        }
    ],
    'شركة حمرش': [
        {
            id: 3,
            tripNumber: 'HM-201',
            from: 'عفرين',
            to: 'دمشق',
            company: 'شركة حمرش',
            description: 'رحلة من عفرين إلى دمشق',
            icon: '🏛️',
            date: '2025-01-15',
            time: '05:30'
        },
        {
            id: 4,
            tripNumber: 'HM-202',
            from: 'عفرين',
            to: 'حمص',
            company: 'شركة حمرش',
            description: 'رحلة من عفرين إلى حمص',
            icon: '⛪',
            date: '2025-01-15',
            time: '08:00'
        },
        {
            id: 9,
            tripNumber: 'HM-203',
            from: 'عفرين',
            to: 'دمشق',
            company: 'شركة حمرش',
            description: 'رحلة من عفرين إلى دمشق',
            icon: '🏛️',
            date: '2025-01-16',
            time: '16:30'
        },
        {
            id: 15,
            tripNumber: 'HM-204',
            from: 'عفرين',
            to: 'حلب',
            company: 'شركة حمرش',
            description: 'رحلة من عفرين إلى حلب',
            icon: '🏰',
            date: '2025-01-15',
            time: '11:00'
        },
        {
            id: 16,
            tripNumber: 'HM-205',
            from: 'عفرين',
            to: 'حماة',
            company: 'شركة حمرش',
            description: 'رحلة من عفرين إلى حماة',
            icon: '🕌',
            date: '2025-01-17',
            time: '07:00'
        },
        {
            id: 17,
            tripNumber: 'HM-206',
            from: 'عفرين',
            to: 'حمص',
            company: 'شركة حمرش',
            description: 'رحلة من عفرين إلى حمص',
            icon: '⛪',
            date: '2025-01-18',
            time: '15:00'
        }
    ],
    'شركة الأمانة': [
        {
            id: 5,
            tripNumber: 'AM-301',
            from: 'عفرين',
            to: 'دمشق',
            company: 'شركة الأمانة',
            description: 'رحلة من عفرين إلى دمشق',
            icon: '🏛️',
            date: '2025-01-15',
            time: '06:30'
        },
        {
            id: 6,
            tripNumber: 'AM-302',
            from: 'عفرين',
            to: 'حمص',
            company: 'شركة الأمانة',
            description: 'رحلة من عفرين إلى حمص',
            icon: '⛪',
            date: '2025-01-15',
            time: '09:00'
        },
        {
            id: 10,
            tripNumber: 'AM-303',
            from: 'عفرين',
            to: 'دمشق',
            company: 'شركة الأمانة',
            description: 'رحلة من عفرين إلى دمشق',
            icon: '🏛️',
            date: '2025-01-18',
            time: '10:00'
        },
        {
            id: 18,
            tripNumber: 'AM-304',
            from: 'عفرين',
            to: 'ادلب',
            company: 'شركة الأمانة',
            description: 'رحلة من عفرين إلى ادلب',
            icon: '🌿',
            date: '2025-01-15',
            time: '13:00'
        },
        {
            id: 19,
            tripNumber: 'AM-305',
            from: 'عفرين',
            to: 'حلب',
            company: 'شركة الأمانة',
            description: 'رحلة من عفرين إلى حلب',
            icon: '🏰',
            date: '2025-01-16',
            time: '09:30'
        },
        {
            id: 20,
            tripNumber: 'AM-306',
            from: 'عفرين',
            to: 'حماة',
            company: 'شركة الأمانة',
            description: 'رحلة من عفرين إلى حماة',
            icon: '🕌',
            date: '2025-01-17',
            time: '11:30'
        }
    ]
};

// ===== تفاصيل الرحلات =====
const tripDetailsData = {
    1: { // عفرين - دمشق | شركة الشريف
        busNumber: 'SH-101',
        busType: 'VIP 49 راكب',
        departureTime: '06:00 صباحاً',
        arrivalTime: '12:00 ظهراً',
        driverName: 'أبو أحمد',
        assistantName: 'أبو علي',
        totalSeats: 40,
        occupiedSeats: [3, 7, 12, 15, 22, 28, 33, 38],
        price: '25,000'
    },
    2: { // عفرين - حمص | شركة الشريف
        busNumber: 'SH-102',
        busType: 'سوبر باص',
        departureTime: '07:30 صباحاً',
        arrivalTime: '11:30 ظهراً',
        driverName: 'أبو محمود',
        assistantName: 'أبو حسين',
        totalSeats: 40,
        occupiedSeats: [2, 5, 9, 18, 25, 31, 36],
        price: '20,000'
    },
    3: { // عفرين - دمشق | شركة حمرش
        busNumber: 'HM-201',
        busType: 'باص سياحي',
        departureTime: '05:30 صباحاً',
        arrivalTime: '11:30 ظهراً',
        driverName: 'أبو عمر',
        assistantName: 'أبو سليمان',
        totalSeats: 40,
        occupiedSeats: [1, 4, 8, 11, 19, 24, 30, 35, 40],
        price: '22,000'
    },
    4: { // عفرين - حمص | شركة حمرش
        busNumber: 'HM-202',
        busType: 'VIP 49 راكب',
        departureTime: '08:00 صباحاً',
        arrivalTime: '12:00 ظهراً',
        driverName: 'أبو يوسف',
        assistantName: 'أبو زكريا',
        totalSeats: 40,
        occupiedSeats: [6, 13, 17, 21, 29, 34],
        price: '18,000'
    },
    5: { // عفرين - دمشق | شركة الأمانة
        busNumber: 'AM-301',
        busType: 'سوبر باص',
        departureTime: '06:30 صباحاً',
        arrivalTime: '12:30 ظهراً',
        driverName: 'أبو خالد',
        assistantName: 'أبو إبراهيم',
        totalSeats: 40,
        occupiedSeats: [2, 10, 14, 20, 26, 32, 37],
        price: '23,000'
    },
    6: { // عفرين - حمص | شركة الأمانة
        busNumber: 'AM-302',
        busType: 'باص مريح',
        departureTime: '09:00 صباحاً',
        arrivalTime: '01:00 ظهراً',
        driverName: 'أبو حسن',
        assistantName: 'أبو عبدالله',
        totalSeats: 40,
        occupiedSeats: [3, 8, 16, 23, 27, 39],
        price: '19,000'
    },
    7: { // عفرين - دمشق | شركة الشريف
        busNumber: 'SH-103',
        busType: 'باص سياحي',
        departureTime: '02:00 مساءً',
        arrivalTime: '08:00 مساءً',
        driverName: 'أبو سامي',
        assistantName: 'أبو نعيم',
        totalSeats: 40,
        occupiedSeats: [1, 5, 9, 14, 20, 26, 31, 37],
        price: '25,000'
    },
    8: { // عفرين - حمص | شركة الشريف
        busNumber: 'SH-104',
        busType: 'VIP 49 راكب',
        departureTime: '09:00 صباحاً',
        arrivalTime: '01:00 ظهراً',
        driverName: 'أبو فادي',
        assistantName: 'أبو ماجد',
        totalSeats: 40,
        occupiedSeats: [2, 7, 11, 18, 24, 30, 35],
        price: '20,000'
    },
    9: { // عفرين - دمشق | شركة حمرش
        busNumber: 'HM-203',
        busType: 'سوبر باص',
        departureTime: '04:30 مساءً',
        arrivalTime: '10:30 مساءً',
        driverName: 'أبو نادر',
        assistantName: 'أبو صلاح',
        totalSeats: 40,
        occupiedSeats: [3, 6, 12, 17, 22, 28, 33, 38],
        price: '22,000'
    },
    10: { // عفرين - دمشق | شركة الأمانة
        busNumber: 'AM-303',
        busType: 'باص مريح',
        departureTime: '10:00 صباحاً',
        arrivalTime: '04:00 مساءً',
        driverName: 'أبو رامي',
        assistantName: 'أبو لؤي',
        totalSeats: 40,
        occupiedSeats: [4, 10, 15, 21, 27, 32, 36],
        price: '23,000'
    },
    11: { // عفرين - حلب | شركة الشريف
        busNumber: 'SH-105',
        busType: 'باص مريح',
        departureTime: '10:00 صباحاً',
        arrivalTime: '11:30 صباحاً',
        driverName: 'أبو زياد',
        assistantName: 'أبو ثامر',
        totalSeats: 40,
        occupiedSeats: [2, 6, 11, 19, 25, 34],
        price: '8,000'
    },
    12: { // عفرين - حماة | شركة الشريف
        busNumber: 'SH-106',
        busType: 'سوبر باص',
        departureTime: '08:00 صباحاً',
        arrivalTime: '11:00 صباحاً',
        driverName: 'أبو كريم',
        assistantName: 'أبو حاتم',
        totalSeats: 40,
        occupiedSeats: [1, 5, 13, 20, 28, 35, 39],
        price: '15,000'
    },
    13: { // عفرين - دمشق | شركة الشريف
        busNumber: 'SH-107',
        busType: 'VIP 49 راكب',
        departureTime: '06:00 مساءً',
        arrivalTime: '12:00 منتصف الليل',
        driverName: 'أبو هشام',
        assistantName: 'أبو طلال',
        totalSeats: 40,
        occupiedSeats: [3, 8, 14, 19, 24, 30, 36, 40],
        price: '27,000'
    },
    14: { // عفرين - ادلب | شركة الشريف
        busNumber: 'SH-108',
        busType: 'باص مريح',
        departureTime: '12:00 ظهراً',
        arrivalTime: '01:30 ظهراً',
        driverName: 'أبو مصطفى',
        assistantName: 'أبو رشيد',
        totalSeats: 40,
        occupiedSeats: [5, 12, 18, 22, 29],
        price: '7,000'
    },
    15: { // عفرين - حلب | شركة حمرش
        busNumber: 'HM-204',
        busType: 'باص سياحي',
        departureTime: '11:00 صباحاً',
        arrivalTime: '12:30 ظهراً',
        driverName: 'أبو عادل',
        assistantName: 'أبو جمال',
        totalSeats: 40,
        occupiedSeats: [1, 7, 14, 21, 27, 33, 38],
        price: '7,500'
    },
    16: { // عفرين - حماة | شركة حمرش
        busNumber: 'HM-205',
        busType: 'VIP 49 راكب',
        departureTime: '07:00 صباحاً',
        arrivalTime: '10:00 صباحاً',
        driverName: 'أبو طارق',
        assistantName: 'أبو وائل',
        totalSeats: 40,
        occupiedSeats: [4, 9, 16, 23, 31, 37],
        price: '14,000'
    },
    17: { // عفرين - حمص | شركة حمرش
        busNumber: 'HM-206',
        busType: 'سوبر باص',
        departureTime: '03:00 مساءً',
        arrivalTime: '07:00 مساءً',
        driverName: 'أبو وسيم',
        assistantName: 'أبو عمار',
        totalSeats: 40,
        occupiedSeats: [2, 8, 15, 20, 26, 32, 39],
        price: '19,000'
    },
    18: { // عفرين - ادلب | شركة الأمانة
        busNumber: 'AM-304',
        busType: 'باص مريح',
        departureTime: '01:00 ظهراً',
        arrivalTime: '02:30 ظهراً',
        driverName: 'أبو أنس',
        assistantName: 'أبو حمزة',
        totalSeats: 40,
        occupiedSeats: [3, 10, 17, 24, 30],
        price: '6,500'
    },
    19: { // عفرين - حلب | شركة الأمانة
        busNumber: 'AM-305',
        busType: 'سوبر باص',
        departureTime: '09:30 صباحاً',
        arrivalTime: '11:00 صباحاً',
        driverName: 'أبو بلال',
        assistantName: 'أبو عزام',
        totalSeats: 40,
        occupiedSeats: [1, 6, 12, 18, 25, 31, 36, 40],
        price: '7,500'
    },
    20: { // عفرين - حماة | شركة الأمانة
        busNumber: 'AM-306',
        busType: 'باص سياحي',
        departureTime: '11:30 صباحاً',
        arrivalTime: '02:30 ظهراً',
        driverName: 'أبو سعيد',
        assistantName: 'أبو فهد',
        totalSeats: 40,
        occupiedSeats: [2, 7, 13, 19, 26, 33, 38],
        price: '14,500'
    }
};

// ===== المتغيرات العامة =====
let currentStep = 1;
let selectedCity = '';
let selectedGarage = null;
let selectedCompany = null;
let selectedTrip = null;
let selectedSeat = null;
let paymentMethod = null;
let customerInfo = null;
let currentTrips = [];
const totalSteps = 5;
const TOTAL_SEATS = 40;

// ===== التنقل بين الشاشات =====
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function enterAsCustomer() {
    showScreen('customer-screen');
    resetSteps();
    showCustomerTabs();
    loadAllCompanies();
    loadAllTrips();
}

function enterAsAdmin() {
    showScreen('admin-screen');
}

function enterAsOwner() {
    showScreen('owner-screen');
    loadOwnerDashboard();
}

function goBack() {
    showScreen('main-screen');
    resetSteps();
    hideCompanyBanner();
}

// ===== التبويبات الرئيسية =====
function showCustomerTabs() {
    const tabs = document.getElementById('customer-tabs');
    const tabsContent = document.querySelector('.customer-tabs-content');
    const bookingSteps = document.getElementById('booking-steps');

    if (tabs) tabs.style.display = 'flex';
    if (tabsContent) tabsContent.style.display = 'block';
    if (bookingSteps) bookingSteps.style.display = 'none';

    // إعادة التبويب النشط إلى الشركات
    switchCustomerTab('companies');
}

function showBookingSteps() {
    const tabs = document.getElementById('customer-tabs');
    const tabsContent = document.querySelector('.customer-tabs-content');
    const bookingSteps = document.getElementById('booking-steps');

    if (tabs) tabs.style.display = 'none';
    if (tabsContent) tabsContent.style.display = 'none';
    if (bookingSteps) bookingSteps.style.display = 'block';
}

function backToTabs() {
    showCustomerTabs();
    resetBookingData();
    hideCompanyBanner();
}

function switchCustomerTab(tab) {
    // تحديث التبويبات
    document.querySelectorAll('.customer-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

    const tabBtn = document.getElementById(`tab-${tab}`);
    const panel = document.getElementById(`panel-${tab}`);

    if (tabBtn) tabBtn.classList.add('active');
    if (panel) panel.classList.add('active');
}

// ===== تحميل جميع الشركات =====
function loadAllCompanies() {
    const grid = document.getElementById('all-companies-grid');
    if (!grid) return;

    grid.innerHTML = '';

    // جمع كل الشركات من جميع الكراجات
    let allCompanies = [];
    Object.values(companiesData).forEach(garageCompanies => {
        garageCompanies.forEach(company => {
            if (!allCompanies.find(c => c.id === company.id)) {
                allCompanies.push(company);
            }
        });
    });

    if (allCompanies.length === 0) {
        grid.innerHTML = `
            <div class="no-companies" style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <div class="no-icon">🚫</div>
                <p>لا توجد شركات متاحة حالياً</p>
            </div>
        `;
        return;
    }

    allCompanies.forEach(company => {
        const card = document.createElement('div');
        card.className = 'all-company-card';
        card.style.setProperty('--company-color', company.color);
        card.onclick = () => selectCompanyFromTab(company);

        // عدد رحلات الشركة
        const tripsCount = (tripsData[company.name] || []).length;

        // عرض الشعار أو أيقونة الباص
        let iconContent;
        if (company.logo) {
            iconContent = `<div class="company-logo-wrapper"><img src="${company.logo}" alt="${company.name}" class="company-logo-img"></div>`;
        } else {
            const iconSvg = busIcons[company.busIcon] || busIcons.default;
            iconContent = `<div class="company-bus-icon">${iconSvg}</div>`;
        }

        card.innerHTML = `
            ${iconContent}
            <h4>${company.name}</h4>
            <p class="company-desc">${company.description}</p>
            <div class="company-trips-count">
                <span>🚌</span>
                <span>${tripsCount} رحلة متاحة</span>
            </div>
            <span class="company-select-hint">اضغط لعرض الرحلات ←</span>
        `;

        grid.appendChild(card);
    });
}

// ===== تحميل جميع الرحلات =====
function loadAllTrips() {
    const list = document.getElementById('all-trips-list');
    if (!list) return;

    list.innerHTML = '';

    // جمع كل الرحلات من جميع الشركات
    let allTrips = [];
    Object.entries(tripsData).forEach(([companyName, companyTrips]) => {
        companyTrips.forEach(trip => {
            allTrips.push({ ...trip, companyName });
        });
    });

    // ترتيب حسب التاريخ والوقت
    allTrips.sort((a, b) => {
        if (a.date !== b.date) return a.date.localeCompare(b.date);
        return (a.time || '').localeCompare(b.time || '');
    });

    if (allTrips.length === 0) {
        list.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <div style="font-size: 40px; margin-bottom: 10px;">🚫</div>
                <p>لا توجد رحلات متاحة حالياً</p>
            </div>
        `;
        return;
    }

    allTrips.forEach(trip => {
        const details = tripDetailsData[trip.id];
        const dateObj = trip.date ? new Date(trip.date) : null;
        const dateFormatted = dateObj ? (`${String(dateObj.getDate()).padStart(2,'0')}/${String(dateObj.getMonth()+1).padStart(2,'0')}/${dateObj.getFullYear()}`) : '';
        const timeFormatted = trip.time ? formatTime12(trip.time) : '';

        // لون الشركة
        let companyColor = '#1565c0';
        const allCompanies = [];
        Object.values(companiesData).forEach(gc => gc.forEach(c => allCompanies.push(c)));
        const comp = allCompanies.find(c => c.name === trip.companyName);
        if (comp) companyColor = comp.color;

        const card = document.createElement('div');
        card.className = 'all-trip-card';
        card.style.setProperty('--company-color', companyColor);
        card.onclick = () => selectTripFromTab(trip, comp);

        card.innerHTML = `
            <div class="trip-company-badge" style="background: ${companyColor};">🚌 ${trip.companyName}</div>
            <div class="trip-route">
                <div class="trip-from">
                    <span class="trip-label">من</span>
                    <span class="trip-city">${trip.from}</span>
                </div>
                <div class="trip-arrow-container">
                    <div class="trip-dashed-line"></div>
                    <div class="trip-direction-arrow">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                    </div>
                    <div class="trip-dashed-line"></div>
                </div>
                <div class="trip-to">
                    <span class="trip-label">إلى</span>
                    <span class="trip-city">${trip.to}</span>
                </div>
            </div>
            <div class="trip-meta">
                <div class="trip-meta-item">
                    <span>📅</span> ${dateFormatted}
                </div>
                <div class="trip-meta-item">
                    <span>🕐</span> ${timeFormatted}
                </div>
                ${details?.busNumber ? `<div class="trip-meta-item trip-bus-number">
                    <span>🚌</span> <span style="color:#d32f2f;font-weight:800;">${details.busNumber}</span>
                </div>` : ''}
                ${details?.driverName ? `<div class="trip-meta-item">
                    <span>👤</span> ${details.driverName}
                </div>` : ''}
                ${details?.assistantName ? `<div class="trip-meta-item">
                    <span>🧑‍✈️</span> ${details.assistantName}
                </div>` : ''}
                ${details ? `<div class="trip-meta-item trip-price">
                    <span>💰</span> ${details.price} ل.س
                </div>` : ''}
            </div>
            <div class="trip-select-hint">اضغط لاختيار هذه الرحلة</div>
        `;

        list.appendChild(card);
    });

    // تحميل قائمة المدن
    loadCitiesDatalist();
}

// ===== اختيار شركة من التبويب =====
function selectCompanyFromTab(company) {
    selectedCompany = company;
    selectedTrip = null;
    selectedSeat = null;

    // الانتقال لعرض رحلات الشركة
    showBookingSteps();
    currentStep = 1;
    updateStepsUI();
    showStepContent(1);

    // عرض بانر الشركة
    showCompanyBanner(company);

    // تحميل تفاصيل الرحلة والمقاعد - نعرض رحلات الشركة
    loadTripsForCompany(company.name);
}

// ===== عرض بانر الشركة =====
function showCompanyBanner(company) {
    const banner = document.getElementById('company-banner');
    const bannerLogo = document.getElementById('company-banner-logo');
    const bannerName = document.getElementById('company-banner-name');
    const bannerDesc = document.getElementById('company-banner-desc');

    if (!banner) return;

    // تعيين اسم الشركة والوصف
    bannerName.textContent = company.name;
    bannerDesc.textContent = company.description || '';

    // تعيين شعار الشركة
    if (company.logo) {
        bannerLogo.innerHTML = `<img src="${company.logo}" alt="${company.name}">`;
    } else {
        const firstLetter = company.name.charAt(company.name.indexOf(' ') + 1) || company.name.charAt(0);
        bannerLogo.innerHTML = `<span class="banner-logo-letter">${firstLetter}</span>`;
    }

    // تعيين لون التدرج حسب الشركة
    const overlay = banner.querySelector('.company-banner-overlay');
    if (overlay && company.color) {
        overlay.style.background = `linear-gradient(135deg, ${company.color}cc 0%, ${company.color}66 50%, ${company.color}cc 100%)`;
    }

    // إظهار البانر
    banner.style.display = 'flex';
}

// ===== إخفاء بانر الشركة =====
function hideCompanyBanner() {
    const banner = document.getElementById('company-banner');
    if (banner) {
        banner.style.display = 'none';
    }
}

// ===== تحميل رحلات شركة معينة (للاختيار من التبويب) =====
function loadTripsForCompany(companyName) {
    const trips = tripsData[companyName] || [];
    if (trips.length > 0) {
        // اختيار أول رحلة كافتراضية
        const trip = trips[0];
        selectedTrip = trip;
        loadTripDetails(trip);
        loadSeats(trip);

        // عرض رحلات الشركة في القائمة المفلترة
        currentTrips = trips;
        renderTrips(trips);
    }
}

// ===== اختيار رحلة من التبويب =====
function selectTripFromTab(trip, company) {
    if (company) {
        selectedCompany = company;
    }
    selectedTrip = trip;
    selectedSeat = null;

    showBookingSteps();

    // عرض بانر الشركة
    if (company) {
        showCompanyBanner(company);
    }

    loadTripDetails(trip);
    loadSeats(trip);

    // إخفاء شريط الفلترة وقائمة الرحلات الأخرى
    const filterBar = document.querySelector('.search-filter-bar');
    const filteredList = document.getElementById('filtered-trips-list');
    const noTripsMsg = document.getElementById('no-trips-message');
    if (filterBar) filterBar.style.display = 'none';
    if (filteredList) filteredList.style.display = 'none';
    if (noTripsMsg) noTripsMsg.style.display = 'none';

    // الانتقال مباشرة لاختيار المقعد
    currentStep = 2;
    updateStepsUI();
    showStepContent(2);
}

// ===== إعادة تعيين بيانات الحجز =====
function resetBookingData() {
    selectedTrip = null;
    selectedSeat = null;
    paymentMethod = null;
    currentStep = 1;

    // إعادة تعيين الدفع
    document.querySelectorAll('.payment-card').forEach(card => {
        card.classList.remove('selected');
    });
    const shamcashDetails = document.getElementById('shamcash-details');
    const garagePayDetails = document.getElementById('garage-pay-details');
    if (shamcashDetails) shamcashDetails.style.display = 'none';
    if (garagePayDetails) garagePayDetails.style.display = 'none';

    // إعادة تعيين حقول النموذج
    const formFields = ['customer-firstname', 'customer-nickname', 'customer-father', 'customer-mother', 'customer-nationalid'];
    formFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.value = '';
            field.classList.remove('error');
        }
    });
    const formError = document.getElementById('form-error');
    if (formError) formError.style.display = 'none';
}

// ===== إدارة الخطوات =====
function goToStep(step) {
    currentStep = step;
    updateStepsUI();
    showStepContent(step);
}

function updateStepsUI() {
    // تحديث مؤشرات الخطوات
    for (let i = 1; i <= totalSteps; i++) {
        const indicator = document.getElementById(`step${i}-indicator`);
        if (!indicator) continue;
        indicator.classList.remove('active', 'completed');

        if (i < currentStep) {
            indicator.classList.add('completed');
        } else if (i === currentStep) {
            indicator.classList.add('active');
        }
    }

    // تحديث الخطوط بين الخطوات
    for (let i = 1; i < totalSteps; i++) {
        const line = document.getElementById(`line${i}`);
        if (line) {
            line.classList.toggle('active', currentStep > i);
        }
    }
}

function showStepContent(step) {
    document.querySelectorAll('.booking-steps .step-content').forEach(content => {
        content.classList.remove('active');
    });
    const stepContent = document.getElementById(`step${step}-content`);
    if (stepContent) {
        stepContent.classList.add('active');
    }
}

function resetSteps() {
    currentStep = 1;
    selectedCity = '';
    selectedGarage = null;
    selectedCompany = null;
    selectedTrip = null;
    selectedSeat = null;
    paymentMethod = null;
    updateStepsUI();
    showStepContent(1);

    // إعادة تعيين الدفع
    document.querySelectorAll('.payment-card').forEach(card => {
        card.classList.remove('selected');
    });
    const shamcashDetails = document.getElementById('shamcash-details');
    const garagePayDetails = document.getElementById('garage-pay-details');
    if (shamcashDetails) shamcashDetails.style.display = 'none';
    if (garagePayDetails) garagePayDetails.style.display = 'none';

    // إعادة تعيين حقول النموذج
    const formFields = ['customer-firstname', 'customer-nickname', 'customer-father', 'customer-mother', 'customer-nationalid'];
    formFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.value = '';
            field.classList.remove('error');
        }
    });
    const formError = document.getElementById('form-error');
    if (formError) formError.style.display = 'none';
}

// ===== اختيار المحافظة =====
function selectCity(city) {
    selectedCity = city;

    // تحديث مظهر البطاقات
    document.querySelectorAll('.city-card').forEach(card => {
        card.classList.remove('selected');
        if (card.querySelector('h4').textContent === city) {
            card.classList.add('selected');
        }
    });

    // الانتقال للخطوة التالية بعد تأخير قصير
    setTimeout(() => {
        loadGarages(city);
        goToStep(2);
    }, 300);
}

// ===== تحميل الكراجات =====
function loadGarages(city) {
    const garagesList = document.getElementById('garages-list');
    const cityNameSpan = document.getElementById('selected-city-name');

    cityNameSpan.textContent = city;
    garagesList.innerHTML = '';

    const garages = garagesData[city] || [];

    if (garages.length === 0) {
        garagesList.innerHTML = `
            <div class="no-garages">
                <div class="no-icon">🚫</div>
                <p>لا توجد كراجات متاحة حالياً للمحافظة المختارة</p>
            </div>
        `;
        return;
    }

    garages.forEach(garage => {
        const garageCard = document.createElement('div');
        garageCard.className = 'garage-card';
        garageCard.onclick = () => selectGarage(garage, garageCard);
        garageCard.innerHTML = `
            <div class="garage-icon">${garage.icon}</div>
            <div class="garage-info">
                <h4>${garage.name}</h4>
                <p>${garage.description}</p>
            </div>
            <div class="garage-arrow">←</div>
        `;
        garagesList.appendChild(garageCard);
    });
}

// ===== اختيار الكراج =====
function selectGarage(garage, cardElement) {
    selectedGarage = garage;

    // تحديث مظهر البطاقات
    document.querySelectorAll('.garage-card').forEach(card => {
        card.classList.remove('selected');
    });
    cardElement.classList.add('selected');

    // الانتقال للخطوة التالية بعد تأخير قصير
    setTimeout(() => {
        loadCompanies(garage.name);
        goToStep(3);
    }, 300);
}

// ===== تحميل الشركات =====
function loadCompanies(garageName) {
    const companiesList = document.getElementById('companies-list');
    const garageNameSpan = document.getElementById('selected-garage-name');

    garageNameSpan.textContent = garageName;
    companiesList.innerHTML = '';

    const companies = companiesData[garageName] || [];

    if (companies.length === 0) {
        companiesList.innerHTML = `
            <div class="no-companies">
                <div class="no-icon">🚫</div>
                <p>لا توجد شركات متاحة حالياً في هذا الكراج</p>
            </div>
        `;
        return;
    }

    companies.forEach(company => {
        const companyCard = document.createElement('div');
        companyCard.className = 'company-card';
        companyCard.onclick = () => selectCompany(company, companyCard);
        companyCard.style.setProperty('--company-color', company.color);
        companyCard.querySelector?.('::before')?.style?.setProperty('background', company.color);

        // عرض الشعار أو أيقونة الباص
        let iconContent;
        if (company.logo) {
            iconContent = `<div class="company-logo-wrapper"><img src="${company.logo}" alt="${company.name}" class="company-logo-img"></div>`;
        } else {
            const iconSvg = busIcons[company.busIcon] || busIcons.default;
            iconContent = `<div class="company-bus-icon">${iconSvg}</div>`;
        }

        companyCard.innerHTML = `
            ${iconContent}
            <h4>${company.name}</h4>
            <p class="company-desc">${company.description}</p>
            <span class="company-select-hint">اضغط للاختيار ←</span>
        `;

        // تعيين لون الشركة للشريط العلوي
        companyCard.style.cssText += `--company-color: ${company.color};`;
        const beforeStyle = document.createElement('style');
        beforeStyle.textContent = `
            .company-card[data-company-id="${company.id}"]::before { background: ${company.color}; }
        `;
        document.head.appendChild(beforeStyle);
        companyCard.setAttribute('data-company-id', company.id);

        companiesList.appendChild(companyCard);
    });

    // تحميل قائمة المدن
    loadCitiesDatalist();
}

// ===== تحميل قائمة المدن =====
function loadCitiesDatalist() {
    const datalist = document.getElementById('cities-datalist');
    if (!datalist) return;

    const cities = new Set();
    Object.values(tripsData).forEach(companyTrips => {
        companyTrips.forEach(trip => {
            cities.add(trip.from);
            cities.add(trip.to);
        });
    });

    datalist.innerHTML = '';
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        datalist.appendChild(option);
    });
}

// ===== البحث عن رحلات في جميع الشركات =====
function searchAllTrips() {
    const fromInput = document.getElementById('search-from').value.trim();
    const toInput = document.getElementById('search-to').value.trim();
    const dateInput = document.getElementById('search-date').value;
    const resultsContainer = document.getElementById('route-search-results');
    const resultsList = document.getElementById('route-results-list');
    const companiesWrapper = document.getElementById('companies-wrapper');
    const searchCount = document.getElementById('route-search-count');

    // إذا لم يتم إدخال أي شيء، إخفاء النتائج
    if (!fromInput && !toInput && !dateInput) {
        resultsContainer.style.display = 'none';
        companiesWrapper.style.display = 'block';
        searchCount.style.display = 'none';
        return;
    }

    // جمع كل الرحلات من جميع الشركات
    let allTrips = [];
    Object.entries(tripsData).forEach(([companyName, companyTrips]) => {
        companyTrips.forEach(trip => {
            allTrips.push({ ...trip, companyName });
        });
    });

    // فلترة حسب المدينة من
    if (fromInput) {
        allTrips = allTrips.filter(trip =>
            trip.from.includes(fromInput)
        );
    }

    // فلترة حسب المدينة إلى
    if (toInput) {
        allTrips = allTrips.filter(trip =>
            trip.to.includes(toInput)
        );
    }

    // فلترة حسب التاريخ
    if (dateInput) {
        allTrips = allTrips.filter(trip => trip.date === dateInput);
    }

    // ترتيب حسب التاريخ والوقت
    allTrips.sort((a, b) => {
        if (a.date !== b.date) return a.date.localeCompare(b.date);
        return (a.time || '').localeCompare(b.time || '');
    });

    // عرض النتائج
    resultsContainer.style.display = 'block';
    companiesWrapper.style.display = 'none';
    resultsList.innerHTML = '';

    if (allTrips.length === 0) {
        resultsList.innerHTML = `
            <div class="no-trips-message" style="display: block;">
                <div class="no-trips-icon">🔍</div>
                <h4>لا توجد رحلات مطابقة</h4>
                <p>جرّب تغيير معايير البحث</p>
            </div>
        `;
        searchCount.style.display = 'flex';
        searchCount.innerHTML = `🔍 لم يتم العثور على أي رحلة`;
        return;
    }

    searchCount.style.display = 'flex';
    searchCount.innerHTML = `🔍 تم العثور على <strong>${allTrips.length}</strong> رحلة`;

    allTrips.forEach(trip => {
        const details = tripDetailsData[trip.id];
        const dateObj = trip.date ? new Date(trip.date) : null;
        const dateFormatted = dateObj ? (`${String(dateObj.getDate()).padStart(2,'0')}/${String(dateObj.getMonth()+1).padStart(2,'0')}/${dateObj.getFullYear()}`) : '';
        const timeFormatted = trip.time ? formatTime12(trip.time) : '';

        // لون الشركة
        let companyColor = '#1565c0';
        const companies = companiesData[selectedGarage?.name || 'كراج عفرين'] || [];
        const comp = companies.find(c => c.name === trip.companyName);
        if (comp) companyColor = comp.color;

        const resultCard = document.createElement('div');
        resultCard.className = 'route-result-card';
        resultCard.style.setProperty('--company-color', companyColor);
        resultCard.onclick = () => {
            // اختيار الشركة والرحلة
            const company = companies.find(c => c.name === trip.companyName);
            if (company) {
                selectedCompany = company;
                selectedTrip = trip;
                selectedSeat = null;
                loadTripDetails(trip);
                loadSeats(trip);
                loadFilteredTrips(trip);
                goToStep(1);
            }
        };

        resultCard.innerHTML = `
            <div class="route-result-company" style="color: ${companyColor};">
                <span class="company-badge" style="background: ${companyColor};">${trip.companyName}</span>
            </div>
            <div class="route-result-route">
                <div class="route-city">
                    <span class="route-label">من</span>
                    <span class="route-city-name">${trip.from}</span>
                </div>
                <div class="route-arrow-line">
                    <div class="route-dash"></div>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="${companyColor}" stroke-width="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    <div class="route-dash"></div>
                </div>
                <div class="route-city">
                    <span class="route-label">إلى</span>
                    <span class="route-city-name">${trip.to}</span>
                </div>
            </div>
            <div class="route-result-meta">
                <span>📅 ${dateFormatted}</span>
                <span>🕐 ${timeFormatted}</span>
                ${details?.busNumber ? `<span>🚌 ${details.busNumber}</span>` : ''}
                ${details ? `<span>💰 ${details.price} ل.س</span>` : ''}
            </div>
            <div class="route-result-hint">اضغط لاختيار الرحلة</div>
        `;
        resultsList.appendChild(resultCard);
    });
}

// ===== تبديل المدن =====
function swapRouteCities() {
    const fromInput = document.getElementById('search-from');
    const toInput = document.getElementById('search-to');
    const temp = fromInput.value;
    fromInput.value = toInput.value;
    toInput.value = temp;
    searchAllTrips();
}

// ===== إعادة تعيين البحث =====
function resetRouteSearch() {
    document.getElementById('search-from').value = '';
    document.getElementById('search-to').value = '';
    document.getElementById('search-date').value = '';
    document.getElementById('route-search-count').style.display = 'none';
    document.getElementById('route-search-results').style.display = 'none';
    document.getElementById('companies-wrapper').style.display = 'block';
}

// ===== اختيار الشركة =====
function selectCompany(company, cardElement) {
    selectedCompany = company;

    // تحديث مظهر البطاقات
    document.querySelectorAll('.company-card').forEach(card => {
        card.classList.remove('selected');
    });
    cardElement.classList.add('selected');

    // الانتقال للخطوة التالية بعد تأخير قصير
    setTimeout(() => {
        loadTrips(company.name);
        goToStep(4);
    }, 300);
}

// ===== تحميل الرحلات =====
function loadTrips(companyName) {
    const tripsList = document.getElementById('trips-list');
    const companyNameSpan = document.getElementById('selected-company-name');

    companyNameSpan.textContent = companyName;
    tripsList.innerHTML = '';

    const trips = tripsData[companyName] || [];

    if (trips.length === 0) {
        tripsList.innerHTML = `
            <div class="no-trips">
                <div class="no-icon">🚫</div>
                <p>لا توجد رحلات متاحة حالياً في هذه الشركة</p>
            </div>
        `;
        return;
    }

    // عرض الرحلات في الخطوة 4
    trips.forEach(trip => {
        const tripCard = document.createElement('div');
        tripCard.className = 'trip-card';
        tripCard.onclick = () => selectTrip(trip, tripCard);

        const dateObj = trip.date ? new Date(trip.date) : null;
        const dateFormatted = dateObj ? (`${String(dateObj.getDate()).padStart(2,'0')}/${String(dateObj.getMonth()+1).padStart(2,'0')}/${dateObj.getFullYear()}`) : '';
        const timeFormatted = trip.time ? formatTime12(trip.time) : '';
        const details = tripDetailsData[trip.id];

        tripCard.innerHTML = `
            <div class="trip-route">
                <div class="trip-from">
                    <span class="trip-label">من</span>
                    <span class="trip-city">${trip.from}</span>
                </div>
                <div class="trip-arrow-container">
                    <div class="trip-dashed-line"></div>
                    <div class="trip-direction-arrow">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                    </div>
                    <div class="trip-dashed-line"></div>
                </div>
                <div class="trip-to">
                    <span class="trip-label">إلى</span>
                    <span class="trip-city">${trip.to}</span>
                </div>
            </div>
            <div class="trip-meta">
                <div class="trip-meta-item">
                    <span>📅</span> ${dateFormatted}
                </div>
                <div class="trip-meta-item">
                    <span>🕐</span> ${timeFormatted}
                </div>
                ${details?.busNumber ? `<div class="trip-meta-item trip-bus-number">
                    <span>🚌</span> <span style="color:#d32f2f;font-weight:800;">${details.busNumber}</span>
                </div>` : ''}
                ${details?.assistantName ? `<div class="trip-meta-item">
                    <span>🧑‍✈️</span> ${details.assistantName}
                </div>` : ''}
                ${details ? `<div class="trip-meta-item trip-price">
                    <span>💰</span> ${details.price} ل.س
                </div>` : ''}
            </div>
            <div class="trip-icon">${trip.icon}</div>
        `;
        tripsList.appendChild(tripCard);
    });
}

// ===== عرض الرحلات المفلترة داخل تفاصيل الرحلة =====
function renderTrips(trips) {
    const tripsList = document.getElementById('filtered-trips-list');
    const noTripsMsg = document.getElementById('no-trips-message');
    tripsList.innerHTML = '';

    if (trips.length === 0) {
        noTripsMsg.style.display = 'block';
        return;
    }
    noTripsMsg.style.display = 'none';

    trips.forEach(trip => {
        const tripCard = document.createElement('div');
        tripCard.className = 'trip-card filtered-trip-card';
        tripCard.onclick = () => selectFilteredTrip(trip);

        // تنسيق التاريخ
        const dateObj = trip.date ? new Date(trip.date) : null;
        const dateFormatted = dateObj ? (`${String(dateObj.getDate()).padStart(2,'0')}/${String(dateObj.getMonth()+1).padStart(2,'0')}/${dateObj.getFullYear()}`) : '';

        // تنسيق الوقت
        const timeFormatted = trip.time ? formatTime12(trip.time) : '';

        // هل هذه الرحلة المختارة حالياً؟
        const isSelected = selectedTrip && selectedTrip.id === trip.id;
        if (isSelected) tripCard.classList.add('selected');

        // تفاصيل الرحلة
        const details = tripDetailsData[trip.id];

        tripCard.innerHTML = `
            <div class="trip-route">
                <div class="trip-from">
                    <span class="trip-label">من</span>
                    <span class="trip-city">${trip.from}</span>
                </div>
                <div class="trip-arrow-container">
                    <div class="trip-dashed-line"></div>
                    <div class="trip-direction-arrow">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                    </div>
                    <div class="trip-dashed-line"></div>
                </div>
                <div class="trip-to">
                    <span class="trip-label">إلى</span>
                    <span class="trip-city">${trip.to}</span>
                </div>
            </div>
            <div class="trip-meta">
                <div class="trip-meta-item">
                    <span>📅</span> ${dateFormatted}
                </div>
                <div class="trip-meta-item">
                    <span>🕐</span> ${timeFormatted}
                </div>
                ${details?.busNumber ? `<div class="trip-meta-item trip-bus-number">
                    <span>🚌</span> <span style="color:#d32f2f;font-weight:800;">${details.busNumber}</span>
                </div>` : ''}
                ${details?.assistantName ? `<div class="trip-meta-item">
                    <span>🧑‍✈️</span> ${details.assistantName}
                </div>` : ''}
                ${details ? `<div class="trip-meta-item trip-price">
                    <span>💰</span> ${details.price} ل.س
                </div>` : ''}
            </div>
            ${isSelected ? '<div class="trip-selected-badge">✅ الرحلة المختارة</div>' : '<div class="trip-select-hint">اضغط لاختيار هذه الرحلة</div>'}
        `;
        tripsList.appendChild(tripCard);
    });
}

// ===== اختيار رحلة من القائمة المفلترة =====
function selectFilteredTrip(trip) {
    selectedTrip = trip;
    selectedSeat = null;

    // تحديث تفاصيل الرحلة
    loadTripDetails(trip);
    loadSeats(trip);

    // تحديث القائمة المفلترة
    renderTrips(currentTrips);
}

// ===== تنسيق الوقت 12 ساعة =====
function formatTime12(time24) {
    const [hours, minutes] = time24.split(':').map(Number);
    const period = hours >= 12 ? 'مساءً' : 'صباحاً';
    const hours12 = hours % 12 || 12;
    return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
}

// ===== فلترة الرحلات =====
function filterTrips() {
    const filterDate = document.getElementById('filter-date').value;
    const filterTimeFrom = document.getElementById('filter-time-from').value;
    const filterTimeTo = document.getElementById('filter-time-to').value;
    const resultCount = document.getElementById('filter-result-count');

    let filtered = [...currentTrips];
    let isFiltering = false;

    // فلترة بالتاريخ
    if (filterDate) {
        filtered = filtered.filter(trip => trip.date === filterDate);
        isFiltering = true;
    }

    // فلترة بالوقت من
    if (filterTimeFrom) {
        filtered = filtered.filter(trip => {
            if (!trip.time) return false;
            return trip.time >= filterTimeFrom;
        });
        isFiltering = true;
    }

    // فلترة بالوقت إلى
    if (filterTimeTo) {
        filtered = filtered.filter(trip => {
            if (!trip.time) return false;
            return trip.time <= filterTimeTo;
        });
        isFiltering = true;
    }

    // عرض النتائج
    renderTrips(filtered);

    // عرض عدد النتائج
    if (isFiltering) {
        resultCount.style.display = 'flex';
        resultCount.innerHTML = `🔍 تم العثور على <strong>${filtered.length}</strong> رحلة`;
    } else {
        resultCount.style.display = 'none';
    }
}

// ===== إعادة تعيين الفلتر =====
function resetFilter() {
    document.getElementById('filter-date').value = '';
    document.getElementById('filter-time-from').value = '';
    document.getElementById('filter-time-to').value = '';
    document.getElementById('filter-result-count').style.display = 'none';

    renderTrips(currentTrips);
}

// ===== اختيار الرحلة =====
function selectTrip(trip, cardElement) {
    selectedTrip = trip;
    selectedSeat = null;

    // تحديث مظهر البطاقات
    document.querySelectorAll('.trip-card').forEach(card => {
        card.classList.remove('selected');
    });
    cardElement.classList.add('selected');

    // الانتقال للخطوة التالية بعد تأخير قصير
    setTimeout(() => {
        loadTripDetails(trip);
        loadSeats(trip);

        // تحميل الرحلات ذات نفس المسار للفلترة
        loadFilteredTrips(trip);

        goToStep(1);
    }, 300);
}

// ===== تحميل الرحلات ذات نفس المسار =====
function loadFilteredTrips(currentTrip) {
    // جمع كل الرحلات من جميع الشركات التي لها نفس المسار
    let sameRouteTrips = [];
    Object.values(tripsData).forEach(companyTrips => {
        companyTrips.forEach(trip => {
            if (trip.from === currentTrip.from && trip.to === currentTrip.to) {
                sameRouteTrips.push(trip);
            }
        });
    });

    // ترتيب حسب التاريخ والوقت
    sameRouteTrips.sort((a, b) => {
        if (a.date !== b.date) return a.date.localeCompare(b.date);
        return (a.time || '').localeCompare(b.time || '');
    });

    currentTrips = sameRouteTrips;

    // إعادة تعيين الفلتر
    document.getElementById('filter-date').value = '';
    document.getElementById('filter-time-from').value = '';
    document.getElementById('filter-time-to').value = '';
    document.getElementById('filter-result-count').style.display = 'none';

    // عرض الرحلات
    renderTrips(currentTrips);
}

// ===== تحميل تفاصيل الرحلة =====
function loadTripDetails(trip) {
    const detailsCard = document.getElementById('trip-details-card');
    const details = tripDetailsData[trip.id];

    if (!details) {
        detailsCard.innerHTML = '<p>لا توجد تفاصيل متاحة</p>';
        return;
    }

    detailsCard.innerHTML = `
        <div class="trip-details-grid">
            <div class="detail-item">
                <div class="detail-icon">📅</div>
                <div class="detail-text">
                    <span class="detail-label">تاريخ الرحلة</span>
                    <span class="detail-value">${trip.date || 'غير محدد'}</span>
                </div>
            </div>
            <div class="detail-item">
                <div class="detail-icon">🔢</div>
                <div class="detail-text">
                    <span class="detail-label">رقم الباص</span>
                    <span class="detail-value" style="color:#d32f2f;font-weight:800;">${details.busNumber}</span>
                </div>
            </div>
            <div class="detail-item">
                <div class="detail-icon">🚌</div>
                <div class="detail-text">
                    <span class="detail-label">نوع الباص</span>
                    <span class="detail-value">${details.busType}</span>
                </div>
            </div>
            <div class="detail-item">
                <div class="detail-icon">🕐</div>
                <div class="detail-text">
                    <span class="detail-label">وقت الانطلاق</span>
                    <span class="detail-value">${details.departureTime}</span>
                </div>
            </div>
            <div class="detail-item">
                <div class="detail-icon">🕐</div>
                <div class="detail-text">
                    <span class="detail-label">وقت الوصول</span>
                    <span class="detail-value">${details.arrivalTime}</span>
                </div>
            </div>
            <div class="detail-item">
                <div class="detail-icon">👤</div>
                <div class="detail-text">
                    <span class="detail-label">اسم السائق</span>
                    <span class="detail-value">${details.driverName}</span>
                </div>
            </div>
            <div class="detail-item">
                <div class="detail-icon">🧑‍✈️</div>
                <div class="detail-text">
                    <span class="detail-label">اسم المعاون</span>
                    <span class="detail-value">${details.assistantName || 'غير محدد'}</span>
                </div>
            </div>
            <div class="detail-item">
                <div class="detail-icon">💺</div>
                <div class="detail-text">
                    <span class="detail-label">عدد الكراسي</span>
                    <span class="detail-value">${details.totalSeats} مقعد</span>
                </div>
            </div>
            <div class="detail-item">
                <div class="detail-icon">💰</div>
                <div class="detail-text">
                    <span class="detail-label">سعر التذكرة</span>
                    <span class="detail-value">${details.price} ل.س</span>
                </div>
            </div>
        </div>
    `;
}

// ===== تحميل خريطة المقاعد =====
function loadSeats(trip) {
    const seatsGrid = document.getElementById('seats-grid');
    const details = tripDetailsData[trip.id];
    seatsGrid.innerHTML = '';

    if (!details) return;

    const occupiedSeats = details.occupiedSeats || [];

    // تصميم المقاعد: 2 + ممر + 2 لكل صف
    // 40 مقعد = 10 صفوف × 4 مقاعد + ممر في المنتصف
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 5; col++) {
            // العمود الأوسط هو الممر
            if (col === 2) {
                const aisle = document.createElement('div');
                aisle.className = 'seat aisle';
                seatsGrid.appendChild(aisle);
                continue;
            }

            // حساب رقم المقعد: كل صف فيه 4 مقاعد (بدون الممر)
            // col 0,1 = يسار الممر، col 3,4 = يمين الممر
            const colSeatOffset = col < 2 ? col : col - 1;
            const seatNumber = row * 4 + colSeatOffset + 1;

            if (seatNumber > TOTAL_SEATS) break;

            const seat = document.createElement('div');
            const isOccupied = occupiedSeats.includes(seatNumber);

            seat.className = `seat ${isOccupied ? 'occupied' : 'available'}`;
            seat.textContent = seatNumber;
            seat.setAttribute('data-seat-number', seatNumber);

            if (!isOccupied) {
                seat.onclick = () => toggleSeat(seatNumber, seat);
            }

            seatsGrid.appendChild(seat);
        }
    }

    // إعادة تعيين معلومات الاختيار
    updateSeatSelectionInfo();
}

// ===== اختيار/إلغاء اختيار المقعد =====
function toggleSeat(seatNumber, seatElement) {
    // إزالة التحديد من جميع المقاعد
    document.querySelectorAll('.seat.selected').forEach(seat => {
        seat.classList.remove('selected');
        seat.classList.add('available');
    });

    // تحديد المقعد الجديد
    if (selectedSeat === seatNumber) {
        selectedSeat = null;
    } else {
        selectedSeat = seatNumber;
        seatElement.classList.remove('available');
        seatElement.classList.add('selected');
    }

    updateSeatSelectionInfo();

    // إظهار زر المتابعة عند اختيار المقعد
    const continueSection = document.getElementById('seat-continue-section');
    if (selectedSeat && continueSection) {
        continueSection.style.display = 'block';
    } else if (continueSection) {
        continueSection.style.display = 'none';
    }
}

// ===== تحديث معلومات اختيار المقعد =====
function updateSeatSelectionInfo() {
    const infoDiv = document.getElementById('seat-selection-info');

    if (selectedSeat) {
        infoDiv.className = 'seat-selection-info active';
        infoDiv.innerHTML = `✅ الكرسي المختار رقم <span class="selected-seat-number">${selectedSeat}</span>`;
    } else {
        infoDiv.className = 'seat-selection-info';
        infoDiv.innerHTML = '<span>👆 اضغط على مقعد متاح لاختياره</span>';
    }
}

// ===== إرسال معلومات الزبون =====
function submitCustomerInfo() {
    const firstName = document.getElementById('customer-firstname').value.trim();
    const nickname = document.getElementById('customer-nickname').value.trim();
    const fatherName = document.getElementById('customer-father').value.trim();
    const motherName = document.getElementById('customer-mother').value.trim();
    const nationalId = document.getElementById('customer-nationalid').value.trim();

    // إزالة أخطاء سابقة
    document.querySelectorAll('.form-group input').forEach(input => {
        input.classList.remove('error');
    });
    const errorDiv = document.getElementById('form-error');
    errorDiv.style.display = 'none';

    // التحقق من الحقول
    let errors = [];
    let hasError = false;

    if (!firstName) {
        document.getElementById('customer-firstname').classList.add('error');
        errors.push('الاسم');
        hasError = true;
    }
    if (!nickname) {
        document.getElementById('customer-nickname').classList.add('error');
        errors.push('الكنية');
        hasError = true;
    }
    if (!fatherName) {
        document.getElementById('customer-father').classList.add('error');
        hasError = true;
        errors.push('اسم الأب');
    }
    if (!motherName) {
        document.getElementById('customer-mother').classList.add('error');
        errors.push('اسم الأم');
        hasError = true;
    }
    if (!nationalId) {
        document.getElementById('customer-nationalid').classList.add('error');
        errors.push('الرقم الوطني');
        hasError = true;
    } else if (nationalId.length < 11 || !/^\d+$/.test(nationalId)) {
        document.getElementById('customer-nationalid').classList.add('error');
        errors.push('الرقم الوطني (يجب أن يكون 11 رقم)');
        hasError = true;
    }

    if (hasError) {
        errorDiv.style.display = 'flex';
        errorDiv.innerHTML = `⚠️ يرجى ملء الحقول التالية: ${errors.join(' - ')}`;
        return;
    }

    // حفظ معلومات الزبون
    customerInfo = {
        firstName,
        nickname,
        fatherName,
        motherName,
        nationalId
    };

    // الانتقال لخطوة الدفع
    goToStep(4);
}

// ===== اختيار طريقة الدفع =====
function selectPayment(method) {
    paymentMethod = method;

    // تحديث مظهر بطاقات الدفع
    document.querySelectorAll('.payment-card').forEach(card => {
        card.classList.remove('selected');
    });

    const shamcashDetails = document.getElementById('shamcash-details');
    const garagePayDetails = document.getElementById('garage-pay-details');

    if (method === 'shamcash') {
        document.getElementById('payment-shamcash').classList.add('selected');
        shamcashDetails.style.display = 'block';
        garagePayDetails.style.display = 'none';

        // عرض سعر التذكرة
        if (selectedTrip) {
            const details = tripDetailsData[selectedTrip.id];
            if (details) {
                document.getElementById('payment-amount').textContent = details.price + ' ل.س';
            }
        }
    } else if (method === 'garage') {
        document.getElementById('payment-garage').classList.add('selected');
        shamcashDetails.style.display = 'none';
        garagePayDetails.style.display = 'block';
    }
}

// ===== نسخ رقم الحساب =====
function copyAccountNumber() {
    const accountNumber = document.getElementById('company-account-number').textContent;
    navigator.clipboard.writeText(accountNumber).then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        copyBtn.classList.add('copied');
        copyBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6L9 17l-5-5"/>
            </svg>
        `;
        setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2"/>
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                </svg>
            `;
        }, 2000);
    }).catch(() => {
        // Fallback for browsers that don't support clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = accountNumber;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    });
}


// ===== تأكيد الحجز =====
function confirmBooking() {
    // التحقق من اختيار طريقة الدفع
    if (!paymentMethod) {
        showToast('⚠️', 'يرجى اختيار طريقة الدفع أولاً');
        return;
    }

    // التحقق من وجود بيانات الرحلة والمقعد
    if (!selectedTrip || !selectedSeat) {
        showToast('⚠️', 'يرجى إعادة الحجز من البداية');
        return;
    }

    // التحقق من بيانات الزبون
    if (!customerInfo) {
        showToast('⚠️', 'يرجى إعادة الحجز من البداية');
        return;
    }

    // تحديد مفتاح الشركة في ownerBookingsData
    // نستخدم selectedCompany أولاً لأنه الأدق (تم اختياره صراحةً)
    // ثم نعود لـ selectedTrip كخيار بديل
    const companyName = (selectedCompany && selectedCompany.name) || selectedTrip.companyName || selectedTrip.company;
    let companyKey = null;
    for (const [key, config] of Object.entries(ownerCompaniesConfig)) {
        if (config.name === companyName) {
            companyKey = key;
            break;
        }
    }

    // إذا لم تُوجد الشركة في حساب الصاحب، نضيفها
    if (!companyKey) {
        companyKey = companyName.replace(/\s/g, '').replace(/شركة/g, '').trim().toLowerCase();
        ownerCompaniesConfig[companyKey] = {
            name: companyName,
            desc: selectedTrip.description || companyName,
            color: '#1565c0',
            gradient: 'linear-gradient(135deg, #1565c0, #1a73e8)',
            logo: '<div class="owner-logo-placeholder"><span>' + companyName.charAt(companyName.indexOf(' ') + 1) + '</span></div>'
        };
        ownerBookingsData[companyKey] = [];
    }

    // توليد رقم حجز جديد
    const existingBookings = ownerBookingsData[companyKey] || [];
    let maxNum = 0;
    existingBookings.forEach(b => {
        const num = parseInt(b.id.replace('BK-', ''));
        if (num > maxNum) maxNum = num;
    });
    const bookingId = 'BK-' + String(maxNum + 1).padStart(4, '0');

    // استخدام رقم الرحلة من الرحلة المختارة
    const tripNumber = selectedTrip.tripNumber || (selectedTrip.id ? String(selectedTrip.id) : '---');

    // تنسيق طريقة الدفع
    const paymentMethodLabel = paymentMethod === 'shamcash' ? 'شام كاش' : 'دفع في الكراج';

    // تنسيق السعر
    const tripDetails = tripDetailsData[selectedTrip.id];
    const price = tripDetails ? tripDetails.price : '---';

    // وقت الحجز
    const now = new Date();
    const bookedAt = now.getFullYear() + '-' +
        String(now.getMonth() + 1).padStart(2, '0') + '-' +
        String(now.getDate()).padStart(2, '0') + ' ' +
        String(now.getHours()).padStart(2, '0') + ':' +
        String(now.getMinutes()).padStart(2, '0');

    // إنشاء كائن الحجز
    const newBooking = {
        id: bookingId,
        tripNumber: tripNumber,
        customerName: customerInfo.firstName + ' ' + customerInfo.fatherName + (customerInfo.nickname ? ' ' + customerInfo.nickname : ''),
        nickname: customerInfo.nickname,
        motherName: customerInfo.motherName,
        nationalId: customerInfo.nationalId,
        from: selectedTrip.from,
        to: selectedTrip.to,
        date: selectedTrip.date,
        time: selectedTrip.time,
        seatNumber: selectedSeat,
        price: price,
        status: paymentMethod === 'shamcash' ? 'confirmed' : 'pending',
        paymentMethod: paymentMethodLabel,
        bookedAt: bookedAt,
        company: companyName
    };

    // 1. إضافة الحجز لبيانات الشركة
    if (!ownerBookingsData[companyKey]) {
        ownerBookingsData[companyKey] = [];
    }
    ownerBookingsData[companyKey].push(newBooking);

    // 2. تحديث المقاعد المحجوزة
    if (tripDetailsData[selectedTrip.id]) {
        if (!tripDetailsData[selectedTrip.id].occupiedSeats.includes(selectedSeat)) {
            tripDetailsData[selectedTrip.id].occupiedSeats.push(selectedSeat);
        }
    }

    // 3. حفظ البيانات في localStorage
    saveBookings();
    saveTripDetails();

    // 4. عرض شاشة تأكيد الحجز
    showBookingConfirmation(newBooking);

    // 5. تحديث لوحة صاحب الشركة إذا كانت مفتوحة
    if (currentOwnerCompany === companyKey) {
        populateTripNumbers();
        resetOwnerFilter();
    }

    // 6. تحديث بادج حجوزاتي
    updateBookingsBadge();
}

// ===== عرض شاشة تأكيد الحجز =====
function showBookingConfirmation(booking) {
    const detailsDiv = document.getElementById('confirmation-details');

    // تنسيق التاريخ
    const dateObj = new Date(booking.date);
    const dateFormatted = (`${String(dateObj.getDate()).padStart(2,'0')}/${String(dateObj.getMonth()+1).padStart(2,'0')}/${dateObj.getFullYear()}`);

    // تنسيق الوقت
    const timeParts = booking.time.split(':');
    const hours = parseInt(timeParts[0]);
    const minutes = timeParts[1];
    const period = hours >= 12 ? 'مساءً' : 'صباحاً';
    const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
    const timeFormatted = displayHours + ':' + minutes + ' ' + period;

    // حالة الحجز
    const statusLabel = booking.status === 'confirmed' ? 'تم الدفع' : 'بانتظار الدفع';
    const statusIcon = booking.status === 'confirmed' ? '✅' : '⏳';
    const statusColor = booking.status === 'confirmed' ? '#2e7d32' : '#e65100';

    detailsDiv.innerHTML = `
        <div class="conf-status-banner" style="background: rgba(0,0,0,0.5); border-right: 5px solid ${statusColor};">
            <span class="conf-status-icon">${statusIcon}</span>
            <div class="conf-status-text">
                <span class="conf-status-label" style="color: ${statusColor};">${statusLabel}</span>
                <span class="conf-status-id">رقم الحجز: <strong>${booking.id}</strong></span>
            </div>
        </div>

        <div class="conf-section">
            <div class="conf-section-title">معلومات الرحلة</div>
            <div class="conf-route-card">
                <div class="conf-route-city">
                    <span class="conf-route-label">من</span>
                    <span class="conf-route-name">${booking.from}</span>
                </div>
                <div class="conf-route-arrow">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="${statusColor}" stroke-width="2.5">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                </div>
                <div class="conf-route-city">
                    <span class="conf-route-label">إلى</span>
                    <span class="conf-route-name">${booking.to}</span>
                </div>
            </div>
            <div class="conf-details-grid">
                <div class="conf-detail-item">
                    <span class="conf-detail-icon">📅</span>
                    <div>
                        <span class="conf-detail-label">التاريخ</span>
                        <span class="conf-detail-value">${dateFormatted}</span>
                    </div>
                </div>
                <div class="conf-detail-item">
                    <span class="conf-detail-icon">🕐</span>
                    <div>
                        <span class="conf-detail-label">وقت الانطلاق</span>
                        <span class="conf-detail-value">${timeFormatted}</span>
                    </div>
                </div>
                <div class="conf-detail-item">
                    <span class="conf-detail-icon">💺</span>
                    <div>
                        <span class="conf-detail-label">رقم المقعد</span>
                        <span class="conf-detail-value conf-highlight">${booking.seatNumber}</span>
                    </div>
                </div>
                <div class="conf-detail-item">
                    <span class="conf-detail-icon">💰</span>
                    <div>
                        <span class="conf-detail-label">سعر التذكرة</span>
                        <span class="conf-detail-value conf-price">${booking.price} ل.س</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="conf-section">
            <div class="conf-section-title">معلومات الزبون</div>
            <div class="conf-details-grid">
                <div class="conf-detail-item">
                    <span class="conf-detail-icon">👤</span>
                    <div>
                        <span class="conf-detail-label">الاسم</span>
                        <span class="conf-detail-value">${booking.customerName}</span>
                    </div>
                </div>
                <div class="conf-detail-item">
                    <span class="conf-detail-icon">⭐</span>
                    <div>
                        <span class="conf-detail-label">الشهرة</span>
                        <span class="conf-detail-value">${booking.nickname || '---'}</span>
                    </div>
                </div>
                <div class="conf-detail-item">
                    <span class="conf-detail-icon">🪪</span>
                    <div>
                        <span class="conf-detail-label">الرقم الوطني</span>
                        <span class="conf-detail-value" dir="ltr">${booking.nationalId}</span>
                    </div>
                </div>
                <div class="conf-detail-item">
                    <span class="conf-detail-icon">💳</span>
                    <div>
                        <span class="conf-detail-label">طريقة الدفع</span>
                        <span class="conf-detail-value">${booking.paymentMethod}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    // الانتقال لشاشة تأكيد الحجز (الخطوة 5)
    goToStep(5);
}


// ===== حجوزاتي (داخل شاشة الزبون) =====
let customerBookingsList = [];
let customerBookingsFilterStatus = 'all';

// تبديل عرض قسم حجوزاتي
function toggleMyBookings() {
    const panel = document.getElementById('my-bookings-panel');
    const stepsIndicator = document.querySelector('.steps-indicator');
    const stepsContent = document.querySelector('.steps-content');
    const headerTitle = document.getElementById('customer-header-title');
    const toggleBtn = document.getElementById('my-bookings-toggle-btn');

    if (panel.style.display === 'none') {
        // إظهار حجوزاتي
        panel.style.display = 'block';
        stepsIndicator.style.display = 'none';
        stepsContent.style.display = 'none';
        headerTitle.textContent = 'حجوزاتي';
        toggleBtn.classList.add('active');
        loadCustomerBookings();
    } else {
        // إخفاء حجوزاتي
        panel.style.display = 'none';
        stepsIndicator.style.display = 'flex';
        stepsContent.style.display = 'block';
        headerTitle.textContent = 'احجز رحلتك';
        toggleBtn.classList.remove('active');
    }
}

// تحميل حجوزاتي من جميع الشركات
function loadCustomerBookings() {
    customerBookingsList = [];

    // جمع كل الحجوزات من جميع الشركات
    for (const [companyKey, bookings] of Object.entries(ownerBookingsData)) {
        bookings.forEach(booking => {
            customerBookingsList.push({ ...booking, _companyKey: companyKey });
        });
    }

    // ترتيب حسب وقت الحجز (الأحدث أولاً)
    customerBookingsList.sort((a, b) => {
        if (b.bookedAt && a.bookedAt) {
            return b.bookedAt.localeCompare(a.bookedAt);
        }
        return 0;
    });

    // إعادة تعيين الفلتر
    customerBookingsFilterStatus = 'all';
    const searchInput = document.getElementById('mbp-search-input');
    if (searchInput) searchInput.value = '';

    // إعادة تعيين التبويبات
    document.querySelectorAll('.mbp-filter-tabs .mbp-filter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    const allTab = document.querySelector('.mbp-filter-tabs .mbp-filter-tab[data-status="all"]');
    if (allTab) allTab.classList.add('active');

    renderCustomerBookings(customerBookingsList);
    updateBookingsBadge();
}

// عرض قائمة الحجوزات
function renderCustomerBookings(bookings) {
    const listDiv = document.getElementById('mbp-list');
    const emptyDiv = document.getElementById('mbp-empty');
    const countDiv = document.getElementById('mbp-count');

    if (bookings.length === 0) {
        listDiv.innerHTML = '';
        listDiv.style.display = 'none';
        emptyDiv.style.display = 'flex';
        countDiv.style.display = 'none';
        return;
    }

    emptyDiv.style.display = 'none';
    listDiv.style.display = 'flex';
    countDiv.style.display = 'block';
    countDiv.textContent = bookings.length + ' حجز';

    listDiv.innerHTML = bookings.map((booking, index) => {
        // حالة الحجز
        let statusBadge = '', statusBg = '', statusDot = '';
        if (booking.status === 'confirmed') {
            statusBadge = '<span class="mbp-status-badge mbp-status-confirmed">مؤكد</span>';
            statusBg = 'mbp-card-confirmed';
            statusDot = '#2e7d32';
        } else if (booking.status === 'pending') {
            statusBadge = '<span class="mbp-status-badge mbp-status-pending">بانتظار الدفع</span>';
            statusBg = 'mbp-card-pending';
            statusDot = '#e65100';
        } else if (booking.status === 'cancelled') {
            statusBadge = '<span class="mbp-status-badge mbp-status-cancelled">ملغي</span>';
            statusBg = 'mbp-card-cancelled';
            statusDot = '#c62828';
        }

        // تنسيق الوقت
        let timeFormatted = booking.time || '---';
        if (booking.time && booking.time.includes(':')) {
            const timeParts = booking.time.split(':');
            const hours = parseInt(timeParts[0]);
            const minutes = timeParts[1];
            const period = hours >= 12 ? 'مساءً' : 'صباحاً';
            const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
            timeFormatted = displayHours + ':' + minutes + ' ' + period;
        }

        // تنسيق التاريخ
        let dateFormatted = booking.date || '---';
        let dateShort = '---';
        if (booking.date) {
            try {
                const dateObj = new Date(booking.date);
                dateFormatted = (`${String(dateObj.getDate()).padStart(2,'0')}/${String(dateObj.getMonth()+1).padStart(2,'0')}/${dateObj.getFullYear()}`);
                dateShort = dateObj.toLocaleDateString('ar-SY', { month: '2-digit', day: '2-digit' });
            } catch(e) {}
        }

        // اسم الشركة
        const companyName = booking.company || ownerCompaniesConfig[booking._companyKey]?.name || '---';

        return `
            <div class="mbp-card ${statusBg}" onclick="showCustomerBookingDetails('${booking.id}', '${booking._companyKey}')" style="animation-delay: ${index * 0.05}s">
                <!-- شريط الحالة العلوي -->
                <div class="mbp-card-status-bar" style="background: ${statusDot};"></div>

                <div class="mbp-card-body">
                    <!-- الصف الأول: رقم الحجز + الحالة -->
                    <div class="mbp-card-row-top">
                        <div class="mbp-card-ids">
                            <span class="mbp-booking-id">${booking.id}</span>
                            <span class="mbp-trip-number">${booking.tripNumber || ''}</span>
                        </div>
                        ${statusBadge}
                    </div>

                    <!-- المسار -->
                    <div class="mbp-card-route">
                        <div class="mbp-route-dot mbp-route-dot-from"></div>
                        <div class="mbp-route-line-wrapper">
                            <div class="mbp-route-dashed"></div>
                            <svg class="mbp-route-plane" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="${statusDot}" stroke-width="2.5">
                                <path d="M19 12H5M12 19l-7-7 7-7"/>
                            </svg>
                        </div>
                        <div class="mbp-route-dot mbp-route-dot-to"></div>
                    </div>
                    <div class="mbp-route-labels">
                        <span class="mbp-route-city">${booking.from}</span>
                        <span class="mbp-route-city">${booking.to}</span>
                    </div>

                    <!-- التفاصيل -->
                    <div class="mbp-card-details">
                        <div class="mbp-detail-chip">
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#666" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                            <span>${dateShort}</span>
                        </div>
                        <div class="mbp-detail-chip">
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#666" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                            <span>${timeFormatted}</span>
                        </div>
                        <div class="mbp-detail-chip mbp-detail-seat">
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#1565c0" stroke-width="2"><path d="M5 18v-6a2 2 0 012-2h10a2 2 0 012 2v6"/><rect x="3" y="14" width="4" height="4" rx="1"/><rect x="17" y="14" width="4" height="4" rx="1"/></svg>
                            <span>مقعد ${booking.seatNumber}</span>
                        </div>
                        <div class="mbp-detail-chip mbp-detail-price">
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#2e7d32" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
                            <span>${booking.price} ل.س</span>
                        </div>
                    </div>

                    <!-- الشريط السفلي -->
                    <div class="mbp-card-footer">
                        <span class="mbp-footer-company">
                            <span class="mbp-footer-dot" style="background: ${statusDot};"></span>
                            ${companyName}
                        </span>
                        <span class="mbp-footer-arrow">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#bbb" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
                        </span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// فلترة حجوزاتي بالنص
function filterCustomerBookings() {
    const search = document.getElementById('mbp-search-input').value.trim().toLowerCase();
    let filtered = [...customerBookingsList];

    // فلترة حسب الحالة أولاً
    if (customerBookingsFilterStatus !== 'all') {
        filtered = filtered.filter(b => b.status === customerBookingsFilterStatus);
    }

    // فلترة حسب البحث
    if (search) {
        filtered = filtered.filter(b =>
            (b.id && b.id.toLowerCase().includes(search)) ||
            (b.tripNumber && b.tripNumber.toLowerCase().includes(search)) ||
            (b.customerName && b.customerName.toLowerCase().includes(search)) ||
            (b.nickname && b.nickname.toLowerCase().includes(search)) ||
            (b.nationalId && b.nationalId.includes(search)) ||
            (b.from && b.from.toLowerCase().includes(search)) ||
            (b.to && b.to.toLowerCase().includes(search))
        );
    }

    renderCustomerBookings(filtered);
}

// فلترة حجوزاتي حسب الحالة
function filterCustomerBookingsByStatus(status, btn) {
    customerBookingsFilterStatus = status;

    // تحديث التبويبات
    document.querySelectorAll('.mbp-filter-tabs .mbp-filter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    btn.classList.add('active');

    filterCustomerBookings();
}

// عرض تفاصيل حجز من حجوزاتي
function showCustomerBookingDetails(bookingId, companyKey) {
    const bookings = ownerBookingsData[companyKey] || [];
    const booking = bookings.find(b => b.id === bookingId);
    if (!booking) return;

    const companyName = booking.company || ownerCompaniesConfig[companyKey]?.name || '---';

    // تنسيق التاريخ
    let dateFormatted = booking.date || '---';
    if (booking.date) {
        try {
            const dateObj = new Date(booking.date);
            dateFormatted = (`${String(dateObj.getDate()).padStart(2,'0')}/${String(dateObj.getMonth()+1).padStart(2,'0')}/${dateObj.getFullYear()}`);
        } catch(e) {}
    }

    // تنسيق الوقت
    let timeFormatted = booking.time || '---';
    if (booking.time && booking.time.includes(':')) {
        const timeParts = booking.time.split(':');
        const hours = parseInt(timeParts[0]);
        const minutes = timeParts[1];
        const period = hours >= 12 ? 'مساءً' : 'صباحاً';
        const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
        timeFormatted = displayHours + ':' + minutes + ' ' + period;
    }

    // حالة الحجز
    let statusLabel = '', statusIcon = '', statusColor = '';
    if (booking.status === 'confirmed') {
        statusLabel = 'مؤكد'; statusIcon = '✅'; statusColor = '#2e7d32';
    } else if (booking.status === 'pending') {
        statusLabel = 'بانتظار الدفع'; statusIcon = '⏳'; statusColor = '#e65100';
    } else if (booking.status === 'cancelled') {
        statusLabel = 'ملغي'; statusIcon = '❌'; statusColor = '#c62828';
    }

    const modal = document.getElementById('customer-details-modal');
    const body = document.getElementById('customer-details-body');

    body.innerHTML = `
        <div class="cd-status-banner" style="background: ${statusColor}11; border-right: 5px solid ${statusColor};">
            <span style="font-size: 32px;">${statusIcon}</span>
            <div>
                <span style="color: ${statusColor}; font-size: 18px; font-weight: 700;">${statusLabel}</span>
                <span style="color: #666; font-size: 13px;">رقم الحجز: <strong>${booking.id}</strong></span>
            </div>
        </div>

        <div class="cd-section">
            <div class="cd-section-title">معلومات الرحلة</div>
            <div class="cd-trip-route-card">
                <div class="cd-route-city">
                    <span class="cd-route-label">من</span>
                    <span class="cd-route-name">${booking.from}</span>
                </div>
                <div class="cd-route-line">
                    <svg viewBox="0 0 80 20" width="80" height="20">
                        <line x1="0" y1="10" x2="65" y2="10" stroke="#1a73e8" stroke-width="2" stroke-dasharray="4,3"/>
                        <polygon points="65,5 75,10 65,15" fill="#1a73e8"/>
                    </svg>
                </div>
                <div class="cd-route-city">
                    <span class="cd-route-label">إلى</span>
                    <span class="cd-route-name">${booking.to}</span>
                </div>
            </div>
            <div class="cd-info-grid cd-info-grid-4">
                <div class="cd-info-item">
                    <span class="cd-info-icon">📅</span>
                    <span class="cd-info-label">التاريخ</span>
                    <span class="cd-info-value">${dateFormatted}</span>
                </div>
                <div class="cd-info-item">
                    <span class="cd-info-icon">🕐</span>
                    <span class="cd-info-label">الانطلاق</span>
                    <span class="cd-info-value">${timeFormatted}</span>
                </div>
                <div class="cd-info-item">
                    <span class="cd-info-icon">💺</span>
                    <span class="cd-info-label">المقعد</span>
                    <span class="cd-info-value" style="color: #1565c0; font-weight: 800; font-size: 18px;">${booking.seatNumber}</span>
                </div>
                <div class="cd-info-item">
                    <span class="cd-info-icon">💰</span>
                    <span class="cd-info-label">السعر</span>
                    <span class="cd-info-value" style="color: #2e7d32; font-weight: 800;">${booking.price} ل.س</span>
                </div>
            </div>
        </div>

        <div class="cd-section">
            <div class="cd-section-title">معلومات الزبون</div>
            <div class="cd-info-grid cd-info-grid-4">
                <div class="cd-info-item">
                    <span class="cd-info-icon">👤</span>
                    <span class="cd-info-label">الاسم</span>
                    <span class="cd-info-value">${booking.customerName}</span>
                </div>
                <div class="cd-info-item">
                    <span class="cd-info-icon">⭐</span>
                    <span class="cd-info-label">الشهرة</span>
                    <span class="cd-info-value">${booking.nickname || '---'}</span>
                </div>
                <div class="cd-info-item">
                    <span class="cd-info-icon">🪪</span>
                    <span class="cd-info-label">الرقم الوطني</span>
                    <span class="cd-info-value" dir="ltr">${booking.nationalId || '---'}</span>
                </div>
                <div class="cd-info-item">
                    <span class="cd-info-icon">💳</span>
                    <span class="cd-info-label">طريقة الدفع</span>
                    <span class="cd-info-value">${booking.paymentMethod || '---'}</span>
                </div>
            </div>
        </div>

        <div class="cd-section">
            <div class="cd-section-title">تفاصيل إضافية</div>
            <div class="cd-info-grid cd-info-grid-4">
                <div class="cd-info-item">
                    <span class="cd-info-icon">🚌</span>
                    <span class="cd-info-label">الشركة</span>
                    <span class="cd-info-value">${companyName}</span>
                </div>
                <div class="cd-info-item">
                    <span class="cd-info-icon">🎫</span>
                    <span class="cd-info-label">رقم الرحلة</span>
                    <span class="cd-info-value">${booking.tripNumber || '---'}</span>
                </div>
                <div class="cd-info-item">
                    <span class="cd-info-icon">🕐</span>
                    <span class="cd-info-label">وقت الحجز</span>
                    <span class="cd-info-value">${booking.bookedAt || '---'}</span>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
}

// تحديث شارة عدد الحجوزات
function updateBookingsBadge() {
    let total = 0;
    for (const bookings of Object.values(ownerBookingsData)) {
        total += bookings.length;
    }
    const badge = document.getElementById('bookings-badge');
    if (badge) {
        if (total > 0) {
            badge.style.display = 'flex';
            badge.textContent = total > 99 ? '99+' : total;
        } else {
            badge.style.display = 'none';
        }
    }
}

// ===== بيانات حجوزات الشركات =====
let currentOwnerCompany = null;

let ownerCompaniesConfig = {
    alsharif: {
        name: 'شركة الشريف',
        desc: 'شركة نقل مسافرين - خدمة متميزة',
        color: '#1565c0',
        gradient: 'linear-gradient(135deg, #1565c0, #1a73e8)',
        logo: '<img src="شريف.jpg" alt="شركة الشريف" class="owner-company-logo">',
        username: '0',
        password: '0'
    },
    hamrash: {
        name: 'شركة حمرش',
        desc: 'شركة نقل مسافرين - راحة وأمان',
        color: '#c62828',
        gradient: 'linear-gradient(135deg, #c62828, #e53935)',
        logo: '<div class="owner-logo-placeholder hamrash-logo"><span>ح</span></div>',
        username: '0',
        password: '0'
    }
};

let ownerBookingsData = {
    alsharif: [
        {
            id: 'BK-1001',
            tripNumber: 'SH-101',
            customerName: 'أحمد محمود الخالد',
            nickname: 'أبو محمود',
            motherName: 'فاطمة',
            nationalId: '01020304567',
            from: 'عفرين',
            to: 'دمشق',
            date: '2025-01-15',
            time: '06:00',
            seatNumber: 5,
            price: '25,000',
            status: 'confirmed',
            paymentMethod: 'شام كاش',
            bookedAt: '2025-01-13 14:30'
        },
        {
            id: 'BK-1002',
            tripNumber: 'SH-102',
            customerName: 'محمد علي حسن',
            nickname: 'أبو علي',
            motherName: 'سميرة',
            nationalId: '02030405678',
            from: 'عفرين',
            to: 'حمص',
            date: '2025-01-15',
            time: '07:30',
            seatNumber: 12,
            price: '20,000',
            status: 'confirmed',
            paymentMethod: 'دفع في الكراج',
            bookedAt: '2025-01-13 16:45'
        },
        {
            id: 'BK-1003',
            tripNumber: 'SH-103',
            customerName: 'خالد إبراهيم السعيد',
            nickname: 'أبو إبراهيم',
            motherName: 'أمينة',
            nationalId: '03040506789',
            from: 'عفرين',
            to: 'دمشق',
            date: '2025-01-16',
            time: '14:00',
            seatNumber: 3,
            price: '25,000',
            status: 'pending',
            paymentMethod: 'دفع في الكراج',
            bookedAt: '2025-01-14 09:20'
        },
        {
            id: 'BK-1004',
            tripNumber: 'SH-104',
            customerName: 'عمر يوسف النعيمي',
            nickname: 'أبو يوسف',
            motherName: 'خديجة',
            nationalId: '04050607890',
            from: 'عفرين',
            to: 'حلب',
            date: '2025-01-15',
            time: '10:00',
            seatNumber: 8,
            price: '8,000',
            status: 'confirmed',
            paymentMethod: 'شام كاش',
            bookedAt: '2025-01-14 11:00'
        },
        {
            id: 'BK-1005',
            tripNumber: 'SH-105',
            customerName: 'فاطمة أحمد الشيخ',
            nickname: 'أم أحمد',
            motherName: 'نورة',
            nationalId: '05060708901',
            from: 'عفرين',
            to: 'حماة',
            date: '2025-01-16',
            time: '08:00',
            seatNumber: 15,
            price: '15,000',
            status: 'pending',
            paymentMethod: 'شام كاش',
            bookedAt: '2025-01-14 13:15'
        },
        {
            id: 'BK-1006',
            tripNumber: 'SH-101',
            customerName: 'سعيد عبدالله الكردي',
            nickname: 'أبو عبدالله',
            motherName: 'سعاد',
            nationalId: '06070809012',
            from: 'عفرين',
            to: 'دمشق',
            date: '2025-01-15',
            time: '06:00',
            seatNumber: 22,
            price: '25,000',
            status: 'confirmed',
            paymentMethod: 'دفع في الكراج',
            bookedAt: '2025-01-13 18:30'
        },
        {
            id: 'BK-1007',
            tripNumber: 'SH-106',
            customerName: 'ياسر محمد العلي',
            nickname: 'أبو محمد',
            motherName: 'لطيفة',
            nationalId: '07080901234',
            from: 'عفرين',
            to: 'ادلب',
            date: '2025-01-15',
            time: '12:00',
            seatNumber: 10,
            price: '7,000',
            status: 'cancelled',
            paymentMethod: 'شام كاش',
            bookedAt: '2025-01-14 08:00'
        },
        {
            id: 'BK-1008',
            tripNumber: 'SH-107',
            customerName: 'حسن مصطفى رشو',
            nickname: 'أبو مصطفى',
            motherName: 'هناء',
            nationalId: '08090102345',
            from: 'عفرين',
            to: 'دمشق',
            date: '2025-01-18',
            time: '18:00',
            seatNumber: 7,
            price: '27,000',
            status: 'pending',
            paymentMethod: 'دفع في الكراج',
            bookedAt: '2025-01-15 10:30'
        },
        {
            id: 'BK-1009',
            tripNumber: 'SH-108',
            customerName: 'عبدالرحمن كمال ناصر',
            nickname: 'أبو كمال',
            motherName: 'رشا',
            nationalId: '09010203456',
            from: 'عفرين',
            to: 'حمص',
            date: '2025-01-17',
            time: '09:00',
            seatNumber: 19,
            price: '20,000',
            status: 'confirmed',
            paymentMethod: 'شام كاش',
            bookedAt: '2025-01-15 12:45'
        },
        {
            id: 'BK-1010',
            tripNumber: 'SH-104',
            customerName: 'نور الدين الحسين',
            nickname: 'أبو الدين',
            motherName: 'مريم',
            nationalId: '10020304567',
            from: 'عفرين',
            to: 'حلب',
            date: '2025-01-15',
            time: '10:00',
            seatNumber: 25,
            price: '8,000',
            status: 'confirmed',
            paymentMethod: 'دفع في الكراج',
            bookedAt: '2025-01-14 15:20'
        }
    ],
    hamrash: [
        {
            id: 'BK-2001',
            tripNumber: 'HM-201',
            customerName: 'رشا أحمد الحسين',
            nickname: 'أم أحمد',
            motherName: 'زينب',
            nationalId: '11020405678',
            from: 'عفرين',
            to: 'دمشق',
            date: '2025-01-15',
            time: '05:30',
            seatNumber: 4,
            price: '22,000',
            status: 'confirmed',
            paymentMethod: 'شام كاش',
            bookedAt: '2025-01-13 10:15'
        },
        {
            id: 'BK-2002',
            tripNumber: 'HM-202',
            customerName: 'علي حسين الكردي',
            nickname: 'أبو حسين',
            motherName: 'سلمى',
            nationalId: '12030506789',
            from: 'عفرين',
            to: 'حمص',
            date: '2025-01-15',
            time: '08:00',
            seatNumber: 9,
            price: '18,000',
            status: 'pending',
            paymentMethod: 'دفع في الكراج',
            bookedAt: '2025-01-13 12:30'
        },
        {
            id: 'BK-2003',
            tripNumber: 'HM-203',
            customerName: 'محمود خالد الشيخ',
            nickname: 'أبو خالد',
            motherName: 'هدى',
            nationalId: '13040607890',
            from: 'عفرين',
            to: 'دمشق',
            date: '2025-01-16',
            time: '16:30',
            seatNumber: 11,
            price: '22,000',
            status: 'confirmed',
            paymentMethod: 'شام كاش',
            bookedAt: '2025-01-14 14:00'
        },
        {
            id: 'BK-2004',
            tripNumber: 'HM-204',
            customerName: 'سارة عبدالرحمن ناصر',
            nickname: 'أم عبدالرحمن',
            motherName: 'ليلى',
            nationalId: '14050708901',
            from: 'عفرين',
            to: 'حلب',
            date: '2025-01-15',
            time: '11:00',
            seatNumber: 6,
            price: '7,500',
            status: 'confirmed',
            paymentMethod: 'دفع في الكراج',
            bookedAt: '2025-01-14 09:45'
        },
        {
            id: 'BK-2005',
            tripNumber: 'HM-205',
            customerName: 'إبراهيم مصطفى العلي',
            nickname: 'أبو مصطفى',
            motherName: 'آمنة',
            nationalId: '15060809012',
            from: 'عفرين',
            to: 'حماة',
            date: '2025-01-17',
            time: '07:00',
            seatNumber: 14,
            price: '14,000',
            status: 'pending',
            paymentMethod: 'شام كاش',
            bookedAt: '2025-01-15 08:20'
        },
        {
            id: 'BK-2006',
            tripNumber: 'HM-206',
            customerName: 'يوسف نعيم رشو',
            nickname: 'أبو نعيم',
            motherName: 'صفية',
            nationalId: '16070901234',
            from: 'عفرين',
            to: 'حمص',
            date: '2025-01-18',
            time: '15:00',
            seatNumber: 20,
            price: '19,000',
            status: 'cancelled',
            paymentMethod: 'دفع في الكراج',
            bookedAt: '2025-01-15 11:00'
        },
        {
            id: 'BK-2007',
            tripNumber: 'HM-201',
            customerName: 'كامل سعيد الحسن',
            nickname: 'أبو سعيد',
            motherName: 'عائشة',
            nationalId: '17080102345',
            from: 'عفرين',
            to: 'دمشق',
            date: '2025-01-15',
            time: '05:30',
            seatNumber: 30,
            price: '22,000',
            status: 'confirmed',
            paymentMethod: 'شام كاش',
            bookedAt: '2025-01-13 16:50'
        },
        {
            id: 'BK-2008',
            tripNumber: 'HM-204',
            customerName: 'ليلى عبدالله الخالد',
            nickname: 'أم عبدالله',
            motherName: 'مها',
            nationalId: '18090203456',
            from: 'عفرين',
            to: 'حلب',
            date: '2025-01-15',
            time: '11:00',
            seatNumber: 33,
            price: '7,500',
            status: 'confirmed',
            paymentMethod: 'دفع في الكراج',
            bookedAt: '2025-01-14 17:30'
        }
    ]
};

// ===== تبديل عرض تفاصيل الحجز =====
function toggleBookingDetails(btn) {
    const card = btn.closest('.booking-card');
    const details = card.querySelector('.booking-details-expandable');
    const toggleText = btn.querySelector('.toggle-text');
    const toggleArrow = btn.querySelector('.toggle-arrow');

    if (details.classList.contains('expanded')) {
        details.classList.remove('expanded');
        toggleText.textContent = 'عرض التفاصيل';
        toggleArrow.style.transform = 'rotate(0deg)';
    } else {
        details.classList.add('expanded');
        toggleText.textContent = 'إخفاء التفاصيل';
        toggleArrow.style.transform = 'rotate(180deg)';
    }
}

// ===== متغير مؤقت للشركة المختارة =====
let pendingOwnerCompany = null;

// ===== اختيار الشركة كصاحب =====
function selectOwnerCompany(companyKey) {
    pendingOwnerCompany = companyKey;
    const config = ownerCompaniesConfig[companyKey];
    showOwnerLoginModal(config);
}

// ===== عرض نافذة تسجيل الدخول لصاحب الشركة =====
function showOwnerLoginModal(config) {
    const modal = document.getElementById('owner-login-modal');
    if (!modal) return;

    document.getElementById('owner-login-logo').innerHTML = config.logo;
    document.getElementById('owner-login-company-name').textContent = config.name;
    document.getElementById('owner-login-company-name').style.color = config.color;

    document.getElementById('owner-login-username').value = '';
    document.getElementById('owner-login-password').value = '';
    document.getElementById('owner-login-error').style.display = 'none';
    document.getElementById('owner-login-error').textContent = '';

    modal.style.display = 'flex';
}

// ===== إغلاق نافذة تسجيل الدخول =====
function closeOwnerLoginModal() {
    const modal = document.getElementById('owner-login-modal');
    if (modal) modal.style.display = 'none';
    pendingOwnerCompany = null;
}

// ===== التحقق من بيانات تسجيل الدخول =====
function verifyOwnerLogin() {
    const username = document.getElementById('owner-login-username').value.trim();
    const password = document.getElementById('owner-login-password').value.trim();
    const errorDiv = document.getElementById('owner-login-error');

    if (!username || !password) {
        errorDiv.textContent = 'يرجى إدخال اسم المستخدم وكلمة المرور';
        errorDiv.style.display = 'block';
        return;
    }

    if (!pendingOwnerCompany) return;

    const config = ownerCompaniesConfig[pendingOwnerCompany];
    if (!config) return;

    if (username === config.username && password === config.password) {
        errorDiv.style.display = 'none';
        const companyKey = pendingOwnerCompany;
        currentOwnerCompany = companyKey;

        document.getElementById('owner-login-modal').style.display = 'none';
        pendingOwnerCompany = null;

        document.getElementById('owner-select-company').style.display = 'none';
        document.getElementById('owner-dashboard').style.display = 'block';

        document.getElementById('owner-banner-logo').innerHTML = config.logo;
        document.getElementById('owner-banner-name').textContent = config.name;
        document.getElementById('owner-banner-desc').textContent = config.desc;
        document.getElementById('owner-company-banner').style.background = config.gradient;

        console.log('🏢 DEBUG selectOwnerCompany - companyKey:', companyKey);
        console.log('🏢 DEBUG selectOwnerCompany - bookings count:', (ownerBookingsData[companyKey] || []).length);
        populateTripNumbers();
        resetOwnerFilter();
    } else {
        errorDiv.textContent = 'اسم المستخدم أو كلمة المرور غير صحيحة';
        errorDiv.style.display = 'block';
    }
}

// ===== عرض بطاقات الشركات ديناميكياً =====
function renderOwnerCompanies() {
    const container = document.getElementById('owner-company-cards');
    if (!container) return;

    container.innerHTML = '';

    for (const [key, config] of Object.entries(ownerCompaniesConfig)) {
        const card = document.createElement('div');
        card.className = 'owner-company-select-card';
        card.onclick = () => selectOwnerCompany(key);

        // عدد الحجوزات
        const bookingsCount = (ownerBookingsData[key] || []).length;
        const pendingCount = (ownerBookingsData[key] || []).filter(b => b.status === 'pending').length;

        let logoHtml = '';
        if (config.logo && config.logo.includes('<img')) {
            logoHtml = config.logo;
        } else if (config.logo && config.logo.includes('owner-logo-placeholder')) {
            logoHtml = config.logo;
        } else {
            // إنشاء شعار افتراضي
            const firstLetter = config.name.charAt(config.name.indexOf(' ') + 1) || config.name.charAt(0);
            logoHtml = `<div class="owner-select-logo-placeholder" style="background: ${config.color || '#1565c0'};"><span>${firstLetter}</span></div>`;
        }

        card.innerHTML = `
            <div class="owner-select-logo-wrap">${logoHtml}</div>
            <div class="owner-select-info">
                <h4>${config.name}</h4>
                <p>${config.desc || ''}</p>
                ${bookingsCount > 0 ? `<span class="owner-select-badge">${bookingsCount} حجز${pendingCount > 0 ? ` · ${pendingCount} بانتظار الدفع` : ''}</span>` : '<span class="owner-select-badge empty">لا توجد حجوزات</span>'}
            </div>
            <div class="owner-select-arrow">←</div>
        `;

        container.appendChild(card);
    }
}

// ===== العودة لاختيار الشركة =====
function backToCompanySelect() {
    currentOwnerCompany = null;
    document.getElementById('owner-select-company').style.display = 'block';
    document.getElementById('owner-dashboard').style.display = 'none';
    renderOwnerCompanies();
}



// ===== تبويبات لوحة صاحب الشركة =====
function switchOwnerTab(tab) {
    const bookingsTab = document.getElementById('owner-tab-bookings');
    const tripsTab = document.getElementById('owner-tab-trips');
    const bookingsPanel = document.getElementById('owner-panel-bookings');
    const tripsPanel = document.getElementById('owner-panel-trips');

    if (tab === 'bookings') {
        bookingsTab.style.background = '#1565c0';
        bookingsTab.style.color = '#fff';
        tripsTab.style.background = 'transparent';
        tripsTab.style.color = '#666';
        bookingsPanel.style.display = 'block';
        tripsPanel.style.display = 'none';
    } else {
        tripsTab.style.background = '#1565c0';
        tripsTab.style.color = '#fff';
        bookingsTab.style.background = 'transparent';
        bookingsTab.style.color = '#666';
        tripsPanel.style.display = 'block';
        bookingsPanel.style.display = 'none';
        renderOwnerTrips();
    }
}

// ===== عرض رحلات الشركة =====
function renderOwnerTrips() {
    if (!currentOwnerCompany) return;
    const companyName = ownerCompaniesConfig[currentOwnerCompany].name;
    const companyTrips = tripsData[companyName] || [];
    const list = document.getElementById('owner-trips-list');
    const noMsg = document.getElementById('no-trips-msg');
    const countSpan = document.getElementById('trips-count');

    list.innerHTML = '';
    countSpan.textContent = companyTrips.length + ' رحلة';

    if (companyTrips.length === 0) {
        noMsg.style.display = 'block';
        return;
    }
    noMsg.style.display = 'none';

    const sortedTrips = [...companyTrips].sort((a, b) => {
        if (a.date !== b.date) return a.date.localeCompare(b.date);
        return (a.time || '').localeCompare(b.time || '');
    });

    sortedTrips.forEach(trip => {
        const details = tripDetailsData[trip.id];
        const dateObj = trip.date ? new Date(trip.date) : null;
        const dateFormatted = dateObj ? (String(dateObj.getDate()).padStart(2,'0') + '/' + String(dateObj.getMonth()+1).padStart(2,'0') + '/' + dateObj.getFullYear()) : '';
        const timeFormatted = trip.time ? formatTime12(trip.time) : '';
        const arrivalFormatted = details && details.arrivalTime ? details.arrivalTime : '';
        const price = details ? Number(details.price).toLocaleString('ar-SY') : '';
        const busType = details ? details.busType : '';
        const driver = details ? details.driverName : '';
        const occupiedSeats = details ? details.occupiedSeats.length : 0;
        const totalSeats = details ? details.totalSeats : 40;
        const availableSeats = totalSeats - occupiedSeats;
        const isCancelled = trip.status === 'cancelled';

        const card = document.createElement('div');
        card.style.cssText = isCancelled
            ? 'background:rgba(198,40,40,0.25);border-radius:14px;padding:16px;margin-bottom:12px;box-shadow:0 2px 8px rgba(0,0,0,0.2);border-right:4px solid #c62828;opacity:0.85;'
            : 'background:rgba(0,0,0,0.55);border-radius:14px;padding:16px;margin-bottom:12px;box-shadow:0 2px 8px rgba(0,0,0,0.2);border-right:4px solid #1565c0;transition:transform 0.2s,box-shadow 0.2s;cursor:default;';
        if (!isCancelled) {
            card.onmouseover = function(){ this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 16px rgba(0,0,0,0.3)'; };
            card.onmouseout = function(){ this.style.transform='none'; this.style.boxShadow='0 2px 8px rgba(0,0,0,0.2)'; };
        }

        const statusBadge = isCancelled
            ? '<span style="background:rgba(198,40,40,0.7);color:#fff;padding:3px 10px;border-radius:20px;font-size:0.75rem;font-weight:700;">❌ ملغاة</span>'
            : '<span style="background:rgba(27,94,32,0.7);color:#fff;padding:3px 10px;border-radius:20px;font-size:0.75rem;font-weight:700;">✅ نشطة</span>';

        let actionsHtml = '';
        if (isCancelled) {
            actionsHtml = '<button onclick="deleteOwnerTrip(' + trip.id + ')" style="background:rgba(198,40,40,0.7);color:#fff;border:none;border-radius:8px;padding:6px 10px;cursor:pointer;font-size:0.8rem;font-weight:600;font-family:Cairo,sans-serif;">🗑️ حذف</button>';
        } else {
            actionsHtml = '<button onclick="cancelOwnerTrip(' + trip.id + ')" style="background:rgba(230,81,0,0.7);color:#fff;border:none;border-radius:8px;padding:6px 10px;cursor:pointer;font-size:0.8rem;font-weight:600;font-family:Cairo,sans-serif;">⚠️ إلغاء</button> <button onclick="deleteOwnerTrip(' + trip.id + ')" style="background:rgba(198,40,40,0.7);color:#fff;border:none;border-radius:8px;padding:6px 10px;cursor:pointer;font-size:0.8rem;font-weight:600;font-family:Cairo,sans-serif;">🗑️ حذف</button>';
        }

        card.innerHTML = '<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">' +
            '<div style="display:flex;align-items:center;gap:8px;">' +
            '<span style="font-size:1.5rem;">' + (trip.icon || '🚌') + '</span>' +
            '<div><div style="font-weight:700;font-size:1rem;color:#fff;">' + trip.from + ' ← ' + trip.to + (isCancelled ? ' (ملغاة)' : '') + '</div>' +
            '<div style="font-size:0.8rem;color:rgba(255,255,255,0.6);">رقم الرحلة: ' + (trip.tripNumber || trip.id) + '</div></div></div>' +
            '<div style="display:flex;align-items:center;gap:6px;">' + statusBadge + ' ' + actionsHtml + '</div></div>' +
            '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px;">' +
            '<div style="background:rgba(255,255,255,0.1);border-radius:8px;padding:8px 10px;display:flex;align-items:center;gap:6px;"><span>📅</span><div><div style="font-size:0.7rem;color:rgba(255,255,255,0.6);">التاريخ</div><div style="font-size:0.85rem;font-weight:600;color:#fff;">' + dateFormatted + '</div></div></div>' +
            '<div style="background:rgba(255,255,255,0.1);border-radius:8px;padding:8px 10px;display:flex;align-items:center;gap:6px;"><span>🕐</span><div><div style="font-size:0.7rem;color:rgba(255,255,255,0.6);">الانطلاق</div><div style="font-size:0.85rem;font-weight:600;color:#fff;">' + timeFormatted + '</div></div></div>' +
            (arrivalFormatted ? '<div style="background:rgba(255,255,255,0.1);border-radius:8px;padding:8px 10px;display:flex;align-items:center;gap:6px;"><span>⏰</span><div><div style="font-size:0.7rem;color:rgba(255,255,255,0.6);">الوصول</div><div style="font-size:0.85rem;font-weight:600;color:#fff;">' + arrivalFormatted + '</div></div></div>' : '') +
            '<div style="background:rgba(255,255,255,0.1);border-radius:8px;padding:8px 10px;display:flex;align-items:center;gap:6px;"><span>💺</span><div><div style="font-size:0.7rem;color:rgba(255,255,255,0.6);">المقاعد</div><div style="font-size:0.85rem;font-weight:600;color:' + (availableSeats > 0 ? '#2e7d32' : '#c62828') + ';">' + availableSeats + ' / ' + totalSeats + '</div></div></div>' +
            '<div style="background:rgba(255,255,255,0.1);border-radius:8px;padding:8px 10px;display:flex;align-items:center;gap:6px;"><span>🚌</span><div><div style="font-size:0.7rem;color:rgba(255,255,255,0.6);">نوع الباص</div><div style="font-size:0.85rem;font-weight:600;color:#fff;">' + (busType || '---') + '</div></div></div>' +
            '<div style="background:rgba(255,255,255,0.1);border-radius:8px;padding:8px 10px;display:flex;align-items:center;gap:6px;"><span>💰</span><div><div style="font-size:0.7rem;color:rgba(255,255,255,0.6);">السعر</div><div style="font-size:0.85rem;font-weight:700;color:#1565c0;">' + price + ' ل.س</div></div></div>' +
            (driver && driver !== 'غير محدد' ? '<div style="background:rgba(255,255,255,0.1);border-radius:8px;padding:8px 10px;display:flex;align-items:center;gap:6px;"><span>👤</span><div><div style="font-size:0.7rem;color:rgba(255,255,255,0.6);">السائق</div><div style="font-size:0.85rem;font-weight:600;color:#fff;">' + driver + '</div></div></div>' : '') +
            '</div>';

        list.appendChild(card);
    });
}

// ===== إلغاء رحلة =====
function cancelOwnerTrip(tripId) {
    if (!currentOwnerCompany) return;
    const companyName = ownerCompaniesConfig[currentOwnerCompany].name;

    showConfirmModal('⚠️', 'إلغاء الرحلة', 'هل أنت متأكد من إلغاء هذه الرحلة؟ سيتم إلغاء جميع الحجوزات المرتبطة بها.', 'إلغاء الرحلة', function() {
        if (tripsData[companyName]) {
            const trip = tripsData[companyName].find(function(t) { return t.id === tripId; });
            if (trip) trip.status = 'cancelled';
        }
        // إلغاء الحجوزات المرتبطة
        const tripObj = (tripsData[companyName] || []).find(function(t) { return t.id === tripId; });
        const tripNum = tripObj ? tripObj.tripNumber : String(tripId);
        if (ownerBookingsData[currentOwnerCompany]) {
            ownerBookingsData[currentOwnerCompany].forEach(function(b) {
                if (b.tripNumber === tripNum || b.tripNumber === String(tripId)) {
                    b.status = 'cancelled';
                }
            });
        }

        saveTripsData();
        saveBookings();
        updateOwnerStats(ownerBookingsData[currentOwnerCompany]);
        renderOwnerBookings(ownerBookingsData[currentOwnerCompany]);
        renderOwnerTrips();
        showToast('⚠️', 'تم إلغاء الرحلة بنجاح');
    });
}

// ===== حذف رحلة =====
function deleteOwnerTrip(tripId) {
    if (!currentOwnerCompany) return;
    const companyName = ownerCompaniesConfig[currentOwnerCompany].name;

    showConfirmModal('🗑️', 'حذف الرحلة', 'هل أنت متأكد من حذف هذه الرحلة نهائياً؟ سيتم حذف جميع الحجوزات المرتبطة بها.', 'حذف', function() {
        // العثور على رقم الرحلة قبل الحذف
        const tripObj = (tripsData[companyName] || []).find(function(t) { return t.id === tripId; });
        const tripNum = tripObj ? tripObj.tripNumber : String(tripId);

        // حذف الرحلة من tripsData
        if (tripsData[companyName]) {
            tripsData[companyName] = tripsData[companyName].filter(function(t) { return t.id !== tripId; });
        }
        // حذف تفاصيل الرحلة
        delete tripDetailsData[tripId];
        // حذف الحجوزات المرتبطة
        ownerBookingsData[currentOwnerCompany] = ownerBookingsData[currentOwnerCompany].filter(function(b) {
            return b.tripNumber !== tripNum && b.tripNumber !== String(tripId);
        });

        saveTripsData();
        saveTripDetails();
        saveBookings();
        updateOwnerStats(ownerBookingsData[currentOwnerCompany]);
        renderOwnerBookings(ownerBookingsData[currentOwnerCompany]);
        renderOwnerTrips();
        populateTripNumbers();
        showToast('🗑️', 'تم حذف الرحلة بنجاح');
    });
}


// ===== تحميل لوحة صاحب الشركة =====
function loadOwnerDashboard() {
    // إعادة تعيين لاختيار الشركة
    backToCompanySelect();
}

// ===== تحديث الإحصائيات =====
function updateOwnerStats(bookings) {
    const total = bookings.length;
    const confirmed = bookings.filter(b => b.status === 'confirmed').length;
    const pending = bookings.filter(b => b.status === 'pending').length;

    // حساب الإيرادات (الحجوزات المؤكدة فقط)
    let revenue = 0;
    bookings.filter(b => b.status === 'confirmed').forEach(b => {
        revenue += parseInt(b.price.replace(/,/g, ''));
    });

    document.getElementById('total-bookings').textContent = total;
    document.getElementById('confirmed-bookings').textContent = confirmed;
    document.getElementById('pending-bookings').textContent = pending;
    document.getElementById('total-revenue').textContent = revenue.toLocaleString('ar-SY');
}

// ===== عرض الحجوزات =====
function renderOwnerBookings(bookings) {
    const list = document.getElementById('owner-bookings-list');
    const noMsg = document.getElementById('no-bookings-msg');
    const countSpan = document.getElementById('bookings-count');

    list.innerHTML = '';
    countSpan.textContent = `${bookings.length} حجز`;

    if (bookings.length === 0) {
        noMsg.style.display = 'block';
        return;
    }
    noMsg.style.display = 'none';

    bookings.forEach(booking => {
        const card = document.createElement('div');
        card.className = `booking-card booking-${booking.status}`;

        // تنسيق التاريخ
        const dateObj = new Date(booking.date);
        const dateFormatted = (`${String(dateObj.getDate()).padStart(2,'0')}/${String(dateObj.getMonth()+1).padStart(2,'0')}/${dateObj.getFullYear()}`);
        const timeFormatted = formatTime12(booking.time);

        // حالة الحجز
        const statusMap = {
            confirmed: { label: 'مؤكد', class: 'status-confirmed', icon: '✅' },
            pending: { label: 'بانتظار الدفع', class: 'status-pending', icon: '⏳' },
            cancelled: { label: 'ملغي', class: 'status-cancelled', icon: '❌' }
        };
        const status = statusMap[booking.status];

        // أزرار الإجراءات حسب الحالة
        let actionButtons = '';
        if (booking.status === 'pending') {
            actionButtons = `
                <button class="booking-action-btn confirm-action" onclick="event.stopPropagation(); changeBookingStatus('${booking.id}', 'confirmed')" title="تأكيد الحجز">
                    ✅ تأكيد
                </button>
                <button class="booking-action-btn cancel-action" onclick="event.stopPropagation(); changeBookingStatus('${booking.id}', 'cancelled')" title="إلغاء الحجز">
                    ❌ إلغاء
                </button>
            `;
        } else if (booking.status === 'confirmed') {
            actionButtons = `
                <button class="booking-action-btn cancel-action" onclick="event.stopPropagation(); changeBookingStatus('${booking.id}', 'cancelled')" title="إلغاء الحجز">
                    ❌ إلغاء
                </button>
                <button class="booking-action-btn pending-action" onclick="event.stopPropagation(); changeBookingStatus('${booking.id}', 'pending')" title="إرجاع لبانتظار الدفع">
                    ⏳ إرجاع
                </button>
            `;
        } else if (booking.status === 'cancelled') {
            actionButtons = `
                <button class="booking-action-btn confirm-action" onclick="event.stopPropagation(); changeBookingStatus('${booking.id}', 'confirmed')" title="إعادة تأكيد الحجز">
                    ✅ إعادة تأكيد
                </button>
                <button class="booking-action-btn delete-action" onclick="event.stopPropagation(); deleteBooking('${booking.id}')" title="حذف الحجز نهائياً">
                    🗑️ حذف
                </button>
            `;
        }

        // شريط ملون حسب الحالة على الجانب
        const statusBorderColor = booking.status === 'confirmed' ? '#2e7d32' : booking.status === 'pending' ? '#e65100' : '#c62828';

        card.innerHTML = `
            <div class="booking-card-status-bar" style="background: ${statusBorderColor};"></div>
            <div class="booking-card-content">
                <!-- الصف الأول: رقم الحجز + الحالة -->
                <div class="booking-row-top">
                    <div class="booking-id-badge">${booking.id}</div>
                    <div class="booking-trip-badge">🚌 ${booking.tripNumber || '---'}</div>
                    <div class="booking-status-pill ${status.class}">${status.icon} ${status.label}</div>
                </div>
                <!-- الصف الثاني: اسم الزبون + الكنية -->
                <div class="booking-row-customer">
                    <span class="booking-customer-icon-lg">👤</span>
                    <span class="booking-customer-name">${booking.customerName}</span>
                </div>
                <!-- الصف الثالث: المسار -->
                <div class="booking-row-route">
                    <span class="booking-route-city">${booking.from}</span>
                    <span class="booking-route-arrow">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="${statusBorderColor}" stroke-width="2.5">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                    </span>
                    <span class="booking-route-city">${booking.to}</span>
                </div>
                <!-- الصف الرابع: التفاصيل السريعة -->
                <div class="booking-row-details">
                    <div class="booking-detail-chip">
                        <span>📅</span> ${dateFormatted}
                    </div>
                    <div class="booking-detail-chip">
                        <span>🕐</span> ${timeFormatted}
                    </div>
                    <div class="booking-detail-chip">
                        <span>💺</span> مقعد ${booking.seatNumber}
                    </div>
                    <div class="booking-detail-chip price-chip">
                        <span>💰</span> ${booking.price} ل.س
                    </div>
                </div>
                <!-- الصف الخامس: معلومات إضافية -->
                <div class="booking-row-extra">
                    <div class="booking-extra-item">
                        <span>💳</span> ${booking.paymentMethod}
                    </div>
                    <div class="booking-extra-item">
                        <span>🪪</span> <span class="national-id-inline">${booking.nationalId || '---'}</span>
                    </div>
                    <div class="booking-extra-item">
                        <span>🕐</span> ${booking.bookedAt}
                    </div>
                </div>
                <!-- أزرار الإجراءات -->
                <div class="booking-actions">
                    <button class="booking-action-btn details-action" onclick="event.stopPropagation(); showCustomerDetails('${booking.id}')" title="عرض تفاصيل الزبون">
                        👁️ تفاصيل الزبون
                    </button>
                    ${actionButtons}
                </div>
            </div>
        `;
        list.appendChild(card);
    });
}

// ===== ملء قائمة أرقام الرحلات =====
function populateTripNumbers() {
    if (!currentOwnerCompany) return;
    const select = document.getElementById('owner-filter-trip');
    if (!select) return;

    const bookings = ownerBookingsData[currentOwnerCompany] || [];
    const tripNumbers = new Set();
    bookings.forEach(b => {
        if (b.tripNumber) tripNumbers.add(b.tripNumber);
    });

    // حفظ القيمة المختارة حالياً
    const currentValue = select.value;

    // مسح الخيارات القديمة
    select.innerHTML = '<option value="">الكل</option>';

    // ترتيب أرقام الرحلات
    const sortedTrips = [...tripNumbers].sort();

    sortedTrips.forEach(tripNum => {
        const option = document.createElement('option');
        option.value = tripNum;
        option.textContent = tripNum;
        select.appendChild(option);
    });

    // إعادة القيمة المختارة
    if (currentValue && tripNumbers.has(currentValue)) {
        select.value = currentValue;
    }
}

// ===== فلترة حجوزات صاحب الشركة =====
function filterOwnerBookings() {
    if (!currentOwnerCompany) return;
    const filterCustomer = document.getElementById('owner-filter-customer').value.trim();
    const filterTrip = document.getElementById('owner-filter-trip').value;
    const filterDate = document.getElementById('owner-filter-date').value;
    const filterDest = document.getElementById('owner-filter-destination').value;
    const filterStatus = document.getElementById('owner-filter-status').value;

    const bookings = ownerBookingsData[currentOwnerCompany] || [];
    let filtered = [...bookings];

    if (filterCustomer) {
        const search = filterCustomer.toLowerCase();
        filtered = filtered.filter(b => 
            (b.customerName && b.customerName.toLowerCase().includes(search)) ||
            (b.nickname && b.nickname.toLowerCase().includes(search)) ||
            (b.nationalId && b.nationalId.includes(search))
        );
    }
    if (filterTrip) {
        filtered = filtered.filter(b => b.tripNumber === filterTrip);
    }
    if (filterDate) {
        filtered = filtered.filter(b => b.date === filterDate);
    }
    if (filterDest) {
        filtered = filtered.filter(b => b.to === filterDest);
    }
    if (filterStatus) {
        filtered = filtered.filter(b => b.status === filterStatus);
    }

    updateOwnerStats(filtered);
    renderOwnerBookings(filtered);
}

// ===== إعادة تعيين فلتر صاحب الشركة =====
function resetOwnerFilter() {
    document.getElementById('owner-filter-customer').value = '';
    document.getElementById('owner-filter-trip').value = '';
    document.getElementById('owner-filter-date').value = '';
    document.getElementById('owner-filter-destination').value = '';
    document.getElementById('owner-filter-status').value = '';
    if (currentOwnerCompany) {
        const bookings = ownerBookingsData[currentOwnerCompany] || [];
        populateTripNumbers();
        updateOwnerStats(bookings);
        renderOwnerBookings(bookings);
    }
}

// ===== نافذة التأكيد =====
let modalAction = null; // الدالة التي سيتم تنفيذها عند التأكيد

function showConfirmModal(icon, title, message, confirmText, action) {
    document.getElementById('modal-icon').textContent = icon;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-message').textContent = message;
    document.getElementById('modal-confirm-btn').textContent = confirmText;
    modalAction = action;
    document.getElementById('confirm-modal').style.display = 'flex';
}

function confirmModalAction() {
    if (modalAction) {
        modalAction();
        modalAction = null;
    }
    closeModal();
}

function closeModal() {
    document.getElementById('confirm-modal').style.display = 'none';
    modalAction = null;
}

// ===== إشعار النجاح (Toast) =====
function showToast(icon, message) {
    const toast = document.getElementById('toast-notification');
    document.getElementById('toast-icon').textContent = icon;
    document.getElementById('toast-message').textContent = message;
    toast.style.display = 'flex';
    toast.classList.add('toast-show');
    setTimeout(() => {
        toast.classList.remove('toast-show');
        toast.style.display = 'none';
    }, 3000);
}

// ===== تعديل حالة الحجز =====
function changeBookingStatus(bookingId, newStatus) {
    if (!currentOwnerCompany) return;
    const bookings = ownerBookingsData[currentOwnerCompany];
    const booking = bookings.find(b => b.id === bookingId);
    if (!booking) return;

    const statusLabels = {
        confirmed: 'مؤكد',
        pending: 'بانتظار الدفع',
        cancelled: 'ملغي'
    };

    const statusIcons = {
        confirmed: '✅',
        pending: '⏳',
        cancelled: '❌'
    };

    showConfirmModal(
        statusIcons[newStatus],
        `تغيير حالة الحجز ${bookingId}`,
        `هل تريد تغيير حالة الحجز إلى "${statusLabels[newStatus]}"؟`,
        'تأكيد التغيير',
        () => {
            booking.status = newStatus;
            filterOwnerBookings();
            showToast(statusIcons[newStatus], `تم تغيير حالة الحجز ${bookingId} إلى ${statusLabels[newStatus]}`);
        }
    );
}

// ===== حذف حجز =====
function deleteBooking(bookingId) {
    if (!currentOwnerCompany) return;

    showConfirmModal(
        '🗑️',
        'حذف الحجز',
        `هل أنت متأكد من حذف الحجز ${bookingId}؟ لا يمكن التراجع عن هذا الإجراء.`,
        'حذف نهائي',
        () => {
            ownerBookingsData[currentOwnerCompany] = ownerBookingsData[currentOwnerCompany].filter(b => b.id !== bookingId);
            filterOwnerBookings();
            showToast('🗑️', `تم حذف الحجز ${bookingId} بنجاح`);
        }
    );
}

// ===== تأكيد حذف جميع الحجوزات =====
function confirmDeleteAllBookings() {
    if (!currentOwnerCompany) {
        showToast('⚠️', 'يرجى اختيار الشركة أولاً');
        return;
    }

    const bookingsCount = (ownerBookingsData[currentOwnerCompany] || []).length;
    if (bookingsCount === 0) {
        showToast('ℹ️', 'لا توجد حجوزات للحذف');
        return;
    }

    const companyName = ownerCompaniesConfig[currentOwnerCompany]?.name || '';
    showConfirmModal(
        '🗑️',
        'حذف جميع الحجوزات',
        `هل أنت متأكد من حذف جميع حجوزات "${companyName}"؟ سيتم حذف ${bookingsCount} حجز نهائياً ولا يمكن التراجع عن هذا الإجراء.`,
        'حذف الكل نهائياً',
        () => {
            ownerBookingsData[currentOwnerCompany] = [];
            populateTripNumbers();
            resetOwnerFilter();
            showToast('🗑️', `تم حذف جميع حجوزات "${companyName}" بنجاح`);
        }
    );
}

// ===== نافذة إضافة رحلة جديدة =====
function showAddTripModal() {
    if (!currentOwnerCompany) {
        showToast('⚠️', 'يرجى اختيار الشركة أولاً');
        return;
    }
    document.getElementById('add-trip-modal').style.display = 'flex';
    populateTripCitiesDatalist();
    // تعيين تاريخ الغد كافتراضي
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.getElementById('trip-date').value = tomorrow.toISOString().split('T')[0];
}

function closeAddTripModal() {
    document.getElementById('add-trip-modal').style.display = 'none';
    // إعادة تعيين الحقول
    ['trip-from', 'trip-to', 'trip-date', 'trip-time', 'trip-price', 'trip-driver', 'trip-description', 'trip-arrival-time'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    document.getElementById('trip-bus-type').value = 'باص مريح';
    document.getElementById('add-trip-error').style.display = 'none';
}

function populateTripCitiesDatalist() {
    const cities = new Set();
    Object.values(tripsData).forEach(companyTrips => {
        companyTrips.forEach(trip => {
            cities.add(trip.from);
            cities.add(trip.to);
        });
    });
    const fromDatalist = document.getElementById('trip-cities-from');
    const toDatalist = document.getElementById('trip-cities-to');
    fromDatalist.innerHTML = '';
    toDatalist.innerHTML = '';
    cities.forEach(city => {
        const opt1 = document.createElement('option');
        opt1.value = city;
        fromDatalist.appendChild(opt1);
        const opt2 = document.createElement('option');
        opt2.value = city;
        toDatalist.appendChild(opt2);
    });
}

function addNewTrip() {
    const from = document.getElementById('trip-from').value.trim();
    const to = document.getElementById('trip-to').value.trim();
    const date = document.getElementById('trip-date').value;
    const time = document.getElementById('trip-time').value;
    const busType = document.getElementById('trip-bus-type').value;
    const price = document.getElementById('trip-price').value.trim();
    const arrivalTime = document.getElementById('trip-arrival-time').value;
    const driver = document.getElementById('trip-driver').value.trim();
    const description = document.getElementById('trip-description').value.trim();
    const errorDiv = document.getElementById('add-trip-error');

    // التحقق من الحقول
    let errors = [];
    if (!from) errors.push('المدينة المصدر');
    if (!to) errors.push('المدينة الوجهة');
    if (!date) errors.push('التاريخ');
    if (!time) errors.push('وقت الانطلاق');
    if (!price) errors.push('السعر');

    if (errors.length > 0) {
        errorDiv.style.display = 'flex';
        errorDiv.innerHTML = `⚠️ يرجى ملء الحقول: ${errors.join(' - ')}`;
        return;
    }

    errorDiv.style.display = 'none';

    // تحديد اسم الشركة
    const companyName = ownerCompaniesConfig[currentOwnerCompany].name;

    // إنشاء ID جديد
    const companyTrips = tripsData[companyName] || [];
    const newId = Math.max(...Object.keys(tripDetailsData).map(Number), 0) + 1;

    // توليد رقم الرحلة (tripNumber)
    const prefix = currentOwnerCompany === 'alsharif' ? 'SH' : currentOwnerCompany === 'hamrash' ? 'HM' : 'TR';
    let maxTripNum = 0;
    companyTrips.forEach(t => {
        if (t.tripNumber && t.tripNumber.startsWith(prefix)) {
            const num = parseInt(t.tripNumber.replace(prefix + '-', ''));
            if (num > maxTripNum) maxTripNum = num;
        }
    });
    const tripNumber = prefix + '-' + String(maxTripNum + 1).padStart(3, '0');

    // تنسيق السعر
    const formattedPrice = price.replace(/,/g, '');

    // أيقونة حسب الوجهة
    const cityIcons = {
        'دمشق': '🏛️', 'حمص': '⛪', 'حلب': '🏰', 'حماة': '🕌', 'ادلب': '🌿'
    };
    const icon = cityIcons[to] || '🚌';

    // إضافة الرحلة لبيانات الرحلات
    const newTrip = {
        id: newId,
        tripNumber: tripNumber,
        from: from,
        to: to,
        company: companyName,
        description: description || `رحلة من ${from} إلى ${to}`,
        icon: icon,
        date: date,
        time: time
    };

    if (!tripsData[companyName]) tripsData[companyName] = [];
    tripsData[companyName].push(newTrip);

    // إضافة تفاصيل الرحلة
    const arrivalFormatted = arrivalTime ? formatTime12(arrivalTime) : '';
    tripDetailsData[newId] = {
        busType: busType,
        departureTime: formatTime12(time),
        arrivalTime: arrivalFormatted || 'غير محدد',
        driverName: driver || 'غير محدد',
        assistantName: 'غير محدد',
        totalSeats: 40,
        occupiedSeats: [],
        price: formattedPrice
    };

    closeAddTripModal();
    showToast('🚌', `تمت إضافة رحلة ${from} ← ${to} بنجاح`);
}

// ===== عرض تفاصيل الزبون =====
function showCustomerDetails(bookingId) {
    if (!currentOwnerCompany) return;
    const bookings = ownerBookingsData[currentOwnerCompany];
    const booking = bookings.find(b => b.id === bookingId);
    if (!booking) return;

    const detailsBody = document.getElementById('customer-details-body');

    // حالة الحجز
    const statusMap = {
        confirmed: { label: 'مؤكد', class: 'status-confirmed', icon: '✅', color: '#2e7d32', bg: '#e8f5e9' },
        pending: { label: 'بانتظار الدفع', class: 'status-pending', icon: '⏳', color: '#e65100', bg: '#fff3e0' },
        cancelled: { label: 'ملغي', class: 'status-cancelled', icon: '❌', color: '#c62828', bg: '#ffebee' }
    };
    const status = statusMap[booking.status];

    // تنسيق التاريخ
    const dateObj = new Date(booking.date);
    const dateFormatted = (`${String(dateObj.getDate()).padStart(2,'0')}/${String(dateObj.getMonth()+1).padStart(2,'0')}/${dateObj.getFullYear()}`);
    const timeFormatted = booking.time ? formatTime12(booking.time) : '---';

    // تفاصيل الرحلة إن وجدت
    const tripDetails = tripDetailsData[Object.keys(tripDetailsData).find(key => {
        const trips = tripsData[booking.company || ownerCompaniesConfig[currentOwnerCompany]?.name] || [];
        return trips.find(t => t.id === parseInt(key) && t.from === booking.from && t.to === booking.to && t.time === booking.time);
    })];

    // حساب المدة التقديرية
    let duration = '---';
    if (tripDetails && tripDetails.arrivalTime && tripDetails.departureTime) {
        duration = `${tripDetails.departureTime} - ${tripDetails.arrivalTime}`;
    }

    // اسم الشركة
    const companyName = ownerCompaniesConfig[currentOwnerCompany]?.name || '---';

    detailsBody.innerHTML = `
        <!-- بطاقة حالة الحجز -->
        <div class="cd-status-banner" style="background: ${status.bg}; border-right: 5px solid ${status.color};">
            <div class="cd-status-icon">${status.icon}</div>
            <div class="cd-status-text">
                <span class="cd-status-label" style="color: ${status.color};">حالة الحجز: ${status.label}</span>
                <span class="cd-status-id">رقم الحجز: ${booking.id}</span>
            </div>
        </div>

        <!-- قسم معلومات الزبون الشخصية -->
        <div class="cd-section">
            <div class="cd-section-title">
                <span class="cd-section-icon">👤</span>
                <span>المعلومات الشخصية</span>
            </div>
            <div class="cd-info-grid">
                <div class="cd-info-card">
                    <div class="cd-info-icon">📛</div>
                    <div class="cd-info-content">
                        <span class="cd-info-label">الاسم الكامل</span>
                        <span class="cd-info-value cd-info-value-lg">${booking.customerName}</span>
                    </div>
                </div>
                <div class="cd-info-card">
                    <div class="cd-info-icon">👩</div>
                    <div class="cd-info-content">
                        <span class="cd-info-label">اسم الأم</span>
                        <span class="cd-info-value">${booking.motherName || '---'}</span>
                    </div>
                </div>
                <div class="cd-info-card">
                    <div class="cd-info-icon">🪪</div>
                    <div class="cd-info-content">
                        <span class="cd-info-label">الرقم الوطني</span>
                        <span class="cd-info-value cd-info-mono" dir="ltr">${booking.nationalId || '---'}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- قسم تفاصيل الرحلة -->
        <div class="cd-section">
            <div class="cd-section-title">
                <span class="cd-section-icon">🚌</span>
                <span>تفاصيل الرحلة</span>
            </div>
            <div class="cd-trip-route-card">
                <div class="cd-route-from">
                    <span class="cd-route-label">من</span>
                    <span class="cd-route-city">${booking.from}</span>
                </div>
                <div class="cd-route-line">
                    <div class="cd-route-dash"></div>
                    <div class="cd-route-arrow-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="${status.color}" stroke-width="2.5">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                    </div>
                    <div class="cd-route-dash"></div>
                </div>
                <div class="cd-route-to">
                    <span class="cd-route-label">إلى</span>
                    <span class="cd-route-city">${booking.to}</span>
                </div>
            </div>
            <div class="cd-info-grid cd-info-grid-4">
                <div class="cd-info-card cd-info-card-sm">
                    <div class="cd-info-icon">📅</div>
                    <div class="cd-info-content">
                        <span class="cd-info-label">التاريخ</span>
                        <span class="cd-info-value">${dateFormatted}</span>
                    </div>
                </div>
                <div class="cd-info-card cd-info-card-sm">
                    <div class="cd-info-icon">🕐</div>
                    <div class="cd-info-content">
                        <span class="cd-info-label">وقت الانطلاق</span>
                        <span class="cd-info-value">${timeFormatted}</span>
                    </div>
                </div>
                <div class="cd-info-card cd-info-card-sm">
                    <div class="cd-info-icon">💺</div>
                    <div class="cd-info-content">
                        <span class="cd-info-label">رقم المقعد</span>
                        <span class="cd-info-value cd-info-value-highlight">${booking.seatNumber || '---'}</span>
                    </div>
                </div>
                <div class="cd-info-card cd-info-card-sm">
                    <div class="cd-info-icon">🚌</div>
                    <div class="cd-info-content">
                        <span class="cd-info-label">رقم الرحلة</span>
                        <span class="cd-info-value">${booking.tripNumber || '---'}</span>
                    </div>
                </div>
            </div>
            ${tripDetails ? `
            <div class="cd-info-grid cd-info-grid-3">
                <div class="cd-info-card cd-info-card-sm">
                    <div class="cd-info-icon">🚍</div>
                    <div class="cd-info-content">
                        <span class="cd-info-label">نوع الباص</span>
                        <span class="cd-info-value">${tripDetails.busType || '---'}</span>
                    </div>
                </div>
                <div class="cd-info-card cd-info-card-sm">
                    <div class="cd-info-icon">⏱️</div>
                    <div class="cd-info-content">
                        <span class="cd-info-label">الوصول المتوقع</span>
                        <span class="cd-info-value">${tripDetails.arrivalTime || '---'}</span>
                    </div>
                </div>
                <div class="cd-info-card cd-info-card-sm">
                    <div class="cd-info-icon">👨‍✈️</div>
                    <div class="cd-info-content">
                        <span class="cd-info-label">اسم السائق</span>
                        <span class="cd-info-value">${tripDetails.driverName || '---'}</span>
                    </div>
                </div>
                <div class="cd-info-card cd-info-card-sm">
                    <div class="cd-info-icon">🧑‍✈️</div>
                    <div class="cd-info-content">
                        <span class="cd-info-label">اسم المعاون</span>
                        <span class="cd-info-value">${tripDetails.assistantName || '---'}</span>
                    </div>
                </div>
            </div>` : ''}
        </div>

        <!-- قسم معلومات الدفع -->
        <div class="cd-section">
            <div class="cd-section-title">
                <span class="cd-section-icon">💳</span>
                <span>معلومات الدفع</span>
            </div>
            <div class="cd-info-grid cd-info-grid-3">
                <div class="cd-info-card cd-info-card-sm">
                    <div class="cd-info-icon">💰</div>
                    <div class="cd-info-content">
                        <span class="cd-info-label">سعر التذكرة</span>
                        <span class="cd-info-value cd-info-value-price">${booking.price} ل.س</span>
                    </div>
                </div>
                <div class="cd-info-card cd-info-card-sm">
                    <div class="cd-info-icon">💳</div>
                    <div class="cd-info-content">
                        <span class="cd-info-label">طريقة الدفع</span>
                        <span class="cd-info-value">${booking.paymentMethod || '---'}</span>
                    </div>
                </div>
                <div class="cd-info-card cd-info-card-sm">
                    <div class="cd-info-icon">🏢</div>
                    <div class="cd-info-content">
                        <span class="cd-info-label">الشركة</span>
                        <span class="cd-info-value">${companyName}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- قسم معلومات الحجز -->
        <div class="cd-section">
            <div class="cd-section-title">
                <span class="cd-section-icon">📋</span>
                <span>معلومات الحجز</span>
            </div>
            <div class="cd-info-grid cd-info-grid-2">
                <div class="cd-info-card">
                    <div class="cd-info-icon">🔖</div>
                    <div class="cd-info-content">
                        <span class="cd-info-label">رقم الحجز</span>
                        <span class="cd-info-value cd-info-mono">${booking.id}</span>
                    </div>
                </div>
                <div class="cd-info-card">
                    <div class="cd-info-icon">🕐</div>
                    <div class="cd-info-content">
                        <span class="cd-info-label">وقت الحجز</span>
                        <span class="cd-info-value">${booking.bookedAt || '---'}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('customer-details-modal').style.display = 'flex';
}

// ===== إغلاق نافذة تفاصيل الزبون =====
function closeCustomerDetailsModal() {
    document.getElementById('customer-details-modal').style.display = 'none';
}

// ===== تصدير الحجوزات =====
function exportBookings() {
    if (!currentOwnerCompany) {
        showToast('⚠️', 'يرجى اختيار الشركة أولاً');
        return;
    }

    const bookings = ownerBookingsData[currentOwnerCompany] || [];
    if (bookings.length === 0) {
        showToast('⚠️', 'لا توجد حجوزات للتصدير');
        return;
    }

    const companyName = ownerCompaniesConfig[currentOwnerCompany].name;

    // إنشاء محتوى CSV
    const headers = ['رقم الحجز', 'رقم الرحلة', 'اسم الزبون', 'الكنية', 'الرقم الوطني', 'من', 'إلى', 'التاريخ', 'الوقت', 'المقعد', 'السعر', 'الحالة', 'طريقة الدفع', 'وقت الحجز'];
    const statusLabels = { confirmed: 'مؤكد', pending: 'بانتظار الدفع', cancelled: 'ملغي' };

    let csvContent = '\uFEFF'; // BOM for Arabic support
    csvContent += headers.join(',') + '\n';

    bookings.forEach(b => {
        const row = [
            b.id,
            b.tripNumber || '',
            b.customerName || '',
            b.nickname || '',
            b.nationalId || '',
            b.from || '',
            b.to || '',
            b.date || '',
            b.time || '',
            b.seatNumber || '',
            b.price || '',
            statusLabels[b.status] || b.status,
            b.paymentMethod || '',
            b.bookedAt || ''
        ];
        csvContent += row.map(cell => `"${cell}"`).join(',') + '\n';
    });

    // تحميل الملف
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `حجوزات_${companyName}_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(link.href);

    showToast('📁', `تم تصدير ${bookings.length} حجز بنجاح`);
}

// ===== نظام حفظ البيانات (localStorage) =====
const STORAGE_KEYS = {
    ownerBookings: 'ihjaz_ownerBookingsData',
    ownerCompanies: 'ihjaz_ownerCompaniesConfig',
    tripDetails: 'ihjaz_tripDetailsData',
    tripsData: 'ihjaz_tripsData',
    companiesData: 'ihjaz_companiesData',
    garagesData: 'ihjaz_garagesData',
    lastSave: 'ihjaz_lastSaveTime'
};

function saveToStorage(key, data) {
    try { localStorage.setItem(key, JSON.stringify(data)); }
    catch (e) { console.warn('خطأ في حفظ البيانات:', e); }
}

function loadFromStorage(key, defaultValue) {
    try {
        const data = localStorage.getItem(key);
        if (data) return JSON.parse(data);
    } catch (e) { console.warn('خطأ في تحميل البيانات:', e); }
    return defaultValue;
}

function saveAllData() {
    saveToStorage(STORAGE_KEYS.ownerBookings, ownerBookingsData);
    saveToStorage(STORAGE_KEYS.ownerCompanies, ownerCompaniesConfig);
    saveToStorage(STORAGE_KEYS.tripDetails, tripDetailsData);
    saveToStorage(STORAGE_KEYS.tripsData, tripsData);
    saveToStorage(STORAGE_KEYS.companiesData, companiesData);
    saveToStorage(STORAGE_KEYS.garagesData, garagesData);
    try {
        const now = new Date();
        const ts = now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0')+'-'+String(now.getDate()).padStart(2,'0')+' '+String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0')+':'+String(now.getSeconds()).padStart(2,'0');
        localStorage.setItem(STORAGE_KEYS.lastSave, ts);
    } catch(e){}
}

function saveBookings() { saveToStorage(STORAGE_KEYS.ownerBookings, ownerBookingsData); }
function saveTripDetails() { saveToStorage(STORAGE_KEYS.tripDetails, tripDetailsData); }
function saveTripsData() { saveToStorage(STORAGE_KEYS.tripsData, tripsData); }
function saveCompaniesData() {
    saveToStorage(STORAGE_KEYS.companiesData, companiesData);
    saveToStorage(STORAGE_KEYS.ownerCompanies, ownerCompaniesConfig);
}
function saveGaragesData() { saveToStorage(STORAGE_KEYS.garagesData, garagesData); }

function loadAllData() {
    const sb = loadFromStorage(STORAGE_KEYS.ownerBookings, null);
    if (sb) {
        ownerBookingsData = sb;
        // تهيئة حقل motherName للحجوزات القديمة
        for (const key in ownerBookingsData) {
            ownerBookingsData[key].forEach(booking => {
                if (!booking.motherName) booking.motherName = '';
            });
        }
    }
    const sc = loadFromStorage(STORAGE_KEYS.ownerCompanies, null);
    if (sc) {
        for (const key in sc) {
            if (ownerCompaniesConfig[key]) {
                // حفظ القيم الافتراضية لاسم المستخدم وكلمة المرور
                const defaultUsername = ownerCompaniesConfig[key].username;
                const defaultPassword = ownerCompaniesConfig[key].password;
                ownerCompaniesConfig[key] = { ...ownerCompaniesConfig[key], ...sc[key] };
                // ضمان وجود username و password دائماً
                ownerCompaniesConfig[key].username = defaultUsername;
                ownerCompaniesConfig[key].password = defaultPassword;
            } else {
                ownerCompaniesConfig[key] = sc[key];
                if (!ownerCompaniesConfig[key].username) ownerCompaniesConfig[key].username = '0';
                if (!ownerCompaniesConfig[key].password) ownerCompaniesConfig[key].password = '0';
            }
        }
    }
    const std = loadFromStorage(STORAGE_KEYS.tripDetails, null);
    if (std) {
        for (const key in std) {
            if (tripDetailsData[key]) {
                tripDetailsData[key].occupiedSeats = std[key].occupiedSeats || tripDetailsData[key].occupiedSeats;
            } else {
                tripDetailsData[key] = std[key];
            }
        }
    }
    const st = loadFromStorage(STORAGE_KEYS.tripsData, null);
    if (st) {
        for (const key in st) {
            tripsData[key] = st[key];
            // تهيئة حقل tripNumber للرحلات القديمة
            tripsData[key].forEach(trip => {
                if (!trip.tripNumber) trip.tripNumber = String(trip.id);
            });
        }
    }
    const scd = loadFromStorage(STORAGE_KEYS.companiesData, null);
    if (scd) { for (const key in scd) { companiesData[key] = scd[key]; } }
    const sg = loadFromStorage(STORAGE_KEYS.garagesData, null);
    if (sg) { for (const key in sg) { garagesData[key] = sg[key]; } }
}

function clearAllStorage() {
    Object.values(STORAGE_KEYS).forEach(key => { localStorage.removeItem(key); });
}

function formatStorageSize(bytes) {
    if (bytes === 0) return '0 B';
    const sizes = ['B','KB','MB'];
    const i = Math.floor(Math.log(bytes)/Math.log(1024));
    return (bytes/Math.pow(1024,i)).toFixed(1)+' '+sizes[i];
}

function getLastSaveTime() {
    try { return localStorage.getItem(STORAGE_KEYS.lastSave) || 'غير متوفر'; }
    catch(e) { return 'غير متوفر'; }
}

function loadAdminStats() {
    const statsDiv = document.getElementById('admin-storage-stats');
    const infoDiv = document.getElementById('admin-info-list');
    if (!statsDiv || !infoDiv) return;

    let totalSize = 0;
    Object.values(STORAGE_KEYS).forEach(key => {
        const data = localStorage.getItem(key);
        if (data) totalSize += new Blob([data]).size;
    });

    let totalBookings=0, confirmedCount=0, pendingCount=0;
    Object.values(ownerBookingsData).forEach(bookings => {
        bookings.forEach(b => {
            totalBookings++;
            if (b.status==='confirmed') confirmedCount++;
            if (b.status==='pending') pendingCount++;
        });
    });

    let totalTrips=0;
    Object.values(tripsData).forEach(trips => { totalTrips += trips.length; });

    let totalCompanies=0;
    Object.values(companiesData).forEach(companies => { totalCompanies += companies.length; });

    statsDiv.innerHTML = `
        <div class="admin-stat-card"><div class="admin-stat-icon">💾</div><div class="admin-stat-value">${formatStorageSize(totalSize)}</div><div class="admin-stat-label">حجم البيانات</div></div>
        <div class="admin-stat-card"><div class="admin-stat-icon">📋</div><div class="admin-stat-value">${totalBookings}</div><div class="admin-stat-label">الحجوزات</div></div>
        <div class="admin-stat-card"><div class="admin-stat-icon">🚌</div><div class="admin-stat-value">${totalTrips}</div><div class="admin-stat-label">الرحلات</div></div>
        <div class="admin-stat-card"><div class="admin-stat-icon">🏢</div><div class="admin-stat-value">${totalCompanies}</div><div class="admin-stat-label">الشركات</div></div>
    `;

    infoDiv.innerHTML = `
        <div class="admin-info-item"><span class="admin-info-label">حالة التخزين</span><span class="admin-info-value ${totalSize>0?'status-active':'status-empty'}">${totalSize>0?'✅ محفوظة':'⚠️ فارغ'}</span></div>
        <div class="admin-info-item"><span class="admin-info-label">مؤكدة</span><span class="admin-info-value">${confirmedCount}</span></div>
        <div class="admin-info-item"><span class="admin-info-label">بانتظار الدفع</span><span class="admin-info-value">${pendingCount}</span></div>
        <div class="admin-info-item"><span class="admin-info-label">آخر حفظ</span><span class="admin-info-value">${getLastSaveTime()}</span></div>
        <div class="admin-info-item"><span class="admin-info-label">المساحة</span><span class="admin-info-value">${formatStorageSize(totalSize)} / ~5 MB</span></div>
    `;
}

function adminSaveData() { saveAllData(); loadAdminStats(); showToast('💾','تم حفظ جميع البيانات بنجاح'); }

function adminExportData() {
    const exportData = { version:'1.0', exportDate:new Date().toISOString(),
        ownerBookingsData, ownerCompaniesConfig, tripDetailsData, tripsData, companiesData, garagesData };
    const blob = new Blob([JSON.stringify(exportData,null,2)],{type:'application/json'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'ihjaz-backup-'+new Date().toISOString().split('T')[0]+'.json';
    link.click(); URL.revokeObjectURL(link.href);
    showToast('📤','تم تصدير البيانات بنجاح');
}

function adminImportData(event) {
    const file = event.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importData = JSON.parse(e.target.result);
            if (!importData.version) { showToast('❌','ملف غير صالح'); return; }
            showConfirmModal('📥','استيراد البيانات','سيتم استبدال البيانات الحالية. هل تريد المتابعة؟','استيراد',()=>{
                if (importData.ownerBookingsData) ownerBookingsData = importData.ownerBookingsData;
                if (importData.ownerCompaniesConfig) ownerCompaniesConfig = importData.ownerCompaniesConfig;
                if (importData.tripDetailsData) { for (const key in importData.tripDetailsData) { tripDetailsData[key] = importData.tripDetailsData[key]; } }
                if (importData.tripsData) { for (const key in importData.tripsData) { tripsData[key] = importData.tripsData[key]; } }
                if (importData.companiesData) { for (const key in importData.companiesData) { companiesData[key] = importData.companiesData[key]; } }
                if (importData.garagesData) { for (const key in importData.garagesData) { garagesData[key] = importData.garagesData[key]; } }
                saveAllData(); loadAdminStats(); showToast('📥','تم استيراد البيانات بنجاح');
            });
        } catch(err) { showToast('❌','خطأ في قراءة الملف'); }
    };
    reader.readAsText(file); event.target.value = '';
}

function adminResetData() {
    showConfirmModal('🗑️','إعادة تعيين البيانات','سيتم حذف جميع البيانات المحفوظة والعودة للبيانات الافتراضية!','حذف الكل',()=>{
        clearAllStorage(); location.reload();
    });
}

// ===== تهيئة التطبيق =====
document.addEventListener('DOMContentLoaded', () => {
    // تحميل البيانات المحفوظة (بعد تعريف جميع المتغيرات)
    loadAllData();

    showScreen('main-screen');

    // حفظ تلقائي عند إغلاق الصفحة
    window.addEventListener('beforeunload', function() { saveAllData(); });

    // حفظ تلقائي كل 30 ثانية
    setInterval(function() { saveAllData(); }, 30000);

    // إغلاق النوافذ عند الضغط خارجها
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.style.display = 'none';
                modalAction = null;
            }
        });
    });
});

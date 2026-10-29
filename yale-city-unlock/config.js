// ============================================================
//  Yale 城市解鎖計畫｜預約表單設定檔
//  只需要改這個檔案，其他檔案不用動。
// ============================================================

// 1) Firebase 設定：到 Firebase 主控台 → 專案設定 → 一般 → 您的應用程式 → 複製 firebaseConfig 貼上
//    還沒貼上時，表單會以「展示模式」運作（資料不會真的送出，方便先給主管看畫面）
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyA71zte7og-qVJGLL4MVQLnw2PC0_nEWGQ",
  authDomain: "aa2026-booth.firebaseapp.com",
  projectId: "aa2026-booth",
  storageBucket: "aa2026-booth.firebasestorage.app",
  messagingSenderId: "669741381631",
  appId: "1:669741381631:web:229446301f0fee08e159ca"
};

// 2) EmailJS 設定（寄預約確認信用）：到 https://dashboard.emailjs.com 取得三個值貼上
//    publicKey：Account → General → Public Key
//    serviceId：Email Services 裡那個服務的 Service ID
//    templateId：Email Templates 裡那個範本的 Template ID
window.EMAILJS = {
  publicKey: "dFt8KcGq8EBRcAIkV",
  serviceId: "service_g2vzsds",
  templateId: "template_1mda6mk"
};

// 3) 活動資訊（顯示在表單與確認信上）
//    ⚠ 改截止時間時，Firestore 規則裡的截止時間也要一起改
window.EVENT = {
  dateLabel: "2026/11/14（六）",
  timeLabel: "12:30 – 16:30",
  place: "MONCEAU FLEURS 中山花町",
  address: "臺北市大同區南京西路25巷4-1號",
  deadlineISO: "2026-11-13T17:00:00+08:00", // 預約截止：11/13（五）17:00
  deadlineLabel: "11 月 13 日（五）17:00",
  mapUrl: "https://maps.app.goo.gl/1sMsmq3bQEpvcRbN7", // Google Maps 導航連結
  facebookUrl: "https://www.facebook.com/YaleHomeTaiwan"
};
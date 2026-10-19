// =====================================================
//  問卷設定檔：之後改品項、改顏色、換展覽，只改這個檔案
// =====================================================
window.SURVEY_CONFIG = {

  // 1) Firebase 專案設定（Firebase 主控台 → 專案設定 → 您的應用程式 → 複製貼上）
  firebase: {
    apiKey: "請貼上",
    authDomain: "請貼上",
    databaseURL: "請貼上",
    projectId: "請貼上",
    appId: "請貼上"
  },

  // 2) 個資告知事項中的公司名稱（請確認為公司登記全名）
  companyName: "台灣亞薩合萊股份有限公司",

  // 3) 活動名稱：會一起存進每筆資料，之後其他展覽沿用時改這裡即可
  eventName: "2026台北建材展",

  // 4) 身分選項（選填、單選）
  roles: ["建築師", "室內設計師", "營造廠", "經銷商", "業主", "個人"],

  // 5) 品牌與產品清單
  //    網址 ?b=biz / ?b=yale / ?b=kwikset 對應下面三組
  //    產品 id 請用英文小寫（建立後不要再改，否則舊資料會對不上）
  //    id 為 "other" 的項目，勾選後會出現補充說明欄
  brands: {
    biz: {
      name: "ASSA ABLOY 商用產品",
      color: "#0B4EA2",
      textOnColor: "#FFFFFF",
      products: [
        { id: "auto_door",   label: "自動門" },
        { id: "speed_gate",  label: "通關機" },
        { id: "door_hw",     label: "門鎖五金" },
        { id: "face_id",     label: "臉部辨識" },
        { id: "key_cabinet", label: "鑰匙櫃" },
        { id: "other",       label: "其它" }
      ]
    },
    yale: {
      name: "Yale 耶魯",
      color: "#FFD100",
      textOnColor: "#1A1A1A",
      products: [
        // TODO：待 Kay 提供品項
        { id: "other", label: "其它" }
      ]
    },
    kwikset: {
      name: "Kwikset 凱特安",
      color: "#1F2A44",
      textOnColor: "#FFFFFF",
      products: [
        // TODO：待 Kay 提供品項
        { id: "other", label: "其它" }
      ]
    }
  }
};

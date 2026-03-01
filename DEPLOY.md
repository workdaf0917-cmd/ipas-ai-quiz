# iPhone 離線使用部署指南

## 問題說明
iOS 直接開啟 HTML 檔案會使用「快速預覽」，導致：
- JavaScript 無法正常執行
- Service Worker 無法註冊
- 無法離線使用

## 解決方案：部署到 GitHub Pages（免費）

### 步驟 1：建立 GitHub 帳號
1. 前往 https://github.com
2. 點擊「Sign up」註冊帳號

### 步驟 2：建立新專案
1. 點擊右上角「+」→「New repository」
2. Repository name 輸入：`ipas-ai-quiz`
3. 選擇「Public」（公開）
4. 點擊「Create repository」

### 步驟 3：上傳檔案
1. 在專案頁面點擊「uploading an existing file」
2. 上傳以下檔案：
   - `iPAS_AI考古題練習.html`
   - `manifest.json`
   - `sw.js`
3. 點擊「Commit changes」

### 步驟 4：重新命名為 index.html
1. 點擊 `iPAS_AI考古題練習.html` 檔案
2. 點擊右上角「...」→「Rename」
3. 改為 `index.html`
4. 點擊「Commit changes」

### 步驟 5：啟用 GitHub Pages
1. 點擊「Settings」標籤
2. 左側選單點擊「Pages」
3. Source 選擇「Deploy from a branch」
4. Branch 選擇「main」→「/ (root)」
5. 點擊「Save」
6. 等待 1-2 分鐘，會顯示網址：`https://你的帳號.github.io/ipas-ai-quiz/`

### 步驟 6：iPhone 使用
1. 用 Safari 開啟上述網址
2. 點擊分享按鈕「⬆️」
3. 選擇「加入主畫面」
4. 離線時也能從主畫面開啟使用

---

## 替代方案：使用本地伺服器 App

如果不想上傳到網路，可使用 iOS App：

### 推薦 App：「Documents by Readdle」（免費）
1. App Store 下載「Documents」
2. 將 HTML 檔案傳入 App（AirDrop 或 iCloud）
3. 在 App 內點擊 HTML 檔案 → 選擇「在瀏覽器開啟」

### 推薦 App：「Koder Code Editor」（免費）
1. App Store 下載「Koder」
2. 匯入專案檔案
3. 啟用內建伺服器功能
4. 用 Safari 開啟 `localhost:8080`

---

## 替代方案：Mac 用戶使用本地伺服器

如果你有 Mac：

```bash
# 進入專案資料夾
cd "/Users/tfmacmini4/Documents/ClaudeCode/IPAs Ai規劃師初級試題網頁"

# Python 3
python3 -m http.server 8080

# 或 Node.js
npx serve .
```

然後在同一 WiFi 下的 iPhone 用 Safari 開啟：
`http://你的MacIP:8080`

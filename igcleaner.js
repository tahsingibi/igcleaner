/**
 * IGCleaner. instagram.com sekmesinde, giriş yapmışken, DevTools konsoluna yapıştır.
 * Sağda küçük bir panel açılır. Sayfanın geri kalanı tıklanabilir kalır.
 * Menü: Mesaj sil, Kaydedilenler. Yapıştırınca hiçbir şey silinmez.
 *
 * Mesaj silmek sohbeti sadece senin kutundan kaldırır. Karşı tarafın kopyası durur.
 * Kaydedilenleri kaldırmak gönderiyi silmez; sadece senin kaydından düşer.
 * Şifre ve çerez sayfa dışına çıkmaz.
 *
 * Dil: IG_LANG "tr" veya "en". İlk açılışta bu kullanılır.
 * Paneldeki TR | EN seçimi hatırlanır ve bir sonraki yapıştırmada bunu ezer.
 */

(() => {
"use strict";
const IG_BRAND = {
  title: "IGCleaner",
  handle: "@tahsingibi",
  handleUrl: "https://x.com/tahsingibi/",
  site: "sungur.dev",
  siteUrl: "https://sungur.dev",
  github: "github.com/tahsingibi/igcleaner",
  githubUrl: "https://github.com/tahsingibi/igcleaner",
};

const IG_LANG = "tr";

const IG_TEXT = {
  tr: {
    scanIdle: "Hazır. Önce ayarları düzenleyebilir, ardından Taramayı başlat düğmesine basabilirsin.",
    startScan: "Taramayı başlat",
    rescan: "Yeniden tara",
    notScanned: "Henüz tarama yapılmadı.",
    cacheNotice: "Önceki tarama gösteriliyor · {time} · {n} kayıt. Liste güncel olmayabilir.",
    cachePrivacy: "Tarama sonuçları bu Instagram hesabına özel olarak tarayıcıda 24 saat saklanır.",
    clearCache: "Kayıtlı taramaları temizle",
    cacheCleared: "Kayıtlı taramalar temizlendi.",
    settingsTiming: "İstek temposu",
    settingsData: "Kayıtlı taramalar",
    settingsDone: "Tamam",
    delayHint: "2–120 saniye · varsayılan 4,5",
    batchHint: "1–20 istek · varsayılan 5",
    restHint: "30–3600 saniye · varsayılan 300",

    settings: "Ayarlar",
    delaySeconds: "İstekler arası bekleme (saniye)",
    batchEvery: "Kaç istekten sonra mola",
    breakSeconds: "Mola süresi (saniye)",
    resetSettings: "Varsayılanlara dön",
    settingsNote: "Ayarlar bu tarayıcıda saklanır. Düşük süreler kısıtlama riskini artırır. İşlem sırasında değiştirilemez.",
    riskWarning: "Uyarı: Otomatik işlemler hesabınızın kısıtlanmasına veya askıya alınmasına yol açabilir. Hiçbir bekleme süresi güvenlik garantisi vermez.",
    safetyStopped: "İşlem güvenlik nedeniyle durduruldu. Yeni istek için en erken: {time}. Otomatik devam edilmez; Instagram uyarısını kontrol edin.",
    cancelled: "İşlem durduruldu.",
    busyOperation: "Başka bir işlem çalışıyor.",
    breakWaiting: "İstek veya mola bekleniyor…",

    wrongHost: "Bu kodu instagram.com sekmesinde çalıştır.",
    preparing: "Hazırlanıyor…",
    stop: "Durdur",
    openInbox: "Gelen kutusunu aç",
    searchChats: "İsim veya kullanıcı adı",
    searchSaved: "Kullanıcı veya açıklama",
    includeRequests: "Mesaj isteklerini de listele",
    reload: "Yenile",
    selectAll: "Tümünü seç",
    clearSelection: "Seçimi kaldır",
    reportOnly: "Sadece rapor",
    wipeAll: "Tümünü sil",
    wipeAllSaved: "Tümünü kaldır",
    selectedCount: "{n} seçili",
    selectedFiltered: "{n} seçili · aramada {m}",
    deleteSelected: "Seçilenleri sil",
    removeSelected: "Seçilenleri kaldır",
    noteMessages: "Sadece rapor hiçbir şeyi silmez. Silmek sohbeti sadece senin kutundan kaldırır.",
    noteSaved: "Sadece rapor kaydı kaldırmaz. Kaldırmak gönderiyi silmez, sadece senin kaydından düşer.",
    yesDelete: "Sil",
    yesRemove: "Kaldır",
    cancel: "Vazgeç",
    downloadJson: "JSON indir",
    downloadXlsx: "Excel indir",
    downloading: "İndiriliyor…",
    minimize: "Küçült",
    close: "Kapat",
    menuMessages: "Mesaj sil",
    menuSaved: "Kaydedilenler",
    langTr: "Türkçe",
    langEn: "İngilizce",
    stepPage: "Sayfa",
    stepList: "Liste",
    stepPick: "Seç",
    stepDelete: "Sil",
    stepRemove: "Kaldır",
    stepReport: "Rapor",
    hintMsg0: "Gelen kutusu sekmesini aç.",
    hintMsg1: "Sohbetler listeleniyor.",
    hintMsg2: "Silmek istediklerini seç.",
    hintMsg3: "Seçilenler senin kutundan siliniyor.",
    hintMsg4: "Rapor hazır. JSON veya Excel indir.",
    hintSaved0: "Kaydedilenler listeleniyor. Sayfa değiştirmen gerekmez.",
    hintSaved1: "Kaldırmak istediklerini seç.",
    hintSaved2: "Seçilenler kaydından kalkıyor. Gönderinin kendisi durur.",
    hintSaved3: "Rapor hazır. JSON veya Excel indir.",
    chatsListing: "Sohbetler listeleniyor…",
    chatsProgress: "{n} sohbet listelendi{page}{tail}",
    chatsCut: "{n} sohbet (liste yarıda kesildi){page}",
    chatsReady: "{n} sohbet. Silmek için seç.{page}",
    fromPage: " (sayfadaki listeden)",
    fromPageSentence: " Sayfadaki listeden.",
    stillGoing: ", devam ediyor…",
    doneDeleted: "Bitti. {n} sohbet senin kutundan silindi.",
    stopRequested: "Durdurma istendi…",
    reportWritten: "{n} kayıt rapora yazıldı. Hiçbir şey silinmedi.",
    pageOpening: "Sayfa açılıyor…",
    pageFailed: "Sayfa açılmadı. Adresi elle açıp paneli olduğu yerde bırak.",
    savedListing: "Kaydedilenler listeleniyor…",
    savedProgress: "{n} kayıt listelendi{tail}",
    savedCut: "{n} kayıt (liste yarıda kesildi)",
    savedReady: "{n} kayıt. Kaldırmak için seç.",
    busyListing: "Listeleniyor…",
    busyListingCount: "Listeleniyor… {n}",
    busyDeleting: "Siliniyor… {done}/{total}",
    busyRemoving: "Kaldırılıyor… {done}/{total}",
    savedLoading: "Kaydedilenler yükleniyor…",
    savedEmpty: "Kayıtlı gönderi yok.",
    chatsLoading: "Liste yükleniyor…",
    chatsEmpty: "Sohbet yok.",
    removed: "kaldırıldı",
    error: "hata",
    deleted: "silindi",
    group: "grup",
    request: "istek",
    openPost: "Gönderiyi aç",
    confirmWipeChats: "{n} sohbet sadece senin kutundan silinecek. Karşı tarafta durur. Bitince rapor iner.",
    confirmDeleteChats: "{n} sohbet sadece senin kutundan silinecek. Karşı tarafta durur. Geri alınamaz.",
    confirmWipeSaved: "{n} kayıt kaldırılacak. Gönderinin kendisi durur, sadece senin kaydından düşer. Bitince rapor iner.",
    confirmRemoveSaved: "{n} kayıt kaldırılacak. Gönderinin kendisi durur, sadece senin kaydından düşer.",
    confirmConsole: "{n} sohbet sadece senin kutundan silinecek. Karşı tarafta durur. Devam?",
    summaryListSaved: "Rapor: {n} kayıt listelendi. Hiçbir şey silinmedi.",
    summaryListChats: "Rapor: {n} sohbet listelendi. Hiçbir şey silinmedi.",
    summaryUnsave: "Rapor: {n} kayıt kaldırıldı, {errors} hata{stopped}. Gönderinin kendisi duruyor.{first}",
    summaryStopped: ", durduruldu",
    summaryDelete: "Rapor: {n} silindi, {errors} hata, {skipped} atlandı. Karşı tarafın kopyası duruyor.",
    firstError: " İlk hata: {text}",
    notLoggedIn: "Giriş görünmüyor. instagram.com'da hesabın açık olsun, sayfayı yenile.",
    noSession: "Oturum anahtarı okunamadı. Sayfayı yenileyip scripti tekrar yapıştır.",
    noMailbox: "Mesaj kutusu kimliği okunamadı. Sayfayı yenileyip scripti tekrar yapıştır.",
    rateLimit: "Instagram hız limiti koydu (429). 30-60 dakika bekleyip tekrar dene.",
    inboxReadFailed: "Gelen kutusu okunamadı ({problem}). doc {doc}, değişken {n}.",
    inboxReadFailedKeys: "Gelen kutusu okunamadı ({problem}). doc {doc}, değişken {n}. anahtarlar: {keys}.",
    inboxUnread: "Gelen kutusu okunamadı.",
    savedReadFailed: "Kaydedilenler okunamadı (HTTP {status}).",
    savedReadFailedDetail: "Kaydedilenler okunamadı (HTTP {status}): {detail}.",
    justNow: "az önce",
    minutesAgo: "{n} dk",
    hoursAgo: "{n} sa",
    daysAgo: "{n} gün",
    unnamedChat: "isimsiz sohbet",
    post: "gönderi",
    listed: "listelendi",
    stopped: "durduruldu",
    yes: "evet",
    no: "hayır",
    sourceInbox: "gelen kutusu",
    sourceRequests: "istekler",
    rowStopped: "döngü durduruldu, istek gitmedi",
    rowFailStreak: "üst üste hata, istek gitmedi",
    rowLimited: "limit veya oturum, istek gitmedi",
    noReply: "yanıt yok",
    emptyReply: "boş yanıt",
    htmlReply: "HTML yanıtı",
    gqlError: "graphql hatası",
    badJson: "JSON okunamadı",
    couldNotDelete: "silinemedi",
    threadOpenFailed: "sohbet açılamadı",
    noInfoButton: "sohbet bilgisi düğmesi yok",
    noDeleteButton: "Sohbeti sil düğmesi yok",
    noConfirmButton: "onay düğmesi yok",
    sessionHttp: "oturum (HTTP {status})",
    folderName: "klasör {folder}",
    noteListSaved: "Sadece liste. Hiçbir kayıt kaldırılmadı.",
    noteListChats: "Sadece liste. Hiçbir sohbet silinmedi.",
    noteDelete: "Sohbetler sadece senin kutundan silindi. Karşı tarafın kopyası durur.",
    noteUnsave: "Gönderiler sadece senin kaydedilenlerinden kalktı. Gönderinin kendisi durur.",
    col_sonuc: "Sonuç",
    col_kullanicilar: "Kullanıcılar",
    col_isimler: "İsimler",
    col_baslik: "Başlık",
    col_grup: "Grup",
    col_kaynak: "Kaynak",
    col_son_mesaj: "Son mesaj",
    col_thread_id: "Thread ID",
    col_url: "URL",
    col_http: "HTTP",
    col_hata: "Hata",
    col_zaman: "Zaman",
    col_kullanici: "Kullanıcı",
    col_aciklama: "Açıklama",
    col_media_id: "Media ID",
    col_thumb: "Küçük resim",
    sheetReport: "Rapor",
    fileMessages: "instagram-mesaj-raporu-",
    fileSaved: "instagram-kaydedilen-raporu-",
    previewLine: "Önizleme. Silinen bir şey yok. {n} sohbet silinir.",
    helpText: "Panel sağda. Menü: Mesaj sil veya Kaydedilenler. Konsol: IG.stop() / await IG.preview() / await IG.unsave()",
    panelOpened: "Panel açıldı. Menüden seç. Henüz hiçbir şey silinmedi.",
    consoleReport: "Rapor IG.lastReport içinde.",
    colChat: "sohbet",
    colState: "durum",
    willKeep: "korunacak",
    willDelete: "silinecek",
  },
  en: {
    scanIdle: "Ready. Adjust settings first, then press Start scan when you are ready.",
    startScan: "Start scan",
    rescan: "Scan again",
    notScanned: "No scan has been run yet.",
    cacheNotice: "Showing a previous scan · {time} · {n} items. The list may be outdated.",
    cachePrivacy: "Scan results are stored in this browser for 24 hours, separately for each Instagram account.",
    clearCache: "Clear saved scans",
    cacheCleared: "Saved scans cleared.",
    settingsTiming: "Request pacing",
    settingsData: "Saved scans",
    settingsDone: "Done",
    delayHint: "2–120 seconds · default 4.5",
    batchHint: "1–20 requests · default 5",
    restHint: "30–3600 seconds · default 300",

    settings: "Settings",
    delaySeconds: "Delay between requests (seconds)",
    batchEvery: "Requests between breaks",
    breakSeconds: "Break duration (seconds)",
    resetSettings: "Restore defaults",
    settingsNote: "Settings are saved in this browser. Shorter delays increase restriction risk. Cannot change during a run.",
    riskWarning: "Warning: Automated actions may restrict or suspend your account. No delay guarantees safety.",
    safetyStopped: "Stopped for safety. No new requests before: {time}. No automatic resume; check the Instagram warning.",
    cancelled: "Operation stopped.",
    busyOperation: "Another operation is running.",
    breakWaiting: "Waiting between requests or taking a break…",

    wrongHost: "Run this on an instagram.com tab.",
    preparing: "Getting ready…",
    stop: "Stop",
    openInbox: "Open inbox",
    searchChats: "Name or username",
    searchSaved: "Username or caption",
    includeRequests: "Also list message requests",
    reload: "Refresh",
    selectAll: "Select all",
    clearSelection: "Clear selection",
    reportOnly: "Report only",
    wipeAll: "Delete all",
    wipeAllSaved: "Remove all",
    selectedCount: "{n} selected",
    selectedFiltered: "{n} selected · {m} in search",
    deleteSelected: "Delete selected",
    removeSelected: "Remove selected",
    noteMessages: "Report only does not delete anything. Delete removes the chat from your inbox only.",
    noteSaved: "Report only does not unsave anything. Remove does not delete the post. It only drops it from your saved list.",
    yesDelete: "Delete",
    yesRemove: "Remove",
    cancel: "Cancel",
    downloadJson: "Download JSON",
    downloadXlsx: "Download Excel",
    downloading: "Downloading…",
    minimize: "Minimize",
    close: "Close",
    menuMessages: "Delete chats",
    menuSaved: "Saved",
    langTr: "Turkish",
    langEn: "English",
    stepPage: "Page",
    stepList: "List",
    stepPick: "Pick",
    stepDelete: "Delete",
    stepRemove: "Remove",
    stepReport: "Report",
    hintMsg0: "Open the inbox tab.",
    hintMsg1: "Listing chats.",
    hintMsg2: "Pick the ones to delete.",
    hintMsg3: "Selected chats are being deleted from your inbox.",
    hintMsg4: "Report is ready. Download JSON or Excel.",
    hintSaved0: "Listing saved posts. You do not need to change pages.",
    hintSaved1: "Pick the ones to remove.",
    hintSaved2: "Selected saves are being removed. The post itself stays.",
    hintSaved3: "Report is ready. Download JSON or Excel.",
    chatsListing: "Listing chats…",
    chatsProgress: "{n} chats listed{page}{tail}",
    chatsCut: "{n} chats (list stopped early){page}",
    chatsReady: "{n} chats. Pick some to delete.{page}",
    fromPage: " (from the list on the page)",
    fromPageSentence: " From the list on the page.",
    stillGoing: ", still going…",
    doneDeleted: "Done. {n} chats were deleted from your inbox.",
    stopRequested: "Stop requested…",
    reportWritten: "{n} rows written to the report. Nothing was deleted.",
    pageOpening: "Opening the page…",
    pageFailed: "The page did not open. Open the address yourself and leave the panel where it is.",
    savedListing: "Listing saved posts…",
    savedProgress: "{n} saved posts listed{tail}",
    savedCut: "{n} saved posts (list stopped early)",
    savedReady: "{n} saved posts. Pick some to remove.",
    busyListing: "Listing…",
    busyListingCount: "Listing… {n}",
    busyDeleting: "Deleting… {done}/{total}",
    busyRemoving: "Removing… {done}/{total}",
    savedLoading: "Loading saved posts…",
    savedEmpty: "No saved posts.",
    chatsLoading: "Loading the list…",
    chatsEmpty: "No chats.",
    removed: "removed",
    error: "error",
    deleted: "deleted",
    group: "group",
    request: "request",
    openPost: "Open post",
    confirmWipeChats: "{n} chats will be deleted from your inbox only. They stay on the other side. A report downloads when it finishes.",
    confirmDeleteChats: "{n} chats will be deleted from your inbox only. They stay on the other side. This cannot be undone.",
    confirmWipeSaved: "{n} saves will be removed. The post itself stays. It only leaves your saved list. A report downloads when it finishes.",
    confirmRemoveSaved: "{n} saves will be removed. The post itself stays. It only leaves your saved list.",
    confirmConsole: "{n} chats will be deleted from your inbox only. They stay on the other side. Continue?",
    summaryListSaved: "Report: {n} saved posts listed. Nothing was deleted.",
    summaryListChats: "Report: {n} chats listed. Nothing was deleted.",
    summaryUnsave: "Report: {n} removed, {errors} errors{stopped}. The post itself is still there.{first}",
    summaryStopped: ", stopped",
    summaryDelete: "Report: {n} deleted, {errors} errors, {skipped} skipped. The other person's copy is still there.",
    firstError: " First error: {text}",
    notLoggedIn: "You do not look signed in. Stay logged in on instagram.com and refresh the page.",
    noSession: "Could not read the session key. Refresh the page and paste the script again.",
    noMailbox: "Could not read the mailbox id. Refresh the page and paste the script again.",
    rateLimit: "Instagram applied a rate limit (429). Wait 30-60 minutes and try again.",
    inboxReadFailed: "Could not read the inbox ({problem}). doc {doc}, variables {n}.",
    inboxReadFailedKeys: "Could not read the inbox ({problem}). doc {doc}, variables {n}. keys: {keys}.",
    inboxUnread: "Could not read the inbox.",
    savedReadFailed: "Could not read saved posts (HTTP {status}).",
    savedReadFailedDetail: "Could not read saved posts (HTTP {status}): {detail}.",
    justNow: "just now",
    minutesAgo: "{n}m",
    hoursAgo: "{n}h",
    daysAgo: "{n}d",
    unnamedChat: "unnamed chat",
    post: "post",
    listed: "listed",
    stopped: "stopped",
    yes: "yes",
    no: "no",
    sourceInbox: "inbox",
    sourceRequests: "requests",
    rowStopped: "stopped, request was not sent",
    rowFailStreak: "repeated errors, request was not sent",
    rowLimited: "rate limit or session, request was not sent",
    noReply: "no response",
    emptyReply: "empty response",
    htmlReply: "HTML response",
    gqlError: "graphql error",
    badJson: "could not read JSON",
    couldNotDelete: "could not delete",
    threadOpenFailed: "could not open the chat",
    noInfoButton: "conversation info button is missing",
    noDeleteButton: "Delete chat button is missing",
    noConfirmButton: "confirm button is missing",
    sessionHttp: "session (HTTP {status})",
    folderName: "folder {folder}",
    noteListSaved: "List only. No saves were removed.",
    noteListChats: "List only. No chats were deleted.",
    noteDelete: "Chats were deleted from your inbox only. The other person's copy stays.",
    noteUnsave: "Posts were removed from your saved list only. The post itself stays.",
    col_sonuc: "Result",
    col_kullanicilar: "Usernames",
    col_isimler: "Names",
    col_baslik: "Title",
    col_grup: "Group",
    col_kaynak: "Source",
    col_son_mesaj: "Last message",
    col_thread_id: "Thread ID",
    col_url: "URL",
    col_http: "HTTP",
    col_hata: "Error",
    col_zaman: "Time",
    col_kullanici: "Username",
    col_aciklama: "Caption",
    col_media_id: "Media ID",
    col_thumb: "Thumbnail",
    sheetReport: "Report",
    fileMessages: "instagram-message-report-",
    fileSaved: "instagram-saved-report-",
    previewLine: "Preview. Nothing was deleted. {n} chats would be deleted.",
    helpText: "Panel is on the right. Menu: Delete chats or Saved. Console: IG.stop() / await IG.preview() / await IG.unsave()",
    panelOpened: "Panel opened. Pick a menu item. Nothing has been deleted yet.",
    consoleReport: "Report is in IG.lastReport.",
    colChat: "chat",
    colState: "state",
    willKeep: "keep",
    willDelete: "delete",
  },
};

  if (!/(^|\.)instagram\.com$/.test(location.hostname)) {
    const pack = IG_TEXT[IG_LANG] || IG_TEXT.tr;
    console.error(pack.wrongHost || IG_TEXT.tr.wrongHost);
    return;
  }

  // Keep legacy keys and cleanup hook so upgrades preserve cooldowns and stop older copies.
  window.__igtoolsCleanup?.();
  const state = { stop: false, destroyed: false };
  const controllers = new Set();
  const DEFAULT_SETTINGS = { delay: 4500, batch: 5, rest: 300000 };
  const storage = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch { /* storage unavailable */ } },
  };
  function normalizeSettings(value = {}) {
    const number = (key, min, max) => Number.isFinite(Number(value[key]))
      ? Math.min(max, Math.max(min, Number(value[key]))) : DEFAULT_SETTINGS[key];
    return { delay: number("delay", 2000, 120000), batch: Math.round(number("batch", 1, 20)), rest: number("rest", 30000, 3600000) };
  }
  let settings;
  try { settings = normalizeSettings(JSON.parse(storage.get("igtools-settings-v1")) || {}); }
  catch { settings = { ...DEFAULT_SETTINGS }; }
  let blockedUntil = Number(storage.get("igtools-blocked-until")) || 0;
  let requestCount = 0;
  let nextRequestAt = 0;
  let requestQueue = Promise.resolve();
  function cancelRequests(destroy = false) {
    state.stop = true;
    if (destroy) state.destroyed = true;
    for (const controller of controllers) controller.abort();
    controllers.clear();
  }
  window.__igtoolsCleanup = () => {
    cancelRequests(true);
    document.getElementById("igc-root")?.remove();
    document.getElementById("igc-style")?.remove();
  };
  function checkSafety() {
    blockedUntil = Math.max(blockedUntil, Number(storage.get("igtools-blocked-until")) || 0);
    if (Date.now() < blockedUntil) throw fail("safetyStopped", { time: new Date(blockedUntil).toLocaleString(lang === "en" ? "en-US" : "tr-TR") });
    if (state.stop || state.destroyed) throw fail("cancelled");
  }
  async function interruptibleWait(ms) {
    const end = Date.now() + ms;
    while (Date.now() < end) {
      checkSafety();
      await sleep(Math.min(200, end - Date.now()));
    }
    checkSafety();
  }
  async function guardedRequest(input, init = {}) {
    const previous = requestQueue;
    let release;
    requestQueue = new Promise(resolve => { release = resolve; });
    await previous;
    let controller;
    try {
      checkSafety();
      const pacing = document.getElementById("igc-pacing");
      if (pacing && nextRequestAt > Date.now()) pacing.textContent = t("breakWaiting") + " " + new Date(nextRequestAt).toLocaleTimeString(lang === "en" ? "en-US" : "tr-TR");
      await interruptibleWait(Math.max(0, nextRequestAt - Date.now()));
      if (pacing) pacing.textContent = "";
      controller = new AbortController();
      controllers.add(controller);
      const response = await fetch(input, { ...init, signal: controller.signal });
      const body = await response.clone().text();
      checkSafety();
      const url = new URL(input, location.origin);
      const api = url.origin === location.origin && /\/api\//.test(url.pathname);
      const problem = /feedback_required|checkpoint_required|challenge_required|login_required|require_login|action_blocked|rate_limit|please wait a few minutes|try again later|"spam"\s*:\s*true|"challenge"\s*:|"checkpoint_url"\s*:|"feedback_required"\s*:\s*true/i.test(body);
      const redirected = /\/(challenge|checkpoint|accounts\/login)(\/|\?|$)/i.test(response.url);
      const html = api && /^\s*(<!doctype|<html)/i.test(body);
      if ([401, 403, 429].includes(response.status) || (api && problem) || redirected || html) {
        const retry = response.headers.get("retry-after");
        const retryMs = retry && /^\d+(\.\d+)?$/.test(retry) ? Number(retry) * 1000 : Math.max(0, Date.parse(retry) - Date.now()) || 0;
        const cooldown = response.status === 429 || /rate_limit|please wait a few minutes/i.test(body) ? 3600000 : 10800000;
        blockedUntil = Math.max(blockedUntil, Date.now() + Math.max(cooldown, retryMs));
        storage.set("igtools-blocked-until", String(blockedUntil));
        cancelRequests();
        checkSafety();
      }
      return response;
    } finally {
      if (controller) controllers.delete(controller);
      requestCount += 1;
      nextRequestAt = Date.now() + settings.delay + Math.floor(Math.random() * 500)
        + (requestCount % settings.batch === 0 ? settings.rest : 0);
      release();
    }
  }

  let session = null;
  let deletePlan = null;
  let listFromPage = false;
  let inboxHtml = null;
  let listQueryCache = null;
  let pageClaim = null;
  let ajaxCache = null;
  let unsaveRestPlan = null;
  let unsaveGqlPlan = null;
  let unsaveQueryLookup = null;
  let unsaveRestExhausted = false;
  let unsaveGqlExhausted = false;
  const ui = {
    threads: [],
    selected: new Set(),
    query: "",
    loading: false,
    deleting: false,
    downloading: false,
    downloadKind: "",
    busy: null,
    status: { kind: "key", key: "preparing" },
    confirm: null,
    report: null,
    mode: /\/saved(\/|$)/.test(location.pathname) ? "saved" : "messages",
    step: 0,
    reports: { messages: null, saved: null },
    scanned: { messages: false, saved: false },
    savedPosts: [],
    savedSelected: new Set(),
    savedQuery: "",
  };

  let lang = "tr";
  const CELL = {
    listelendi: "listed",
    silindi: "deleted",
    kaldirildi: "removed",
    hata: "error",
    durduruldu: "stopped",
    evet: "yes",
    "hayır": "no",
    inbox: "sourceInbox",
    requests: "sourceRequests",
    rowStopped: "rowStopped",
    rowFailStreak: "rowFailStreak",
    rowLimited: "rowLimited",
    noReply: "noReply",
    emptyReply: "emptyReply",
    htmlReply: "htmlReply",
    gqlError: "gqlError",
    badJson: "badJson",
    couldNotDelete: "couldNotDelete",
    threadOpenFailed: "threadOpenFailed",
    noInfoButton: "noInfoButton",
    noDeleteButton: "noDeleteButton",
    noConfirmButton: "noConfirmButton",
    noteListSaved: "noteListSaved",
    noteListChats: "noteListChats",
    noteDelete: "noteDelete",
    noteUnsave: "noteUnsave",
    unnamed: "unnamedChat",
  };

  function loadLang() {
    let stored = "";
    try {
      stored = localStorage.getItem("igtools-lang") || "";
    } catch {
      stored = "";
    }
    if (stored === "tr" || stored === "en") lang = stored;
    else lang = String(IG_LANG || "").toLowerCase() === "en" ? "en" : "tr";
  }

  function t(key, vars) {
    const pack = IG_TEXT[lang] || IG_TEXT.tr;
    let text = pack && Object.prototype.hasOwnProperty.call(pack, key) ? pack[key] : undefined;
    if (text == null && IG_TEXT.tr && Object.prototype.hasOwnProperty.call(IG_TEXT.tr, key)) text = IG_TEXT.tr[key];
    if (text == null) return key;
    if (!vars) return text;
    for (const [name, value] of Object.entries(vars)) {
      text = String(text).split("{" + name + "}").join(value == null ? "" : String(value));
    }
    return text;
  }

  function showPhrase(value) {
    if (value == null || value === "") return "";
    const text = String(value);
    if (Object.prototype.hasOwnProperty.call(CELL, text)) return t(CELL[text]);
    if (text.startsWith("session:")) return t("sessionHttp", { status: text.slice(8) });
    if (text.startsWith("http:")) return "HTTP " + text.slice(5);
    if (text.startsWith("folder:")) return t("folderName", { folder: text.slice(7) });
    const mark = " · ";
    const index = text.lastIndexOf(mark);
    if (index > 0) {
      const tail = text.slice(index + mark.length);
      if (Object.prototype.hasOwnProperty.call(CELL, tail)) return text.slice(0, index) + mark + t(CELL[tail]);
    }
    return text;
  }

  function fill(key, vars) {
    const resolved = {};
    if (vars) {
      for (const [name, value] of Object.entries(vars)) {
        if (name.endsWith("Key")) {
          resolved[name.slice(0, -3)] = value ? t(String(value)) : "";
        } else if (name === "problem" || name === "detail") {
          resolved[name] = showPhrase(value);
        } else {
          resolved[name] = value == null ? "" : String(value);
        }
      }
    }
    return t(key, resolved);
  }

  function fail(key, vars) {
    const error = new Error(fill(key, vars));
    error.i18nKey = key;
    error.i18nVars = vars || {};
    return error;
  }

  loadLang();

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const CACHE_TTL = 24 * 60 * 60 * 1000;
  const scanAccount = cookie("ds_user_id");
  const cacheMeta = { messages: null, saved: null };
  function cacheKey(mode, pending = false) {
    const account = cookie("ds_user_id");
    return account && account === scanAccount && /^\d+$/.test(account) ? "igtools-scan-v1:" + account + ":" + mode + (mode === "messages" && pending ? ":requests" : "") : null;
  }
  function readScan(mode, pending = false) {
    const key = cacheKey(mode, pending);
    if (!key) return null;
    try {
      const value = JSON.parse(storage.get(key));
      if (!value || !Number.isFinite(value.time) || value.time > Date.now() || Date.now() - value.time >= CACHE_TTL || !Array.isArray(value.rows)) return null;
      const valid = value.rows.every(row => row && typeof row.id === "string" && typeof row.label === "string" && (mode === "saved" || ["usernames", "names", "users"].every(key => Array.isArray(row[key]))));
      return valid ? value : null;
    } catch { return null; }
  }
  function writeScan(mode, rows, pending = false, time = Date.now()) {
    const key = cacheKey(mode, pending);
    if (!key) return;
    const clean = rows.filter(row => row.status !== "silindi" && row.status !== "kaldirildi").map(row => ({ ...row, status: "" }));
    try { localStorage.setItem(key, JSON.stringify({ time, rows: clean })); }
    catch { /* Keep the previous complete scan if storage is unavailable or full. */ }
  }
  function updateScanAfterAction(mode) {
    // Update every cached variant, including entries changed before a run was interrupted.
    const changed = new Set((mode === "messages" ? ui.threads : ui.savedPosts).filter(row => row.status === "silindi" || row.status === "kaldirildi").map(row => row.id));
    for (const pending of mode === "messages" ? [false, true] : [false]) {
      const cached = readScan(mode, pending);
      if (cached) writeScan(mode, cached.rows.filter(row => !changed.has(row.id)), pending, cached.time);
    }
  }

  function cookie(name) {
    const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
    return match ? decodeURIComponent(match[1]) : null;
  }

  // thread_id 2^53'ten büyük olabiliyor. JSON.parse bunu yuvarlar.
  function parseSafe(text) {
    const quoted = text.replace(/(:\s*)(-?\d{16,})(\s*[,}\]])/g, '$1"$2"$3');
    return JSON.parse(quoted);
  }

  function pick(text, patterns) {
    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match) return match[1];
    }
    return null;
  }

  function readTokens(text) {
    return {
      dtsg: pick(text, [
        /"DTSGInitialData",\[\],\{"token":"([^"]+)"/,
        /"DTSGInitData",\[\],\{"token":"([^"]+)"/,
        /"dtsg":\{"token":"([^"]+)"/,
        /"f":"(NAf[^"]+)"/,
      ]),
      lsd: pick(text, [/"LSD",\[\],\{"token":"([^"]+)"/, /name="lsd" content="([^"]+)"/]),
      mailbox: pick(text, [/"IG_USER_EIMU":"(\d+)"/, /"mailboxID":"(\d+)"/, /"mailbox_id":"(\d+)"/]),
      appId: pick(text, [/"APP_ID":"(\d+)"/, /"X-IG-App-ID":"(\d+)"/]) || "936619743392459",
    };
  }

  async function ensureSession() {
    if (session && session.dtsg) return session;
    if (!cookie("csrftoken") || !cookie("ds_user_id")) {
      throw fail("notLoggedIn");
    }
    let tokens = readTokens(document.documentElement.innerHTML);
    const lsdMeta = document.querySelector('meta[name="lsd"]');
    if (!tokens.lsd && lsdMeta) tokens.lsd = lsdMeta.getAttribute("content");
    if (!tokens.dtsg || !tokens.mailbox) {
      const response = await guardedRequest("/direct/inbox/", { credentials: "include" });
      const html = await response.text();
      inboxHtml = html;
      const fromHtml = readTokens(html);
      tokens = {
        dtsg: tokens.dtsg || fromHtml.dtsg,
        lsd: tokens.lsd || fromHtml.lsd,
        mailbox: tokens.mailbox || fromHtml.mailbox,
        appId: fromHtml.appId || tokens.appId,
      };
    }
    if (!tokens.dtsg) {
      throw fail("noSession");
    }
    session = tokens;
    return session;
  }

  function requireQuery(name) {
    const req = window.require;
    if (typeof req !== "function") return null;
    for (const key of [name + ".graphql", name]) {
      try {
        const mod = req(key);
        const params = (mod && (mod.params || (mod.default && mod.default.params))) || null;
        if (params && params.id) return { name, id: String(params.id), params };
      } catch {
        /* modül bu sayfada yüklü değil */
      }
    }
    return null;
  }

  function findDeleteQuery() {
    const preferred = [
      "IGDInboxInfoDeleteThreadDialogOffMsysMutation",
      "IGDThreadDeleteDialogOffMsysMutation",
      "IGDDeleteThreadDialogOffMsysMutation",
      "IGDThreadDeleteOffMsysMutation",
      "IGDDeleteThreadOffMsysMutation",
      "IGDThreadDeleteMutation",
      "IGDDeleteThreadMutation",
      "IGDeleteThreadMutation",
      "PolarisDirectThreadDeleteMutation",
      "IGDeleteThread",
    ];
    for (const name of preferred) {
      const found = requireQuery(name);
      if (found) return found;
    }
    const req = window.require;
    const map = req && (req.m || req.modules);
    if (!map) return null;
    const seen = new Set(preferred);
    for (const key of Object.keys(map)) {
      if (!/delete/i.test(key) || !/thread/i.test(key) || /message|unsend/i.test(key)) continue;
      const name = String(key).replace(/\.graphql$/, "");
      if (seen.has(name)) continue;
      seen.add(name);
      const found = requireQuery(name);
      if (found) return found;
    }
    return null;
  }

  function liveQuery(name, fallbackId) {
    const required = requireQuery(name);
    if (required) return required;
    const html = document.documentElement.innerHTML;
    let from = 0;
    while (from < html.length) {
      const at = html.indexOf('"' + name + '"', from);
      if (at < 0) break;
      const slice = html.slice(Math.max(0, at - 80), at + name.length + 140);
      const match = slice.match(/\b(?:id|doc_id)"?\s*:\s*"(\d{10,})"/);
      if (match && match[1] !== fallbackId) return { name, id: match[1], params: null };
      from = at + name.length + 2;
    }
    return { name, id: fallbackId, params: null };
  }

  async function gql(name, docId, variables) {
    const sess = await ensureSession();
    const body = new URLSearchParams({
      fb_dtsg: sess.dtsg,
      fb_api_caller_class: "RelayModern",
      fb_api_req_friendly_name: name,
      server_timestamps: "true",
      variables: JSON.stringify(variables),
      doc_id: docId,
    });
    if (sess.lsd) body.set("lsd", sess.lsd);
    const response = await guardedRequest("/api/graphql", {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "x-csrftoken": cookie("csrftoken"),
        "x-fb-friendly-name": name,
        "x-ig-app-id": sess.appId,
        ...(sess.lsd ? { "x-fb-lsd": sess.lsd } : {}),
        ...(sessionStorage.getItem("www-claim-v2")
          ? { "x-ig-www-claim": sessionStorage.getItem("www-claim-v2") }
          : {}),
      },
      body,
    });
    const text = await response.text();
    const cleaned = text.replace(/^for\s*\(;;\);\s*/, "").trim();
    let json = null;
    if (cleaned.startsWith("{") || cleaned.startsWith("[")) {
      try {
        const parsed = parseSafe(cleaned);
        json = Array.isArray(parsed)
          ? parsed.find((item) => item && (item.data || item.errors)) || parsed[0]
          : parsed;
      } catch {
        json = null;
      }
    }
    return { status: response.status, json, text: text.slice(0, 280) };
  }

  const LIST_NAME = "IGDThreadListOffMsysPaginationQuery";
  const LIST_DOC = "28804933902495089";
  const DELETE_NAME = "IGDInboxInfoDeleteThreadDialogOffMsysMutation";
  const DELETE_DOC = "23915602751379354";
  let listQuery = null;

  function withProvided(query, variables) {
    const provided = query && query.params && query.params.providedVariables;
    const extra = {};
    if (provided && typeof provided === "object") {
      for (const [key, value] of Object.entries(provided)) {
        try {
          extra[key] = value && typeof value.get === "function" ? value.get() : value;
        } catch {
          /* sayfanın verdiği değişken okunamadı */
        }
      }
    }
    return { ...extra, ...variables };
  }

  function gqlProblem(result) {
    if (!result) return "noReply";
    if (result.status === 429) return "429";
    if (result.status === 401 || result.status === 403) return "session:" + result.status;
    const errors = result.json && result.json.errors;
    if (Array.isArray(errors) && errors.length) {
      return errors
        .map((item) => item.message || item.summary || "gqlError")
        .join("; ")
        .slice(0, 240);
    }
    if (result.status !== 200) return "http:" + result.status;
    if (!result.json) return "badJson";
    return "";
  }

  function gqlOk(result) {
    if (gqlProblem(result)) return false;
    const data = result.json.data;
    if (!data || typeof data !== "object") return false;
    return Object.values(data).some((value) => value != null);
  }

  function relativeTime(date) {
    if (!date) return "";
    const sec = (Date.now() - date.getTime()) / 1000;
    const locale = lang === "en" ? "en-US" : "tr-TR";
    if (sec < 0) return date.toLocaleDateString(locale);
    if (sec < 60) return t("justNow");
    if (sec < 3600) return t("minutesAgo", { n: Math.floor(sec / 60) });
    if (sec < 86400) return t("hoursAgo", { n: Math.floor(sec / 3600) });
    if (sec < 86400 * 30) return t("daysAgo", { n: Math.floor(sec / 86400) });
    return date.toLocaleDateString(locale);
  }

  function activityLabel(thread) {
    if (thread.lastActivity) {
      const date = new Date(thread.lastActivity);
      if (!Number.isNaN(date.getTime())) return relativeTime(date);
    }
    return thread.lastActivityLabel || "";
  }

  function peopleFrom(thread) {
    const raw = thread.usersWithoutViewer || thread.users || thread.participants || [];
    const list = Array.isArray(raw)
      ? raw
      : (raw.edges || []).map((edge) => edge && edge.node).filter(Boolean);
    return list.map((user) => ({
      username: user.username || user.instagram_username || "",
      name: user.full_name || user.name || "",
      id: String(user.pk || user.id || user.igid || ""),
    }));
  }

  function activityFrom(raw) {
    const value = Number(raw);
    if (!value) return null;
    const ms = value > 1e14 ? value / 1000 : value;
    const date = new Date(ms);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function normalizeThread(thread, source) {
    const users = peopleFrom(thread);
    const when = activityFrom(thread.last_activity_timestamp_ms || thread.last_activity_at);
    const title = thread.thread_title || "";
    const label =
      title ||
      users
        .map((user) => user.username || user.name)
        .filter(Boolean)
        .join(", ") ||
      "";
    return {
      id: String(thread.thread_fbid || thread.thread_id || ""),
      title,
      label,
      group: Boolean(thread.is_group || thread.is_group_thread),
      source: source || "inbox",
      users,
      usernames: users.map((user) => user.username).filter(Boolean),
      names: users.map((user) => user.name).filter(Boolean),
      lastActivity: when ? when.toISOString() : "",
      lastActivityLabel: relativeTime(when),
      status: "",
    };
  }

  function haystack(thread) {
    return [thread.label, thread.title, ...thread.usernames, ...thread.names]
      .join(" ")
      .toLowerCase();
  }

  function isKept(thread, keep) {
    if (!keep.length) return false;
    const blob = haystack(thread);
    return keep.some((name) => blob.includes(name));
  }

  function relayFromProvided(params) {
    const provided = params && params.providedVariables;
    const extra = {};
    if (!provided || typeof provided !== "object") return extra;
    for (const [key, value] of Object.entries(provided)) {
      try {
        const read = value && typeof value.get === "function" ? value.get() : value;
        extra[key] = read === undefined ? false : read;
      } catch {
        extra[key] = false;
      }
    }
    return extra;
  }

  function queryFromModule(mod) {
    if (!mod) return null;
    const params = mod.params || (mod.default && mod.default.params) || null;
    if (!params || !params.id) return null;
    const relay = relayFromProvided(params);
    return {
      name: params.name || LIST_NAME,
      id: String(params.id),
      params,
      relay,
      ready: Object.keys(relay).length > 0,
    };
  }

  function requireModule(name) {
    const req = window.require;
    if (typeof req !== "function") return null;
    for (const key of [name + ".graphql", name]) {
      try {
        const mod = req(key);
        if (mod) return mod;
      } catch {
        /* bu sayfada yüklü değil */
      }
    }
    return null;
  }

  function requireMapKeys() {
    const req = window.require;
    const map = req && (req.m || req.modules);
    return map ? Object.keys(map) : [];
  }

  function loadLazy(name) {
    return new Promise((resolve) => {
      const lazy = window.requireLazy;
      if (typeof lazy !== "function") {
        resolve(null);
        return;
      }
      let settled = false;
      const finish = (value) => {
        if (settled) return;
        settled = true;
        resolve(value || null);
      };
      try {
        lazy([name + ".graphql"], (mod) => finish(mod));
      } catch {
        finish(null);
      }
      setTimeout(() => finish(null), 5000);
    });
  }

  function providerValue(provider) {
    const req = window.require;
    if (typeof req === "function") {
      try {
        const mod = req(provider + ".relayprovider") || req(provider);
        if (mod && typeof mod.get === "function") {
          const value = mod.get();
          return value === undefined ? false : value;
        }
      } catch {
        /* sağlayıcı yüklü değil */
      }
    }
    return false;
  }

  function relayFromSource(text, name) {
    const extra = {};
    let id = null;
    let from = 0;
    let hits = 0;
    while (from < text.length && hits < 6) {
      const at = text.indexOf(name, from);
      if (at < 0) break;
      hits += 1;
      const slice = text.slice(Math.max(0, at - 400), Math.min(text.length, at + 5000));
      if (!id) {
        const idMatch =
          slice.match(/"(?:id|doc_id)"\s*:\s*"(\d{12,})"/) || slice.match(/\bexports\s*=\s*"(\d{12,})"/);
        if (idMatch) id = idMatch[1];
      }
      for (const match of slice.matchAll(/"([A-Za-z0-9_]+)\.relayprovider"/g)) {
        extra["__relay_internal__pv__" + match[1] + "relayprovider"] = providerValue(match[1]);
      }
      for (const match of slice.matchAll(/__relay_internal__pv__([A-Za-z0-9_]+)relayprovider/g)) {
        const key = "__relay_internal__pv__" + match[1] + "relayprovider";
        if (!(key in extra)) extra[key] = providerValue(match[1]);
      }
      from = at + name.length;
      if (id && Object.keys(extra).length) break;
    }
    return { id, extra };
  }

  function scriptUrls(page) {
    const urls = [];
    const seen = new Set();
    const add = (url) => {
      const clean = String(url || "")
        .replace(/\\\//g, "/")
        .replace(/&amp;/g, "&");
      if (!clean.includes("rsrc.php") || !clean.endsWith(".js") || seen.has(clean)) return;
      seen.add(clean);
      urls.push(clean.startsWith("http") ? clean : location.origin + clean);
    };
    for (const match of page.matchAll(/https:\\\/\\\/static\.cdninstagram\.com\\\/rsrc\.php\\\/[^"'\\\s]+\.js/g)) {
      add(match[0]);
    }
    for (const match of page.matchAll(/https:\/\/static\.cdninstagram\.com\/rsrc\.php\/[^"'\s]+\.js/g)) {
      add(match[0]);
    }
    return urls;
  }

  async function relayFromBundles(name) {
    const pages = [document.documentElement.innerHTML];
    if (onInboxPage()) inboxHtml = document.documentElement.innerHTML;
    if (!inboxHtml && !onInboxPage()) {
      try {
        const response = await guardedRequest("/direct/inbox/", { credentials: "include" });
        inboxHtml = await response.text();
      } catch {
        /* gelen kutusu html'i alınamadı */
      }
    }
    if (inboxHtml) pages.push(inboxHtml);
    let merged = { id: null, extra: {} };
    for (const page of pages) {
      const parsed = relayFromSource(page, name);
      merged = {
        id: merged.id || parsed.id,
        extra: { ...parsed.extra, ...merged.extra },
      };
    }
    if (Object.keys(merged.extra).length) return merged;
    const urls = [];
    const seen = new Set();
    const orderedPages = inboxHtml ? [inboxHtml, ...pages] : pages;
    for (const page of orderedPages) {
      for (const url of scriptUrls(page)) {
        if (seen.has(url)) continue;
        seen.add(url);
        urls.push(url);
      }
    }
    const queue = urls.slice(0, 40);
    let cursor = 0;
    let found = null;
    async function worker() {
      while (!found && cursor < queue.length) {
        const url = queue[cursor];
        cursor += 1;
        try {
          const response = await guardedRequest(url, { credentials: "omit" });
          if (!response.ok) continue;
          const text = await response.text();
          if (!text.includes(name)) continue;
          const parsed = relayFromSource(text, name);
          if (parsed.id || Object.keys(parsed.extra).length) found = parsed;
        } catch {
          /* paket okunamadı */
        }
      }
    }
    await Promise.all([worker(), worker(), worker(), worker()]);
    if (!found) return merged;
    return { id: found.id || merged.id, extra: { ...merged.extra, ...found.extra } };
  }

  async function discoverListQuery() {
    const direct = queryFromModule(requireModule(LIST_NAME));
    if (direct && direct.ready) return direct;
    for (const key of requireMapKeys()) {
      if (!/threadlist|offmsyspagination/i.test(key)) continue;
      try {
        const parsed = queryFromModule(window.require(key));
        if (parsed && parsed.ready) return { ...parsed, name: parsed.name || LIST_NAME };
      } catch {
        /* modül açılamadı */
      }
    }
    const lazy = queryFromModule(await loadLazy(LIST_NAME));
    if (lazy && lazy.ready) return lazy;
    const scanned = await relayFromBundles(LIST_NAME);
    const relay = {
      ...(scanned.extra || {}),
      ...((lazy && lazy.relay) || {}),
      ...((direct && direct.relay) || {}),
    };
    const id = (lazy && lazy.id) || (direct && direct.id) || scanned.id || LIST_DOC;
    const query = {
      name: LIST_NAME,
      id: String(id),
      params: (lazy && lazy.params) || (direct && direct.params) || null,
      relay,
      ready: Object.keys(relay).length > 0,
    };
    console.info("IGCleaner liste sorgusu", query.id, Object.keys(query.relay));
    return query;
  }

  async function inboxQuery() {
    if (listQuery) return listQuery;
    if (listQueryCache) {
      listQuery = listQueryCache;
      return listQuery;
    }
    const found = await discoverListQuery();
    listQueryCache = found;
    listQuery = found;
    return listQuery;
  }

  async function readFolderPage(folder, cursor) {
    const query = await inboxQuery();
    const sess = await ensureSession();
    if (!sess.mailbox) throw fail("noMailbox");
    const result = await gql(
      query.name,
      query.id,
      withProvided(query, {
        count: 20,
        cursor: cursor || null,
        folder,
        newer_than_timestamp_ms: null,
        id: sess.mailbox,
        ...(query.relay || {}),
      })
    );
    if (result.status === 429) {
      state.stop = true;
      throw fail("rateLimit");
    }
    const data = result.json && result.json.data;
    const conn = data && data.fetch__SlideMailbox && data.fetch__SlideMailbox.threads_by_folder;
    if (!conn) {
      const problem = gqlProblem(result) || "folder:" + folder;
      const keys = data ? Object.keys(data).slice(0, 8).join(", ") : "";
      const relayCount = query.relay ? Object.keys(query.relay).length : 0;
      const error = fail(keys ? "inboxReadFailedKeys" : "inboxReadFailed", {
        problem,
        doc: query.id,
        n: relayCount,
        keys,
      });
      error.result = result;
      throw error;
    }
    const source = folder === "PENDING" ? "requests" : "inbox";
    const threads = (conn.edges || [])
      .map((edge) => edge && edge.node && (edge.node.as_ig_direct_thread || edge.node))
      .filter((thread) => thread && (thread.thread_fbid || thread.thread_id))
      .map((thread) => normalizeThread(thread, source));
    const page = conn.page_info || {};
    return {
      threads,
      cursor: page.has_next_page ? page.end_cursor || null : null,
      hasOlder: Boolean(page.has_next_page && page.end_cursor),
    };
  }

  function folderNames(folders) {
    const names = (folders || []).map((folder) => {
      const value = String(folder || "").toLowerCase();
      if (!value || value === "inbox") return "INBOX";
      if (value === "requests" || value === "pending") return "PENDING";
      return String(folder).toUpperCase();
    });
    const unique = [...new Set(names)].filter((name) => name !== "PENDING");
    return unique.length ? unique : ["INBOX"];
  }

  function reachedLimit(found, limit) {
    return Boolean(limit && found.filter((item) => !item.kept).length >= limit);
  }

  async function collectGraphql({ folders, includePending, limit, keep, pauseMs, onPage }) {
    const found = [];
    const seen = new Set();
    let inboxError = null;
    let opened = false;

    async function walk(readPage) {
      let cursor = null;
      const seenCursors = new Set();
      for (let page = 0; page < 500; page += 1) {
        if (state.stop) return;
        const batch = await readPage(cursor);
        if (!batch) return;
        for (const thread of batch.threads) {
          if (!thread.id || seen.has(thread.id)) continue;
          seen.add(thread.id);
          thread.kept = isKept(thread, keep);
          found.push(thread);
          if (reachedLimit(found, limit)) {
            if (onPage) onPage(found);
            return;
          }
        }
        if (onPage) onPage(found);
        if (!batch.hasOlder || !batch.cursor || seenCursors.has(String(batch.cursor))) return;
        seenCursors.add(String(batch.cursor));
        cursor = batch.cursor;
        await interruptibleWait(pauseMs);
      }
    }

    for (const folder of folderNames(folders)) {
      try {
        await walk((cursor) => readFolderPage(folder, cursor));
        opened = true;
      } catch (error) {
        inboxError = inboxError || error;
        console.warn(folder, error);
        if (state.stop) break;
        if (folder === "INBOX" && !found.length) {
          try {
            await walk((cursor) => readFolderPage("GENERAL", cursor));
            opened = true;
          } catch (generalError) {
            console.warn("GENERAL", generalError);
          }
        }
      }
      if (reachedLimit(found, limit)) break;
    }
    if (!opened && !found.length) throw inboxError || fail("inboxUnread");
    if (includePending && !state.stop && !reachedLimit(found, limit)) {
      try {
        await walk((cursor) => readFolderPage("PENDING", cursor));
      } catch (error) {
        console.warn("PENDING", error);
      }
    }
    return found;
  }

  function threadIdFromHref(href) {
    const match = String(href || "").match(/\/direct\/t\/(\d+)/);
    return match ? match[1] : "";
  }

  function scrapeVisibleThreads() {
    const rows = [];
    const seen = new Set();
    for (const link of document.querySelectorAll('a[href*="/direct/t/"]')) {
      if (link.closest("#igc-root")) continue;
      const id = threadIdFromHref(link.getAttribute("href"));
      if (!id || seen.has(id)) continue;
      seen.add(id);
      const lines = (link.innerText || "")
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);
      const label = lines[0] || "";
      rows.push({
        id,
        title: "",
        label,
        group: /grup|group/i.test(lines.join(" ")),
        source: "inbox",
        users: [],
        usernames: [],
        names: label ? [label] : [],
        lastActivity: "",
        lastActivityLabel: lines[1] || "",
        status: "",
      });
    }
    return rows;
  }

  function inboxScroller() {
    const link = [...document.querySelectorAll('a[href*="/direct/t/"]')].find(
      (item) => !item.closest("#igc-root")
    );
    let node = link && link.parentElement;
    while (node && node !== document.body) {
      const style = getComputedStyle(node);
      const scrollable = style.overflowY === "auto" || style.overflowY === "scroll" || style.overflowY === "overlay";
      if (scrollable && node.scrollHeight > node.clientHeight + 40) return node;
      node = node.parentElement;
    }
    return document.scrollingElement || document.documentElement;
  }

  async function collectFromDom({ keep, onPage }) {
    const found = [];
    const seen = new Set();
    let stable = 0;
    let lastCount = -1;
    for (let round = 0; round < 80 && !state.stop; round += 1) {
      for (const thread of scrapeVisibleThreads()) {
        if (seen.has(thread.id)) continue;
        seen.add(thread.id);
        thread.kept = isKept(thread, keep);
        found.push(thread);
      }
      if (onPage) onPage(found);
      if (found.length === lastCount) stable += 1;
      else stable = 0;
      lastCount = found.length;
      if (stable >= 3 && found.length > 0) break;
      if (stable >= 8) break;
      inboxScroller().scrollTop = inboxScroller().scrollHeight;
      await sleep(450);
    }
    return found;
  }

  async function collect(options) {
    const keep = options.keep || [];
    listFromPage = false;
    try {
      await ensureSession();
      return await collectGraphql({ ...options, keep });
    } catch (error) {
      if (state.stop) throw error;
      console.warn("GraphQL liste başarısız, sayfadaki sohbetler okunuyor.", error);
      listFromPage = true;
      const dom = await collectFromDom({ keep, onPage: options.onPage });
      if (!dom.length) throw error;
      return dom;
    }
  }

  function okHide() {
    return { status: 200, json: { status: "ok" }, text: "" };
  }

  function failHide(result, fallback) {
    return {
      status: result && result.status ? result.status : 0,
      json: result && result.json,
      text: gqlProblem(result) || (result && result.text) || fallback || "couldNotDelete",
    };
  }

  function deleteVariables(threadId, key) {
    if (key === "thread_id") {
      return { thread_id: threadId, should_move_future_requests_to_spam: false };
    }
    return { thread_fbid: threadId, should_move_future_requests_to_spam: false };
  }

  function variableKey(query) {
    let blob = "";
    try {
      blob = JSON.stringify(query && query.params);
    } catch {
      blob = "";
    }
    if (blob.includes("thread_id") && !blob.includes("thread_fbid")) return "thread_id";
    return "thread_fbid";
  }

  function findControl(root, pattern) {
    const scope = root || document;
    for (const node of scope.querySelectorAll("button, a, [role='button'], [role='menuitem']")) {
      if (node.closest("#igc-root")) continue;
      const label = (node.getAttribute("aria-label") || node.innerText || "").replace(/\s+/g, " ").trim();
      if (!label || !pattern.test(label)) continue;
      const rect = node.getBoundingClientRect();
      if (rect.width < 1 || rect.height < 1) continue;
      return node;
    }
    return null;
  }

  async function openThread(threadId) {
    checkSafety();
    if (location.pathname.includes("/direct/t/" + threadId)) return true;
    const existing = [...document.querySelectorAll('a[href*="/direct/t/"]')].find(
      (link) => threadIdFromHref(link.getAttribute("href")) === threadId && !link.closest("#igc-root")
    );
    if (existing) existing.click();
    else {
      const link = document.createElement("a");
      link.href = "/direct/t/" + threadId + "/";
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
    for (let i = 0; i < 30; i += 1) {
      if (location.pathname.includes(threadId)) return true;
      await sleep(200);
    }
    return false;
  }

  async function hideViaUi(threadId) {
    checkSafety();
    await interruptibleWait(Math.max(settings.delay, nextRequestAt - Date.now()));
    const opened = await openThread(threadId);
    if (!opened) return { status: 0, json: null, text: "threadOpenFailed" };
    await interruptibleWait(700);
    const details = document.querySelector('a[href*="/direct/t/' + threadId + '"][href*="details"]');
    const info =
      (details && !details.closest("#igc-root") && details) ||
      findControl(document, /conversation information|sohbet bilgisi|sohbet bilgileri|thread details|^bilgi$|^details$/i);
    if (!info) return { status: 0, json: null, text: "noInfoButton" };
    info.click();
    await interruptibleWait(500);
    const remove = findControl(document, /sohbeti sil|delete chat|delete conversation/i);
    if (!remove) return { status: 0, json: null, text: "noDeleteButton" };
    remove.click();
    await interruptibleWait(400);
    const dialog = [...document.querySelectorAll("[role='dialog']")].find((node) => !node.closest("#igc-root"));
    let yes = dialog && findControl(dialog, /^(sil|delete)$/i);
    if (!yes) {
      const matches = [...document.querySelectorAll("button, [role='button']")].filter((node) => {
        if (node.closest("#igc-root")) return false;
        const label = (node.innerText || "").replace(/\s+/g, " ").trim();
        if (!/^(sil|delete)$/i.test(label)) return false;
        const rect = node.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      });
      yes = matches[matches.length - 1] || null;
    }
    if (!yes) return { status: 0, json: null, text: "noConfirmButton" };
    checkSafety();
    yes.click();
    requestCount += 1;
    nextRequestAt = Date.now() + settings.delay + (requestCount % settings.batch === 0 ? settings.rest : 0);
    await interruptibleWait(800);
    return okHide();
  }

  async function hideThread(threadId) {
    if (deletePlan && deletePlan.kind === "ui") return hideViaUi(threadId);
    try {
      return await hideThreadRequest(threadId);
    } catch (error) {
      if (state.stop || (error && (error.i18nKey === "notLoggedIn" || error.i18nKey === "rateLimit" || /429/.test(error.message || "")))) {
        throw error;
      }
      console.warn(error);
      deletePlan = { kind: "ui" };
      return hideViaUi(threadId);
    }
  }

  async function hideThreadRequest(threadId) {
    const finish = (result) => {
      if (result.status === 429) state.stop = true;
      return failHide(result);
    };

    if (!deletePlan) {
      const query = findDeleteQuery() || liveQuery(DELETE_NAME, DELETE_DOC);
      const key = variableKey(query);
      const first = await gql(query.name, query.id, withProvided(query, deleteVariables(threadId, key)));
      if (first.status === 429 || first.status === 401 || first.status === 403) return finish(first);
      if (gqlOk(first)) {
        deletePlan = { kind: "gql", query, key };
        return okHide();
      }
      const alt = key === "thread_fbid" ? "thread_id" : "thread_fbid";
      const second = await gql(query.name, query.id, withProvided(query, deleteVariables(threadId, alt)));
      if (second.status === 429 || second.status === 401 || second.status === 403) return finish(second);
      if (gqlOk(second)) {
        deletePlan = { kind: "gql", query, key: alt };
        return okHide();
      }
      console.warn("GraphQL silme olmadı, sitedeki Sohbeti sil kullanılacak.", failHide(first).text);
      deletePlan = { kind: "ui" };
      return hideViaUi(threadId);
    }

    const result = await gql(
      deletePlan.query.name,
      deletePlan.query.id,
      withProvided(deletePlan.query, deleteVariables(threadId, deletePlan.key))
    );
    if (result.status === 429 || result.status === 401 || result.status === 403) return finish(result);
    if (gqlOk(result)) return okHide();
    return failHide(result);
  }

  function reportRow(thread, result, http, error) {
    return {
      sonuc: result,
      kullanicilar: thread.usernames.join(" "),
      isimler: thread.names.join(" "),
      baslik: thread.title || thread.label,
      grup: thread.group ? "evet" : "hayır",
      kaynak: thread.source,
      son_mesaj: thread.lastActivity,
      thread_id: thread.id,
      url: thread.id ? location.origin + "/direct/t/" + thread.id : "",
      http: http || "",
      hata: error || "",
      zaman: new Date().toISOString(),
    };
  }

  function listReport(mode) {
    const now = new Date().toISOString();
    if (mode === "saved") {
      return {
        tur: "kaydedilenler",
        tur_islem: "liste",
        baslama: now,
        bitis: now,
        silinen: 0,
        hata: 0,
        durdurulan: 0,
        not: "noteListSaved",
        kolonlar: ["sonuc", "kullanici", "aciklama", "url", "media_id", "thumb", "zaman"],
        kayitlar: ui.savedPosts.map((post) => ({
          sonuc: "listelendi",
          kullanici: post.username || "",
          aciklama: post.caption || "",
          url: post.url || "",
          media_id: post.id,
          thumb: post.thumb || "",
          zaman: now,
        })),
      };
    }
    return {
      tur_islem: "liste",
      baslama: now,
      bitis: now,
      silinen: 0,
      hata: 0,
      durdurulan: 0,
      not: "noteListChats",
      kolonlar: [
        "sonuc",
        "kullanicilar",
        "isimler",
        "baslik",
        "grup",
        "kaynak",
        "son_mesaj",
        "thread_id",
        "url",
        "zaman",
      ],
      kayitlar: ui.threads.map((thread) => reportRow(thread, "listelendi", "", "")),
    };
  }

  async function deleteThreads(threads, { pauseMs = 1500, onProgress } = {}) {
    const rows = [];
    let deleted = 0;
    let failed = 0;
    let consecutiveFails = 0;
    const startedAt = new Date().toISOString();

    for (const thread of threads) {
      if (state.stop) {
        rows.push(reportRow(thread, "durduruldu", "", "rowStopped"));
        continue;
      }
      const result = await hideThread(thread.id);
      const ok = result && result.status === 200 && result.json && result.json.status === "ok";
      if (ok) {
        deleted += 1;
        consecutiveFails = 0;
        thread.status = "silindi";
        rows.push(reportRow(thread, "silindi", result.status, ""));
      } else {
        failed += 1;
        consecutiveFails += 1;
        thread.status = "hata";
        rows.push(reportRow(thread, "hata", result && result.status, result && result.text));
        if (result && (result.status === 429 || result.status === 401 || result.status === 403)) {
          state.stop = true;
        }
        if (consecutiveFails >= 5) state.stop = true;
      }
      if (onProgress) onProgress({ deleted, failed, done: rows.length, total: threads.length, thread });
      if (state.stop && consecutiveFails >= 5) {
        // Kalanlara istek atmadan rapora yaz.
        const rest = threads.slice(threads.indexOf(thread) + 1);
        for (const pending of rest) {
          rows.push(reportRow(pending, "durduruldu", "", "rowFailStreak"));
        }
        break;
      }
      if (state.stop && result && (result.status === 429 || result.status === 401 || result.status === 403)) {
        const rest = threads.slice(threads.indexOf(thread) + 1);
        for (const pending of rest) {
          rows.push(reportRow(pending, "durduruldu", "", "rowLimited"));
        }
        break;
      }
      await interruptibleWait(pauseMs + Math.floor(Math.random() * 500));
    }

    const report = {
      baslama: startedAt,
      bitis: new Date().toISOString(),
      silinen: deleted,
      hata: failed,
      durdurulan: rows.filter((row) => row.sonuc === "durduruldu").length,
      not: "noteDelete",
      kayitlar: rows,
    };
    window.IG.lastReport = report;
    return report;
  }

  const CRC_TABLE = (() => {
    const table = new Uint32Array(256);
    for (let n = 0; n < 256; n += 1) {
      let c = n;
      for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      table[n] = c >>> 0;
    }
    return table;
  })();

  function crc32(bytes) {
    let crc = 0xffffffff;
    for (let i = 0; i < bytes.length; i += 1) crc = CRC_TABLE[(crc ^ bytes[i]) & 255] ^ (crc >>> 8);
    return (crc ^ 0xffffffff) >>> 0;
  }

  function u16(value) {
    return Uint8Array.of(value & 255, (value >> 8) & 255);
  }

  function u32(value) {
    return Uint8Array.of(value & 255, (value >> 8) & 255, (value >> 16) & 255, (value >>> 24) & 255);
  }

  function concatBytes(parts) {
    let size = 0;
    for (const part of parts) size += part.length;
    const out = new Uint8Array(size);
    let offset = 0;
    for (const part of parts) {
      out.set(part, offset);
      offset += part.length;
    }
    return out;
  }

  function zipStore(files) {
    const encoder = new TextEncoder();
    const now = new Date();
    const time = (now.getHours() << 11) | (now.getMinutes() << 5) | (now.getSeconds() >> 1);
    const date = ((now.getFullYear() - 1980) << 9) | ((now.getMonth() + 1) << 5) | now.getDate();
    const locals = [];
    const centrals = [];
    let offset = 0;
    for (const file of files) {
      const name = encoder.encode(file.name);
      const data = typeof file.data === "string" ? encoder.encode(file.data) : file.data;
      const crc = crc32(data);
      const local = concatBytes([
        u32(0x04034b50),
        u16(20),
        u16(0),
        u16(0),
        u16(time),
        u16(date),
        u32(crc),
        u32(data.length),
        u32(data.length),
        u16(name.length),
        u16(0),
        name,
        data,
      ]);
      locals.push(local);
      centrals.push(
        concatBytes([
          u32(0x02014b50),
          u16(20),
          u16(20),
          u16(0),
          u16(0),
          u16(time),
          u16(date),
          u32(crc),
          u32(data.length),
          u32(data.length),
          u16(name.length),
          u16(0),
          u16(0),
          u16(0),
          u16(0),
          u32(0),
          u32(offset),
          name,
        ])
      );
      offset += local.length;
    }
    const centralDir = concatBytes(centrals);
    const end = concatBytes([
      u32(0x06054b50),
      u16(0),
      u16(0),
      u16(files.length),
      u16(files.length),
      u32(centralDir.length),
      u32(offset),
      u16(0),
    ]);
    return new Blob([concatBytes([...locals, centralDir, end])], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
  }

  function colName(index) {
    let n = index + 1;
    let name = "";
    while (n > 0) {
      const rem = (n - 1) % 26;
      name = String.fromCharCode(65 + rem) + name;
      n = Math.floor((n - 1) / 26);
    }
    return name;
  }

  function xmlText(value) {
    return String(value ?? "")
      .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
      .slice(0, 32767)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function columnHeader(column) {
    const key = "col_" + column;
    const text = t(key);
    return text === key ? column : text;
  }

  function translatedCell(column, value) {
    if (value == null || value === "") return "";
    if (column === "baslik" && value === "unnamed") return t("unnamedChat");
    if (column === "sonuc" || column === "grup" || column === "kaynak" || column === "hata" || column === "not") {
      return showPhrase(value);
    }
    return value;
  }

  function sheetTitle() {
    return t("sheetReport").replace(/[\\/?*[\]:]/g, "").slice(0, 31) || "Report";
  }

  function reportForExport(report) {
    const copy = JSON.parse(JSON.stringify(report));
    copy.dil = lang === "en" ? "en" : "tr";
    if (copy.not) copy.not = showPhrase(copy.not);
    if (Array.isArray(copy.kayitlar)) {
      copy.kayitlar = copy.kayitlar.map((row) => {
        const next = { ...row };
        for (const column of Object.keys(next)) next[column] = translatedCell(column, next[column]);
        return next;
      });
    }
    return copy;
  }

  function reportToXlsx(report) {
    const columns = report.kolonlar || [
      "sonuc",
      "kullanicilar",
      "isimler",
      "baslik",
      "grup",
      "kaynak",
      "son_mesaj",
      "thread_id",
      "http",
      "hata",
      "zaman",
    ];
    const rows = [columns.map(columnHeader)];
    for (const row of report.kayitlar || []) rows.push(columns.map((column) => translatedCell(column, row[column])));
    const sheet = [
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
      '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>',
    ];
    rows.forEach((row, rowIndex) => {
      const r = rowIndex + 1;
      const cells = row
        .map((value, columnIndex) => {
          const ref = colName(columnIndex) + r;
          return '<c r="' + ref + '" t="inlineStr"><is><t xml:space="preserve">' + xmlText(value) + "</t></is></c>";
        })
        .join("");
      sheet.push('<row r="' + r + '">' + cells + "</row>");
    });
    sheet.push("</sheetData></worksheet>");
    return zipStore([
      {
        name: "[Content_Types].xml",
        data:
          '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
          '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
          '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
          '<Default Extension="xml" ContentType="application/xml"/>' +
          '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>' +
          '<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>' +
          "</Types>",
      },
      {
        name: "_rels/.rels",
        data:
          '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
          '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
          '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>' +
          "</Relationships>",
      },
      {
        name: "xl/workbook.xml",
        data:
          '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
          '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">' +
          '<sheets><sheet name="' + xmlText(sheetTitle()) + '" sheetId="1" r:id="rId1"/></sheets></workbook>',
      },
      {
        name: "xl/_rels/workbook.xml.rels",
        data:
          '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
          '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
          '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>' +
          "</Relationships>",
      },
      { name: "xl/worksheets/sheet1.xml", data: sheet.join("") },
    ]);
  }

  function firstErrorLine(report) {
    const row = (report.kayitlar || []).find((item) => item.sonuc === "hata" && (item.hata || item.http));
    if (!row) return "";
    const http = row.http ? "HTTP " + row.http : "";
    const detail = showPhrase(
      String(row.hata || "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 140)
    );
    const text = [http, detail].filter(Boolean).join(" ");
    return text ? t("firstError", { text }) : "";
  }

  function stamp() {
    const now = new Date();
    const pad = (value) => String(value).padStart(2, "0");
    return (
      now.getFullYear() +
      pad(now.getMonth() + 1) +
      pad(now.getDate()) +
      "-" +
      pad(now.getHours()) +
      pad(now.getMinutes())
    );
  }

  function download(filename, mime, payload) {
    const blob = payload instanceof Blob ? payload : new Blob([payload], { type: mime });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  }

  function appId() {
    const stored = ["instagramWebFBAppId", "instagramWebDesktopFBAppId"]
      .map((key) => localStorage.getItem(key))
      .find((value) => value && /^\d{10,}$/.test(value));
    return (session && session.appId) || stored || "936619743392459";
  }

  function pageAsbd() {
    return pick(document.documentElement.innerHTML, [/"ASBD_ID":"?(\d+)/, /"asbd_id":"?(\d+)/]);
  }

  function asbdId(forPost) {
    return pageAsbd() || (forPost ? "359341" : "129477");
  }

  function wwwClaim() {
    let stored = "";
    try {
      stored = sessionStorage.getItem("www-claim-v2") || "";
    } catch {
      stored = "";
    }
    if (stored && stored !== "0") return stored;
    if (pageClaim === null) {
      pageClaim =
        pick(document.documentElement.innerHTML, [
          /"www_claim":"(hmac\.[^"]+)"/,
          /"claim":"(hmac\.[^"]+)"/,
          /"x-ig-www-claim":"(hmac\.[^"]+)"/,
        ]) || "";
    }
    return pageClaim || stored || "0";
  }

  function ajaxRevision() {
    if (ajaxCache !== null) return ajaxCache;
    const fromWindow = window.__rev;
    ajaxCache =
      (fromWindow ? String(fromWindow) : "") ||
      pick(document.documentElement.innerHTML, [
        /"rollout_hash":"([^"]+)"/,
        /"client_revision":(\d+)/,
        /"__spin_r":(\d+)/,
      ]) ||
      "";
    return ajaxCache;
  }

  function jazoest(token) {
    let sum = 0;
    for (let i = 0; i < token.length; i += 1) sum += token.charCodeAt(i);
    return "2" + sum;
  }

  async function webApi(path, { method = "GET", body = "", extraHeaders = null } = {}) {
    if (!cookie("csrftoken") || !cookie("ds_user_id")) {
      throw fail("notLoggedIn");
    }
    const headers = {
      accept: "*/*",
      "x-csrftoken": cookie("csrftoken"),
      "x-ig-app-id": appId(),
      "x-asbd-id": asbdId(method !== "GET"),
      "x-ig-www-claim": wwwClaim(),
      "x-requested-with": "XMLHttpRequest",
    };
    const init = {
      method,
      credentials: "include",
      headers,
      referrer: location.origin + "/",
    };
    if (method !== "GET") {
      headers["content-type"] = "application/x-www-form-urlencoded";
      const ajax = ajaxRevision();
      if (ajax) headers["x-instagram-ajax"] = ajax;
      if (extraHeaders) Object.assign(headers, extraHeaders);
      init.body = body || "";
    }
    const response = await guardedRequest(location.origin + path, init);
    const nextClaim = response.headers.get("x-ig-set-www-claim");
    if (nextClaim) {
      try {
        sessionStorage.setItem("www-claim-v2", nextClaim);
      } catch {
        /* oturum deposu kapalı */
      }
    }
    const text = await response.text();
    const cleaned = text.replace(/^for\s*\(;;\);\s*/, "").trim();
    let json = null;
    if (cleaned.startsWith("{") || cleaned.startsWith("[")) {
      try {
        const parsed = parseSafe(cleaned);
        json = Array.isArray(parsed) ? parsed.find((item) => item && (item.items || item.status)) || parsed[0] : parsed;
      } catch {
        json = null;
      }
    }
    return { status: response.status, json, text: text.slice(0, 280) };
  }

  function mediaThumb(media) {
    const candidates = [];
    const push = (node) => {
      if (!node) return;
      const list = node.image_versions2 && node.image_versions2.candidates;
      if (Array.isArray(list)) candidates.push(...list);
      if (node.thumbnail_url) candidates.push({ url: node.thumbnail_url, width: 150 });
    };
    push(media);
    if (Array.isArray(media.carousel_media)) push(media.carousel_media[0]);
    const sized = candidates.filter((item) => item && item.url);
    sized.sort((a, b) => (a.width || 9999) - (b.width || 9999));
    const small = sized.find((item) => (item.width || 0) >= 150) || sized[0];
    return small ? small.url : "";
  }

  function normalizeSaved(item) {
    const media = item && (item.media || item);
    if (!media) return null;
    const id = String(media.pk || media.id || "").split("_")[0];
    if (!id || id === "undefined") return null;
    const rawId = media.id != null ? String(media.id) : "";
    const fullId = rawId && rawId !== id ? rawId : "";
    const code = media.code || "";
    const user = media.user || {};
    const rawCaption = media.caption && (media.caption.text || media.caption);
    const caption = String(rawCaption || "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 240);
    const kind = media.product_type === "clips" ? "reel" : "p";
    return {
      id,
      fullId,
      code,
      username: user.username || "",
      caption,
      label: user.username ? "@" + user.username : code || "",
      url: code ? location.origin + "/" + kind + "/" + code + "/" : "",
      thumb: mediaThumb(media),
      status: "",
    };
  }

  async function readSavedPage(cursor) {
    const params = new URLSearchParams({ count: "50" });
    if (cursor) params.set("max_id", cursor);
    const result = await webApi("/api/v1/feed/saved/posts/?" + params.toString());
    if (result.status === 429) {
      state.stop = true;
      throw fail("rateLimit");
    }
    const items = result.json && (result.json.items || result.json.feed_items);
    if (result.status !== 200 || !Array.isArray(items)) {
      const detail = (result.json && (result.json.message || result.json.status)) || "";
      throw fail(detail ? "savedReadFailedDetail" : "savedReadFailed", { status: result.status, detail });
    }
    return {
      posts: items.map(normalizeSaved).filter(Boolean),
      cursor: result.json.more_available ? result.json.next_max_id || null : null,
      hasOlder: Boolean(result.json.more_available && result.json.next_max_id),
    };
  }

  async function collectSaved({ pauseMs = 400, onPage } = {}) {
    const found = [];
    const seen = new Set();
    let cursor = null;
    const seenCursors = new Set();
    for (let page = 0; page < 200; page += 1) {
      if (state.stop) break;
      const batch = await readSavedPage(cursor);
      for (const post of batch.posts) {
        if (seen.has(post.id)) continue;
        seen.add(post.id);
        found.push(post);
      }
      if (onPage) onPage(found);
      if (!batch.hasOlder || !batch.cursor || seenCursors.has(String(batch.cursor))) break;
      seenCursors.add(String(batch.cursor));
      cursor = batch.cursor;
      await interruptibleWait(pauseMs);
    }
    return found;
  }

  function savedRow(post, sonuc, http, error) {
    return {
      sonuc,
      kullanici: post.username || "",
      aciklama: post.caption || "",
      url: post.url || "",
      media_id: post.id,
      http: http || "",
      hata: error || "",
      zaman: new Date().toISOString(),
    };
  }

  function savedOk(result) {
    if (!result || result.status !== 200) return false;
    const text = String(result.text || "").trim();
    if (text.startsWith("<")) return false;
    if (result.json && result.json.status === "ok") return true;
    if (result.json && (result.json.status === "fail" || result.json.status === "error" || result.json.message)) return false;
    return text === "";
  }

  function unsaveErrorText(result) {
    if (!result) return "noReply";
    const json = result.json;
    if (json) {
      const message = json.message || (json.status && json.status !== "ok" ? json.status : "");
      if (message) return String(message).replace(/\s+/g, " ").trim().slice(0, 180);
    }
    const text = String(result.text || "").trim();
    if (!text) return "emptyReply";
    if (text.startsWith("<")) return "htmlReply";
    return text.replace(/\s+/g, " ").slice(0, 180);
  }

  function restPath(kind, id) {
    if (kind === "media") return "/api/v1/media/" + id + "/unsave/";
    if (kind === "apiweb") return "/api/v1/web/save/" + id + "/unsave/";
    return "/web/save/" + id + "/unsave/";
  }

  async function postUnsave(kind, id, body) {
    const path = restPath(kind, id);
    const extra = {};
    if (body && session && session.lsd) extra["x-fb-lsd"] = session.lsd;
    const result = await webApi(path, { method: "POST", body: body || "", extraHeaders: extra });
    result.path = path;
    if (result.status === 429) state.stop = true;
    return result;
  }

  async function unsaveForm(mediaId) {
    try {
      const sess = await ensureSession();
      const csrf = cookie("csrftoken") || "";
      const params = new URLSearchParams();
      if (sess && sess.dtsg) params.set("fb_dtsg", sess.dtsg);
      if (sess && sess.lsd) params.set("lsd", sess.lsd);
      if (csrf) params.set("jazoest", jazoest(csrf));
      params.set("media_id", mediaId);
      return params.toString();
    } catch {
      return "";
    }
  }

  function keepFailure(current, next) {
    if (!current) return next;
    if (!next) return current;
    const nextMessage = next.json && (next.json.message || (next.json.status && next.json.status !== "ok"));
    const currentMessage = current.json && (current.json.message || (current.json.status && current.json.status !== "ok"));
    if (nextMessage && !currentMessage) return next;
    return current;
  }

  const UNSAVE_QUERY_NAMES = [
    "usePolarisUnsaveMediaMutation",
    "usePolarisUnsavePostMutation",
    "PolarisAPIUnsavePostMutation",
    "PolarisSavedPostUnsaveMutation",
    "PolarisPostUnsaveMutation",
    "usePolarisPostUnsaveMutation",
  ];

  function unsaveVariableSets(mediaId) {
    const actor = cookie("ds_user_id") || "";
    return [
      ["media", { media_id: mediaId }],
      ["module", { media_id: mediaId, module_name: "feed_timeline" }],
      [
        "input",
        {
          input: {
            media_id: mediaId,
            actor_id: actor,
            client_mutation_id: String(Date.now()),
          },
        },
      ],
    ];
  }

  function asUnsaveResult(result, name) {
    if (gqlOk(result)) return { status: 200, json: { status: "ok" }, text: "", path: "graphql " + name };
    const problem = gqlProblem(result);
    return {
      status: result ? result.status : 0,
      json: { status: "fail", message: problem },
      text: (result && result.text) || problem,
      path: "graphql " + name,
    };
  }

  async function discoverUnsaveQuery() {
    if (unsaveQueryLookup !== null) return unsaveQueryLookup || null;
    const take = (name) => {
      const found = requireQuery(name);
      return found && found.id ? found : null;
    };
    for (const name of UNSAVE_QUERY_NAMES) {
      const found = take(name);
      if (found) {
        unsaveQueryLookup = found;
        return found;
      }
    }
    const extra = [];
    for (const key of requireMapKeys()) {
      if (!/unsave/i.test(key) || /message|thread|comment|direct/i.test(key)) continue;
      const name = String(key).replace(/\.graphql$/, "");
      if (!UNSAVE_QUERY_NAMES.includes(name) && !extra.includes(name)) extra.push(name);
    }
    for (const name of extra) {
      const found = take(name);
      if (found) {
        unsaveQueryLookup = found;
        return found;
      }
    }
    const keys = requireMapKeys();
    const listed = [...UNSAVE_QUERY_NAMES, ...extra].filter((name) =>
      keys.some((key) => key === name || key === name + ".graphql")
    );
    for (const name of listed.slice(0, 2)) {
      await loadLazy(name);
      const found = take(name);
      if (found) {
        unsaveQueryLookup = found;
        return found;
      }
    }
    unsaveQueryLookup = false;
    return null;
  }

  async function runPlannedGql(post) {
    const id = unsaveGqlPlan.useFull && post.fullId ? post.fullId : post.id;
    const found = unsaveVariableSets(id).find((item) => item[0] === unsaveGqlPlan.shape);
    const variables = found ? found[1] : { media_id: id };
    const result = await gql(
      unsaveGqlPlan.query.name,
      unsaveGqlPlan.query.id,
      withProvided(unsaveGqlPlan.query, variables)
    );
    if (result.status === 429) state.stop = true;
    return asUnsaveResult(result, unsaveGqlPlan.query.name);
  }

  async function probeGraphqlUnsave(post) {
    const query = await discoverUnsaveQuery();
    if (!query) return null;
    const attempts = unsaveVariableSets(post.id).map(([shape, variables]) => ({
      shape,
      useFull: false,
      variables,
    }));
    if (post.fullId && post.fullId !== post.id) {
      attempts.push({ shape: "media", useFull: true, variables: { media_id: post.fullId } });
    }
    let last = null;
    for (const attempt of attempts) {
      const result = await gql(query.name, query.id, withProvided(query, attempt.variables));
      if (result.status === 429) {
        state.stop = true;
        return asUnsaveResult(result, query.name);
      }
      const wrapped = asUnsaveResult(result, query.name);
      if (savedOk(wrapped)) {
        unsaveGqlPlan = { query, shape: attempt.shape, useFull: attempt.useFull };
        return wrapped;
      }
      last = keepFailure(last, wrapped);
      await sleep(200);
    }
    return last;
  }

  async function unsaveOne(post) {
    const idOf = (useFull) => (useFull && post.fullId ? post.fullId : post.id);
    if (unsaveRestPlan) {
      const id = idOf(unsaveRestPlan.useFull);
      const body = unsaveRestPlan.form ? await unsaveForm(id) : "";
      return postUnsave(unsaveRestPlan.kind, id, body);
    }
    if (unsaveGqlPlan) return runPlannedGql(post);
    if (unsaveRestExhausted) {
      const result = await postUnsave("web", post.id, "");
      if (savedOk(result)) unsaveRestPlan = { kind: "web", useFull: false, form: false };
      else console.warn("IGCleaner kayıt kaldırılamadı", post.id, result.status, result.path, unsaveErrorText(result));
      return result;
    }

    const attempts = [
      { kind: "web", id: post.id, full: false, form: false },
      { kind: "apiweb", id: post.id, full: false, form: false },
      { kind: "media", id: post.id, full: false, form: false },
    ];
    if (post.fullId && post.fullId !== post.id) {
      attempts.push({ kind: "web", id: post.fullId, full: true, form: false });
    }
    attempts.push({ kind: "web", id: post.id, full: false, form: true });

    let last = null;
    for (const attempt of attempts) {
      const body = attempt.form ? await unsaveForm(attempt.id) : "";
      if (attempt.form && !body) continue;
      const result = await postUnsave(attempt.kind, attempt.id, body);
      if (result.status === 429 || state.stop) return result;
      if (savedOk(result)) {
        unsaveRestPlan = { kind: attempt.kind, useFull: attempt.full, form: attempt.form };
        return result;
      }
      last = keepFailure(last, result);
      await sleep(200);
    }

    if (!unsaveGqlExhausted) {
      const gqlLast = await probeGraphqlUnsave(post);
      unsaveGqlExhausted = !unsaveGqlPlan;
      if (gqlLast) {
        if (state.stop || savedOk(gqlLast)) return gqlLast;
        last = keepFailure(last, gqlLast);
      }
    }
    unsaveRestExhausted = !unsaveRestPlan && !unsaveGqlPlan;
    if (last) console.warn("IGCleaner kayıt kaldırılamadı", post.id, last.status, last.path, unsaveErrorText(last));
    return last;
  }

  async function unsavePosts(posts, { pauseMs = 1200, onProgress } = {}) {
    if (!unsaveRestPlan && !unsaveGqlPlan) {
      unsaveRestExhausted = false;
      unsaveGqlExhausted = false;
      unsaveQueryLookup = null;
    }
    const rows = [];
    let removed = 0;
    let failed = 0;
    let consecutiveFails = 0;
    const startedAt = new Date().toISOString();

    for (const post of posts) {
      if (state.stop) {
        rows.push(savedRow(post, "durduruldu", "", "rowStopped"));
        continue;
      }
      const result = await unsaveOne(post);
      const ok = savedOk(result);
      if (ok) {
        removed += 1;
        consecutiveFails = 0;
        post.status = "kaldirildi";
        rows.push(savedRow(post, "kaldirildi", result.status, ""));
      } else {
        failed += 1;
        consecutiveFails += 1;
        post.status = "hata";
        const message = [result && result.path, unsaveErrorText(result)].filter(Boolean).join(" · ");
        rows.push(savedRow(post, "hata", result && result.status, message));
        if (result && (result.status === 429 || result.status === 401 || result.status === 403)) state.stop = true;
        if (consecutiveFails >= 5) state.stop = true;
      }
      if (onProgress) onProgress({ removed, failed, done: rows.length, total: posts.length, post });
      if (state.stop && consecutiveFails >= 5) {
        const rest = posts.slice(posts.indexOf(post) + 1);
        for (const pending of rest) rows.push(savedRow(pending, "durduruldu", "", "rowFailStreak"));
        break;
      }
      if (state.stop && result && (result.status === 429 || result.status === 401 || result.status === 403)) {
        const rest = posts.slice(posts.indexOf(post) + 1);
        for (const pending of rest) rows.push(savedRow(pending, "durduruldu", "", "rowLimited"));
        break;
      }
      await interruptibleWait(pauseMs + Math.floor(Math.random() * 400));
    }

    const report = {
      tur: "kaydedilenler",
      baslama: startedAt,
      bitis: new Date().toISOString(),
      silinen: removed,
      hata: failed,
      durdurulan: rows.filter((row) => row.sonuc === "durduruldu").length,
      not: "noteUnsave",
      kolonlar: ["sonuc", "kullanici", "aciklama", "url", "media_id", "http", "hata", "zaman"],
      kayitlar: rows,
    };
    window.IG.lastReport = report;
    return report;
  }

  async function unsaveSaved(options = {}) {
    state.stop = false;
    const posts = options.posts || (await collectSaved({ pauseMs: options.pauseMs ?? 400 }));
    if (!posts.length) return { silinen: 0, hata: 0, durdurulan: 0, kayitlar: [] };
    return unsavePosts(posts, { pauseMs: options.pauseMs ?? 1200 });
  }

  function visibleSaved() {
    const query = ui.savedQuery.trim().toLowerCase();
    if (!query) return ui.savedPosts;
    return ui.savedPosts.filter((post) =>
      [post.username, post.caption, post.code, post.label].join(" ").toLowerCase().includes(query)
    );
  }

  function onInboxPage() {
    return /\/direct(\/|$)/.test(location.pathname);
  }

  function spaGo(path) {
    checkSafety();
    const found = [...document.querySelectorAll("a[href]")].find((link) => {
      if (link.closest("#igc-root")) return false;
      const href = link.getAttribute("href") || "";
      return href === path || href.startsWith(path);
    });
    if (found) {
      found.click();
      return;
    }
    const link = document.createElement("a");
    link.href = path;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  function visibleThreads() {
    const query = ui.query.trim().toLowerCase();
    if (!query) return ui.threads;
    return ui.threads.filter((thread) => haystack(thread).includes(query));
  }

  function mountPanel() {
    const old = document.getElementById("igc-root");
    if (old) old.remove();
    const oldStyle = document.getElementById("igc-style");
    if (oldStyle) oldStyle.remove();

    const style = document.createElement("style");
    style.id = "igc-style";
    style.textContent = `
      #igc-root, #igc-root * { box-sizing: border-box; }
      #igc-settings { color: #ededf2; background: #17171c; border: 1px solid #383841; border-radius: 20px; width: min(440px, calc(100vw - 32px)); max-height: calc(100vh - 40px); padding: 24px; box-shadow: 0 24px 100px #0009; font: 13px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
      #igc-settings::backdrop { background: #0009; backdrop-filter: blur(4px); }
      #igc-settings .igc-modal-head { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
      #igc-settings h2 { margin: 0; font-size: 21px; letter-spacing: -.5px; }
      #igc-settings p, #igc-settings small { color: #a5a5b4; }
      #igc-settings .igc-settings-note { margin: 12px 0 22px; }
      #igc-settings fieldset { min-width: 0; margin: 0 0 20px; padding: 14px; border: 1px solid #33333d; border-radius: 12px; }
      #igc-settings legend { font-weight: 600; padding: 0 6px; }
      #igc-settings label { display: grid; grid-template-columns: 1fr 88px; gap: 3px 12px; align-items: center; margin: 12px 0; }
      #igc-settings label > span { grid-column: 1; grid-row: 1; }
      #igc-settings label small { grid-column: 1; grid-row: 2; font-size: 11px; }
      #igc-settings input { grid-column: 2; grid-row: 1 / 3; width: 88px; color: inherit; background: #22222b; padding: 10px; border: 1px solid #484858; border-radius: 8px; font: inherit; }
      #igc-settings button { padding: 9px 12px; color: inherit; background: #2c2c36; border: 1px solid #41414e; border-radius: 8px; cursor: pointer; font: inherit; }
      #igc-settings input:focus-visible, #igc-settings button:focus-visible { outline: 2px solid #aaa4ff; outline-offset: 3px; }
      #igc-settings button:disabled { opacity: .45; cursor: default; }
      #igc-settings .igc-modal-footer { display: flex; justify-content: space-between; gap: 12px; }
      #igc-settings #igc-settings-done { background: #c6bfff; color: #171321; border-color: transparent; font-weight: 600; }
      #igc-cache-notice { background: #202737; color: #c6d6fa; padding: 10px 12px; border: 1px solid #36445f; border-radius: 10px; font-size: 12px; }
      #igc-cache-notice[hidden] { display: none; }
      #igc-root [data-i18n="riskWarning"] { color: #ffc77d; font-size: 12px; }
      #igc-root button {
        appearance: none;
        -webkit-appearance: none;
        background-image: none;
        box-shadow: none;
        margin: 0;
      }
      #igc-root {
        position: fixed;
        top: 72px;
        right: 16px;
        width: 340px;
        max-width: calc(100vw - 24px);
        max-height: calc(100vh - 88px);
        z-index: 2147483646;
        display: flex;
        flex-direction: column;
        background: #111;
        color: #f3f3f3;
        border: 1px solid #2c2c2c;
        border-radius: 16px;
        box-shadow: 0 12px 40px rgba(0,0,0,.45);
        font: 13px/1.4 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        pointer-events: auto;
        overflow: hidden;
      }
      #igc-root.igc-min { width: auto; max-height: none; }
      #igc-root.igc-min .igc-body { display: none; }
      #igc-head {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 12px;
        cursor: grab;
        user-select: none;
        background: #1a1a1a;
        border-bottom: 1px solid #2c2c2c;
      }
      #igc-root.igc-min #igc-head { border-bottom: 0; }
      #igc-title { display: flex; flex-direction: column; gap: 1px; font-weight: 650; flex: 1; min-width: 0; }
      #igc-brand { font-weight: 450; font-size: 11px; color: #9a9a9a; }
      #igc-brand a { color: #d7d7d7; text-decoration: none; }
      #igc-brand a:hover { text-decoration: underline; }
      #igc-menu { display: flex; gap: 6px; }
      #igc-menu button {
        flex: 1;
        border: 1px solid #333;
        border-radius: 8px;
        padding: 7px 8px;
        background: #1c1c1c;
        color: #ddd;
        cursor: pointer;
        font: inherit;
      }
      #igc-menu button.igc-on { background: #2a2a2a; color: #fff; border-color: #666; }
      #igc-menu button:disabled { opacity: .45; cursor: default; }
      #igc-steps { display: flex; gap: 4px; }
      .igc-step {
        flex: 1;
        min-width: 0;
        text-align: center;
        font-size: 10px;
        color: #777;
        padding-top: 6px;
        border-top: 2px solid #333;
      }
      .igc-step.igc-now { color: #fff; border-top-color: #ed4956; }
      .igc-step.igc-done { color: #7dcea0; border-top-color: #7dcea0; }
      #igc-step-text { color: #cfcfcf; }
      #igc-head button, .igc-actions button, .igc-report button {
        border: 0;
        border-radius: 8px;
        padding: 6px 10px;
        background: #2a2a2a;
        color: #f3f3f3;
        cursor: pointer;
        font: inherit;
      }
      #igc-head button { padding: 4px 8px; }
      #igc-min, #igc-close, #igc-lang { flex: none; }
      #igc-lang { display: flex; gap: 2px; }
      #igc-head #igc-lang button {
        padding: 2px 6px;
        border-radius: 6px;
        background: transparent;
        color: #9a9a9a;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: .04em;
      }
      #igc-head #igc-lang button.igc-on { background: #333; color: #fff; }
      .igc-body { display: flex; flex-direction: column; min-height: 0; padding: 10px 12px 12px; gap: 8px; overflow: auto; }
      #igc-status { color: #bdbdbd; min-height: 18px; }
      #igc-search, #igc-saved-search, .igc-check {
        width: 100%;
      }
      #igc-search, #igc-saved-search {
        background: #1c1c1c;
        color: #fff;
        border: 1px solid #333;
        border-radius: 8px;
        padding: 8px 10px;
        font: inherit;
      }
      .igc-rowline { display: flex; align-items: center; gap: 8px; color: #ddd; }
      .igc-actions, .igc-report { display: flex; flex-wrap: wrap; gap: 6px; }
      #igc-delete, #igc-saved-start, #igc-open-inbox {
        display: block;
        width: 100%;
        border: 0;
        border-radius: 10px;
        padding: 10px 12px;
        background: #2a2a2a;
        color: #f3f3f3;
        font: inherit;
        font-weight: 650;
        line-height: 1.3;
        cursor: pointer;
      }
      #igc-delete, #igc-saved-start { background: #ed4956; color: #fff; }
      #igc-root button:disabled, #igc-root input:disabled { opacity: .45; cursor: default; }
      #igc-root button.igc-busy:disabled { opacity: 1; cursor: progress; }
      #igc-root button.igc-busy::before {
        content: "";
        display: inline-block;
        width: 11px;
        height: 11px;
        margin-right: 8px;
        border: 2px solid rgba(255,255,255,.35);
        border-top-color: #fff;
        border-radius: 50%;
        vertical-align: -1px;
        animation: igc-spin .7s linear infinite;
      }
      @keyframes igc-spin { to { transform: rotate(360deg); } }
      @media (prefers-reduced-motion: reduce) {
        #igc-root button.igc-busy::before { animation: none; }
      }
      #igc-list, #igc-saved-list {
        overflow: auto;
        min-height: 160px;
        max-height: 42vh;
        border: 1px solid #2a2a2a;
        border-radius: 10px;
        background: #0d0d0d;
      }
      .igc-item {
        display: flex;
        gap: 8px;
        align-items: flex-start;
        padding: 8px 10px;
        border-bottom: 1px solid #222;
        cursor: pointer;
      }
      .igc-item:hover { background: #1a1a1a; }
      .igc-item small { display: block; color: #9a9a9a; }
      .igc-open { display: flex; gap: 8px; min-width: 0; flex: 1; color: inherit; text-decoration: none; }
      .igc-thumb { width: 44px; height: 44px; object-fit: cover; border-radius: 6px; background: #222; flex: none; }
      #igc-msg-wipe, #igc-saved-wipe { background: #ed4956; color: #fff; }
      .igc-meta { color: #8d8d8d; }
      .igc-pill {
        display: inline-block;
        margin-right: 4px;
        padding: 0 6px;
        border-radius: 999px;
        background: #2a2a2a;
        color: #ddd;
        font-size: 11px;
      }
      .igc-ok { color: #7dcea0; }
      .igc-bad { color: #f5b7b1; }
      #igc-confirm {
        display: none;
        padding: 8px;
        border-radius: 10px;
        background: #2a1717;
        color: #ffd9d6;
      }
      #igc-confirm.igc-on { display: block; }
      #igc-confirm .igc-actions { margin-top: 8px; }
      #igc-yes { background: #ed4956; color: #fff; }
      #igc-report { display: none; padding-top: 4px; border-top: 1px solid #2c2c2c; }
      #igc-report.igc-on { display: block; }
      #igc-report p { margin: 0 0 8px; }
      #igc-note, .igc-note { color: #8d8d8d; }
      #igc-view-messages, #igc-view-saved { display: flex; flex-direction: column; gap: 8px; min-height: 0; }
      #igc-view-messages[hidden], #igc-view-saved[hidden] { display: none; }
    `;
    document.documentElement.appendChild(style);

    const root = document.createElement("aside");
    root.id = "igc-root";
    root.innerHTML = `
      <div id="igc-head">
        <div id="igc-title">
          <span id="igc-name"></span>
          <span id="igc-brand"></span>
        </div>
        <button type="button" id="igc-lang"></button>
        <button type="button" id="igc-settings-open" data-i18n-title="settings" aria-haspopup="dialog" aria-label="Settings">⚙</button>
        <button type="button" id="igc-min" data-i18n-title="minimize" title="Küçült">–</button>
        <button type="button" id="igc-close" data-i18n-title="close" title="Kapat">×</button>
      </div>
      <div class="igc-body">
        <div id="igc-menu">
          <button type="button" data-mode="messages" data-i18n="menuMessages">Mesaj sil</button>
          <button type="button" data-mode="saved" data-i18n="menuSaved">Kaydedilenler</button>
        </div>
        <strong data-i18n="riskWarning"></strong>
        <div id="igc-cache-notice" role="status" hidden></div>
        <div id="igc-steps"></div>
        <div id="igc-step-text"></div>
        <div id="igc-pacing" role="status"></div>
        <div id="igc-status" data-i18n="preparing">Hazırlanıyor…</div>
        <div class="igc-actions"><button type="button" id="igc-stop" data-i18n="stop">Durdur</button></div>
        <div id="igc-view-messages">
          <button type="button" id="igc-open-inbox" data-i18n="openInbox">Gelen kutusunu aç</button>
          <input id="igc-search" type="search" data-i18n-placeholder="searchChats" placeholder="İsim veya kullanıcı adı" autocomplete="off" />
          <label class="igc-rowline"><input id="igc-pending" type="checkbox" /> <span data-i18n="includeRequests">Mesaj isteklerini de listele</span></label>
          <div class="igc-actions">
            <button type="button" id="igc-reload" data-i18n="reload">Yenile</button>
            <button type="button" id="igc-all" data-i18n="selectAll">Tümünü seç</button>
            <button type="button" id="igc-msg-report" data-i18n="reportOnly" disabled>Sadece rapor</button>
            <button type="button" id="igc-msg-wipe" data-i18n="wipeAll" disabled>Tümünü sil</button>
          </div>
          <div id="igc-count" class="igc-meta">0 seçili</div>
          <div id="igc-list"></div>
          <button type="button" id="igc-delete" data-i18n="deleteSelected" disabled>Seçilenleri sil</button>
          <div id="igc-note" data-i18n="noteMessages">Sadece rapor hiçbir şeyi silmez. Silmek sohbeti sadece senin kutundan kaldırır.</div>
        </div>
        <div id="igc-view-saved" hidden>
          <input id="igc-saved-search" type="search" data-i18n-placeholder="searchSaved" placeholder="Kullanıcı veya açıklama" autocomplete="off" />
          <div class="igc-actions">
            <button type="button" id="igc-saved-reload" data-i18n="reload">Yenile</button>
            <button type="button" id="igc-saved-all" data-i18n="selectAll">Tümünü seç</button>
            <button type="button" id="igc-saved-report" data-i18n="reportOnly" disabled>Sadece rapor</button>
            <button type="button" id="igc-saved-wipe" data-i18n="wipeAllSaved" disabled>Tümünü kaldır</button>
          </div>
          <div id="igc-saved-count" class="igc-meta">0 seçili</div>
          <div id="igc-saved-list"></div>
          <button type="button" id="igc-saved-start" data-i18n="removeSelected" disabled>Seçilenleri kaldır</button>
          <div class="igc-note" data-i18n="noteSaved">Sadece rapor kaydı kaldırmaz. Kaldırmak gönderiyi silmez, sadece senin kaydından düşer.</div>
        </div>
        <div id="igc-confirm">
          <div id="igc-confirm-text"></div>
          <div class="igc-actions">
            <button type="button" id="igc-yes" data-i18n="yesDelete">Sil</button>
            <button type="button" id="igc-no" data-i18n="cancel">Vazgeç</button>
          </div>
        </div>
        <div id="igc-report">
          <p id="igc-report-text"></p>
          <div class="igc-actions igc-report">
            <button type="button" id="igc-json" data-i18n="downloadJson">JSON indir</button>
            <button type="button" id="igc-xlsx" data-i18n="downloadXlsx">Excel indir</button>
          </div>
        </div>
      </div>
    `;
    root.insertAdjacentHTML("beforeend", `
      <dialog id="igc-settings" aria-labelledby="igc-settings-title">
        <div class="igc-modal-head"><h2 id="igc-settings-title" data-i18n="settings"></h2><button type="button" id="igc-settings-close" data-i18n-title="close" aria-label="Close">×</button></div>
        <p class="igc-settings-note" data-i18n="settingsNote"></p>
        <fieldset><legend data-i18n="settingsTiming"></legend>
          <label for="igc-delay"><span data-i18n="delaySeconds"></span><small data-i18n="delayHint"></small><input id="igc-delay" type="number" min="2" max="120" step="0.5"></label>
          <label for="igc-batch"><span data-i18n="batchEvery"></span><small data-i18n="batchHint"></small><input id="igc-batch" type="number" min="1" max="20" step="1"></label>
          <label for="igc-rest"><span data-i18n="breakSeconds"></span><small data-i18n="restHint"></small><input id="igc-rest" type="number" min="30" max="3600" step="1"></label>
        </fieldset>
        <fieldset><legend data-i18n="settingsData"></legend><p data-i18n="cachePrivacy"></p><button type="button" id="igc-clear-cache" data-i18n="clearCache"></button><p id="igc-cache-feedback" role="status"></p></fieldset>
        <div class="igc-modal-footer"><button type="button" id="igc-reset-settings" data-i18n="resetSettings"></button><button type="button" id="igc-settings-done" data-i18n="settingsDone"></button></div>
      </dialog>
    `);
    document.body.appendChild(root);

    const settingInputs = { delay: root.querySelector("#igc-delay"), batch: root.querySelector("#igc-batch"), rest: root.querySelector("#igc-rest") };
    function paintSettings() {
      for (const [key, node] of Object.entries(settingInputs)) node.value = settings[key] / (key === "batch" ? 1 : 1000);
    }
    for (const [key, node] of Object.entries(settingInputs)) node.addEventListener("change", () => {
      if (ui.loading || ui.deleting || ui.downloading) return paintSettings();
      settings = normalizeSettings({ ...settings, [key]: Number(node.value) * (key === "batch" ? 1 : 1000) });
      storage.set("igtools-settings-v1", JSON.stringify(settings));
      paintSettings();
    });
    root.querySelector("#igc-reset-settings").addEventListener("click", () => {
      if (ui.loading || ui.deleting || ui.downloading) return;
      settings = { ...DEFAULT_SETTINGS };
      storage.set("igtools-settings-v1", JSON.stringify(settings));
      paintSettings();
    });
    paintSettings();
    const settingsModal = root.querySelector("#igc-settings");
    root.querySelector("#igc-settings-open").addEventListener("click", () => { refreshChrome(); settingsModal.showModal(); });
    for (const id of ["igc-settings-close", "igc-settings-done"]) root.querySelector("#" + id).addEventListener("click", () => settingsModal.close());
    settingsModal.addEventListener("click", event => {
      if (event.target !== settingsModal) return;
      const rect = settingsModal.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) settingsModal.close();
    });
    root.querySelector("#igc-clear-cache").addEventListener("click", () => {
      if (isBusy()) return;
      for (const [mode, pending] of [["messages", false], ["messages", true], ["saved", false]]) {
        const key = cacheKey(mode, pending);
        if (key) try { localStorage.removeItem(key); } catch { /* storage unavailable */ }
      }
      cacheMeta.messages = cacheMeta.saved = null;
      root.querySelector("#igc-cache-feedback").textContent = t("cacheCleared");
      refreshChrome();
    });
    function restoreScan(mode) {
      const cached = readScan(mode, mode === "messages" && pending.checked);
      if (!cached) return false;
      cacheMeta[mode] = cached.time;
      ui.scanned[mode] = true;
      if (mode === "messages") { ui.threads = cached.rows; ui.selected.clear(); setStep(2); renderList(); }
      else { ui.savedPosts = cached.rows; ui.savedSelected.clear(); setStep(1); renderSavedList(); }
      statusKey(mode === "messages" ? "chatsReady" : "savedReady", { n: cached.rows.length, page: "" });
      refreshChrome();
      return true;
    }
    const status = root.querySelector("#igc-status");
    const list = root.querySelector("#igc-list");
    const count = root.querySelector("#igc-count");
    const search = root.querySelector("#igc-search");
    const pending = root.querySelector("#igc-pending");
    const confirmBox = root.querySelector("#igc-confirm");
    const reportBox = root.querySelector("#igc-report");
    const deleteButton = root.querySelector("#igc-delete");
    const reloadButton = root.querySelector("#igc-reload");
    const allButton = root.querySelector("#igc-all");
    const stepsEl = root.querySelector("#igc-steps");
    const stepText = root.querySelector("#igc-step-text");
    const viewMessages = root.querySelector("#igc-view-messages");
    const viewSaved = root.querySelector("#igc-view-saved");
    const openInbox = root.querySelector("#igc-open-inbox");
    const startSaved = root.querySelector("#igc-saved-start");
    const msgReport = root.querySelector("#igc-msg-report");
    const msgWipe = root.querySelector("#igc-msg-wipe");
    const savedReport = root.querySelector("#igc-saved-report");
    const savedWipe = root.querySelector("#igc-saved-wipe");
    const savedReload = root.querySelector("#igc-saved-reload");
    const savedAll = root.querySelector("#igc-saved-all");
    const savedCount = root.querySelector("#igc-saved-count");
    const savedSearch = root.querySelector("#igc-saved-search");
    const savedList = root.querySelector("#igc-saved-list");
    const menuButtons = [...root.querySelectorAll("#igc-menu button")];
    let confirmAction = null;

    const yesButton = root.querySelector("#igc-yes");
    const confirmText = root.querySelector("#igc-confirm-text");

    function paintStatus() {
      if (Date.now() < blockedUntil) { status.textContent = t("safetyStopped", { time: new Date(blockedUntil).toLocaleString(lang === "en" ? "en-US" : "tr-TR") }); return; }
      const current = ui.status;
      if (!current) {
        status.textContent = "";
        return;
      }
      if (current.kind === "summary") {
        const report = (current.mode && ui.reports[current.mode]) || ui.report;
        status.textContent = report ? reportSummary(report) : "";
        return;
      }
      if (current.kind === "key") status.textContent = fill(current.key, current.vars);
      else status.textContent = current.text || "";
    }

    function setStatus(input) {
      if (input && typeof input === "object") {
        if (input.i18nKey) ui.status = { kind: "key", key: input.i18nKey, vars: input.i18nVars || {} };
        else if (input.kind) ui.status = input;
        else if (input.key) ui.status = { kind: "key", key: input.key, vars: input.vars || {} };
        else ui.status = { kind: "raw", text: String(input) };
      } else {
        ui.status = { kind: "raw", text: input == null ? "" : String(input) };
      }
      paintStatus();
    }

    function statusKey(key, vars) {
      setStatus({ kind: "key", key, vars: vars || {} });
    }

    function catchStatus(error) {
      setStatus(error && error.i18nKey ? error : (error && error.message) || String(error));
    }

    function isBusy() {
      return consoleBusy || ui.loading || ui.deleting || ui.downloading;
    }

    function markButton(button, busy, label) {
      button.classList.toggle("igc-busy", busy);
      button.textContent = label;
    }

    function paintActions() {
      const busy = isBusy();
      const jsonBtn = root.querySelector("#igc-json");
      const xlsxBtn = root.querySelector("#igc-xlsx");
      deleteButton.disabled = busy || ui.selected.size === 0;
      startSaved.disabled = busy || ui.savedSelected.size === 0;
      reloadButton.disabled = busy;
      reloadButton.textContent = t(ui.scanned.messages ? "rescan" : "startScan");
      savedReload.textContent = t(ui.scanned.saved ? "rescan" : "startScan");
      savedReload.disabled = busy;
      allButton.disabled = busy;
      savedAll.disabled = busy;
      msgReport.disabled = busy || ui.threads.length === 0;
      msgWipe.disabled = busy || !ui.threads.some((thread) => thread.status !== "silindi");
      savedReport.disabled = busy || ui.savedPosts.length === 0;
      savedWipe.disabled = busy || !ui.savedPosts.some((post) => post.status !== "kaldirildi");
      jsonBtn.disabled = busy || !ui.report;
      xlsxBtn.disabled = busy || !ui.report;
      root.querySelector("#igc-yes").disabled = busy;
      root.querySelector("#igc-no").disabled = busy;
      search.disabled = busy;
      savedSearch.disabled = busy;
      pending.disabled = busy;
      openInbox.disabled = busy;

      const listingMessages = ui.loading && ui.mode === "messages";
      const deletingMessages = ui.deleting && ui.mode === "messages";
      markButton(
        deleteButton,
        listingMessages || deletingMessages,
        listingMessages || deletingMessages ? (ui.busy ? t(ui.busy.key, ui.busy.vars) : t("busyListing")) : t("deleteSelected")
      );
      const listingSaved = ui.loading && ui.mode === "saved";
      const deletingSaved = ui.deleting && ui.mode === "saved";
      markButton(
        startSaved,
        listingSaved || deletingSaved,
        listingSaved || deletingSaved ? (ui.busy ? t(ui.busy.key, ui.busy.vars) : t("busyListing")) : t("removeSelected")
      );
      const jsonBusy = ui.downloading && ui.downloadKind === "json";
      const xlsxBusy = ui.downloading && ui.downloadKind === "xlsx";
      markButton(jsonBtn, jsonBusy, jsonBusy ? t("downloading") : t("downloadJson"));
      markButton(xlsxBtn, xlsxBusy, xlsxBusy ? t("downloading") : t("downloadXlsx"));
    }

    function renderSteps() {
      const labels = ui.mode === "saved"
        ? ["stepList", "stepPick", "stepRemove", "stepReport"]
        : ["stepPage", "stepList", "stepPick", "stepDelete", "stepReport"];
      stepsEl.replaceChildren();
      labels.forEach((label, index) => {
        const item = document.createElement("div");
        item.className = "igc-step" + (index < ui.step ? " igc-done" : index === ui.step ? " igc-now" : "");
        item.textContent = index + 1 + " " + t(label);
        stepsEl.appendChild(item);
      });
      const hints = ui.mode === "saved"
        ? ["hintSaved0", "hintSaved1", "hintSaved2", "hintSaved3"]
        : ["hintMsg0", "hintMsg1", "hintMsg2", "hintMsg3", "hintMsg4"];
      stepText.textContent = hints[ui.step] ? t(hints[ui.step]) : "";
    }

    function setStep(index) {
      ui.step = index;
      renderSteps();
    }

    function updateSavedCount() {
      const shown = visibleSaved();
      const selectedVisible = shown.filter((post) => ui.savedSelected.has(post.id)).length;
      savedCount.textContent = ui.savedQuery
        ? t("selectedFiltered", { n: ui.savedSelected.size, m: shown.length })
        : t("selectedCount", { n: ui.savedSelected.size });
      savedAll.textContent = shown.length > 0 && selectedVisible === shown.length ? t("clearSelection") : t("selectAll");
      paintActions();
    }

    function renderSavedList() {
      const scroll = savedList.scrollTop;
      savedList.replaceChildren();
      const shown = visibleSaved();
      if (!shown.length) {
        const empty = document.createElement("div");
        empty.className = "igc-item";
        empty.textContent = ui.loading ? t("savedLoading") : t(ui.scanned.saved ? "savedEmpty" : "notScanned");
        savedList.appendChild(empty);
        updateSavedCount();
        return;
      }
      const fragment = document.createDocumentFragment();
      for (const post of shown) {
        const row = document.createElement("div");
        row.className = "igc-item";
        const box = document.createElement("input");
        box.type = "checkbox";
        box.checked = ui.savedSelected.has(post.id);
        box.disabled = isBusy() || post.status === "kaldirildi";
        box.addEventListener("change", () => {
          if (box.checked) ui.savedSelected.add(post.id);
          else ui.savedSelected.delete(post.id);
          updateSavedCount();
        });
        const text = document.createElement("div");
        const title = document.createElement("div");
        title.textContent = post.label || t("post");
        if (post.status === "kaldirildi") title.className = "igc-ok";
        if (post.status === "hata") title.className = "igc-bad";
        const meta = document.createElement("small");
        const bits = [];
        if (post.caption) bits.push(post.caption);
        if (post.status === "kaldirildi") bits.push(t("removed"));
        if (post.status === "hata") bits.push(t("error"));
        meta.textContent = bits.join(" · ");
        text.append(title, meta);
        const open = document.createElement("a");
        open.className = "igc-open";
        open.target = "_blank";
        open.rel = "noreferrer";
        open.title = t("openPost");
        if (post.url) open.href = post.url;
        const img = document.createElement("img");
        img.className = "igc-thumb";
        img.alt = "";
        img.referrerPolicy = "no-referrer";
        if (post.thumb) img.src = post.thumb;
        img.addEventListener("error", () => {
          img.removeAttribute("src");
        });
        open.append(img, text);
        row.append(box, open);
        fragment.appendChild(row);
      }
      savedList.appendChild(fragment);
      savedList.scrollTop = scroll;
      updateSavedCount();
    }

    function refreshChrome() {
      for (const node of root.querySelectorAll("[data-i18n]")) node.textContent = t(node.dataset.i18n);
      for (const node of root.querySelectorAll("[data-i18n-title]")) node.title = t(node.dataset.i18nTitle);
      for (const node of root.querySelectorAll("[data-i18n-placeholder]")) node.placeholder = t(node.dataset.i18nPlaceholder);
      const languageButton = root.querySelector("#igc-lang");
      languageButton.textContent = lang === "tr" ? "EN" : "TR";
      languageButton.title = t(lang === "tr" ? "langEn" : "langTr");
      languageButton.setAttribute("aria-label", languageButton.title);
      root.querySelector("#igc-settings-open").setAttribute("aria-label", t("settings"));
      root.querySelector("#igc-settings-close").setAttribute("aria-label", t("close"));
      const cacheNotice = root.querySelector("#igc-cache-notice");
      cacheNotice.hidden = !cacheMeta[ui.mode];
      if (!cacheNotice.hidden) cacheNotice.textContent = t("cacheNotice", { time: new Date(cacheMeta[ui.mode]).toLocaleString(lang === "en" ? "en-US" : "tr-TR"), n: (ui.mode === "messages" ? ui.threads : ui.savedPosts).length });
      root.lang = lang;
      for (const node of root.querySelectorAll("#igc-settings input, #igc-reset-settings, #igc-clear-cache")) node.disabled = isBusy();
      if (ui.confirm) {
        confirmText.textContent = t(ui.confirm.key, ui.confirm.vars);
        yesButton.textContent = t(ui.confirm.saved ? "yesRemove" : "yesDelete");
      }
      paintStatus();
      const busy = isBusy();
      if (state.stop) root.querySelector("#igc-pacing").textContent = "";
      viewMessages.hidden = ui.mode !== "messages";
      viewSaved.hidden = ui.mode !== "saved";
      for (const button of menuButtons) {
        button.classList.toggle("igc-on", button.dataset.mode === ui.mode);
        button.disabled = busy;
      }
      openInbox.hidden = onInboxPage();
      const report = ui.reports[ui.mode];
      ui.report = report;
      if (report) {
        reportBox.classList.add("igc-on");
        root.querySelector("#igc-report-text").textContent = reportSummary(report);
      } else {
        reportBox.classList.remove("igc-on");
      }
      updateSavedCount();
      renderSteps();
    }

    function updateCount() {
      const shown = visibleThreads();
      const selectedVisible = shown.filter((thread) => ui.selected.has(thread.id)).length;
      count.textContent = ui.query
        ? t("selectedFiltered", { n: ui.selected.size, m: shown.length })
        : t("selectedCount", { n: ui.selected.size });
      allButton.textContent = shown.length > 0 && selectedVisible === shown.length ? t("clearSelection") : t("selectAll");
      refreshChrome();
    }

    function renderList() {
      const scroll = list.scrollTop;
      list.replaceChildren();
      const shown = visibleThreads();
      if (!shown.length) {
        const empty = document.createElement("div");
        empty.className = "igc-item";
        empty.textContent = ui.loading ? t("chatsLoading") : t(ui.scanned.messages ? "chatsEmpty" : "notScanned");
        list.appendChild(empty);
        updateCount();
        return;
      }
      const fragment = document.createDocumentFragment();
      for (const thread of shown) {
        const row = document.createElement("label");
        row.className = "igc-item";
        const box = document.createElement("input");
        box.type = "checkbox";
        box.checked = ui.selected.has(thread.id);
        box.disabled = isBusy() || thread.status === "silindi";
        box.addEventListener("change", () => {
          if (box.checked) ui.selected.add(thread.id);
          else ui.selected.delete(thread.id);
          updateCount();
        });
        const text = document.createElement("div");
        const title = document.createElement("div");
        title.textContent = thread.label;
        if (thread.status === "silindi") title.className = "igc-ok";
        if (thread.status === "hata") title.className = "igc-bad";
        const meta = document.createElement("small");
        const bits = [];
        if (thread.usernames.length) bits.push("@" + thread.usernames.join(" @"));
        if (thread.group) bits.push(t("group"));
        if (thread.source === "requests") bits.push(t("request"));
        if (thread.lastActivityLabel) bits.push(activityLabel(thread));
        if (thread.status === "silindi") bits.push(t("deleted"));
        if (thread.status === "hata") bits.push(t("error"));
        meta.textContent = bits.join(" · ");
        text.append(title, meta);
        row.append(box, text);
        fragment.appendChild(row);
      }
      list.appendChild(fragment);
      list.scrollTop = scroll;
      updateCount();
    }

    function hideConfirm() {
      ui.confirm = null;
      confirmBox.classList.remove("igc-on");
    }

    function reportSummary(report) {
      if (report.tur_islem === "liste") return t(report.tur === "kaydedilenler" ? "summaryListSaved" : "summaryListChats", { n: report.kayitlar.length });
      if (report.tur === "kaydedilenler") return t("summaryUnsave", { n: report.silinen, errors: report.hata, stopped: report.durdurulan ? t("summaryStopped") : "", first: report.hata ? firstErrorLine(report) : "" });
      return t("summaryDelete", { n: report.silinen, errors: report.hata, skipped: report.durdurulan });
    }

    function showReport(report) {
      ui.reports[ui.mode] = report;
      ui.report = report;
      reportBox.classList.add("igc-on");
      root.querySelector("#igc-report-text").textContent = reportSummary(report);
      setStep(ui.mode === "saved" ? 3 : 4);
      paintActions();
    }

    async function loadList() {
      if (isBusy()) return;
      cacheMeta.messages = null;
      ui.loading = true;
      ui.deleting = false;
      ui.busy = { key: "busyListing", vars: {} };
      state.stop = false;
      deletePlan = null;
      listQuery = null;
      listQueryCache = null;
      ui.selected.clear();
      ui.threads = [];
      ui.reports.messages = null;
      ui.report = null;
      reportBox.classList.remove("igc-on");
      hideConfirm();
      renderList();
      setStep(1);
      statusKey("chatsListing");
      try {
        const threads = await collect({
          folders: [""],
          includePending: pending.checked,
          limit: 0,
          keep: [],
          pauseMs: 350,
          onPage: (found) => {
            ui.threads = found;
            ui.busy = { key: "busyListingCount", vars: { n: found.length } };
            statusKey("chatsProgress", { n: found.length, pageKey: listFromPage ? "fromPage" : "", tailKey: state.stop ? "" : "stillGoing" });
            renderList();
          },
        });
        ui.threads = threads;
        ui.scanned.messages = true;
        if (!state.stop && !listFromPage) writeScan("messages", threads, pending.checked);
        setStep(2);
        statusKey(state.stop ? "chatsCut" : "chatsReady", { n: threads.length, pageKey: listFromPage ? "fromPageSentence" : "" });
      } catch (error) {
        catchStatus(error);
        console.warn(error);
      } finally {
        ui.loading = false;
        ui.busy = null;
        renderList();
      }
    }

    async function runDelete() {
      const picked = ui.threads.filter((thread) => ui.selected.has(thread.id) && thread.status !== "silindi");
      hideConfirm();
      if (!picked.length || isBusy()) return;
      ui.deleting = true;
      ui.reports.messages = null;
      state.stop = false;
      ui.busy = { key: "busyDeleting", vars: { done: 0, total: picked.length } };
      setStep(3);
      updateCount();
      setStatus({ key: ui.busy.key, vars: ui.busy.vars });
      try {
        const report = await deleteThreads(picked, {
          pauseMs: 1500,
          onProgress: ({ deleted, failed, total }) => {
            updateScanAfterAction("messages");
            ui.busy = { key: "busyDeleting", vars: { done: deleted + failed, total } };
            setStatus({ key: ui.busy.key, vars: ui.busy.vars });
            renderList();
          },
        });
        for (const id of picked.map((thread) => thread.id)) ui.selected.delete(id);
        showReport(report);
        statusKey("doneDeleted", { n: report.silinen });
        console.log(t("consoleReport"), report);
      } catch (error) {
        catchStatus(error);
      } finally {
        ui.deleting = false;
        ui.busy = null;
        renderList();
      }
    }

    search.addEventListener("input", () => {
      ui.query = search.value;
      renderList();
    });
    pending.addEventListener("change", () => {
      ui.threads = [];
      ui.selected.clear();
      ui.reports.messages = null;
      ui.scanned.messages = false;
      cacheMeta.messages = null;
      if (!restoreScan("messages")) { statusKey("scanIdle"); renderList(); }
    });
    reloadButton.addEventListener("click", () => loadList());
    root.querySelector("#igc-stop").addEventListener("click", () => {
      cancelRequests();
      statusKey("stopRequested");
    });
    allButton.addEventListener("click", () => {
      const shown = visibleThreads().filter((thread) => thread.status !== "silindi");
      const allOn = shown.length > 0 && shown.every((thread) => ui.selected.has(thread.id));
      for (const thread of shown) {
        if (allOn) ui.selected.delete(thread.id);
        else ui.selected.add(thread.id);
      }
      renderList();
    });
    function publishList(mode) {
      const report = listReport(mode);
      window.IG.lastReport = report;
      showReport(report);
      statusKey("reportWritten", { n: report.kayitlar.length });
      console.log(t("consoleReport"), report);
    }
    msgReport.addEventListener("click", () => {
      if (isBusy() || !ui.threads.length) return;
      publishList("messages");
    });
    msgWipe.addEventListener("click", () => {
      const picked = ui.threads.filter((thread) => thread.status !== "silindi");
      if (!picked.length || isBusy()) return;
      ui.selected.clear();
      for (const thread of picked) ui.selected.add(thread.id);
      renderList();
      root.querySelector("#igc-yes").textContent = t("yesDelete");
      confirmAction = runDelete;
      ui.confirm = { key: "confirmWipeChats", vars: { n: picked.length }, saved: false };
      confirmText.textContent = t(ui.confirm.key, ui.confirm.vars);
      confirmBox.classList.add("igc-on");
    });
    deleteButton.addEventListener("click", () => {
      const n = ui.threads.filter((thread) => ui.selected.has(thread.id) && thread.status !== "silindi").length;
      if (!n || isBusy()) return;
      root.querySelector("#igc-yes").textContent = t("yesDelete");
      confirmAction = runDelete;
      ui.confirm = { key: "confirmDeleteChats", vars: { n: n }, saved: false };
      confirmText.textContent = t(ui.confirm.key, ui.confirm.vars);
      confirmBox.classList.add("igc-on");
    });
    root.querySelector("#igc-yes").addEventListener("click", () => {
      const action = confirmAction;
      confirmAction = null;
      root.querySelector("#igc-yes").textContent = t("yesDelete");
      if (action) action();
    });
    root.querySelector("#igc-no").addEventListener("click", hideConfirm);
    async function saveReport(kind) {
      if (!ui.report || isBusy()) return;
      ui.downloading = true;
      ui.downloadKind = kind;
      paintActions();
      await sleep(40);
      try {
        const name = (ui.report.tur === "kaydedilenler" ? t("fileSaved") : t("fileMessages")) + stamp();
        if (kind === "json") download(name + ".json", "application/json", JSON.stringify(reportForExport(ui.report), null, 2));
        else {
          download(
            name + ".xlsx",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            reportToXlsx(ui.report)
          );
        }
      } finally {
        ui.downloading = false;
        ui.downloadKind = "";
        paintActions();
      }
    }
    root.querySelector("#igc-json").addEventListener("click", () => saveReport("json"));
    root.querySelector("#igc-xlsx").addEventListener("click", () => saveReport("xlsx"));
    root.querySelector("#igc-min").addEventListener("click", () => {
      root.classList.toggle("igc-min");
    });
    root.querySelector("#igc-close").addEventListener("click", () => {
      window.__igtoolsCleanup();
    });

    const head = root.querySelector("#igc-head");
    let drag = null;
    head.addEventListener("pointerdown", (event) => {
      if (event.target.closest("button, a")) return;
      const rect = root.getBoundingClientRect();
      drag = { dx: event.clientX - rect.left, dy: event.clientY - rect.top };
      head.setPointerCapture(event.pointerId);
    });
    head.addEventListener("pointermove", (event) => {
      if (!drag) return;
      const left = Math.min(window.innerWidth - 80, Math.max(0, event.clientX - drag.dx));
      const top = Math.min(window.innerHeight - 48, Math.max(0, event.clientY - drag.dy));
      root.style.left = left + "px";
      root.style.top = top + "px";
      root.style.right = "auto";
    });
    head.addEventListener("pointerup", () => {
      drag = null;
    });

    async function openPath(path, ready) {
      statusKey("pageOpening");
      spaGo(path);
      for (let i = 0; i < 25; i += 1) {
        if (ready()) break;
        await sleep(200);
      }
      refreshChrome();
      if (!ready()) statusKey("pageFailed");
    }

    async function loadSaved() {
      if (isBusy()) return;
      cacheMeta.saved = null;
      ui.loading = true;
      ui.deleting = false;
      ui.busy = { key: "busyListing", vars: {} };
      state.stop = false;
      ui.savedSelected.clear();
      ui.savedPosts = [];
      ui.reports.saved = null;
      ui.report = null;
      reportBox.classList.remove("igc-on");
      hideConfirm();
      setStep(0);
      renderSavedList();
      refreshChrome();
      statusKey("savedListing");
      try {
        const posts = await collectSaved({
          pauseMs: 400,
          onPage: (found) => {
            ui.savedPosts = found;
            ui.busy = { key: "busyListingCount", vars: { n: found.length } };
            statusKey("savedProgress", { n: found.length, tailKey: state.stop ? "" : "stillGoing" });
            renderSavedList();
          },
        });
        ui.savedPosts = posts;
        ui.scanned.saved = true;
        if (!state.stop) writeScan("saved", posts);
        setStep(1);
        statusKey(state.stop ? "savedCut" : "savedReady", { n: posts.length });
      } catch (error) {
        catchStatus(error);
        console.warn(error);
      } finally {
        ui.loading = false;
        ui.busy = null;
        renderSavedList();
        refreshChrome();
      }
    }

    async function runUnsave() {
      const picked = ui.savedPosts.filter((post) => ui.savedSelected.has(post.id) && post.status !== "kaldirildi");
      hideConfirm();
      if (!picked.length || isBusy()) return;
      ui.deleting = true;
      ui.reports.saved = null;
      ui.report = null;
      state.stop = false;
      ui.busy = { key: "busyRemoving", vars: { done: 0, total: picked.length } };
      setStep(2);
      renderSavedList();
      refreshChrome();
      setStatus({ key: ui.busy.key, vars: ui.busy.vars });
      try {
        const report = await unsavePosts(picked, {
          pauseMs: 1200,
          onProgress: ({ removed, failed, total }) => {
            updateScanAfterAction("saved");
            ui.busy = { key: "busyRemoving", vars: { done: removed + failed, total } };
            setStatus({ key: ui.busy.key, vars: ui.busy.vars });
            renderSavedList();
          },
        });
        for (const id of picked.map((post) => post.id)) ui.savedSelected.delete(id);
        showReport(report);
        setStatus({ kind: "summary", mode: ui.mode });
        console.log(t("consoleReport"), report);
      } catch (error) {
        catchStatus(error);
      } finally {
        ui.deleting = false;
        ui.busy = null;
        renderSavedList();
        refreshChrome();
      }
    }

    function switchMode(mode) {
      if (isBusy() || mode === ui.mode) return;
      hideConfirm();
      confirmAction = null;
      root.querySelector("#igc-yes").textContent = t("yesDelete");
      ui.mode = mode;
      if (mode === "messages") ui.step = ui.reports.messages ? 4 : ui.threads.length ? 2 : onInboxPage() ? 1 : 0;
      else ui.step = ui.reports.saved ? 3 : ui.savedPosts.length ? 1 : 0;
      refreshChrome();
      if (mode === "saved") renderSavedList();
      if (!ui.scanned[mode] && !restoreScan(mode)) statusKey("scanIdle");
      else if (!ui.reports[mode]) statusKey(mode === "messages" ? "chatsReady" : "savedReady", { n: (mode === "messages" ? ui.threads : ui.savedPosts).length, page: "" });
      renderList();
      renderSavedList();
    }

    for (const button of menuButtons) {
      button.addEventListener("click", () => switchMode(button.dataset.mode));
    }
    openInbox.addEventListener("click", () => {
      openPath("/direct/inbox/", onInboxPage).then(() => { if (onInboxPage() && !ui.scanned.messages) statusKey("scanIdle"); }).catch(catchStatus);
    });
    savedSearch.addEventListener("input", () => {
      ui.savedQuery = savedSearch.value;
      renderSavedList();
    });
    savedReload.addEventListener("click", () => loadSaved());
    savedAll.addEventListener("click", () => {
      const shown = visibleSaved().filter((post) => post.status !== "kaldirildi");
      const allOn = shown.length > 0 && shown.every((post) => ui.savedSelected.has(post.id));
      for (const post of shown) {
        if (allOn) ui.savedSelected.delete(post.id);
        else ui.savedSelected.add(post.id);
      }
      renderSavedList();
    });
    savedReport.addEventListener("click", () => {
      if (isBusy() || !ui.savedPosts.length) return;
      publishList("saved");
    });
    savedWipe.addEventListener("click", () => {
      const picked = ui.savedPosts.filter((post) => post.status !== "kaldirildi");
      if (!picked.length || isBusy()) return;
      ui.savedSelected.clear();
      for (const post of picked) ui.savedSelected.add(post.id);
      renderSavedList();
      confirmAction = runUnsave;
      root.querySelector("#igc-yes").textContent = t("yesRemove");
      ui.confirm = { key: "confirmWipeSaved", vars: { n: picked.length }, saved: true };
      confirmText.textContent = t(ui.confirm.key, ui.confirm.vars);
      confirmBox.classList.add("igc-on");
    });
    startSaved.addEventListener("click", () => {
      const n = ui.savedPosts.filter((post) => ui.savedSelected.has(post.id) && post.status !== "kaldirildi").length;
      if (!n || isBusy()) return;
      confirmAction = runUnsave;
      root.querySelector("#igc-yes").textContent = t("yesRemove");
      ui.confirm = { key: "confirmRemoveSaved", vars: { n: n }, saved: true };
      confirmText.textContent = t(ui.confirm.key, ui.confirm.vars);
      confirmBox.classList.add("igc-on");
    });
    root.querySelector("#igc-no").addEventListener("click", () => {
      confirmAction = null;
      root.querySelector("#igc-yes").textContent = t("yesDelete");
      hideConfirm();
    });

    function fillBrand() {
      root.querySelector("#igc-name").textContent = IG_BRAND.title;
      const brand = root.querySelector("#igc-brand");
      brand.replaceChildren();
      const parts = [
        [IG_BRAND.handleUrl, IG_BRAND.handle],
        [IG_BRAND.siteUrl, IG_BRAND.site],
        [IG_BRAND.githubUrl, IG_BRAND.github],
      ].filter((part) => part[0] && part[1]);
      parts.forEach((part, index) => {
        if (index) brand.append(document.createTextNode(" · "));
        const link = document.createElement("a");
        link.href = part[0];
        link.target = "_blank";
        link.rel = "noreferrer";
        link.textContent = part[1];
        brand.append(link);
      });
    }

    root.querySelector("#igc-lang").addEventListener("click", () => {
      lang = lang === "tr" ? "en" : "tr";
      storage.set("igtools-lang", lang);
      root.querySelector("#igc-cache-feedback").textContent = "";
      renderList();
      renderSavedList();
      refreshChrome();
    });
    fillBrand();
    refreshChrome();
    if (!restoreScan(ui.mode)) {
      statusKey("scanIdle");
      renderList();
      renderSavedList();
    }
  }

  function printList(threads) {
    console.table(
      threads.map((thread) => ({
        [t("colChat")]: thread.label,
        [t("col_grup")]: t(thread.group ? "yes" : "no"),
        [t("col_kaynak")]: showPhrase(thread.source),
        [t("colState")]: t(thread.kept ? "willKeep" : "willDelete"),
      }))
    );
  }

  async function preview(options = {}) {
    state.stop = false;
    const keep = (options.keep || []).map((name) => String(name).toLowerCase());
    const threads = await collect({
      folders: options.folders || [""],
      includePending: Boolean(options.includePending),
      limit: options.limit || 0,
      keep,
      pauseMs: options.pauseMs ?? 400,
    });
    const doomed = threads.filter((thread) => !thread.kept);
    console.log(t("previewLine", { n: doomed.length }));
    printList(threads.slice(0, options.show ?? 40));
    return { total: threads.length, deletable: doomed.length };
  }

  async function deleteChats(options = {}) {
    state.stop = false;
    const keep = (options.keep || []).map((name) => String(name).toLowerCase());
    const threads = await collect({
      folders: options.folders || [""],
      includePending: Boolean(options.includePending),
      limit: options.limit || 0,
      keep,
      pauseMs: 400,
    });
    const doomed = threads.filter((thread) => !thread.kept);
    if (!doomed.length) return { deleted: 0, failed: 0 };
    if (!options.dryRun && !options.yes) {
      const accepted = confirm(
        t("confirmConsole", { n: doomed.length })
      );
      if (!accepted) return { deleted: 0, failed: 0, cancelled: true };
    }
    if (options.dryRun) return { deleted: 0, wouldDelete: doomed.length };
    const report = await deleteThreads(doomed, { pauseMs: options.pauseMs ?? 1500 });
    console.log(report);
    return report;
  }

  function stop() {
    cancelRequests();
    console.log(t("stopRequested"));
  }

  function help() {
    console.log(t("helpText"));
  }

  let consoleBusy = false;
  const exclusive = (operation) => async (...args) => {
    if (consoleBusy || ui.loading || ui.deleting || ui.downloading) throw fail("busyOperation");
    checkSafetyForStart();
    consoleBusy = true;
    try { return await operation(...args); } finally { consoleBusy = false; }
  };
  function checkSafetyForStart() { state.stop = false; checkSafety(); }
  window.IG = { preview: exclusive(preview), deleteChats: exclusive(deleteChats), unsave: exclusive(unsaveSaved), stop, help, lastReport: null, open: () => { if (!state.destroyed) mountPanel(); } };
  mountPanel();
  console.log(t("panelOpened"));
})();

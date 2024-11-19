
function toggleSidebarVisibility() {
    const sidebar = document.querySelector("#left-sidebar-container");
    if (!sidebar) return;

    const isHidden = sidebar.style.display === "none";

    sidebar.style.display = isHidden ? "" : "none";

    chrome.storage.local.set({ sidebarHidden: !isHidden });
}

chrome.storage.local.get("sidebarHidden", (data) => {
    const isHidden = data.sidebarHidden;
    const sidebar = document.querySelector("#left-sidebar-container");
    if (sidebar) {
        sidebar.style.display = isHidden ? "none" : "";
    }
});

chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "toggleSidebar") {
        toggleSidebarVisibility();
    }
});

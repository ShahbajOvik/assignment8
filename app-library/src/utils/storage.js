export const INSTALLED_KEY = "hero_installed_apps_v1";

export function getInstalledApps() {
    try {
        const raw = localStorage.getItem(INSTALLED_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        console.error(e);
        return [];
    }
}

export function saveInstalled(arr) {
    localStorage.setItem(INSTALLED_KEY, JSON.stringify(arr));
}

export function installApp(appId) {
    const installed = getInstalledApps();
    if (!installed.includes(appId)) {
        installed.push(appId);
        saveInstalled(installed);
    }
}

export function uninstallApp(appId) {
    const installed = getInstalledApps();
    const filtered = installed.filter(id => id !== appId);
    saveInstalled(filtered);
}

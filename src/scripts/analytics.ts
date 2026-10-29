// GoatCounter's count.js only records the initial page load. With View
// Transitions, later navigations happen client-side, so count them here.
// No-op when the GoatCounter script isn't on the page (dev, or analytics off).
type GoatCounter = { count?: (vars: { path: string }) => void };

let firstLoad = true;

document.addEventListener("astro:page-load", () => {
  if (firstLoad) {
    firstLoad = false;
    return;
  }
  (window as unknown as { goatcounter?: GoatCounter }).goatcounter?.count?.({
    path: location.pathname,
  });
});

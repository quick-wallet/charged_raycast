import mixpanel from "mixpanel-browser";

mixpanel.init("2325cf666b516f7703cb59c27399938d", { debug: true });

export const identify = (id: string) => {
  mixpanel.identify(id);
};

export const trackEvent = (name: string, properties = {}) => {
  mixpanel.track(name, properties);
};

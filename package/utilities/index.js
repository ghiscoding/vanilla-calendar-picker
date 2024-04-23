/*! name: vanilla-calendar-picker | url: https://github.com/uvarov-frontend/vanilla-calendar-picker */
(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.VanillaCalendarUtilities = {}));
})(this, function(exports2) {
  "use strict";
  const getDateString$1 = (date, asUtc = false) => {
    if (asUtc) {
      return date.toISOString().substring(0, 10);
    }
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const getDate$1 = (date) => /* @__PURE__ */ new Date(`${date}T00:00:00`);
  const parseDates$1 = (dates) => dates.reduce((accumulator, date) => {
    if (date instanceof Date || typeof date === "number") {
      const d = date instanceof Date ? date : new Date(date);
      accumulator.push(d.toISOString().substring(0, 10));
    } else if (date.match(/^(\d{4}-\d{2}-\d{2})$/g)) {
      accumulator.push(date);
    } else {
      date.replace(/(\d{4}-\d{2}-\d{2}).*?(\d{4}-\d{2}-\d{2})/g, (_, startDateStr, endDateStr) => {
        const startDate = getDate$1(startDateStr);
        const endDate = getDate$1(endDateStr);
        const currentDate = new Date(startDate.getTime());
        for (currentDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
          accumulator.push(getDateString$1(currentDate));
        }
        return _;
      });
    }
    return accumulator;
  }, []);
  const parseDates = (dates) => parseDates$1(dates);
  const getDateString = (date) => getDateString$1(date);
  const getDate = (date) => getDate$1(date);
  exports2.getDate = getDate;
  exports2.getDateString = getDateString;
  exports2.parseDates = parseDates;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});

type TGetTimeString = (date: Date | number, language?: string) => string;

class DateHelper {
  datesInSeconds: number[];
  units: Intl.RelativeTimeFormatUnit[];

  constructor() {
    this.datesInSeconds = [
      60,
      3600,
      86400,
      86400 * 7,
      86400 * 30,
      86400 * 365,
      Infinity,
    ];
    this.units = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];
  }
  getTimeString: TGetTimeString = (
    date,
    language = navigator.language
  ): string => {
    if (!date) return '';
    const timeMs = typeof date === 'number' ? date : date.getTime();
    const deltaSeconds = Math.round((timeMs - Date.now()) / 1000);

    const index = this.datesInSeconds.findIndex(
      (el) => el > Math.abs(deltaSeconds)
    );
    const divisor = index ? this.datesInSeconds[index - 1] : 1;
    const rtf = new Intl.RelativeTimeFormat(language, { numeric: 'auto' });

    return rtf.format(Math.floor(deltaSeconds / divisor), this.units[index]);
  };
}

const dateHelper = new DateHelper();
export default dateHelper;

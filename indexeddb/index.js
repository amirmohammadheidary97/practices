const whenToUse = `
1. می‌خوای حجم زیادی دیتا رو سمت کلاینت نگه‌داری (چند مگابایت تا صدها مگابایت)
localStorage و sessionStorage نهایتاً چند صد کیلوبایت جا دارن.
اگه داری مثلاً چت، داکیومنت، عکس، کش دیتا یا اطلاعاتی که API دیر جواب می‌ده رو نگه می‌داری، IndexedDB تنها گزینه واقعیه.


2. می‌خوای دیتا رو query کنی (فیلتر، sort، جستجو)
localStorage فقط key/value داره.
توی IndexedDB می‌تونی ایندکس تعریف کنی، روی فیلدها سرچ کنی، و خیلی شبیه دیتابیس SQL رفتار کنی، ولی توی جاوااسکریپت.


3. اپلیکیشنت آفلاین‌فرندلیه یا PWA هست
برای sync کردن دیتا وقتی کاربر آفلاینه و بعداً آنلاین می‌شه، IndexedDB با Service Workers می‌چسبه بهت.
مثلاً نُت‌بردها، تسک منیجرها، اپ فروشگاهی، چت، CRM، همه نیاز دارن دیتا آفلاین هم داشته باشن.


4. می‌خوای کش سمت کلاینت مدیریت کنی
مثلاً وقتی دیتای کامپوننت‌ها از API میاد، کشش می‌کنی تو IndexedDB تا دفعه بعد لود سریع بشه.
به درد SSR هم می‌خوره اگه بخوای دیتا رو pre-cache کنی.


5. می‌خوای پیچیدگی‌های Sync یا Conflict Resolution رو خودت هندل کنی
خیلی وقتا توی اپ‌هایی مثل Figma، Notion، یا Google Docs یوزر چند تا تب باز می‌کنه، آفلاین می‌ره، بعد دیتا sync می‌شه. IndexedDB اینجا backbone ماجراست.
📍 چه تیم‌ها و شرکت‌هایی واقعاً دارن از IndexedDB استفاده می‌کنن؟


Google Docs / Gmail → همش آفلاین کار می‌کنه، از IndexedDB برای کش دیتا و sync استفاده می‌کنن.
Notion → دیتا رو لوکال نگه می‌داره که سریع بالا بیاد. Sync از IndexedDB می‌گذره.
Figma Desktop → موقع طراحی حتی آفلاین هم می‌تونی کار کنی؛ کش و sync روی IndexedDB.
VS Code Web → از IndexedDB استفاده می‌کنه برای کش کردن فایل‌ها.
Spotify Web App → برای کش کردن لیست آهنگ‌ها و آفلاین مود استفاده می‌کنه.
Sentry (Error monitoring) → وقتی شبکه قطعه، خطاها تو IndexedDB ذخیره می‌شن و بعداً ارسال می‌شن.
Google Maps PWA → نقشه و دیتای جستجو رو کش می‌کنه توی IndexedDB.

`;

const schemaVersioning = `

IndexedDB has a built-in mechanism of “schema versioning”, absent in server-side databases.

Unlike server-side databases, IndexedDB is client-side, the data is stored in the browser, so we, developers, don’t have full-time access to it. So, when we have published a new version of our app, and the user visits our webpage, we may need to update the database.

`;

const duplicateTabsProblem = `

The db.onversionchange listener informs us about a parallel update attempt, if the current database version becomes outdated.

The openRequest.onblocked listener informs us about the opposite situation: there’s a connection to an outdated version elsewhere, and it doesn’t close, so the newer connection can’t be made.


`;

const objectStore = `
  same as tables and collection in serverside databases
`;

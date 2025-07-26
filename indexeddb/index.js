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

Unlike server-side databases, IndexedDB is client-side, the data is stored in the browser,
so we, developers, don’t have full-time access to it.
 So, when we have published a new version of our app,
  and the user visits our webpage, we may need to update the database.

`;

const duplicateTabsProblem = `
The db.onversionchange listener informs us about a parallel update attempt,
if the current database version becomes outdated.
The openRequest.onblocked listener informs us about the opposite situation: there’s a
connection to an outdated version elsewhere,
and it doesn’t close, so the newer connection can’t be made.
`;

const objectStore = `
  same as tables and collection in serverside databases .

  keys :  A key must be one of these types – number, date, string, binary, or array.  


  creating an store :

    *** An object store can only be created/modified while updating the DB version, in upgradeneeded handler.

    db.createObjectStore(name[, keyOptions]);
    *** Please note, the operation is synchronous, no await needed.
    
    keyOptions?:
    {
      keyPath : a path to a unique property of object . like "id"
    } 
      or
    {
      autoIncrement : boolean; 
    }

    -------------

    To delete an object store:
      db.deleteObjectStore('books')
`;

const transactions = `
  db.transaction(store[, type]);
  
  store is a store name that the transaction is going to access, e.g. "books".
  Can be an array of store names if we’re going to access multiple stores.

    type = "readonly" | "readwrite"

  ***  autocommit : a transaction does not wait for macrotasks finish and then do some operations.
  When all transaction requests are finished, and the microtasks queue is empty, it is committed automatically.
  
  // an example showing that transaction getting closed when a macrotask comes after it :
  
  let transaction = db.transaction("books", "readwrite");
  let bookstore = transaction.objectStore("books");

  let request1 = bookstore.add(book);
  request1.onsuccess = function() {
    fetch('/').then(response => {
      let request2 = bookstore.add(anotherBook); // we will recieve error here beacase fetch is a macrotask
      request2.onerror = function() {
        console.log(request2.error.name); // TransactionInactiveError
      };
    });
  };

  // true way
  let transaction = db.transaction("books", "readwrite");
  let bookstore = transaction.objectStore("books");

  let request1 = bookstore.add(book);
  request1.onsuccess = function() {
    fetch('/').then(response => {
      let transaction2 = db.transaction("books", "readwrite");
      let bookstore2 = transaction.objectStore("books");
      let request2 = bookstore2.add(anotherBook); // we will recieve error here beacase fetch is a macrotask
      request2.onerror = function() {
        console.log(request2.error.name); // TransactionInactiveError
      };
    });
  };

  -------------------

  // successfull transaction :
  transaction.oncomplete = function() {
    console.log("Transaction is complete");
  };


  -------------------

  // manual abort
  transaction.abort();
`;

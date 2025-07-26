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


  //// Error Handling ////
  ✅ IndexedDB – Error Handling خلاصه‌ی خلاصه:
  خطای write ممکنه پیش بیاد (مثلاً پر شدن quota) → تراکنش abort می‌شه.
  با event.preventDefault() توی request.onerror → می‌تونی جلوی abort شدن تراکنش رو بگیری.
  اگه خطا رو هندل کردی، با event.stopPropagation() جلو رفتنش به db.onerror رو بگیر.
  رویدادها bubble می‌شن → می‌تونی خطاها رو توی db.onerror به‌صورت کلی لاگ کنی.
  اگه هندل نکنی → تراکنش fail → از transaction.onabort برای گرفتن خطا استفاده کن.
`;

const searching = `

*** search methods :
  get , getAll , getAllKeys

*** searching by key :

//#region
  ** search by exact key :
    books.get('js');

  ** search by range of keys: IDBKeyRange

    IDBKeyRange.lowerBound(lower, [open]) means: ≥lower (or >lower if open is true).
    IDBKeyRange.upperBound(upper, [open]) means: ≤upper (or <upper if open is true).
    IDBKeyRange.bound(lower, upper, [lowerOpen], [upperOpen]) means: between lower and upper. If the open flags is true, the corresponding key is not included in the range.
    IDBKeyRange.only(key) – a range that consists of only one key, rarely used.

    examples :
      books.getAll(IDBKeyRange.bound('css', 'html'))

      // get books with id < 'html'
      books.getAll(IDBKeyRange.upperBound('html', true))

      // get all books
      books.getAll()

      // get all keys, where id > 'js'
      books.getAllKeys(IDBKeyRange.lowerBound('js', true))
//#endregion

*** searching by index :
  //#region

  docs :
    objectStore.createIndex(name, keyPath, [options]);

    name – index name,
    keyPath – path to the object field .
    option ?: {
      unique ?: boolean ; //if true, then there may be only one object in the store with the given value at the keyPath. The index will enforce that by generating an error if we try to add a duplicate.
      multiEntry – only used if the value on keyPath is an array. In that case, by default, the index will treat the whole array as the key. But if multiEntry is true, then the index will keep a list of store objects for each value in that array. So array members become index keys.  
    }

  this way is used to search by other fields of stored objects .

  for example we want to search by price :

    const books = db.createObjectStore("books" , {keyPath : "id"});
    const priceIndex = books.createIndex("price_idx" , ["price","prev-price"], {multiEntry:true});

    const request = priceIndex.getAll(IDBKeyRange.bound(1,10))
    request.onsuccess = function(){
      if (request.result !== undefined) {
        console.log("Books", request.result); // array of books with price=10
      } else {
        console.log("No such books");
      }
    }

  //#endregion
`;

const deleting = ``;
